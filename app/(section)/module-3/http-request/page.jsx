import IC from '@/components/InlineCode'
import CodeBlock from '@/components/CodeBlock'

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "La requête HTTP",
    description: "Structure et composants d'une requête HTTP : méthodes, URL, en-têtes et corps du message.",
    keywords: ["http", "requête", "méthodes", "url", "headers"],
    group: "notes"
}

const requestExample = 
`GET /api/users/123 HTTP/1.1
Host: example.com
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36
Accept: application/json
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
Content-Type: application/json`;

const postExample = 
`POST /api/users HTTP/1.1
Host: example.com
Content-Type: application/json
Content-Length: 85

{
  "name": "Jean Dupont",
  "email": "jean.dupont@example.com",
  "age": 30
}`;

const curlExample = 
`# Requête GET simple
curl -X GET "https://api.example.com/users/123"

# Requête POST avec données JSON
curl -X POST "https://api.example.com/users" \\
  -H "Content-Type: application/json" \\
  -d '{"name": "Jean Dupont", "email": "jean@example.com"}'

# Requête avec en-têtes d'authentification
curl -X GET "https://api.example.com/protected" \\
  -H "Authorization: Bearer your-token-here"`;

export default function Page() {
    return <>
        <section>
            <h2>Structure d'une requête HTTP</h2>
            <p>
                Une requête HTTP est composée de plusieurs éléments essentiels qui permettent au client de 
                communiquer avec le serveur. Voici la structure générale d'une requête:
            </p>
            <CodeBlock language="http">{requestExample}</CodeBlock>
            <p>
                Cette requête est composée de trois parties principales:
            </p>
            <ul>
                <li><strong>Ligne de requête</strong>: Contient la méthode, l'URL et la version HTTP</li>
                <li><strong>En-têtes</strong>: Métadonnées sur la requête</li>
                <li><strong>Corps (optionnel)</strong>: Données à envoyer au serveur</li>
            </ul>
        </section>

        <section>
            <h2>Les méthodes HTTP</h2>
            <p>
                Les méthodes HTTP définissent l'action que le client souhaite effectuer sur la ressource. 
                Voici les principales méthodes utilisées dans le développement web:
            </p>
            <ul>
                <li>
                    <strong>GET</strong>: Récupère des données du serveur. Ne doit pas modifier l'état du serveur. 
                    <em>Exemple: récupérer la liste des utilisateurs</em>
                </li>
                <li>
                    <strong>POST</strong>: Envoie des données au serveur pour créer une nouvelle ressource. 
                    <em>Exemple: créer un nouvel utilisateur</em>
                </li>
                <li>
                    <strong>PUT</strong>: Met à jour une ressource existante ou la crée si elle n'existe pas. 
                    <em>Exemple: modifier complètement un utilisateur</em>
                </li>
                <li>
                    <strong>PATCH</strong>: Met à jour partiellement une ressource existante. 
                    <em>Exemple: modifier seulement l'email d'un utilisateur</em>
                </li>
                <li>
                    <strong>DELETE</strong>: Supprime une ressource du serveur. 
                    <em>Exemple: supprimer un utilisateur</em>
                </li>
                <li>
                    <strong>OPTIONS</strong>: Demande les méthodes supportées par le serveur pour une ressource
                </li>
                <li>
                    <strong>HEAD</strong>: Similaire à GET mais ne retourne que les en-têtes, pas le corps
                </li>
            </ul>
        </section>

        <section>
            <h2>URL et paramètres</h2>
            <p>
                L'URL (Uniform Resource Locator) identifie la ressource sur laquelle effectuer l'action. 
                Elle peut contenir plusieurs types de paramètres:
            </p>
            <ul>
                <li>
                    <strong>Paramètres de chemin</strong>: Intégrés dans l'URL
                    <br /><IC>/api/users/123</IC> (où 123 est l'ID de l'utilisateur)
                </li>
                <li>
                    <strong>Paramètres de requête (query)</strong>: Après le caractère <IC>?</IC>
                    <br /><IC>/api/users?page=2&limit=10&sort=name</IC>
                </li>
                <li>
                    <strong>Fragment</strong>: Après le caractère <IC>#</IC> (généralement côté client)
                    <br /><IC>/page.html#section1</IC>
                </li>
            </ul>
        </section>

        <section>
            <h2>En-têtes HTTP importants</h2>
            <p>
                Les en-têtes fournissent des informations supplémentaires sur la requête. Voici les plus couramment utilisés:
            </p>
            <ul>
                <li><strong>Host</strong>: Nom de domaine du serveur (obligatoire en HTTP/1.1)</li>
                <li><strong>User-Agent</strong>: Information sur le client (navigateur, application)</li>
                <li><strong>Accept</strong>: Types de contenu acceptés par le client</li>
                <li><strong>Content-Type</strong>: Type de contenu envoyé dans le corps de la requête</li>
                <li><strong>Content-Length</strong>: Taille en octets du corps de la requête</li>
                <li><strong>Authorization</strong>: Informations d'authentification</li>
                <li><strong>Cookie</strong>: Cookies envoyés par le client</li>
                <li><strong>Cache-Control</strong>: Directives de mise en cache</li>
            </ul>
        </section>

        <section>
            <h2>Exemple de requête POST</h2>
            <p>
                Voici un exemple de requête POST qui envoie des données JSON pour créer un nouvel utilisateur:
            </p>
            <CodeBlock language="http">{postExample}</CodeBlock>
            <p>
                Dans cet exemple:
            </p>
            <ul>
                <li>La méthode <IC>POST</IC> indique qu'on veut créer une ressource</li>
                <li>L'URL <IC>/api/users</IC> indique l'endpoint pour les utilisateurs</li>
                <li><IC>Content-Type</IC> spécifie que les données sont en format JSON</li>
                <li><IC>Content-Length</IC> indique la taille des données</li>
                <li>Le corps contient les données de l'utilisateur à créer</li>
            </ul>
        </section>

        <section>
            <h2>Test de requêtes avec cURL</h2>
            <p>
                cURL est un outil en ligne de commande très utile pour tester les requêtes HTTP. 
                Voici quelques exemples d'utilisation:
            </p>
            <CodeBlock language="bash">{curlExample}</CodeBlock>
            <p>
                cURL est particulièrement utile pour:
            </p>
            <ul>
                <li>Tester rapidement une API pendant le développement</li>
                <li>Déboguer des problèmes de communication</li>
                <li>Automatiser des tests ou des scripts</li>
                <li>Comprendre le comportement d'une API existante</li>
            </ul>
        </section>
    </>
}