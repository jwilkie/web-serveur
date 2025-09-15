import IC from '@/components/InlineCode'
import CodeBlock from '@/components/CodeBlock'

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Fetch - Recevoir des données",
    description: "Techniques de récupération et de traitement des réponses HTTP avec l'API Fetch, gestion des différents formats de données.",
    keywords: ["fetch", "réponse", "json", "text", "blob", "traitement"],
    group: "notes"
}

const jsonResponse = 
`// Traiter une réponse JSON
async function obtenirDonnees() {
    const response = await fetch('/api/users');
    
    // Vérifier si la requête a réussi
    if (!response.ok) {
        throw new Error(\`Erreur HTTP: \${response.status}\`);
    }
    
    // Extraire les données JSON
    const users = await response.json();
    
    // Traiter les données
    users.forEach(user => {
        console.log(\`Utilisateur: \${user.name}\`);
    });
    
    return users;
}`;

const textResponse = 
`// Traiter une réponse texte
async function obtenirTexte() {
    const response = await fetch('/api/message');
    
    if (response.ok) {
        const message = await response.text();
        document.getElementById('message').textContent = message;
    }
}`;

const blobResponse = 
`// Traiter une réponse binaire (image, fichier)
async function telechargerImage() {
    const response = await fetch('/api/images/photo.jpg');
    
    if (response.ok) {
        const imageBlob = await response.blob();
        const imageUrl = URL.createObjectURL(imageBlob);
        
        const img = document.createElement('img');
        img.src = imageUrl;
        document.body.appendChild(img);
    }
}`;

const responseInfo = 
`// Examiner les détails de la réponse
async function analyserReponse() {
    const response = await fetch('/api/data');
    
    console.log('Status:', response.status);
    console.log('Status Text:', response.statusText);
    console.log('Headers:', response.headers);
    console.log('URL:', response.url);
    
    // Accéder aux headers individuels
    const contentType = response.headers.get('Content-Type');
    console.log('Content Type:', contentType);
    
    // Cloner la réponse si nécessaire de la lire plusieurs fois
    const clonedResponse = response.clone();
    
    const data = await response.json();
    return data;
}`;

export default function Page() {
    return <>
        <section>
            <h2>Recevoir et traiter les données</h2>
            <p>
                Une fois qu'une requête fetch est effectuée, il est essentiel de savoir comment traiter la réponse reçue du serveur. 
                Les réponses peuvent être dans différents formats : JSON, texte, binaire, etc.
            </p>
        </section>

        <section>
            <h2>Traitement des réponses JSON</h2>
            <p>
                Le format JSON est le plus courant pour les APIs web. Voici comment traiter une réponse JSON :
            </p>
            <CodeBlock language="js">{jsonResponse}</CodeBlock>
            <p>
                Points importants :
            </p>
            <ul>
                <li>Toujours vérifier <IC>response.ok</IC> avant de traiter les données</li>
                <li>Utiliser <IC>response.json()</IC> pour extraire les données JSON</li>
                <li>Cette méthode retourne une Promise qui doit être awaited</li>
            </ul>
        </section>

        <section>
            <h2>Traitement des réponses texte</h2>
            <p>
                Pour les réponses en format texte brut, utilisez <IC>response.text()</IC> :
            </p>
            <CodeBlock language="js">{textResponse}</CodeBlock>
        </section>

        <section>
            <h2>Traitement des réponses binaires</h2>
            <p>
                Pour les fichiers, images, ou autres données binaires, utilisez <IC>response.blob()</IC> :
            </p>
            <CodeBlock language="js">{blobResponse}</CodeBlock>
        </section>

        <section>
            <h2>Informations sur la réponse</h2>
            <p>
                L'objet Response contient plusieurs propriétés utiles pour examiner les détails de la réponse :
            </p>
            <CodeBlock language="js">{responseInfo}</CodeBlock>
        </section>

        <section>
            <h2>Méthodes de traitement disponibles</h2>
            <ul>
                <li><IC>response.json()</IC> - Pour les données JSON</li>
                <li><IC>response.text()</IC> - Pour le texte brut</li>
                <li><IC>response.blob()</IC> - Pour les données binaires</li>
                <li><IC>response.arrayBuffer()</IC> - Pour les buffers de données</li>
                <li><IC>response.formData()</IC> - Pour les données de formulaire</li>
            </ul>
            <p>
                <strong>Important :</strong> Ces méthodes ne peuvent être appelées qu'une seule fois par réponse. 
                Utilisez <IC>response.clone()</IC> si vous devez lire la réponse plusieurs fois.
            </p>
        </section>
    </>
}