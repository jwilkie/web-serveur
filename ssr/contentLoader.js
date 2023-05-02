import { readdir } from 'fs/promises';
import { join } from 'path/posix';
import groupsData from '../contents/_groups.json';
import sectionsData from '../contents/_sections.json';

export const getSections = async (pages) => {
    let sections = sectionsData;
    for (let section of sections) {
        section.groups = {};
        pages ||= await getSectionPages();
        for (let i = 0; i < section.pages.length; i++) {
            if (!pages[section.pages[i]]) {
                console.warn(`The content page '${section.pages[i]}' in the section ${section.slug} cannot be found in the 'contents' directory. The content page will not be added to the section.`);
                section.pages.splice(i--, 1);
                continue;
            }

            let group = pages[section.pages[i]].group;
            section.groups[group] ||= [];
            section.groups[group].push(section.pages[i]);
        }
    }

    return sections;
}

const getPagesFromDir = async (directory, groups) => {
    let pages = {};
    let files = await readdir(join(process.cwd(), 'app', directory));
    for (let file of files) {
        if (!file.endsWith('.jsx')) {
            continue;
        }

        let module = await import(`../app/${directory}/${file}`);
        let page = {
            // Keep page file name without extension
            slug: file.replace(/\.[^/.]+$/, ""),
            ...module.metadata,
            file
        }

        groups ||= getGroups();
        if (!groups[page.group]) {
            console.warn(`The content page '${file}' group is not defined in the '_groups.json' file. The content page will not be added.`);
            continue;
        }

        pages[page.slug] = page;
    }

    return pages;
}

export const getSectionPages = async (groups) => {
    return await getPagesFromDir('[section]/(pages)', groups);
}

export const getGroupPages = async (groups) => {
    return await getPagesFromDir('group/[group]/(pages)', groups);
}

export const getGroups = () => {
    let groups = {};
    for (let group of groupsData) {
        if (groups[group.slug]) {
            console.warn(`The group '${group.slug}' has the same slug as another group. Only the first group with this slug will be added.`);
            continue;
        }

        groups[group.slug] = group;
    }

    return groups;
}

export async function getContents() {
    const groups = getGroups();
    const pages = { ...await getSectionPages(groups), ...await getGroupPages(groups) };
    const sections = await getSections(pages);

    return { pages, groups, sections };
}
