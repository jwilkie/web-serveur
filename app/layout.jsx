import { Comfortaa, Montserrat, Open_Sans } from '@next/font/google'
import Providers from './(layout)/Providers'
import Fonts from './(layout)/Fonts';
import Header from './(layout)/Header';
import Footer from './(layout)/Footer';
import { getGroups } from '../ssr/contentLoader'

import 'normalize.css/normalize.css'
import '../styles/globals.css'
import '../styles/themes.css'
import styles from './(layout)/Layout.module.css'

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

export default function RootLayout({ children }) {
    let groups = getGroups();
    
    return <html lang="fr" className={`${comfortaa.variable} ${montserrat.variable} ${opensans.variable}`}>
        <body className={styles.layout}>
            <Providers>
                <Fonts />
                <Header groups={groups} />
                {children}
                <Footer />
            </Providers>
        </body>
    </html>
}
