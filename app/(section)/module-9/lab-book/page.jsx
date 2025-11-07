import IC from '@/components/InlineCode'
import { DownloadBlock, File } from '@/components/DownloadBlock'

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Laboratoire - La bibliothèque avec HTTPS",
    description: "Présentation du laboratoire de la bibliothèque où l'on mettra en place le protocole HTTPS en développement local.",
    keywords: ["bibliothèque", "livre", "book", "https", "ssl", "sécurité"],
    group: "labs"
}

export default function Page() {
    return <>
        <section>
            <h2>Marche à suivre</h2>
            <p>
                Ce laboratoire est une extension du laboratoire de la <a href="/module-8/lab-book/">bibliothèque avec authentification</a>. 
                Vous pouvez utiliser votre solution de ce laboratoire ou le projet distribué ci-dessous comme projet de départ.
            </p>
            <ol>
                <li>
                    Générer un certificat SSL auto-signé pour le domaine <IC>localhost</IC> en suivant les étapes décrites dans
                    les notes de cours.
                </li>
                <li>
                    Configurer votre application Express.js pour qu'elle utilise le protocole HTTPS en développement local en
                    suivant les étapes décrites dans les notes de cours.
                </li>
            </ol>
        </section>
        
        <section>
            <h2>Distribué et solution</h2>
            <p>
                Avant de pouvoir lancer le projet distribué ou la solution, n'oubliez pas de faire un <IC>npm i</IC> sur le projet 
                au préalable pour qu'il télécharge les paquets nécessaires.
            </p>
            <DownloadBlock>
                <File fileName="distribué.zip" path="/labs/https-book-distribué.zip">distribué.zip</File>
                <File fileName="solution.zip" path="/labs/https-book-solution.zip">solution.zip</File>
            </DownloadBlock>
        </section>
    </>
}
