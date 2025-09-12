import Link from 'next/link'
import IC from '@/components/InlineCode'
import { DownloadBlock, File } from '@/components/DownloadBlock'

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Laboratoire - Liste de tâches",
    description: "Présentation du laboratoire de la création d'un serveur web gérant une liste de tâches.",
    keywords: ["todo", "liste de tâches", "node", "express", "javascript", "js", "api", "serveur"],
    group: "labs"
}

export default function Page() {
    return <>
        <section>
            <h2>Marche à suivre</h2>
            <p>
                Programmez un serveur web avec Node.js et Express.js pour gérer une liste de tâches à accomplir. Voici quelques détails
                pour vous guider dans la réalisation de ce laboratoire :
            </p>
            <ul>
                <li>
                    Vous pouvez démarrer la projet à partir du <Link href="/module-2/basic-template/">gabarit de base</Link>.
                </li>
                <li>
                    Vous devez vous-même déterminer la structure d'une tâche.
                </li>
                <li>
                    Le serveur doit pouvoir gérer les évènements suivants avec des routes appropriées:
                    <ul>
                        <li>Lister toutes les tâches</li>
                        <li>Ajouter une tâche à votre liste de tâches</li>
                        <li>Cocher ou décocher une tâche dans la liste</li>
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
                <File fileName="solution.zip" path="/labs/intro-todo-solution.zip">solution.zip</File>
            </DownloadBlock>
        </section>
    </>
}