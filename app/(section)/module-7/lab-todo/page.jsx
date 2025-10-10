import IC from '@/components/InlineCode'
import { DownloadBlock, File } from '@/components/DownloadBlock'

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Laboratoire - La liste de tâches avec validation",
    description: "Présentation du laboratoire de la liste de tâches où l'on mettra en place la validation des données côté serveur et client.",
    keywords: ["liste", "tâches", "validation", "serveur", "client"],
    group: "labs"
}

export default function Page() {
    return <>
        <section>
            <h2>Marche à suivre</h2>
            <p>
                Ce laboratoire est une extension du laboratoire de la <a href="/module-6/lab-todo/">liste de tâches avec génération de HTML</a>. 
                Vous pouvez utiliser votre solution de ce laboratoire ou le projet distribué ci-dessous comme projet de départ.
            </p>
            <ol>
                <li>
                    Créer un fichier <IC>/public/js/validation.js</IC> et <IC>/middlewares/validation.js</IC>.
                </li>
                <li>
                    En regardant le fichier <IC>server.js</IC>, identifier les routes qui nécessitent une validation des données. Pour
                    chaque donnée ou partie de données nécessitant de la validation, créer une fonction de validation réutilisable dans le
                    fichier <IC>/public/js/validation.js</IC>.
                </li>
                <li>
                    Dans le fichier <IC>/middlewares/validation.js</IC>, créer des middlewares de route qui utilisent les fonctions de 
                    validation pour valider les données des requêtes. Si les données sont invalides, le middleware doit renvoyer une
                    réponse d'erreur appropriée (par exemple, un code 400). Si les données sont valides, le middleware doit appeler
                    la prochaine fonction dans la chaîne de traitement des requêtes avec <IC>next()</IC>.
                </li>
                <li>
                    Ajouter les middlewares de validation aux routes appropriées dans <IC>server.js</IC> et tester les routes avec le
                    Thunder Client pour s'assurer que la validation fonctionne correctement.
                </li>
                <li>
                    Dans le fichier <IC>/public/js/tache.js</IC>, identifier les endroits où il est nécessaire d'avoir de la validation 
                    cliente. Utiliser ensuite les fonctions de validation du fichier <IC>/public/js/validation.js</IC> pour valider les
                    données avant de les envoyer au serveur. Si les données sont invalides, afficher un message d'erreur à l'utilisateur
                    et empêcher l'envoi de la requête.
                </li>
                <li>
                    Du côté client, tester les différentes interactions pour s'assurer que la validation fonctionne correctement. Vous 
                    devrez probablement changer le type de certaines données envoyées pour que tout fonctionne correctement (comme convertir 
                    une chaîne de caractères en nombre par exemple).
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
                <File fileName="distribué.zip" path="/labs/validation-todo-distribué.zip">distribué.zip</File>
                <File fileName="solution.zip" path="/labs/validation-todo-solution.zip">solution.zip</File>
            </DownloadBlock>
        </section>
    </>
}
