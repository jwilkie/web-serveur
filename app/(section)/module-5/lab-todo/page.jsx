import IC from '@/components/InlineCode'
import { DownloadBlock, File } from '@/components/DownloadBlock'

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Laboratoire - La liste de tâches avec base de données",
    description: "Présentation du laboratoire de la liste de tâches où l'on changera la gestion des données pour utiliser une base de données.",
    keywords: ["liste", "tâches", "sqlite", "base de données", "db", "sql", "tables"],
    group: "labs"
}

export default function Page() {
    return <>
        <section>
            <h2>Marche à suivre</h2>
            <p>
                Ce laboratoire est une extension du laboratoire de la <a href="/module-4/lab-todo/">liste de tâches avec interface</a>. 
                Vous pouvez utiliser votre solution de ce laboratoire ou le projet distribué ci-dessous comme projet de départ.
            </p>
            <ol>
                <li>
                    Ajouter le paquet <IC>sqlite3</IC> et <IC>sqlite</IC> à votre projet.
                </li>
                <li>
                    Créer un fichier <IC>/db/db.js</IC> qui va initialiser la base de données et créer la table <IC>tache</IC>.
                    Assurez-vous de bien modéliser cette table.
                </li>
                <li>
                    Ajouter une nouvelle configuration dans le fichier <IC>.env</IC> pour le chemin vers le fichier de la base de
                    données. 
                </li>
                <li>
                    Modifier le fichier <IC>/model/tache.js</IC> pour qu'il utilise la base de données au lieu du tableau en mémoire.
                    Le nom des fonctions et leur comportement doivent rester les mêmes. Assurez-vous qu'il n'est pas possible 
                    d'injecter du SQL dans les fonctions.
                </li>
                <li>
                    Modifier le fichier <IC>server.js</IC> pour qu'il utilise correctement les nouvelles fonctions du fichier de 
                    modèle. Les nouvelles fonctions sont asynchrones, donc n'oubliez pas d'utiliser <IC>async/await</IC>.
                </li>
                <li>
                    Modifier le fichier <IC>/public/tache.js</IC> pour corriger les quelques petits changements dans les réponses du 
                    serveur. En général, c'est seulement le nom des champs qui changent un peu entre l'utilisation du tableau en
                    mémoire et la base de données. Par exemple, le champ <IC>index</IC> du tableau en mémoire 
                    devient <IC>id_tache</IC>, ou quelque chose de similaire.
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
                <File fileName="distribué.zip" path="/labs/db-todo-distribué.zip">distribué.zip</File>
                <File fileName="solution.zip" path="/labs/db-todo-solution.zip">solution.zip</File>
            </DownloadBlock>
        </section>
    </>
}
