import IC from '@/components/InlineCode'
import { DownloadBlock, File } from '@/components/DownloadBlock'

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Laboratoire - Liste de tâches avec interface",
    description: "Présentation du laboratoire de la liste de tâches où l'on doit créer une interface utilisateur connectée au serveur gérant la liste de tâches.",
    keywords: ["liste", "tâches", "interface", "html", "css", "javascript", "fetch", "api"],
    group: "labs"
}

export default function Page() {
    return <>
        <section>
            <h2>Marche à suivre</h2>
            <p>
                Ce laboratoire est une extension du laboratoire de la <a href="/module-3/lab-todo/">liste de tâches</a>. Vous pouvez 
                utiliser votre solution de ce laboratoire ou le projet distribué ci-dessous comme projet de départ.
            </p>
            <p>
                À partir du projet distribué ci-dessous, programmer le code du fichier <IC>/public/js/tache.js</IC> pour que l'interface 
                graphique puisse avoir les fonctionnalités suivantes:
            </p>
            <ol>
                <li>
                    Au chargement de la page, l'interface doit aller chercher la liste des tâches sur le serveur et les afficher
                    dans la liste HTML.
                </li>
                <li>
                    Lorsque l'utilisateur soumet le formulaire pour ajouter une tâche, l'interface doit envoyer la nouvelle tâche 
                    au serveur, puis mettre à jour la liste des tâches affichée.
                </li>
                <li>
                    Lorsque l'utilisateur coche ou décoche une tâche, l'interface doit envoyer la mise à jour au serveur, puis mettre
                    à jour la liste des tâches affichée.
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
                <File fileName="distribué.zip" path="/labs/interface-todo-distribué.zip">distribué.zip</File>
                <File fileName="solution.zip" path="/labs/interface-todo-solution.zip">solution.zip</File>
            </DownloadBlock>
        </section>
    </>
}