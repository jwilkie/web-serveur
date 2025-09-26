import IC from '@/components/InlineCode'
import CodeBlock from '@/components/CodeBlock'
import ColoredBox from '@/components/ColoredBox'

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Requête à une base de données",
    description: "Présentation de l'exécution de requêtes SQL de différents types sur une base de données SQLite avec Node.js et Javascript.",
    keywords: ["js", "node.js", "sqlite", "base de données", "db", "connecteur", "requête", "sql", "select", "insert", "update", "delete", "all", "get", "run"],
    group: "notes"
}

const dbget = 
`export async function getSuperAdmin() {
    // Retourne un objet représentant un utilisateur
    const utilisateur = await db.get(
        \`SELECT * FROM utilisateur 
        WHERE id_utilisateur = 0;\`
    );

    return utilisateur;
}`;

const dball = 
`export async function getAllUtilisateurs() {
    // Retourne un tableau d'objets représentant tous les 
    // utilisateurs
    const utilisateurs = await db.all(
        \`SELECT * FROM utilisateur;\`
    );

    return utilisateurs;
}`;

const dbrun =
`export async function deleteClient() {
    // Supprime un utilisateur par son rôle
    const resultat = await db.run(
        \`DELETE FROM utilisateur WHERE role = 'client';\`
    );

    // Retourne le nombre de lignes affectées
    return resultat.changes; 
}`;

const lastID =
`export async function addUtilisateur(nom, courriel, role) {
    // Crée un nouvel utilisateur
    const resultat = await db.run(
        \`INSERT INTO utilisateur (nom, courriel, role) 
        VALUES (?, ?, ?);\`,
        [nom, courriel, role]
    );

    // Retourne l'identifiant du nouvel utilisateur
    return resultat.lastID; 
}`;

const awaitServer = 
`import { getAllUtilisateurs } from './model/utilisateur.js';

// ...

// La fonction de la route doit être marquée comme "async"
app.get('/utilisateurs', async (request, response) => {
    // On doit utiliser "await" pour obtenir le résultat
    const utilisateurs = await getAllUtilisateurs();
    response.status(200).json(utilisateurs);
});`;

export default function Page() {
    return <>
        <section>
            <h2>Emplacement</h2>
            <p>
                En général, nous programmerons les requêtes à la base de données dans la couche d'accès aux données de notre application.
                Dans notre cas, ce sera dans le dossier <IC>/model</IC> de notre projet. Les requêtes à la base de données suivront un 
                concept similaire à la gestion des données en mémoire que nous avons faite précédemment. Vous pourrez créer un fichier 
                par type de données (souvent par table) dans le dossier <IC>/model</IC> pour y mettre les fonctions d'accès aux données 
                de ce type. Les fonctions d'accès aux données auront presque le même format que celles que nous avons faites pour les
                données en mémoire, mais elles utiliseront des requêtes SQL pour interagir avec la base de données.
            </p>
            <p>
                Si vous convertissez une application utilisant des données en mémoire vers une application utilisant une base de données,
                vous pourrez souvent garder les mêmes noms de fonctions et la même logique dans votre couche d'accès aux données. Vous
                devrez cependant modifier le code de ces fonctions pour qu'elles utilisent des requêtes SQL.
            </p>
        </section>

        <section>
            <h2>Connecteur</h2>
            <p>
                Pour effectuer une requête à une base de données SQLite, nous devrons utiliser le connecteur ouvert que nous avons 
                configuré précédemment dans le fichier <IC>db.js</IC>. Dans ce fichier, nous avons exporté l'objet <IC>db</IC> qui
                représente la connexion ouverte à la base de données et qui nous permettra d'exécuter des requêtes SQL.
            </p>
            <p>
                Assurez-vous d'importer l'objet <IC>db</IC> dans vos fichiers de modèle où vous souhaitez effectuer des requêtes.
            </p>
            <CodeBlock language="js">{ `import { db } from '../db/db.js'` }</CodeBlock>
            <p>
                Ce connecteur SQLite que nous utilisons fournit 3 méthodes principales pour exécuter des requêtes SQL, selon le type de
                requête que nous voulons faire. Ces 3 fonctions fonctionnent de manière similaire,  mais elles ont toutefois chacune 
                leurs particularités.
            </p>
            <ul>
                <li>
                    <IC>db.get()</IC>
                </li>
                <li>
                    <IC>db.all()</IC>
                </li>
                <li>
                    <IC>db.run()</IC>
                </li>
            </ul>
        </section>

        <section>
            <h2>db.get()</h2>
            <p>
                Cette fonction est utilisée pour exécuter une requête SQL qui retourne une seule ligne de résultat. Si la requête
                retourne plusieurs rangées, seule la première sera retournée. Si aucune rangée n'est trouvée, la fonction
                retournera <IC>null</IC>.
            </p>
            <p>
                On l'utilisera donc pour des requêtes de type <IC>SELECT</IC> où l'on s'attend à obtenir un seul résultat, comme la 
                recherche d'un enregistrement par son identifiant.
            </p>
            <CodeBlock language="js">{dbget}</CodeBlock>
        </section>
    
        <section>
            <h2>db.all()</h2>
            <p>
                Cette fonction est utilisée pour exécuter une requête SQL qui retourne plusieurs lignes de résultat. Elle retournera
                un tableau contenant toutes les rangées trouvées. Si aucune rangée n'est trouvée, la fonction retournera un tableau
                vide.
            </p>
            <p>
                On l'utilisera donc pour des requêtes de type <IC>SELECT</IC> où l'on s'attend à obtenir plusieurs résultats, comme
                la recherche de tous les enregistrements d'une table ou la recherche d'enregistrements correspondant à certains
                critères.
            </p>
            <CodeBlock language="js">{dball}</CodeBlock>
        </section>

        <section>
            <h2>db.run()</h2>
            <p>
                Cette fonction est utilisée pour exécuter une requête SQL qui ne retourne pas de résultats, comme les requêtes qui
                modifient les données. Elle retournera un objet contenant des informations sur l'exécution de la requête, comme le 
                nombre de lignes affectées.
            </p>
            <p>
                On l'utilisera donc pour des requêtes de type <IC>INSERT</IC>, <IC>UPDATE</IC>, ou <IC>DELETE</IC>.
            </p>
            <CodeBlock language="js">{dbrun}</CodeBlock>
            <p>
                Dans le cas du <IC>INSERT</IC>, on peut aussi récupérer l'identifiant autogénéré de la nouvelle ligne insérée. Pour ce 
                faire, on peut accéder à la propriété <IC>lastID</IC> de l'objet de résultat retourné par la fonction.
            </p>
            <CodeBlock language="js">{lastID}</CodeBlock>
            <ColoredBox title="À noter:">
                Dans l'exemple ci-dessus, nous avons passé des valeurs en paramètre à la requête SQL. Nous verrons plus en détail cette
                technique dans les pages suivantes.
            </ColoredBox>
        </section>

        <section>
            <h2>Asynchrone</h2>
            <p>
                Notez que toutes les fonctions d'exécution de requêtes SQL sont asynchrones et retournent des promesses. C'est parce que
                les opérations dans une base de données peuvent prendre un peu plus de temps. Nous devons donc suivre la 1<sup>ère</sup> règle de
                l'asynchrone en Javascript et utiliser <IC>await</IC> pour avoir le résultat de ces fonctions.
            </p>
            <p>
                De la même façon, les fonctions que nous écrivons pour accéder aux données devront suivre la 2<sup>e</sup> règle de
                l'asynchrone en Javascript et être marquées comme <IC>async</IC> puisque nous utiliserons <IC>await</IC> à l'intérieur.
            </p>
            <p>
                Finalement, suivant la 3<sup>e</sup> règle de l'asynchrone en Javascript, il est important de se rappeler que les fonctions
                asynchrones retournent toujours une promesse. Donc lorsque nous appelerons nos fonctions d'accès aux données dans le 
                fichier <IC>server.js</IC>, nous devrons aussi utiliser <IC>await</IC> pour obtenir le résultat et le <IC>async</IC> sur la 
                fonction de la route.
            </p>
            <CodeBlock language="js">{awaitServer}</CodeBlock>
        </section>
    </>;
}
