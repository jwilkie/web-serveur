import IC from '@/components/InlineCode'
import CodeBlock from '@/components/CodeBlock'
import OverflowContainer from '@/components/OverflowContainer';
import ColoredBox from '@/components/ColoredBox';

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Données JSON",
    description: "Introduction au format JSON pour la sauvegarde et l'échange de données.",
    keywords: ["json", "données", "format", "javascript"],
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

const objet = 
`{
    "clé": "valeur",
    "age": 28,
    "est-beau": true
}`;

const tableau = 
`[
    "pomme",
    "banane",
    "cerise",
    true,
    45
]`;

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

const stringify =
`const utilisateur = {
    nom: "Jean Dupont",
    age: 30,
    email: "jean.dupont@example.com"
}

// Convertir un objet JavaScript en JSON
const jsonString = JSON.stringify(utilisateur);`;

const parse =
`const jsonString = '{"nom":"Jean Dupont","age":30,"email":"jean.dupont@example.com"}';

// Convertir une chaîne JSON en objet JavaScript
const utilisateur = JSON.parse(jsonString);`;

export default function Page() {
    return <>
        <section>
            <h2>Introduction à JSON</h2>
            <p>
                JSON (JavaScript Object Notation) est un format d'échange de données léger, lisible par les 
                humains et facile à analyser pour les ordinateurs. Bien qu'il soit basé sur la syntaxe des objets 
                du language JavaScript, JSON est indépendant du langage et est supporté par pratiquement tous les 
                langages de programmation modernes. Il est couramment utilisé pour stocker et échanger des
                données entre un serveur et une application web, notamment dans les APIs RESTful.
            </p>
            <p>
                JSON est un format textuel. Bref, c'est généralement un fichier texte avec l'extension <IC>.json</IC> ou encore 
                une chaine de caractères ayant un format bien particulier. 
            </p>
            <p>
                JSON est devenu le format standard pour les APIs web en raison de sa simplicité et de sa flexibilité. Il a largement 
                remplacé de vieux standards, comme les fichiers texte de base ou le XML pour la communication entre applications web.
            </p>
        </section>

        <section>
            <h2>Types de données</h2>
            <p>
                JSON supporte les types de données suivants:
            </p>
            <OverflowContainer>
                <table>
                    <thead>
                        <tr>
                            <th>Type</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>String</td>
                            <td>Chaîne de caractères entre guillemets doubles</td>
                        </tr>
                        <tr>
                            <td>Number</td>
                            <td>Nombre entier ou décimal</td>
                        </tr>
                        <tr>
                            <td>Boolean</td>
                            <td><IC>true</IC> ou <IC>false</IC></td>
                        </tr>
                        <tr>
                            <td>null</td>
                            <td>Valeur nulle</td>
                        </tr>
                        <tr>
                            <td>Object</td>
                            <td>Collection de paires clé/valeur entre accolades <IC>{'{}'}</IC></td>
                        </tr>
                        <tr>
                            <td>Array</td>
                            <td>Liste ordonnée de valeurs entre crochets <IC>[]</IC></td>
                        </tr>
                    </tbody>
                </table>
            </OverflowContainer>
            <ColoredBox title="À noter:">
                Le JSON ne supporte pas les fonctions, les dates, ou les valeurs indéfinies (<IC>undefined</IC>) qui sont courantes 
                en Javascript. Pour les représenter, il faudra les convertir en types supportés (ex: chaîne de caractères pour les dates).
            </ColoredBox>
            <p>
                C'est types de données pourront être imbriqués dans des objets ou des tableaux pour représenter des structures de données
                plus complexes. Voici un exemple:
            </p>
            <CodeBlock language="json">{jsonBasicExample}</CodeBlock>
        </section>

        <section>
            <h2>Syntaxe du JSON</h2>
            <p>
                La syntaxe JSON est simple et stricte. Voici les règles principales:
            </p>
            <ul>
                <li>
                    Les chaines de caractères doivent être entourées de guillemets doubles <IC>"</IC>. Les guillemets simples 
                    <IC>'</IC> ne sont pas valides en JSON contrairement au Javascript.
                    <CodeBlock language="json">{'"Une chaine"'}</CodeBlock>
                </li>
                <li>
                    Les nombres, les booléens (<IC>true</IC>, <IC>false</IC>) et <IC>null</IC> sont écrit tel quel, sans guillemets 
                    ou autre délimiteur.
                    <CodeBlock language="json">{'42\ntrue\nnull'}</CodeBlock>
                </li>
                <li>
                    Les objets sont entourés d'accolades <IC>{'{}'}</IC> et contiennent des paires clé/valeur. Chaque paire de clé/valeur
                    est séparée par une virgule. La clé doit être une chaîne de caractères entre guillemets doubles, suivie d'un 
                    deux-points <IC>:</IC>, puis de la valeur, qui peut être n'importe quel type de données JSON.
                    <CodeBlock language="json">{objet}</CodeBlock>
                </li>
                <li>
                    Les tableaux sont entourés de crochets <IC>[]</IC> et contiennent une liste ordonnée de valeurs, séparées par des
                    virgules. Les valeurs peuvent être de n'importe quel type de données JSON et même être mélangées.
                    <CodeBlock language="json">{tableau}</CodeBlock>
                </li>
                <li>
                    Les espaces blancs (espaces, tabulations, retours à la ligne) sont ignorés et peuvent être utilisés pour
                    améliorer la lisibilité.
                </li>
                <li>
                    Les commentaires ne sont pas autorisés en JSON. Toute inclusion de commentaires rendra le JSON invalide.
                </li>
            </ul>
        </section>

        <section>
            <h2>Exemple plus complexe</h2>
            <p>
                Le JSON peut représenter des structures de données complexes en imbriquant des objets et des tableaux les uns dans
                les autres. Voici un exemple:
            </p>
            <CodeBlock language="json">{jsonComplexExample}</CodeBlock>
        </section>

        <section>
            <h2>Manipulation JSON en JavaScript</h2>
            <p>
                JavaScript fournit des méthodes natives au langage pour travailler avec JSON. Les deux principales méthodes sont:
            </p>
            <ul>
                <li>
                    <IC>JSON.stringify()</IC>: Convertit un objet JavaScript en une chaîne JSON. Utile pour envoyer des données
                    à un serveur ou pour les stocker.
                    <CodeBlock language="js">{stringify}</CodeBlock>
                </li>
                <li>
                    <IC>JSON.parse()</IC>: Convertit une chaîne JSON en un objet JavaScript. Utile pour lire des données reçues
                    d'un serveur ou chargées depuis un fichier.
                    <CodeBlock language="js">{parse}</CodeBlock>
                </li>
            </ul>
            <ColoredBox title="À noter:">
                <p>
                    Plusieurs langages de programmation utilisent une terminologie différente pour désigner les mêmes concepts. En général, 
                    on parle de <strong>sérialisation</strong> lorsqu'on convertit un objet du langage de programmation vers un autre format
                    comme JSON. Bref, la fonction <IC>JSON.stringify()</IC> effectue une sérialisation.   
                </p>
                <p>
                    À l'inverse, on parle de <strong>désérialisation</strong> lorsqu'on convertit des données d'un format externe au langage 
                    de programmation en objet ou structure de données du langage. La fonction <IC>JSON.parse()</IC> effectue donc une 
                    désérialisation.
                </p>
            </ColoredBox>
        </section>
    </>
}