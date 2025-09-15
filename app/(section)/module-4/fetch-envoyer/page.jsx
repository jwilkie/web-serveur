import IC from '@/components/InlineCode'
import CodeBlock from '@/components/CodeBlock'

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Fetch - Envoyer des données",
    description: "Utilisation des méthodes POST, PUT, PATCH et DELETE avec l'API Fetch pour envoyer des données vers le serveur.",
    keywords: ["fetch", "post", "put", "patch", "delete", "données", "serveur"],
    group: "notes"
}

const postExample = 
`// Envoyer des données JSON avec POST
async function creerUtilisateur(userData) {
    try {
        const response = await fetch('/api/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });
        
        if (!response.ok) {
            throw new Error('Erreur lors de la création');
        }
        
        const result = await response.json();
        return result;
    } catch (error) {
        console.error('Erreur:', error);
    }
}`;

const putExample = 
`// Mettre à jour complètement une ressource avec PUT
async function modifierUtilisateur(id, userData) {
    const response = await fetch(\`/api/users/\${id}\`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    });
    return response.json();
}`;

const patchExample = 
`// Mettre à jour partiellement avec PATCH
async function modifierEmail(id, newEmail) {
    const response = await fetch(\`/api/users/\${id}\`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: newEmail })
    });
    return response.json();
}`;

const deleteExample = 
`// Supprimer une ressource avec DELETE
async function supprimerUtilisateur(id) {
    const response = await fetch(\`/api/users/\${id}\`, {
        method: 'DELETE'
    });
    
    if (response.ok) {
        console.log('Utilisateur supprimé avec succès');
    }
}`;

export default function Page() {
    return <>
        <section>
            <h2>Envoyer des données avec Fetch</h2>
            <p>
                L'API Fetch permet non seulement de récupérer des données, mais aussi d'en envoyer vers le serveur. 
                Cela se fait en utilisant différentes méthodes HTTP selon l'opération que vous souhaitez effectuer.
            </p>
        </section>

        <section>
            <h2>Méthode POST - Créer des données</h2>
            <p>
                La méthode POST est utilisée pour créer de nouvelles ressources sur le serveur. Elle envoie les données 
                dans le corps de la requête.
            </p>
            <CodeBlock language="js">{postExample}</CodeBlock>
            <p>
                Points importants pour POST :
            </p>
            <ul>
                <li>Toujours spécifier le <IC>Content-Type</IC> approprié</li>
                <li>Utiliser <IC>JSON.stringify()</IC> pour les données JSON</li>
                <li>Vérifier le statut de la réponse avec <IC>response.ok</IC></li>
            </ul>
        </section>

        <section>
            <h2>Méthode PUT - Remplacer complètement</h2>
            <p>
                PUT est utilisé pour remplacer complètement une ressource existante. Toutes les propriétés de la ressource 
                doivent être fournies.
            </p>
            <CodeBlock language="js">{putExample}</CodeBlock>
        </section>

        <section>
            <h2>Méthode PATCH - Modification partielle</h2>
            <p>
                PATCH permet de modifier seulement certaines propriétés d'une ressource existante, sans affecter les autres.
            </p>
            <CodeBlock language="js">{patchExample}</CodeBlock>
        </section>

        <section>
            <h2>Méthode DELETE - Supprimer des données</h2>
            <p>
                DELETE est utilisé pour supprimer des ressources du serveur. Cette méthode ne nécessite généralement 
                pas de corps de requête.
            </p>
            <CodeBlock language="js">{deleteExample}</CodeBlock>
        </section>

        <section>
            <h2>Résumé des méthodes HTTP</h2>
            <ul>
                <li><strong>POST :</strong> Créer une nouvelle ressource</li>
                <li><strong>PUT :</strong> Remplacer complètement une ressource existante</li>
                <li><strong>PATCH :</strong> Modifier partiellement une ressource existante</li>
                <li><strong>DELETE :</strong> Supprimer une ressource</li>
            </ul>
        </section>
    </>
}