import IC from '@/components/InlineCode'
import CodeBlock from '@/components/CodeBlock'
import ColoredBox from '@/components/ColoredBox';

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Fetch - Envoyer des données",
    description: "Présentation des options pour envoyer des données avec l'API Fetch.",
    keywords: ["fetch", "api", "javascript", "promesse", "await", "async", "http", "requête", "json"],
    group: "notes"
}

const body = 
`const data = {
    id: 13,
    nom: 'Souris d\'ordinateur',
    prix: 29.99
};

const response = await fetch('/api/produit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
});`;

const query = 
`const idProduit = 8;

// Utiliser la concaténation de chaînes
const response = await fetch('/api/produit?id=' + idProduit);

// Utiliser les chaînes multilignes
const response = await fetch(\`/api/produit?id=\${idProduit}\`);`;

const queryMultiple =
`const couleur = 'noir';
const taille = 'M'; 

const response = await fetch(\`/api/produits?couleur=\${couleur}&taille=\${taille}\`);`;

const codeServer =
`// Code serveur
app.post('/api/produit', (request, response) => {
    ajouterProduit(request.body.id, request.body.nom, request.body.prix);   
    response.status(201).end();
}`;

const codeClient =
`// Code client
const data = {
    id: 14,
    nom: 'Casque audio',
    prix: 59.99
};

const response = await fetch('/api/produit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
});`;

export default function Page() {
    return <>
        <section>
            <h2>Dans le body de la requête</h2>
            <p>
                Le meilleur endroit pour envoyer des données dans une requête HTTP est dans le corps de la requête, aussi appelé 
                le <IC>body</IC>. On va le préférer pour envoyer des données plus complexes, pour sécuriser les données, ou pour
                envoyer de plus grandes quantités de données.
            </p>
            <p>
                Pour envoyer des données dans le corps de la requête avec <IC>fetch()</IC>, on va utiliser l'objet de configuration 
                de la requête, pour lui spécifier le <IC>body</IC> de la requête.
            </p>
            <p>
                Voici un exemple:
            </p>
            <CodeBlock language="js">{body}</CodeBlock>
            <p>
                Il y a de nombreux détails à noter dans cet exemple:
            </p>
            <ul>
                <li>
                    On prépare un objet de données en Javascript avant d'exécuter la fonction <IC>fetch()</IC>. Ça nous permet d'être 
                    mieux organisé. On préparera toujours les données dans une variable ou constante avant de faire la requête. Si on 
                    envoie des données dans le <IC>body</IC> de la requête, vous verrez toujours une variable <IC>data</IC> dans mes 
                    exemples.
                </li>
                <li>
                    On a ajouté la propriété <IC>{'headers: { \'Content-Type\': \'application/json\' },'}</IC> dans l'objet de configuration
                    de la fonction <IC>fetch()</IC>. Cette configuration est obligatoire pour indiquer au serveur que les données envoyées 
                    dans le format JSON. Si vous ne le spécifié pas, le serveur pensera que vous envoyez un simple texte et ne pourra pas 
                    interpréter correctement les données.
                </li>
                <li>
                    On utilise la fonction <IC>JSON.stringify()</IC> pour convertir notre objet Javascript en une chaîne de caractères 
                    au format JSON avant de l'envoyer. Le <IC>body</IC> doit absolument être une chaîne de caractères. On ne peut donc pas 
                    envoyer directement un objet Javascript. C'est l'un des seuls endroits oèu nous devrons faire cette conversion
                    manuellement.
                </li>
            </ul>
            <ColoredBox title="Attention:">
                N'oubliez pas que vous ne pouvez pas envoyer des données dans le <IC>body</IC> d'une requête <IC>GET</IC>. Le <IC>body</IC> est
                réservé aux requêtes qui modifient des données sur le serveur, comme les 
                requêtes <IC>POST</IC>, <IC>PUT</IC>, <IC>PATCH</IC> ou <IC>DELETE</IC>.
            </ColoredBox>
        </section>

        <section>
            <h2>Dans le Querystring</h2>
            <p>
                Il est aussi possible d'envoyer des données dans l'URL de la requête, dans le <IC>querystring</IC>. Le querystring
                est la partie de l'URL qui suit le point d'interrogation <IC>?</IC>. On va utiliser cette méthode pour envoyer des
                données simples, qui ne nécessitent pas de sécurité et qui sont très petites. Sa principale utilisation est pour
                envoyer des données dans les requêtes <IC>GET</IC>.
            </p>
            <p>
                Pour envoyer des données dans le querystring avec <IC>fetch()</IC>, on va simplement ajouter les données à l'URL
                de la requête.
            </p>
            <CodeBlock language="js">{query}</CodeBlock>
            <p>
                L'utilisation des chaînes de caractères multilignes, avec les accents graves <IC>`</IC>, est très pratique pour la  
                construction de querystring. Spécialement quand on a plusieurs paramètres à envoyer.
            </p>
            <CodeBlock language="js">{queryMultiple}</CodeBlock>
        </section>

        <section>
            <h2>Nom de variables</h2>
            <p>
                Peu importe la méthode utilisée pour envoyer des données avec <IC>fetch()</IC>, il est important que le nom des paramètres
                ou des variables utilisés pour envoyer les données soient exactement les mêmes que ceux attendus par le serveur. Le 
                serveur s'attend à recevoir des données avec des noms précis, et si les noms ne correspondent pas, les données ne 
                seront pas correctement interprétées.
            </p>
            <p>
                Voici un exemple:
            </p>
            <CodeBlock language="js">{codeServer}</CodeBlock>
            <CodeBlock language="js">{codeClient}</CodeBlock>
            <p>
                Dans l'exemple ci-dessus, si le client envoie des données avec des noms de variables différents 
                pour <IC>id</IC>, <IC>nom</IC> ou <IC>prix</IC>, le serveur ne les lira pas, ce qui occasionnera des bogues dans 
                l'application. Il est donc crucial de s'assurer que les noms des variables correspondent exactement entre le client
                et le serveur.
            </p>
        </section>
    </>
}