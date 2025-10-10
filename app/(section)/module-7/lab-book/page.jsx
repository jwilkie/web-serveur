import IC from '@/components/InlineCode'
import { DownloadBlock, File } from '@/components/DownloadBlock'

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Laboratoire - La bibliothèque avec validation",
    description: "Présentation du laboratoire de la bibliothèque où l'on mettra en place la validation des données côté serveur et client.",
    keywords: ["bibliothèque", "book", "livre", "validation", "serveur", "client"],
    group: "labs"
}

export default function Page() {
    return <>
        <section>
            <h2>Marche à suivre</h2>
            <p>
                Ce laboratoire est une extension du laboratoire de la <a href="/module-6/lab-book/">bibliothèque avec génération de HTML</a>.
                Veuillez toutefois utiliser le projet distribué ci-dessous comme projet de départ puisqu'il contient certaines 
                modifications pour simplifier un peu le travail.
            </p>
            <ol>
                <li>
                    Créer un fichier <IC>/public/js/validation.js</IC> et <IC>/middlewares/validation.js</IC>.
                </li>
                <li>
                    Dans le fichier <IC>/public/js/validation.js</IC>, créer des fonctions de validation réutilisable pour chaque champ 
                    de données dans un livre, soit le ISBN, le titre, le nombre de pages, le sommaire, les auteurs ainsi que les 
                    catégories.
                </li>
                <li>
                    Identifier les routes dans le fichier <IC>server.js</IC> qui nécessitent une validation des données. Pour chacune 
                    de ces routes, programmer les middlewares de validation nécessaires dans le fichier <IC>/middlewares/validation.js</IC>.
                    Vous pouvez utiliser les fonctions de validation du fichier <IC>/public/js/validation.js</IC> pour valider les données.
                    Si les données sont invalides, le middleware doit renvoyer une réponse d'erreur appropriée (par exemple, un code 400). 
                    Si les données sont valides, le middleware doit appeler la prochaine fonction dans la chaîne de traitement des requêtes 
                    avec <IC>next()</IC>. Ajouter ces middlewares aux routes appropriées.
                </li>
                <li>
                    Ajouter une validation supplémentaire dans la route d'ajout d'un livre pour s'assurer que le livre n'existe pas déjà 
                    dans la bibliothèque en se basant sur son ISBN. Vous pouvez utiliser un middleware spécialisé qui fera une recherche 
                    dans la bibliothèque avant d'ajouter le livre ou encore regarder si l'ajout du livre retourne une erreur de 
                    type <IC>SQLITE_CONSTRAINT</IC>. Si le livre existe déjà, renvoyer une réponse d'erreur avec le code 409 (Conflict).
                </li>
                <li>
                    Ajouter une validation supplémentaire dans la route qui va chercher un livre par son ISBN. Si le livre n'existe
                    pas, renvoyer une réponse d'erreur avec le code 404 (Not found).
                </li>
                <li>
                    Tester les routes avec le Thunder Client pour s'assurer que la validation fonctionne correctement.
                </li>
                <li>
                    Dans le fichier <IC>/public/tache.js</IC>, identifier les endroits où il est nécessaire d'avoir de la validation
                    cliente. Utiliser ensuite les fonctions de validation du fichier <IC>/public/validation.js</IC> pour valider les
                    données avant de les envoyer au serveur. Si les données sont invalides, afficher un message d'erreur à l'utilisateur 
                    dans le bon champ d'erreur du HTML et empêcher l'envoi de la requête. Vous pouvez utiliser la 
                    fonction <IC>clearErrors()</IC> pour supprimer les messages d'erreur avant de faire une nouvelle validation.
                </li>
                <li>
                    Du côté client, tester les différentes interactions pour s'assurer que la validation fonctionne correctement.
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
                <File fileName="distribué.zip" path="/labs/validation-book-distribué.zip">distribué.zip</File>
                <File fileName="solution.zip" path="/labs/validation-book-solution.zip">solution.zip</File>
            </DownloadBlock>
        </section>
    </>
}
