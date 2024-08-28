import { Comfortaa, Montserrat, Open_Sans } from 'next/font/google'
import Providers from './Providers'
import Header from '@/components/Header'
import Footer from '@/components//Footer'
import ClientLayout from '@/components/ClientLayout'
import { getGroups } from '@/model/group'
import { getSections } from '@/model/section'
import { basePath } from '@/next.config'

import 'normalize.css/normalize.css'
import '@/styles/globals.css'
import '@/styles/themes.css'
import styles from './layout.module.css'

const comfortaa = Comfortaa({
    subsets: ['latin'],
    weight: ['400'],
    display: 'swap',
    variable: '--font-confortaa'
});

const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['400', '700'],
    display: 'swap',
    variable: '--font-montserrat'
});

const opensans = Open_Sans({
    subsets: ['latin'],
    weight: ['400', '700'],
    display: 'swap',
    variable: '--font-open-sans'
});

/**
 * @returns {import('next').Metadata}
 */
export function generateMetadata() {
    return {
        icons: {
            icon: (basePath || '') + '/favicon.ico'
        }
    }
}

export default async function RootLayout({ children }) {
    let sections = await getSections();
    let groups = await getGroups();

    return <html lang="fr" className={`${comfortaa.variable} ${montserrat.variable} ${opensans.variable}`}>
        <body className={styles.layout}>
            <Providers>
                <Header groups={groups} />
                <ClientLayout sections={sections} groups={groups}>
                    {children}
                </ClientLayout>
                <Footer />
            </Providers>
        </body>
    </html>
}
