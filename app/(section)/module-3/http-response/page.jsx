import IC from '@/components/InlineCode'
import CodeBlock from '@/components/CodeBlock'

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "La réponse HTTP",
    description: "Structure et composants d'une réponse HTTP : codes de statut, en-têtes et corps du message.",
    keywords: ["http", "réponse", "status", "headers", "codes"],
    group: "notes"
}

const responseExample = 
`HTTP/1.1 200 OK
Date: Wed, 15 Nov 2023 10:30:00 GMT
Server: nginx/1.18.0
Content-Type: application/json; charset=utf-8
Content-Length: 157
Cache-Control: no-cache
Set-Cookie: sessionid=abc123; Path=/; HttpOnly

{
  "id": 123,
  "name": "Jean Dupont",
  "email": "jean.dupont@example.com",
  "created_at": "2023-11-15T10:30:00Z"
}`;

const errorResponseExample = 
`HTTP/1.1 404 Not Found
Date: Wed, 15 Nov 2023 10:30:00 GMT
Server: nginx/1.18.0
Content-Type: application/json; charset=utf-8
Content-Length: 67

{
  "error": "User not found",
  "message": "No user found with ID 999",
  "code": 404
}`;

const redirectExample = 
`HTTP/1.1 301 Moved Permanently
Date: Wed, 15 Nov 2023 10:30:00 GMT
Server: nginx/1.18.0
Location: https://www.newsite.com/users/123
Content-Length: 0`;

export default function Page() {
    return <>
        <section>
            <h2>Structure d'une réponse HTTP</h2>
            <p>
                Une réponse HTTP est la réaction du serveur à une requête du client. Elle suit une structure 
                similaire à la requête mais contient des informations spécifiques au résultat de l'opération 
                demandée.
            </p>
            <CodeBlock language="http">{responseExample}</CodeBlock>
            <p>
                Une réponse HTTP est composée de trois parties:
            </p>
            <ul>
                <li><strong>Ligne de statut</strong>: Version HTTP, code de statut et phrase descriptive</li>
                <li><strong>En-têtes de réponse</strong>: Métadonnées sur la réponse</li>
                <li><strong>Corps de réponse (optionnel)</strong>: Données retournées par le serveur</li>
            </ul>
        </section>

        <section>
            <h2>Codes de statut HTTP</h2>
            <p>
                Les codes de statut indiquent le résultat de la requête. Ils sont regroupés en cinq catégories:
            </p>
            
            <h3>1xx - Informations (rarement utilisés)</h3>
            <ul>
                <li><strong>100 Continue</strong>: Le serveur invite le client à continuer la requête</li>
                <li><strong>101 Switching Protocols</strong>: Le serveur change de protocole</li>
            </ul>

            <h3>2xx - Succès</h3>
            <ul>
                <li><strong>200 OK</strong>: Requête réussie, réponse standard</li>
                <li><strong>201 Created</strong>: Ressource créée avec succès (souvent après POST)</li>
                <li><strong>202 Accepted</strong>: Requête acceptée mais traitement non terminé</li>
                <li><strong>204 No Content</strong>: Requête réussie mais aucun contenu à retourner</li>
            </ul>

            <h3>3xx - Redirection</h3>
            <ul>
                <li><strong>301 Moved Permanently</strong>: Ressource déplacée définitivement</li>
                <li><strong>302 Found</strong>: Ressource déplacée temporairement</li>
                <li><strong>304 Not Modified</strong>: Ressource non modifiée (cache valide)</li>
            </ul>

            <h3>4xx - Erreur client</h3>
            <ul>
                <li><strong>400 Bad Request</strong>: Requête malformée ou invalide</li>
                <li><strong>401 Unauthorized</strong>: Authentification requise</li>
                <li><strong>403 Forbidden</strong>: Accès interdit (même avec authentification)</li>
                <li><strong>404 Not Found</strong>: Ressource non trouvée</li>
                <li><strong>405 Method Not Allowed</strong>: Méthode HTTP non supportée</li>
                <li><strong>409 Conflict</strong>: Conflit avec l'état actuel de la ressource</li>
                <li><strong>422 Unprocessable Entity</strong>: Entité non processable (validation échouée)</li>
            </ul>

            <h3>5xx - Erreur serveur</h3>
            <ul>
                <li><strong>500 Internal Server Error</strong>: Erreur interne du serveur</li>
                <li><strong>501 Not Implemented</strong>: Fonctionnalité non implémentée</li>
                <li><strong>502 Bad Gateway</strong>: Erreur de passerelle</li>
                <li><strong>503 Service Unavailable</strong>: Service temporairement indisponible</li>
            </ul>
        </section>

        <section>
            <h2>En-têtes de réponse importants</h2>
            <p>
                Les en-têtes de réponse fournissent des informations importantes sur la réponse et sur le serveur:
            </p>
            <ul>
                <li><strong>Content-Type</strong>: Type MIME du contenu retourné</li>
                <li><strong>Content-Length</strong>: Taille en octets du corps de réponse</li>
                <li><strong>Date</strong>: Date et heure de génération de la réponse</li>
                <li><strong>Server</strong>: Information sur le logiciel serveur</li>
                <li><strong>Location</strong>: URL de redirection (avec codes 3xx)</li>
                <li><strong>Set-Cookie</strong>: Cookies à enregistrer côté client</li>
                <li><strong>Cache-Control</strong>: Directives de mise en cache</li>
                <li><strong>Access-Control-Allow-Origin</strong>: Politique CORS</li>
                <li><strong>ETag</strong>: Identifiant pour la gestion du cache</li>
            </ul>
        </section>

        <section>
            <h2>Exemple de réponse d'erreur</h2>
            <p>
                Voici un exemple de réponse pour une ressource non trouvée:
            </p>
            <CodeBlock language="http">{errorResponseExample}</CodeBlock>
            <p>
                Les bonnes pratiques pour les réponses d'erreur incluent:
            </p>
            <ul>
                <li>Utiliser le code de statut approprié</li>
                <li>Fournir un message d'erreur clair et utile</li>
                <li>Inclure des détails techniques si nécessaire (pour les développeurs)</li>
                <li>Maintenir une structure cohérente pour toutes les erreurs</li>
                <li>Ne pas exposer d'informations sensibles dans les messages d'erreur</li>
            </ul>
        </section>

        <section>
            <h2>Exemple de redirection</h2>
            <p>
                Les redirections sont utilisées pour diriger le client vers une autre URL:
            </p>
            <CodeBlock language="http">{redirectExample}</CodeBlock>
            <p>
                Les redirections sont utiles pour:
            </p>
            <ul>
                <li>Déplacer une ressource vers une nouvelle URL</li>
                <li>Rediriger après une action (POST/REDIRECT/GET pattern)</li>
                <li>Forcer l'utilisation de HTTPS</li>
                <li>Gérer plusieurs domaines pointant vers le même site</li>
                <li>Implémenter un système de connexion</li>
            </ul>
        </section>

        <section>
            <h2>Types de contenu courants</h2>
            <p>
                Les serveurs web peuvent retourner différents types de contenu, spécifiés dans l'en-tête 
                <IC>Content-Type</IC>:
            </p>
            <ul>
                <li><IC>application/json</IC>: Données JSON (le plus courant pour les APIs)</li>
                <li><IC>text/html</IC>: Page HTML</li>
                <li><IC>text/plain</IC>: Texte brut</li>
                <li><IC>application/xml</IC>: Données XML</li>
                <li><IC>image/jpeg</IC>, <IC>image/png</IC>: Images</li>
                <li><IC>application/pdf</IC>: Document PDF</li>
                <li><IC>application/octet-stream</IC>: Fichier binaire générique</li>
            </ul>
            <p>
                Pour les APIs REST modernes, <IC>application/json</IC> est le type de contenu standard 
                car JSON est léger, lisible et facile à parser dans la plupart des langages de programmation.
            </p>
        </section>
    </>
}