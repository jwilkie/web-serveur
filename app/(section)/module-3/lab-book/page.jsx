import Link from 'next/link'
import IC from '@/components/InlineCode'
import { DownloadBlock, File } from '@/components/DownloadBlock'
import CodeBlock from '@/components/CodeBlock'

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Laboratoire - La bibliothèque",
    description: "Présentation du laboratoire de la création d'un serveur web gérant les livres d'une bibliothèque.",
    keywords: ["bibliothèque", "livres", "book", "node", "express", "javascript", "js", "api", "serveur"],
    group: "labs"
}

const book = 
`{
    "isbn": "000-0000000000",
    "title": "Un titre",
    "nbPages": 12345,
    "summary": "Un résumé du livre",
    "authors": ["Un tableau", "des auteurs", "du livre"],
    "categories": ["Un tableau", "des catégories", "du livre"],
}`;

export default function Page() {
    return <>
        <section>
            <h2>Marche à suivre</h2>
            <p>
                Programmez un serveur web avec Node.js et Express.js pour gérer les livres d'une bibliothèque. Voici quelques détails
                pour vous guider dans la réalisation de ce laboratoire :
            </p>
            <ul>
                <li>
                    Vous pouvez démarrer la projet à partir du <Link href="/module-2/basic-template/">gabarit de base</Link>.
                </li>
                <li>
                    Les livres doivent avoir la structure suivante:
                    <CodeBlock language="json">{book}</CodeBlock>
                </li>
                <li>
                    Le serveur doit pouvoir gérer les évènements suivants avec des routes appropriées:
                    <ul>
                        <li>Lister le ISBN et le titre de tous les livre (dans la même requête)</li>
                        <li>Ajouter un livre à votre banque de livre</li>
                        <li>Chercher un livre par son ISBN dans la banque de livre</li>
                        <li>Modifier un livre par son ISBN en lui donnant un nouveau livre pour le remplacer</li>
                        <li>Supprimer un livre par son ISBN dans la banque de livre</li>
                    </ul>
                </li>
                <li>
                    Vous pouvez vous assurez du bon fonctionnement de votre API en utilisant un outil comme le Thunder Client.
                </li>
            </ul>
        </section>

        <section>
            <h2>Solution</h2>
            <p>
                Si vous désirez tester la solution, n'oubliez pas de faire un <IC>npm i</IC> sur le projet au préalable pour qu'il 
                télécharge les paquets nécessaires.
            </p>
            <DownloadBlock>
                <File fileName="solution.zip" path="/labs/intro-book-solution.zip">solution.zip</File>
            </DownloadBlock>
        </section>
    </>
}