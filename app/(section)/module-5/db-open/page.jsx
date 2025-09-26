import IC from '@/components/InlineCode'
import CodeBlock from '@/components/CodeBlock'
import ColoredBox from '@/components/ColoredBox';

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Connexion à une base de données",
    description: "Démonstration de la connexion à une base de données SQLite avec Node.js et Javascript.",
    keywords: ["js", "node.js", "sqlite", "base de données", "db", "connecteur", "open"],
    group: "notes"
}

const install = 
`npm i sqlite3
npm i sqlite`;

const dbjs = 
`import { open } from 'sqlite';
import sqlite3 from 'sqlite3';
import { existsSync } from 'node:fs';

// Vérifie si le fichier de base de données est 
// nouveau (n'existe pas encore)
const IS_NEW = !existsSync(process.env.DB_FILE);

// Connexion à la base de données. Vous devez 
// spécifier le nom du fichier de base de données 
// dans le fichier .env
let db = await open({
    filename: process.env.DB_FILE,
    driver: sqlite3.Database
});

// Création de la table si elle n'existe pas, on 
// peut écrire du code SQL pour initialiser les 
// tables et données dans la fonction exec()
if(IS_NEW) {
    await db.exec(\`
        PRAGMA foreign_keys = ON;

    \`);
}

export { db }`;

const config =
`# Fichier de base de données
DB_FILE=./db/tache.db`;

const create =
`db = await db.exec(
    \`PRAGMA foreign_keys = ON;
    
    CREATE TABLE client(
        id_client INTEGER PRIMARY KEY,
        nom TEXT NOT NULL,
        courriel TEXT NOT NULL UNIQUE
    );
    
    CREATE TABLE produit(
        id_produit INTEGER PRIMARY KEY,
        description TEXT NOT NULL,
        prix REAL NOT NULL
    );\`
);`;

export default function Page() {
    return <>
        <section>
            <h2>Installations</h2>
            <p>
                Avant de pouvoir utiliser SQLite, nous devrons installer 2 librairies de code. Une pour la base de données SQLite elle-même, 
                et une autre pour être capable de la connecter à notre application Node.js. 
            </p>
            <CodeBlock language="terminal">{install}</CodeBlock>
            <dl>
                <dt>sqlite3</dt>
                <dd>
                    C'est la librairie qui contient le moteur de base de données SQLite. Elle est écrite dans le langage C, mais elle est 
                    compilée pour être utilisée dans Node.js. C'est elle qui va gérer le stockage des données dans un fichier ainsi que 
                    l'exécution des requêtes SQL.
                </dd>
                <dt>sqlite</dt>
                <dd>
                    C'est la librairie qui va nous permettre de connecter notre application Node.js à la base de données SQLite. On 
                    appelle souvent ce genre de librairie un <strong>connecteur</strong>. Elle fournit une interface Javascript utilisant 
                    les promesses pour interagir avec la base de données.
                </dd>
            </dl>
        </section>

        <section>
            <h2>Configuration</h2>
            <p>
                Assurez-vous d'ajouter une ligne dans votre fichier <IC>.env</IC> pour définir le nom et le chemin du fichier de base 
                de données. Le nom du fichier peut être ce que vous voulez, mais il est d'usage de lui donner l'extension <IC>.db</IC>
                et de le mettre dans le dossier <IC>/db</IC>. Voici le genre de ligne que vous devez ajouter:
            </p>
            <CodeBlock language="env">{config}</CodeBlock>
        </section>

        <section>
            <h2>Connexion</h2>
            <p>
                La première étape pour utiliser une base de données est de se connecter à celle-ci. Nous mettrons la logique de cette 
                connexion dans un fichier de code séparé, que nous pourrons par la suite réutiliser dans les différentes parties de
                notre application. Vous devrez donc vous créer le fichier et le dossier <IC>/db/db.js</IC> dans lequel vous mettrez 
                le code suivant:
            </p>
            <CodeBlock language="javascript">{dbjs}</CodeBlock>
            <p>
                Voici quelques explications sur ce code:
            </p>
            <dl>
                <dt>Importations</dt>
                <dd>
                    Nous importons la base de données SQLite (<IC>sqlite3</IC>) ainsi que la fonction d'ouverture du connecteur. La 
                    dernière importation est une fonction de Node.js qui nous permet de vérifier si un fichier existe.
                </dd>

                <dt>Ouverture de la connexion</dt>
                <dd>
                    La fonction <IC>open()</IC> du connecteur permet d'ouvrir une connexion à la base de données. C'est avec cette 
                    connexion que nous pourrons exécuter des requêtes SQL. Notez que cette fonction est asynchrone, donc nous 
                    devons utiliser <IC>await</IC> pour avoir le connecteur.
                </dd>

                <dt>Initialisation</dt>
                <dd>
                    L'ouverture de la base de données avec <IC>open()</IC> va créer le fichier de base de données s'il n'existe pas. 
                    Nous vérifions donc si le fichier existe déjà avant d'ouvrir la connexion. Si le fichier n'existe pas, nous
                    savons que c'est la première fois que nous ouvrons la base de données et nous pouvons donc initialiser les
                    tables et les données de départ. Nous pourrons écrire du code SQL dans la fonction <IC>exec()</IC> pour faire
                    cette initialisation.
                </dd>
            </dl>
        </section>

        <section>
            <h2>Création des tables</h2>
            <p>
                La modélisation et la création des tables dans une base de données relationnelle est un sujet hors de la portée de ce 
                cours. Vous devez déjà avoir des connaissances dans ce sujet pour suivre ce cours. La création des tables se fera dans 
                la fonction <IC>exec()</IC> du fichier ci-dessus. Voici un exemple de code SQL pour créer une table:
            </p>
            <CodeBlock language="js">{create}</CodeBlock>
            <ColoredBox title="À noter:">
                La première instruction SQL dans la fonction <IC>exec()</IC> doit toujours être 
                l'instruction <IC>PRAGMA foreign_keys = ON;</IC> pour activer le support des clés étrangères dans votre base de 
                données SQLite. Autrement, les clés étrangères ne fonctionneront pas correctement.
            </ColoredBox>
            <p>
                Le code SQL de SQLite est très similaire à celui des autres systèmes de gestion de bases de données relationnelles. Il y a 
                toutefois 2 différences importantes à noter ici:
            </p>
            <ul>
                <li>
                    Les types de données de SQLite sont plus simples. Vous pouvez trouver la liste des types supportés ici:
                    <p>
                        <a href="https://www.sqlite.org/datatype3.html" target="_blank">SQLite - Datatypes In SQLite</a>
                    </p>
                </li>
                <li>
                    Si vous voulez un identifiant unique auto-incrémenté (id), vous n'avez pas besoin de spécifier un mot-clé spécial 
                    comme <IC>AUTO_INCREMENT</IC> ou <IC>IDENTITY</IC>. Il suffit de définir la colonne comme étant de 
                    type <IC>INTEGER</IC> et comme clé primaire. SQLite s'occupera de l'auto-incrémentation pour vous.
                </li>
            </ul>
        </section>
    </>;
}
