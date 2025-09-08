import IC from '@/components/InlineCode'
import CodeBlock from '@/components/CodeBlock'

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Planification d'un API",
    description: "Méthodologie et bonnes pratiques pour concevoir et planifier une API REST.",
    keywords: ["api", "rest", "planification", "conception", "design"],
    group: "notes"
}

const resourceExample = 
`// Ressources principales pour un blog
/api/users          // Gestion des utilisateurs
/api/posts          // Gestion des articles
/api/comments       // Gestion des commentaires
/api/categories     // Gestion des catégories
/api/tags           // Gestion des étiquettes

// Ressources avec relations
/api/users/123/posts       // Articles d'un utilisateur spécifique
/api/posts/456/comments    // Commentaires d'un article spécifique
/api/categories/789/posts  // Articles d'une catégorie spécifique`;

const endpointsExample = 
`// CRUD pour les utilisateurs
GET    /api/users           // Lister tous les utilisateurs
GET    /api/users/123       // Récupérer un utilisateur spécifique
POST   /api/users           // Créer un nouvel utilisateur
PUT    /api/users/123       // Mettre à jour un utilisateur (complet)
PATCH  /api/users/123       // Mettre à jour un utilisateur (partiel)
DELETE /api/users/123       // Supprimer un utilisateur

// Actions spécialisées
POST   /api/users/123/activate      // Activer un compte utilisateur
POST   /api/users/123/deactivate    // Désactiver un compte utilisateur
POST   /api/users/reset-password    // Demander une réinitialisation
PUT    /api/users/123/password      // Changer le mot de passe`;

const responseStructure = 
`// Structure de réponse pour un utilisateur unique
{
  "id": 123,
  "firstName": "Jean",
  "lastName": "Dupont",
  "email": "jean.dupont@example.com",
  "createdAt": "2023-11-15T10:30:00Z",
  "updatedAt": "2023-11-15T10:30:00Z",
  "isActive": true
}

// Structure de réponse pour une liste paginée
{
  "data": [
    {
      "id": 123,
      "firstName": "Jean",
      "lastName": "Dupont",
      "email": "jean.dupont@example.com"
    },
    {
      "id": 124,
      "firstName": "Marie",
      "lastName": "Martin",
      "email": "marie.martin@example.com"
    }
  ],
  "pagination": {
    "currentPage": 1,
    "totalPages": 10,
    "totalItems": 95,
    "itemsPerPage": 10,
    "hasNext": true,
    "hasPrevious": false
  }
}

// Structure de réponse d'erreur
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Les données fournies sont invalides",
    "details": [
      {
        "field": "email",
        "message": "Le format de l'email est invalide"
      }
    ]
  }
}`;

const statusCodePlan = 
`// Codes de statut planifiés
200 OK                  // Succès général (GET, PUT, PATCH)
201 Created             // Ressource créée (POST)
204 No Content          // Suppression réussie (DELETE)
400 Bad Request         // Données invalides
401 Unauthorized        // Authentification requise
403 Forbidden          // Accès interdit
404 Not Found          // Ressource non trouvée
409 Conflict           // Conflit (email déjà utilisé)
422 Unprocessable Entity // Erreur de validation
500 Internal Server Error // Erreur serveur`;

const securityConsiderations = 
`// Authentification
POST /api/auth/login     // Connexion utilisateur
POST /api/auth/logout    // Déconnexion utilisateur
POST /api/auth/refresh   // Renouveler le token
GET  /api/auth/me        // Informations utilisateur courant

// Autorisation par rôles
- Utilisateur normal: peut lire et modifier ses propres données
- Modérateur: peut lire toutes les données, modifier les posts/comments
- Administrateur: accès complet à toutes les opérations

// Headers de sécurité requis
Authorization: Bearer <token>
Content-Type: application/json
X-API-Version: 1.0`;

export default function Page() {
    return <>
        <section>
            <h2>Pourquoi planifier une API?</h2>
            <p>
                La planification d'une API est cruciale pour créer un système cohérent, maintenable et évolutif. 
                Une API bien conçue facilite le développement, améliore l'expérience des développeurs qui 
                l'utilisent et réduit les problèmes futurs de maintenance.
            </p>
            <p>
                Sans planification adéquate, vous risquez de vous retrouver avec:
            </p>
            <ul>
                <li>Des endpoints incohérents et difficiles à utiliser</li>
                <li>Des structures de données contradictoires</li>
                <li>Des problèmes de performance et de sécurité</li>
                <li>Des difficultés à faire évoluer l'API</li>
                <li>Une documentation confuse ou incomplète</li>
            </ul>
        </section>

        <section>
            <h2>Étapes de planification</h2>
            
            <h3>1. Analyser les besoins</h3>
            <p>
                Commencez par comprendre exactement ce que votre application doit faire:
            </p>
            <ul>
                <li>Quelles sont les entités principales de votre système?</li>
                <li>Quelles actions les utilisateurs peuvent-ils effectuer?</li>
                <li>Quelles données doivent être échangées?</li>
                <li>Qui utilisera cette API? (application web, mobile, autres services)</li>
                <li>Quels sont les contraintes de performance et de sécurité?</li>
            </ul>

            <h3>2. Identifier les ressources</h3>
            <p>
                Les ressources sont les entités principales que votre API va gérer. Dans une approche REST, 
                chaque ressource correspond généralement à un type d'objet dans votre système:
            </p>
            <CodeBlock language="javascript">{resourceExample}</CodeBlock>

            <h3>3. Définir les endpoints</h3>
            <p>
                Pour chaque ressource, définissez les opérations CRUD (Create, Read, Update, Delete) et 
                les actions spécialisées nécessaires:
            </p>
            <CodeBlock language="javascript">{endpointsExample}</CodeBlock>

            <h3>4. Concevoir les structures de données</h3>
            <p>
                Définissez clairement la structure JSON de vos requêtes et réponses:
            </p>
            <CodeBlock language="json">{responseStructure}</CodeBlock>
        </section>

        <section>
            <h2>Principes REST</h2>
            <p>
                REST (Representational State Transfer) est un style architectural pour concevoir des APIs. 
                Voici les principes clés à respecter:
            </p>
            
            <h3>1. Resources (Ressources)</h3>
            <ul>
                <li>Chaque URL représente une ressource spécifique</li>
                <li>Utiliser des noms (pas des verbes) dans les URLs</li>
                <li>Utiliser le pluriel pour les collections: <IC>/api/users</IC></li>
                <li>Utiliser des hiérarchies logiques: <IC>/api/users/123/posts</IC></li>
            </ul>

            <h3>2. HTTP Methods (Méthodes HTTP)</h3>
            <ul>
                <li><strong>GET</strong>: Récupérer des données (safe, idempotent)</li>
                <li><strong>POST</strong>: Créer une nouvelle ressource</li>
                <li><strong>PUT</strong>: Remplacer complètement une ressource (idempotent)</li>
                <li><strong>PATCH</strong>: Modifier partiellement une ressource</li>
                <li><strong>DELETE</strong>: Supprimer une ressource (idempotent)</li>
            </ul>

            <h3>3. Stateless (Sans état)</h3>
            <ul>
                <li>Chaque requête doit contenir toutes les informations nécessaires</li>
                <li>Le serveur ne conserve pas d'état entre les requêtes</li>
                <li>Utiliser des tokens pour l'authentification</li>
            </ul>

            <h3>4. Uniform Interface (Interface uniforme)</h3>
            <ul>
                <li>Utiliser des conventions cohérentes dans toute l'API</li>
                <li>Structures de réponse standardisées</li>
                <li>Codes de statut HTTP appropriés</li>
            </ul>
        </section>

        <section>
            <h2>Codes de statut HTTP</h2>
            <p>
                Planifiez quels codes de statut utiliser pour chaque situation:
            </p>
            <CodeBlock language="javascript">{statusCodePlan}</CodeBlock>
        </section>

        <section>
            <h2>Sécurité et authentification</h2>
            <p>
                La sécurité doit être intégrée dès la conception de votre API:
            </p>
            <CodeBlock language="javascript">{securityConsiderations}</CodeBlock>
            
            <h3>Bonnes pratiques de sécurité</h3>
            <ul>
                <li>Utiliser HTTPS pour toutes les communications</li>
                <li>Implémenter un système d'authentification robuste (JWT, OAuth)</li>
                <li>Valider toutes les données d'entrée</li>
                <li>Limiter le taux de requêtes (rate limiting)</li>
                <li>Loguer les accès et surveiller les activités suspectes</li>
                <li>Ne jamais exposer d'informations sensibles dans les réponses</li>
            </ul>
        </section>

        <section>
            <h2>Versioning et évolution</h2>
            <p>
                Prévoyez l'évolution de votre API dès sa conception:
            </p>
            
            <h3>Stratégies de versioning</h3>
            <ul>
                <li><strong>URL versioning</strong>: <IC>/api/v1/users</IC>, <IC>/api/v2/users</IC></li>
                <li><strong>Header versioning</strong>: <IC>Accept: application/vnd.api+json;version=1</IC></li>
                <li><strong>Query parameter</strong>: <IC>/api/users?version=1</IC></li>
            </ul>

            <h3>Rétrocompatibilité</h3>
            <ul>
                <li>Éviter de supprimer des champs existants</li>
                <li>Ajouter des champs optionnels plutôt que de modifier les existants</li>
                <li>Maintenir les anciennes versions pendant une période de transition</li>
                <li>Documenter clairement les changements et les dépréciations</li>
            </ul>
        </section>

        <section>
            <h2>Documentation et outils</h2>
            <p>
                Une bonne planification inclut la préparation de la documentation:
            </p>
            
            <h3>Éléments à documenter</h3>
            <ul>
                <li>Liste complète des endpoints avec exemples</li>
                <li>Structures de données (requêtes et réponses)</li>
                <li>Codes d'erreur et leurs significations</li>
                <li>Guide d'authentification</li>
                <li>Exemples d'utilisation pour les cas courants</li>
            </ul>

            <h3>Outils recommandés</h3>
            <ul>
                <li><strong>OpenAPI/Swagger</strong>: Spécification standard pour documenter les APIs</li>
                <li><strong>Postman</strong>: Outil pour tester et documenter les APIs</li>
                <li><strong>Insomnia</strong>: Alternative à Postman pour les tests d'API</li>
                <li><strong>JSON Schema</strong>: Validation de la structure des données JSON</li>
            </ul>
            
            <p>
                Une planification minutieuse vous fera gagner énormément de temps lors du développement 
                et facilitera la maintenance à long terme de votre API.
            </p>
        </section>
    </>
}