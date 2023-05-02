import AsideLayout from "../../../(layout)/AsideLayout"
import { getContents, getGroupPages } from "../../../../ssr/contentLoader"

import styles from './Page.module.css'

export default async function GroupPage({params}) {
    let data = await getContents();
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
    let pages = getGroupPages();

    return Object.entries(pages).map(([slug]) => {
        return { page: slug };
    });
}
