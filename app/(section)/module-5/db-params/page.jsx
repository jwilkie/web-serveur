import IC from '@/components/InlineCode'
import CodeBlock from '@/components/CodeBlock'

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Envoyer des données à une base de données",
    description: "Présentation de la façon sécuritaire d'envoyer des données à une base de données SQLite avec Node.js et Javascript pour prévenir les injections SQL.",
    keywords: ["js", "node.js", "sqlite", "base de données", "db", "connecteur", "requête", "sql", "injection", "paramètres"],
    group: "notes"
}

const inject =
`export async function addMessage(contenu) {
    await db.run(
        \`INSERT INTO message (contenu) 
        VALUES ('\` + contenu + \`');\`
    );
}`;

const result = 
`INSERT INTO message (contenu)
VALUES ('Allo'); DROP TABLE message; --');`;

const param = 
`export async function addMessage(contenu) {
    await db.run(
        \`INSERT INTO message (contenu) 
        VALUES (?);\`,
        [contenu]
    );
}`;

const params = 
`export async function addUtilisateur(nom, courriel, role) {
    const resultat = await db.run(
        \`INSERT INTO utilisateur (nom, courriel, role) 
        VALUES (?, ?, ?);\`,
        [nom, courriel, role]
    );

    return resultat.lastID;
}`;

export default function Page() {
    return <>
        <section>
            <h2>Injection SQL</h2>
            <p>
                L'injection SQL est une technique utilisée par les pirates informatiques pour exploiter les vulnérabilités dans les 
                applications qui interagissent avec une base de données. Elle consiste à insérer ou "injecter" du code SQL malveillant
                dans une requête SQL via les entrées de l'utilisateur. Par exemple, prenons le code suivant:  
            </p>
            <CodeBlock language="js">{inject}</CodeBlock>
            <p>
                Supposons que cette fonction soit appelée avec le contenu d'un formulaire web où l'utilisateur peut entrer un message. 
                Si un utilisateur malveillant entre le texte suivant dans le formulaire:
            </p>
            <CodeBlock language="Texte">{`Allo'); DROP TABLE message; --`}</CodeBlock>
            <p>
                La requête SQL générée serait:
            </p>
            <CodeBlock language="sql">{result}</CodeBlock>
            <p>
                Cette requête insérerait d'abord le message "Allo" dans la table <IC>message</IC>, puis supprimerait toute la table
                <IC>message</IC> de la base de données, ce qui pourrait entraîner une perte de données importante. Le double tiret 
                <IC>--</IC> est utilisé pour commenter le reste de la requête, empêchant ainsi toute erreur de syntaxe.
            </p>
            <p>
                Bref, le code Javascript ci-dessus est très dangereux puisqu'il ouvre votre base de données à des attaques potentielles
                qui pourraient compromettre l'intégrité de vos données. Pour régler ce problème, les connecteurs de bases de données,
                offrent généralement une façon sécuritaire d'inclure des données dans une requête SQL en utilisant des instructions 
                préparées ou des paramètres. 
            </p>
        </section>

        <section>
            <h2>Paramètres SQL</h2>
            <p>
                SQLite fournit une façon sécuritaire d'inclure des données dans une requête SQL en utilisant des paramètres. Il ne possède 
                pas d'instructions préparées comme certains autres SGBD, mais les paramètres fonctionnent de façon similaire et sont tout 
                aussi efficaces pour prévenir les injections SQL.
            </p>
            <p>
                Pour utiliser des paramètres dans une requête SQL avec SQLite, on remplace les valeurs qui viennent de l'utilisateur par 
                des points d'interrogation <IC>?</IC> dans la requête SQL. Ensuite, on fournit les valeurs réelles dans un tableau en 
                second argument de la fonction d'exécution de la requête. 
            </p>
            <p>
                Voici un exemple utilisant la même fonction que précédemment:
            </p>
            <CodeBlock language="js">{param}</CodeBlock>
            <p>
                Si vous avez plusieurs paramètres, vous pouvez en mettre plusieurs points d'interrogation dans la requête SQL, et les 
                valeurs seront associées dans l'ordre où elles apparaissent dans le tableau.
            </p>
            <CodeBlock language="js">{params}</CodeBlock>
            <p>
                Avec cette approche, SQLite s'assure que les données fournies sont correctement échappées et traitées comme des valeurs, 
                et non comme du code SQL. Ainsi, même si un utilisateur malveillant essaie d'injecter du code SQL dans les données,
                celui-ci sera traité comme une simple chaîne de caractères et n'affectera pas la structure de la requête SQL.
            </p>
        </section>
    </>;
}
