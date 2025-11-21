import IC from '@/components/InlineCode'
import { DownloadBlock, File } from '@/components/DownloadBlock'

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Laboratoire - La bibliothèque avec SSE",
    description: "Présentation du laboratoire de la bibliothèque où l'on mettra en place les Server Sent Events (SSE) pour la communication en temps réel.",
    keywords: ["bibliothèque", "livre", "book", "sse", "server sent events", "temps réel"],
    group: "labs"
}

export default function Page() {
    return <>
        <section>
            <h2>Marche à suivre</h2>
            <p>
                Ce laboratoire est une extension du laboratoire de la <a href="/module-9/lab-book/">bibliothèque avec HTTPS</a>. 
                Vous pouvez utiliser votre solution de ce laboratoire ou le projet distribué ci-dessous comme projet de départ.
            </p>
            <ol>
                <li>
                    Ajouter le middleware de SSE à votre projet Express en suivant les instructions.
                </li>
                <li>
                    Mettre en place une route SSE pour permettre aux clients de s'abonner aux mises à jour de la bibliothèque.
                </li>
                <li>
                    Modifier la route qui ajoute un nouveau livre pour qu'elle diffuse un évènement SSE aux clients connectés.
                </li>
                <li>
                    Modifier la route qui supprime un livre pour qu'elle diffuse un évènement SSE aux clients connectés.
                </li>
                <li>
                    Mettre à jour le code côté client pour qu'il écoute les évènements SSE et mette à jour la liste de livres en 
                    temps réel lorsque de nouveaux livres sont ajoutés ou lorsque des livres sont supprimés. Vous n'avez pas 
                    besoin de modifier le formulaire. Uniquement la liste déroulante des livres.
                </li>
                <li>
                    (Optionnel) Modifier la route qui modifie les informations d'un livre pour qu'elle diffuse un évènement SSE
                    aux clients connectés.
                </li>
                <li>
                    (Optionnel) Mettre à jour le code côté client pour qu'il écoute les évènements SSE et mette à jour la liste
                    de livres en temps réel lorsque le nom ou le ISBN d'un livre est modifié. Vous n'avez pas 
                    besoin de modifier le formulaire. Uniquement la liste déroulante des livres.
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
                <File fileName="distribué.zip" path="/labs/sse-book-distribué.zip">distribué.zip</File>
                <File fileName="solution.zip" path="/labs/sse-book-solution.zip">solution.zip</File>
            </DownloadBlock>
        </section>
    </>
}
