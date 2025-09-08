import IC from '@/components/InlineCode'
import CodeBlock from '@/components/CodeBlock'

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Le JSON",
    description: "Introduction au format JSON pour l'échange de données dans les APIs web.",
    keywords: ["json", "données", "api", "format", "javascript"],
    group: "notes"
}

const jsonBasicExample = 
`{
  "name": "Jean Dupont",
  "age": 30,
  "email": "jean.dupont@example.com",
  "isActive": true,
  "address": null
}`;

const jsonComplexExample = 
`{
  "user": {
    "id": 123,
    "profile": {
      "firstName": "Jean",
      "lastName": "Dupont",
      "contact": {
        "email": "jean.dupont@example.com",
        "phone": "+1-555-123-4567"
      }
    },
    "preferences": {
      "theme": "dark",
      "language": "fr",
      "notifications": {
        "email": true,
        "push": false,
        "sms": true
      }
    },
    "roles": ["user", "premium"],
    "lastLogin": "2023-11-15T10:30:00Z",
    "metadata": {
      "createdAt": "2023-01-15T09:00:00Z",
      "updatedAt": "2023-11-15T10:30:00Z",
      "version": 2
    }
  }
}`;

const arrayExample = 
`{
  "users": [
    {
      "id": 1,
      "name": "Jean Dupont",
      "email": "jean@example.com"
    },
    {
      "id": 2,
      "name": "Marie Martin",
      "email": "marie@example.com"
    },
    {
      "id": 3,
      "name": "Pierre Durand",
      "email": "pierre@example.com"
    }
  ],
  "pagination": {
    "currentPage": 1,
    "totalPages": 5,
    "totalItems": 43,
    "itemsPerPage": 10
  }
}`;

const jsExample = 
`// Convertir un objet JavaScript en JSON
const user = {
  name: "Jean Dupont",
  age: 30,
  email: "jean@example.com"
};

const jsonString = JSON.stringify(user);
console.log(jsonString);
// Résultat: {"name":"Jean Dupont","age":30,"email":"jean@example.com"}

// Convertir JSON en objet JavaScript
const jsonData = '{"name":"Marie Martin","age":25}';
const userObject = JSON.parse(jsonData);
console.log(userObject.name); // "Marie Martin"

// Gestion des erreurs lors du parsing
try {
  const invalidJson = '{"name": "Jean", age: 30}'; // JSON invalide
  const parsed = JSON.parse(invalidJson);
} catch (error) {
  console.error("Erreur de parsing JSON:", error.message);
}`;

const apiResponseExample = 
`// Réponse API de succès
{
  "success": true,
  "data": {
    "id": 123,
    "name": "Produit Example",
    "price": 29.99,
    "category": "electronics"
  },
  "message": "Produit récupéré avec succès"
}

// Réponse API d'erreur
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Données invalides",
    "details": [
      {
        "field": "email",
        "message": "Format d'email invalide"
      },
      {
        "field": "age",
        "message": "L'âge doit être un nombre positif"
      }
    ]
  }
}`;

export default function Page() {
    return <>
        <section>
            <h2>Introduction à JSON</h2>
            <p>
                JSON (JavaScript Object Notation) est un format d'échange de données léger, lisible par les 
                humains et facile à parser pour les machines. Bien qu'il soit basé sur la syntaxe des objets 
                JavaScript, JSON est indépendant du langage et est supporté par pratiquement tous les langages 
                de programmation modernes.
            </p>
            <p>
                JSON est devenu le format standard pour les APIs web en raison de sa simplicité et de sa 
                flexibilité. Il a largement remplacé XML pour la communication entre applications web.
            </p>
        </section>

        <section>
            <h2>Syntaxe JSON</h2>
            <p>
                JSON est construit sur deux structures principales:
            </p>
            <ul>
                <li>Une collection de paires nom/valeur (similaire à un objet, dictionnaire ou hash table)</li>
                <li>Une liste ordonnée de valeurs (similaire à un tableau ou une liste)</li>
            </ul>
            
            <h3>Types de données supportés</h3>
            <ul>
                <li><strong>String</strong>: Chaîne de caractères entre guillemets doubles</li>
                <li><strong>Number</strong>: Nombre entier ou décimal</li>
                <li><strong>Boolean</strong>: <IC>true</IC> ou <IC>false</IC></li>
                <li><strong>null</strong>: Valeur nulle</li>
                <li><strong>Object</strong>: Collection de paires clé/valeur entre accolades <IC>{}</IC></li>
                <li><strong>Array</strong>: Liste ordonnée de valeurs entre crochets <IC>[]</IC></li>
            </ul>

            <h3>Exemple simple</h3>
            <CodeBlock language="json">{jsonBasicExample}</CodeBlock>
        </section>

        <section>
            <h2>Structures complexes</h2>
            <p>
                JSON peut représenter des structures de données complexes en imbriquant des objets et des tableaux:
            </p>
            <CodeBlock language="json">{jsonComplexExample}</CodeBlock>
            <p>
                Cette structure démontre comment JSON peut organiser des données hiérarchiques complexes 
                tout en restant lisible et maintenable.
            </p>
        </section>

        <section>
            <h2>Tableaux et listes</h2>
            <p>
                Les tableaux JSON sont particulièrement utiles pour représenter des collections de données, 
                comme des listes d'utilisateurs ou des résultats de recherche:
            </p>
            <CodeBlock language="json">{arrayExample}</CodeBlock>
            <p>
                Cette structure est typique d'une réponse d'API qui retourne une liste paginée d'éléments.
            </p>
        </section>

        <section>
            <h2>Manipulation JSON en JavaScript</h2>
            <p>
                JavaScript fournit des méthodes natives pour travailler avec JSON:
            </p>
            <CodeBlock language="javascript">{jsExample}</CodeBlock>
            <p>
                Points importants à retenir:
            </p>
            <ul>
                <li><IC>JSON.stringify()</IC> convertit un objet JavaScript en chaîne JSON</li>
                <li><IC>JSON.parse()</IC> convertit une chaîne JSON en objet JavaScript</li>
                <li>Toujours gérer les erreurs de parsing avec try/catch</li>
                <li>JSON ne supporte pas les fonctions, undefined, ou les commentaires</li>
            </ul>
        </section>

        <section>
            <h2>Bonnes pratiques JSON pour les APIs</h2>
            <p>
                Voici quelques conventions couramment utilisées dans la conception d'APIs JSON:
            </p>
            
            <h3>Structure cohérente des réponses</h3>
            <CodeBlock language="json">{apiResponseExample}</CodeBlock>
            
            <h3>Conventions de nommage</h3>
            <ul>
                <li>Utiliser <strong>camelCase</strong> pour les noms de propriétés (<IC>firstName</IC> au lieu de <IC>first_name</IC>)</li>
                <li>Être consistant dans tout votre API</li>
                <li>Utiliser des noms descriptifs et clairs</li>
                <li>Éviter les abréviations ambiguës</li>
            </ul>

            <h3>Gestion des dates</h3>
            <ul>
                <li>Utiliser le format ISO 8601: <IC>"2023-11-15T10:30:00Z"</IC></li>
                <li>Toujours inclure le fuseau horaire</li>
                <li>Être consistant dans tout votre API</li>
            </ul>

            <h3>Valeurs nulles vs propriétés absentes</h3>
            <ul>
                <li>Inclure les propriétés avec <IC>null</IC> si leur absence a une signification</li>
                <li>Omettre les propriétés optionnelles non définies pour réduire la taille</li>
                <li>Documenter clairement la sémantique de votre API</li>
            </ul>
        </section>

        <section>
            <h2>Validation et sécurité</h2>
            <p>
                Lors de l'utilisation de JSON dans vos APIs, il est important de considérer:
            </p>
            <ul>
                <li>
                    <strong>Validation des données</strong>: Toujours valider les données JSON reçues 
                    avant de les traiter
                </li>
                <li>
                    <strong>Taille limite</strong>: Imposer des limites sur la taille des données JSON 
                    pour éviter les attaques par déni de service
                </li>
                <li>
                    <strong>Échappement</strong>: Faire attention aux caractères spéciaux et à l'injection 
                    de code
                </li>
                <li>
                    <strong>Schema validation</strong>: Utiliser des schémas JSON pour valider la structure 
                    des données
                </li>
            </ul>
            <p>
                JSON est un format puissant mais simple qui facilite grandement la communication entre 
                applications. Sa simplicité et sa lisibilité en font le choix idéal pour les APIs REST modernes.
            </p>
        </section>
    </>
}