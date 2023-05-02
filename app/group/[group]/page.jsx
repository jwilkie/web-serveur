import { Fragment } from 'react'
import Link from 'next/link'
import AsideLayout from '../../(layout)/AsideLayout';
import { getContents, getGroups } from '../../../ssr/contentLoader'

import styles from './Group.module.css'

export function generateMetadata({params}) {
    let groups = getGroups();
    let group = groups[params.group]

    return {
        title: group.title,
        description: group.description
    }
}

export default async function Group({ params }) {
    let data = await getContents();
    let group = data.groups[params.group]

    return <AsideLayout data={data}>
        <h1>{group.title}</h1>
        {group.noSection ?
            <ul className={styles.list}>
                {Object.values(data.pages).filter((page) => page.group === group.slug).map((page) =>
                    <li key={page.slug}>
                        <Link href={`/group/${group.slug}/${page.slug}`}>{page.title}</Link>
                    </li>
                )}
            </ul>
            :
            data.sections.filter((section) => section.groups[group.slug] && !section.disabled).map((section, index) =>
                <Fragment key={section.slug}>
                    <h2>{process.env.sectionName} {index + 1} - {section.title}</h2>
                    <ul className={styles.list}>
                        {section.groups[group.slug].map((page) => (
                            <li key={page}>
                                <Link href={`/${section.slug}/${page}`}>{data.pages[page].title}</Link>
                            </li>
                        ))}
                    </ul>
                </Fragment>
            )
        }
    </AsideLayout>
}

export async function generateStaticParams() {
    let groups = getGroups();

    return Object.entries(groups).map(([slug]) => {
        return { group: slug };
    });
}
