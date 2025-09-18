import IC from '@/components/InlineCode'
import CodeBlock from '@/components/CodeBlock'

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Fetch - Introduction",
    description: "Présentation de la base de l'API Fetch Javascript pour effectuer des requêtes HTTP asynchrones programmatiquement.",
    keywords: ["fetch", "api", "javascript", "promesse", "await", "async", "http", "requête", "réponse"],
    group: "notes"
}

const basicFetch = 
`// Envoyer une requête vers un serveur externe
fetch('https://exemple.com/data')

// Envoyer une requête vers le serveur hébergeant 
// notre page web
fetch('/api/utilisateurs');`;

const methodFetch =
`// Envoyer une requête POST vers le serveur
fetch('/api/utilisateurs', {
    method: 'POST'
});
    
// Envoyer une requête DELETE vers le serveur
fetch('/api/livre', {
    method: 'DELETE'
});`;

const response =
`const response = await fetch('/api/utilisateurs');`;

const httpStatus = 
`const response = await fetch('/api/utilisateurs');
if (response.ok) {
    // Traitement de la réponse
}`;

export default function Page() {
    return <>
        <section>
            <h2>API Fetch</h2>
            <p>
                L'API Fetch, aussi appelée la fonction <IC>fetch()</IC>, est une interface JavaScript moderne qui permet d'effectuer 
                des requêtes HTTP de manière asynchrone, donc avec des promesses. On l'utilise pour programmer l'envoi de requêtes vers
                un serveur web et pour gérer les réponses reçues.
            </p>
            <p>
                Fetch est basé sur les promesses Javascript. On utilisera donc souvent nos 3 règles des promesses et de l'asynchrone avec 
                les mots-clés <IC>await</IC> et <IC>async</IC>.
            </p>
        </section>

        <section>
            <h2>Syntaxe de base</h2>
            <p>
                La fonction <IC>fetch()</IC> est une fonction qui va envoyer une requête HTTP vers un URL donné en paramètre. Elle 
                s'utilise de la manière suivante :
            </p>
            <CodeBlock language="js">{basicFetch}</CodeBlock>
            <p>
                La fonction peut être utilisée pour envoyer des requêtes vers des serveurs externes ou directement vers le serveur 
                hébergeant notre page web. Dans le premier cas, on utilise une URL complète, tandis que dans le second cas, on peut 
                utiliser un chemin relatif.
            </p>
        </section>

        <section>
            <h2>Méthode HTTP</h2>
            <p>
                Par défaut la fonction <IC>fetch()</IC> envoie toujours une requête de type <IC>GET</IC>. Cependant, on peut spécifier 
                d'autres types de requêtes HTTP (<IC>POST</IC>, <IC>PUT</IC>, <IC>PATCH</IC> ou <IC>DELETE</IC>) en passant un argument à 
                la fonction <IC>fetch()</IC>. On lui passera un objet de configuration dans lequel on spécifiera la méthode HTTP à utiliser. 
                Voici un exemple:
            </p>
            <CodeBlock language="js">{methodFetch}</CodeBlock>
        </section>

        <section>
            <h2>Réception de la réponse</h2>
            <p>
                La fonction <IC>fetch()</IC> retourne une promesse qui se résout éventuellement en la réponse du serveur. Cette réponse 
                est représentée par un objet dans lequel on trouve plusieurs informations utiles, comme le code de statut HTTP de la
                réponse et même les données renvoyées par le serveur.
            </p>
            <p>
                Pour avoir accès à cet objet de réponse, on peut utiliser le mot-clé <IC>await</IC> devant l'appel à la
                fonction <IC>fetch()</IC> de la façon suivante:
            </p>
            <CodeBlock language="js">{response}</CodeBlock>
            <p>
                Une bonne pratique est de toujours vérifier le code de statut HTTP de la réponse pour s'assurer que la requête a bien 
                été traitée par le serveur avec succès. Pour ce faire, on peut utiliser la propriété <IC>status</IC> ou <IC>ok</IC> de 
                l'objet de réponse.
            </p>
            <CodeBlock language="js">{httpStatus}</CodeBlock>
        </section>
    </>
}