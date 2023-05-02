import Link from 'next/link'
import AsideLayout from '../(layout)/AsideLayout'
import Bubble from '../../components/Bubble'
import { getContents, getSections } from '../../ssr/contentLoader'

import styles from './Section.module.css'

/**
 * 
 * @param {*} param0 
 * @returns {import('next').Metadata}
 */
export async function generateMetadata({params}) {
    let sections = await getSections()
    let index = sections.findIndex((section) => section.slug === params.section);
    let section = sections[index];

    return {
        title: section.title,
        description: section.description
    }
}

export default async function Section({params}) {
    let data = await getContents()
    let index = data.sections.findIndex((section) => section.slug === params.section);
    let section = data.sections[index];

    return <AsideLayout data={data}>
        <section className={styles.section}>
            <div className={styles.header}>
                <Bubble name={process.env.sectionName} number={index + 1} />
                <h1>{section.title}</h1>
            </div>

            {Object.entries(section.groups).map(([groupSlug, pageSlugs]) => (
                <section key={groupSlug} className={styles.group}>
                    <h2>{data.groups[groupSlug].label}</h2>
                    <ul>
                        {pageSlugs.map((pageSlug) => (
                            <li key={pageSlug}>
                                <Link href={`/${section.slug}/${pageSlug}`}>{data.pages[pageSlug].title}</Link>
                            </li>
                        ))}
                    </ul>
                </section>
            ))}
        </section>
    </AsideLayout>
}

export async function generateStaticParams() {
    let sections = await getSections();

    return sections.map(({ slug }) => {
        return { section: slug };
    });
}
