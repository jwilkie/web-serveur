import { basename } from 'path';
import { getContents } from './contentLoader';

export const generateGroupStaticPaths = (metadata) => async () => {
    return {
        paths: [ { params: { group: metadata.group } } ],
        fallback: false
    };
}

export const generateSectionStaticPaths = (file) => async () => {
    let { sections } = await getContents();
    let pageSlug = basename(file).replace(/\.[^/.]+$/, "");
    let params = [];
    for (let section of sections) {
        if (section.pages.includes(pageSlug)) {
            params.push({ params: { section: section.slug } });
        }
    }

    return { paths: params, fallback: false };
}

export const generateStaticProps = (file) => async ({ params }) => {
    const contents = await getContents();
    let pageSlug = basename(file).replace(/\.[^/.]+$/, "");
    let props = {
        ...contents,
        page: contents.pages[pageSlug],
        /*group: contents.groups[params.group || contents.pages[pageSlug].group]*/
    }

    // If the page is inside a section, we add the section to the component's props
    if (params.section) {
        props['section'] = contents.sections.find(
            (section) => section.slug === params.section
        );
    }

    return { props }
}
