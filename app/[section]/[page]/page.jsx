import AsideLayout from "../../(layout)/AsideLayout"
import { getContents, getSectionPages } from "../../../ssr/contentLoader"

import styles from './Page.module.css'

export default async function SectionPage({params}) {
    let data = await getContents();
    let index = data.sections.findIndex((section) => section.slug === params.section);
    data.section = data.sections[index];
    data.page = data.pages[params.page];

    let PageComponent = (await import(`../(pages)/${params.page + '.jsx'}`)).default;

    return <AsideLayout data={data}>
        <section className={styles.page}>
            <h1>{data.page.title}</h1>
            <PageComponent />
        </section>
    </AsideLayout>
}

export async function generateStaticParams() {
    let pages = getSectionPages();

    return Object.entries(pages).map(([slug]) => {
        return { page: slug };
    });
}
