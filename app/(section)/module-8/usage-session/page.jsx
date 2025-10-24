import IC from '@/components/InlineCode'
import CodeBlock from '@/components/CodeBlock';
import ColoredBox from '@/components/ColoredBox';
import OverflowContainer from '@/components/OverflowContainer';

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Utilisation des sessions",
    description: "Démonstration de l'utilisation des sessions dans une application web avec Node.js et Express.js.",
    keywords: ["node.js", "express", "session", "http", "cookies"],
    group: "notes"
}

const install =
`npm i express-session
npm i memorystore`;

const importation = 
`import session from 'express-session'
import memorystore from 'memorystore'`;

const db = 
`const MemoryStore = memorystore(session);

// Ajout des middlewares
// ...`

const config = 
`app.use(session({
    cookie: { maxAge: 3600000 },
    name: process.env.npm_package_name,
    store: new MemoryStore({ checkPeriod: 3600000 }),
    resave: false,
    saveUninitialized: false,
    rolling: true,
    secret: process.env.SESSION_SECRET
}));`;

const variable =
`app.get('/une-route', (request, response) => {
    // On crée une variable "nomDeVariable"
    // dans la session
    request.session.nomDeVariable = 'valeur';
});`

const variable2 =
`app.get('/une-route', (request, response) => {
    // Si le tableau n'existe pas, on le crée
    if(!request.session.nomDeVariable){
        request.session.nomDeVariable = [];
    }
    
    // Dans tous les cas, on ajoute un nombre
    // aléatoire au tableau
    request.session.nomDeVariable.push(Math.random());
});`;

const deleteVar =
`app.get('/une-route', (request, response) => {
    // Suppression de la variable "nomDeVariable"
    // dans la session
    delete request.session.nomDeVariable;
});`;

export default function Page() {
    return <>
        <section>
            <h2>Installation</h2>
            <p>
                Pour utiliser les sessions dans une application Node.js avec Express, nous aurons besoin de deux librairies externes. 
                L'une d'entre elles, <IC>express-session</IC>, est la librairie principale qui permettra d'intégrer le concept de session
                dans notre application Express. La seconde librairie, <IC>memorystore</IC>, est une base de données en mémoire simple pour 
                stocker les données de session. Pour installer ces deux librairies, nous utiliserons la commande suivante :
            </p>
            <CodeBlock language="terminal">{install}</CodeBlock>
            <ColoredBox title="À noter:">
                Bien que l'intégration des sessions dans Express se fasse presque toujours avec la librairie <IC>express-session</IC>,
                il est possible d'utiliser d'autres librairies pour le stockage des données de session. Par exemple, on pourrait utiliser 
                SQLite, MongoDB ou Redis pour stocker les données de session. Ces solutions sont plus robustes que <IC>memorystore</IC>, mais 
                sont définitivement plus complexes à mettre en place. C'est pourquoi nous ne les aborderons pas dans ce cours.
            </ColoredBox>
        </section>

        <section>
            <h2>Configuration</h2>
            <p>
                Avant de configurer les sessions dans notre application Express, nous devons nous assurer de bien importer les deux 
                librairies que nous venons d'installer. Ajoutez donc les lignes suivantes en haut de votre fichier <IC>server.js</IC>:
            </p>
            <CodeBlock language="js">{importation}</CodeBlock>
            <p>
                Une fois les librairies importées, nous allons configurer la base de données de session. Pour ce faire, nous allons mettre
                la ligne suivante juste avant l'ajout des middlewares dans le fichier <IC>server.js</IC>:
            </p>
            <CodeBlock language="js">{db}</CodeBlock>
            <p>
                Ensuite, nous allons ajouter le middleware de session dans notre application Express. Pour ce faire, ajoutez le code
                suivant à la fin des middlewares, juste avant la gestion des routes:
            </p>
            <CodeBlock language="js">{config}</CodeBlock>
            <p>
                Le middleware de session est l'un des middlewares les plus complexes que nous utiliserons cette session. Il nécessite une
                configuration assez détaillée pour bien fonctionner. Voici une description des différentes options que nous avons
                utilisées dans notre configuration:
            </p>
            <OverflowContainer>
                <table>
                    <thead>
                        <tr>
                            <th>Option</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>cookie.maxAge</td>
                            <td>
                                Permet de définir le temps nécessaire en millisecondes avant qu'une session soit supprimé du serveur. Dans 
                                le cas ci-dessus, la session a une durée de vie de 1h. En général, à chaque utilisation de la session, 
                                celle-ci est rafraîchit automatiquement.
                            </td>
                        </tr>
                        <tr>
                            <td>name</td>
                            <td>
                                C'est le nom de la session. Si vous avez plusieurs serveur Web qui sont exécuté en même temps sur votre 
                                ordinateur, ça permet aux sessions de faire la différence entre ces applications. Dans notre cas, j'utilise 
                                le nom de votre application dans le fichier <IC>package.json</IC>. Il est donc très important de le changer
                                le nom de l'application dans le fichier <IC>package.json</IC> si vous partez d'un gabarit.
                            </td>
                        </tr>
                        <tr>
                            <td>store</td>
                            <td>
                                C'est l'instance de l'utilitaire que vous utiliserez pour sauvegarder vos sessions. Dans notre cas, on 
                                utilise notre <IC>MemoryStore</IC> que nous avons téléchargé précédemment.
                            </td>
                        </tr>
                        <tr>
                            <td>store.checkPeriod</td>
                            <td>
                                C'est la fréquence en millisecondes à laquelle notre utilitaire de sauvegarde des sessions va regarder ses 
                                sessions pour vérifier si elles sont trop vieilles et périmées. Lorsque c'est le cas, il les supprime. Dans 
                                le cas ci-dessus, le <IC>MemoryStore</IC> regarde à chaque heure pour voir si les sessions sont périmées.
                            </td>
                        </tr>
                        <tr>
                            <td>resave</td>
                            <td>
                                Indique si l'engin de session doit réenregistrer la session même si elle n'a pas été modifié. Par défaut, 
                                la valeur est à <IC>true</IC>, mais il est fortement recommandé de la mettre à <IC>false</IC>, ce que nous 
                                faisons ci-dessus.
                            </td>
                        </tr>
                        <tr>
                            <td>saveUninitialized</td>
                            <td>
                                Indique si l'engin de session doit enregistrer les sessions même si elles sont vide. Par défaut, la valeur 
                                est à <IC>true</IC>, mais il est fortement recommandé de la mettre à <IC>false</IC>, ce que nous faisons 
                                ci-dessus.
                            </td>
                        </tr>
                        <tr>
                            <td>rolling</td>
                            <td>
                                Indique si la durée de vie de la session doit être rafraîchie à chaque requête. Cela permet de garder la 
                                session active tant que l'utilisateur interagit avec le site.
                            </td>
                        </tr>
                        <tr>
                            <td>secret</td>
                            <td>
                                C'est la clé pour générer les cookies de connexion. Ça vous prends absolument une valeur ici. Dans une 
                                application dont la sécurité est vraiment importante, il serait nécessaire de générer des secrets 
                                différents périodiquement et de faire des rotations. Dans notre cas, nous mettrons simplement le secret 
                                dans notre fichier de configuration <IC>.env</IC>.
                            </td>
                        </tr>
                    </tbody>
                </table>
            </OverflowContainer>
            <p>
                La dernière chose à faire est de s'assurer que la variable d'environnement <IC>SESSION_SECRET</IC> est bien définie dans
                notre fichier <IC>.env</IC>. Vous pouvez mettre n'importe quelle chaîne de caractères, mais assurez-vous que ce soit une
                chaîne difficile à deviner.
            </p>
            <CodeBlock language="env">{'SESSION_SECRET=kyUvdOblvGn90iDVWuldHnyuyLjluUfp'}</CodeBlock>
        </section>

        <section>
            <h2>Variable de session</h2>
            <p>
                Une fois les sessions installées et configurées, vous pourrez accéder à la session de chaque connexion dans les routes que 
                vous programmez dans la variable <IC>request.session</IC>. Cette variable est un objet. Vous pouvez donc y ajouter des 
                champs sans aucun problème.
            </p>
            <CodeBlock language="js">{variable}</CodeBlock>
            <p>
                Si vous désirez ajouter des données pour la première fois dans votre session sur une route qui est souvent utilisé par 
                l'utilisateur, je vous suggère toutefois un code un peu différent. Dans le code ci-dessous, on s'assure que la variable 
                n'a pas déjà été créé au préalable pour être certain de ne pas écraser sa valeur.
            </p>
            <CodeBlock language="js">{variable2}</CodeBlock>
            <p>
                Finalement, si vous voulez supprimer des données dans une session, vous pouvez utiliser le mot-clé <IC>delete</IC> de la 
                façon suivante:
            </p>
            <CodeBlock language="js">{deleteVar}</CodeBlock>
            <ColoredBox title="À noter:">
                On va rarement manipuler directement les variables de session. On preferera souvent utiliser ou créer des middlewares
                qui vont faire les manipulations pour nous. Ce sera le cas pour l'authentification, que nous verrons dans les prochaines 
                pages de ce module.
            </ColoredBox>
        </section>
    </>;
}
