import IC from '@/components/InlineCode'
import CodeBlock from '@/components/CodeBlock'

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Fetch - Recevoir des données",
    description: "Présentation de la récupération des données dans une réponses HTTP avec l'API Fetch.",
    keywords: ["fetch", "réponse", "json", "statut", "http", "promesse", "await", "async"],
    group: "notes"
}

const response =
`// Requête fetch pour obtenir un produit avec l'ID 9
const response = await fetch('/api/produit?id=9');

// Vérifier si la requête a réussi
if (response.ok) {
    // Extraire les données JSON de la réponse
    const produit = await response.json();

    // Utiliser les données extraites
    console.log(produit);
}`;

export default function Page() {
    return <>
        <section>
            <h2>Extraction des données</h2>
            <p>
                Une fois qu'une requête fetch est effectuée, il est essentiel de savoir comment traiter la réponse reçue du serveur. 
                Voici les étapes clés à suivre pour extraire les données correctement:
            </p>
            <ol>
                <li>
                    Assurez-vous que la route serveur que vous appelez renvoie des données. Si la route ne renvoie pas de données,
                    tenter d'extraire des données entraînera une erreur. 
                </li>
                <li>
                    Vérifier le statut de la réponse. Si le statut indique une erreur (comme 4XX ou 5XX), il est possible que 
                    la requête ne continenne pas de données. Dans ce cas, il est important de ne pas extraire de données puisque cela
                    pourrait entraîner des erreurs dans l'application. Si le statut est dans les 2XX, la requête a réussi et on peut 
                    pourra procéder au traitement de la réponse normalement.
                </li>
                <li>
                    Utiliser la méthode <IC>response.json()</IC> pour extraire les données JSON de la réponse. Cette méthode
                    retourne une promesse qui se résout avec les données extraites. Dans ce cours, nous retournerons toujours les données
                    au format JSON, mais il est aussi possible d'extraire des données sous d'autres formats. Assurez-vous de bien 
                    connaître le format des données renvoyées par le serveur.
                </li>
                <li>
                    Utiliser <IC>await</IC> pour attendre que la promesse retournée par <IC>response.json()</IC> se résolve et mettre
                    les données extraites dans une variable. Vous pourrez alors faire ce que vous voulez avec les données.
                </li>
            </ol>
            <p>
                Voici un exemple complet qui illustre ces étapes:
            </p>
            <CodeBlock language="js">{response}</CodeBlock>
        </section>
    </>
}