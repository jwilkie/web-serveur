import IC from '@/components/InlineCode'
import CodeBlock from '@/components/CodeBlock'

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Erreurs communes",
    description: "Guide des erreurs communes rencontrées lors de l'utilisation de l'API Fetch et comment les identifier, prévenir et corriger.",
    keywords: ["erreurs", "fetch", "debugging", "cors", "network", "http"],
    group: "notes"
}

const networkError = 
`// Gestion d'une erreur réseau
async function fetchAvecGestionErreur() {
    try {
        const response = await fetch('/api/data');
        
        // Fetch ne rejette que pour les erreurs réseau
        // Les codes d'erreur HTTP (404, 500, etc.) ne sont pas rejetés
        if (!response.ok) {
            throw new Error(\`Erreur HTTP: \${response.status} - \${response.statusText}\`);
        }
        
        const data = await response.json();
        return data;
    } catch (error) {
        if (error instanceof TypeError) {
            console.error('Erreur réseau ou CORS:', error.message);
        } else {
            console.error('Erreur:', error.message);
        }
        throw error;
    }
}`;

const corsError = 
`// Configuration pour éviter les erreurs CORS lors du développement
const response = await fetch('/api/data', {
    mode: 'cors',
    credentials: 'include', // Si vous avez besoin des cookies
    headers: {
        'Content-Type': 'application/json'
    }
});`;

const timeoutError = 
`// Ajouter un timeout à une requête fetch
function fetchAvecTimeout(url, options = {}, timeout = 5000) {
    return Promise.race([
        fetch(url, options),
        new Promise((_, reject) => 
            setTimeout(() => reject(new Error('Timeout')), timeout)
        )
    ]);
}

// Utilisation
try {
    const response = await fetchAvecTimeout('/api/slow-endpoint', {}, 3000);
    const data = await response.json();
} catch (error) {
    if (error.message === 'Timeout') {
        console.error('La requête a pris trop de temps');
    }
}`;

const jsonError = 
`// Gestion des erreurs JSON
async function traiterReponseJSON(url) {
    try {
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error(\`HTTP \${response.status}\`);
        }
        
        // Vérifier le content-type avant de parser en JSON
        const contentType = response.headers.get('Content-Type');
        if (!contentType || !contentType.includes('application/json')) {
            throw new Error('La réponse n\\'est pas du JSON');
        }
        
        const data = await response.json();
        return data;
    } catch (error) {
        if (error instanceof SyntaxError) {
            console.error('Erreur de parsing JSON:', error.message);
        } else {
            console.error('Erreur:', error.message);
        }
    }
}`;

export default function Page() {
    return <>
        <section>
            <h2>Erreurs communes avec Fetch</h2>
            <p>
                Lors de l'utilisation de l'API Fetch, plusieurs types d'erreurs peuvent survenir. Comprendre ces erreurs 
                et savoir comment les gérer est essentiel pour créer des applications robustes.
            </p>
        </section>

        <section>
            <h2>1. Erreurs réseau et de connectivité</h2>
            <p>
                Fetch ne rejette les Promises que pour les erreurs réseau réelles (pas de connexion, serveur inaccessible, etc.). 
                Les codes d'erreur HTTP comme 404 ou 500 ne sont pas considérés comme des erreurs par Fetch.
            </p>
            <CodeBlock language="js">{networkError}</CodeBlock>
            <p><strong>Solutions :</strong></p>
            <ul>
                <li>Toujours vérifier <IC>response.ok</IC> après une requête</li>
                <li>Gérer explicitement les codes d'erreur HTTP</li>
                <li>Implémenter une logique de retry pour les erreurs temporaires</li>
            </ul>
        </section>

        <section>
            <h2>2. Erreurs CORS (Cross-Origin Resource Sharing)</h2>
            <p>
                Les erreurs CORS surviennent quand le navigateur bloque une requête vers un domaine différent de celui 
                qui héberge la page web.
            </p>
            <CodeBlock language="js">{corsError}</CodeBlock>
            <p><strong>Symptômes :</strong></p>
            <ul>
                <li>Erreur "CORS policy" dans la console</li>
                <li>Requête bloquée par le navigateur</li>
                <li>Aucune réponse reçue du serveur</li>
            </ul>
            <p><strong>Solutions :</strong></p>
            <ul>
                <li>Configurer les headers CORS sur le serveur</li>
                <li>Utiliser un proxy pendant le développement</li>
                <li>Faire les requêtes depuis le même domaine</li>
            </ul>
        </section>

        <section>
            <h2>3. Erreurs de timeout</h2>
            <p>
                Fetch n'a pas de timeout par défaut, ce qui peut causer des requêtes qui traînent indéfiniment.
            </p>
            <CodeBlock language="js">{timeoutError}</CodeBlock>
            <p><strong>Solutions :</strong></p>
            <ul>
                <li>Implémenter un timeout manuel avec <IC>Promise.race()</IC></li>
                <li>Utiliser <IC>AbortController</IC> pour annuler les requêtes</li>
                <li>Définir des timeouts appropriés selon le type de requête</li>
            </ul>
        </section>

        <section>
            <h2>4. Erreurs de parsing JSON</h2>
            <p>
                Les erreurs surviennent quand on essaie de parser comme JSON une réponse qui n'en est pas.
            </p>
            <CodeBlock language="js">{jsonError}</CodeBlock>
            <p><strong>Solutions :</strong></p>
            <ul>
                <li>Vérifier le Content-Type avant de parser</li>
                <li>Gérer les erreurs de parsing avec try/catch</li>
                <li>Avoir un fallback pour les réponses inattendues</li>
            </ul>
        </section>

        <section>
            <h2>Bonnes pratiques pour éviter les erreurs</h2>
            <ul>
                <li><strong>Validation :</strong> Toujours valider les réponses avant de les traiter</li>
                <li><strong>Gestion d'erreurs :</strong> Implémenter une gestion d'erreurs cohérente</li>
                <li><strong>Fallbacks :</strong> Prévoir des alternatives en cas d'échec</li>
                <li><strong>Logging :</strong> Logger les erreurs pour faciliter le debug</li>
                <li><strong>Tests :</strong> Tester les cas d'erreur, pas seulement les cas de succès</li>
            </ul>
        </section>
    </>
}