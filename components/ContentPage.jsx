import Head from 'next/head';

import styles from '../styles/ContentPage.module.css';

export default function ContentPage({ children, page }) {
    return <>
        <Head>
            <title>{page.title}</title>
            <meta name="description" content={page.description} />
        </Head>

        <section className={styles.page}>
            <h1>{page.title}</h1>
            {children}
        </section>
    </>
}

/*function ContentPage({ children, metadata }) {
    return <>
        <Head>
            <title>{metadata.title}</title>
            <meta name="description" content={metadata.description} />
        </Head>

        <section className={styles.page}>
            <h1>{metadata.title}</h1>
            {children}
        </section>
    </>
}

export default function withContentPage(Page, metadata) {
    return function ContentPageWrapper() {
        return <ContentPage metadata={metadata}><Page /></ContentPage>
    }
}*/
