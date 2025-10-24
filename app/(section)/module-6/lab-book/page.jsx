import IC from '@/components/InlineCode'
import { DownloadBlock, File } from '@/components/DownloadBlock'

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Laboratoire - La bibliothèque avec génération de HTML",
    description: "Présentation du laboratoire de la bibliothèque où l'on mettra en place la génération de HTML serveur pour obtenir un rendu mixte.",
    keywords: ["bibliothèque", "book", "livre", "template", "render", "rendu", "handlebars", "html", "serveur", "ssr"],
    group: "labs"
}

export default function Page() {
    return <>
        <section>
            <h2>Marche à suivre</h2>
            <p>
                Ce laboratoire est une extension du laboratoire de la <a href="/module-5/lab-book/">bibliothèque avec base de données</a>.
                Vous pouvez utiliser votre solution de ce laboratoire ou le projet distribué ci-dessous comme projet de départ.
            </p>
            <ol>
                <li>
                    Installer la librairie <IC>express-handlebars</IC> dans votre projet et configurer-là correctement selon les
                    notions vues dans ce module.
                </li>
                <li>
                    Séparer le code du fichier <IC>index.html</IC> en partie générique dans le layout principal <IC>main.handlebars</IC> et 
                    en partie spécifique dans une page <IC>home.handlebars</IC>.
                </li>
                <li>
                    Séparer le code du fichier <IC>book.css</IC> en partie générique dans un fichier <IC>global.css</IC> et en partie
                    spécifique dans un fichier <IC>home.css</IC>. N'oubliez pas de modifier le layout principal pour y inclure le 
                    fichier <IC>global.css</IC>.
                </li>
                <li>
                    Programmer la route de la page d'accueil pour qu'elle génère son HTML avec Handlebars. Pour le tester, n'oubliez
                    pas de supprimer le fichier <IC>index.html</IC> de votre dossier <IC>public</IC>.
                </li>
                <li>
                    Modifier le layout principal, pour déplacer l'entête de page ainsi que le pied de page dans des partials. Vous
                    pourrez ensuite inclure ces partials dans le layout principal.
                </li>
                <li>
                    Modifier le fichier <IC>home.handlebars</IC> pour qu'il affiche les livres dans la liste déroulante en les recevant
                    comme données dynamiques. Vous devrez donc modifier la route de la page d'accueil pour qu'elle aille chercher les livres
                    et leur ISBN dans la base de données et les envoie à Handlebars. Assurez-vous que le texte affiché dans la liste 
                    déroulante suit le même format que celui déjà utilisé.
                </li>
                <li>
                    Modifier le code Javascript client puisqu'il n'a plus besoin d'aller chercher les livres dans l'API.
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
                <File fileName="distribué.zip" path="/labs/render-book-distribué.zip">distribué.zip</File>
                <File fileName="solution.zip" path="/labs/render-book-solution.zip">solution.zip</File>
            </DownloadBlock>
        </section>
    </>
}
