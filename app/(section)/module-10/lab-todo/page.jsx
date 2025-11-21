import IC from '@/components/InlineCode'
import { DownloadBlock, File } from '@/components/DownloadBlock'

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Laboratoire - La liste de tâches avec SSE",
    description: "Présentation du laboratoire de la liste de tâches où l'on mettra en place les Server Sent Events (SSE) pour la communication en temps réel.",
    keywords: ["liste", "tâches", "sse", "server sent events", "temps réel"],
    group: "labs"
}

export default function Page() {
    return <>
        <section>
            <h2>Marche à suivre</h2>
            <p>
                Ce laboratoire est une extension du laboratoire de la <a href="/module-9/lab-todo/">liste de tâches avec HTTPS</a>. 
                Vous pouvez utiliser votre solution de ce laboratoire ou le projet distribué ci-dessous comme projet de départ.
            </p>
            <ol>
                <li>
                    Ajouter le middleware de SSE à votre projet Express en suivant les instructions.
                </li>
                <li>
                    Mettre en place une route SSE pour permettre aux clients de s'abonner aux mises à jour de la liste de tâches.
                </li>
                <li>
                    Modifier la route qui ajoute une nouvelle tâche pour qu'elle diffuse un évènement SSE aux clients connectés.
                </li>
                <li>
                    Mettre à jour le code côté client pour qu'il écoute les évènements SSE et mette à jour l'interface en temps
                    réel lorsque de nouvelles tâches sont ajoutées.
                </li>
                <li>
                    Modifier la route qui coche/décoche une tâche pour qu'elle diffuse un évènement SSE aux clients connectés.
                </li>
                <li>
                    Mettre à jour le code côté client pour qu'il écoute les évènements SSE et mette à jour l'interface en 
                    temps réel lorsque des tâches sont cochées/décochées.
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
                <File fileName="distribué.zip" path="/labs/sse-todo-distribué.zip">distribué.zip</File>
                <File fileName="solution.zip" path="/labs/sse-todo-solution.zip">solution.zip</File>
            </DownloadBlock>
        </section>
    </>
}
