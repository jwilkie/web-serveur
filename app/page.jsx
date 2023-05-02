import Link from 'next/link'
import Bubble from '../components/Bubble'
import AsideLayout from './(layout)/AsideLayout'
import { getContents } from '../ssr/contentLoader'

import styles from '../styles/Home.module.css'

/**
 * @type {import('next').Metadata}
 */
export const metadata = {
    title: process.env.appTitle,
    description: `Accueil et table des matières du cours ${process.env.appTitle}.`
}

export default async function Home() {
    let data = await getContents();
    let sections = data.sections;

    return <AsideLayout data={data}>
        <ul className={styles.list} >
            { sections.map((section, index) => (
                <li key={index} className={(section.disabled ? styles.disabled : '')}>
                    <Bubble name={process.env.sectionName} number={index + 1} />
                    <div className={ styles.description }>
                        {!section.disabled ? 
                            <Link href={`/${section.slug}/`}><h2>{section.title}</h2></Link>
                            :
                            <h2>{section.title}</h2>
                        }
                        <p>{section.description}</p>
                    </div>
                </li>
            )) }
        </ul>
    </AsideLayout>
}
