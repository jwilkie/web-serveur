import IC from '@/components/InlineCode'
import CodeBlock from '@/components/CodeBlock';

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Configuration de l'authentification",
    description: "Démonstration de la configuration de l'authentification avec session dans un projet Node.js avec Express.js.",
    keywords: ["node.js", "express", "session", "http", "cookies", "authentification", "passport", "bcrypt"],
    group: "notes"
}

const install =
`npm install passport
npm install passport-local
npm install bcrypt`;

const importPassport = 
`import passport from 'passport'`;

const passport = 
`// Ajout de middlewares
// ...
app.use(session({ 
    // ... 
}));
app.use(passport.initialize());
app.use(passport.session());`;

export default function Page() {
    return <>
        <section>
            <h2>Configuration des sessions</h2>
            <p>
                La première étape pour utiliser l'authentification sera de configurer les sessions dans notre application Express.js. 
                Assurez-vous de bien parcourir les premières pages de ce module pour vous assurer que les sessions sont bien installées
                et configurées dans votre application. Sans les sessions, l'authentification ne pourra pas fonctionner.
            </p>
        </section>

        <section>
            <h2>Installations</h2>
            <p>
                Nous ne programmerons pas l'authentification nous-même. Puisque c'est une tâche complexe et que la sécurité est primordiale,
                nous allons utiliser une librairie externe très populaire dans le monde de Node.js et Express.js qui 
                s'appelle <IC>passport</IC>. Cette librairie nous permettra de gérer l'authentification de façon sécuritaire et efficace.
                Nous utiliserons aussi la librairie <IC>bcrypt</IC> pour encoder les mots de passe dans notre base de données.
            </p>
            <p>
                Pour installer ces librairies, vous pouvez utiliser les commandes suivantes:
            </p>
            <CodeBlock language="terminal">{install}</CodeBlock>
            <p>
                Vous noterez ici le téléchargement d'une librairie supplémentaire, <IC>passport-local</IC>. Nous utilisons cette librairie
                puisque <IC>passport</IC> ne gère pas l'authentification par lui-même. Il définit plutôt des balises pour que nous puissions
                définir des stratégies d'authentification. La stratégie que nous utiliserons dans ce cours est la stratégie locale, d'où
                l'installation de <IC>passport-local</IC>. 
            </p>
            <p>
                Il existe plusieurs autres stratégies d'authentification que vous pouvez utiliser avec <IC>passport</IC>. Par exemple, il
                est possible d'utiliser des stratégies pour l'authentification avec Google, Facebook, Twitter, GitHub et plusieurs autres.
                La stratégie locale est celle que l'on utilise lorsque nous voulons valider l'authentification nous-même, sur notre propre
                serveur.
            </p>
        </section>

        <section>
            <h2>Middlewares</h2>
            <p>
                La librairie <IC>passport</IC> utilise des middlewares pour fonctionner avec Express.js. Il sera donc nécessaire de les 
                ajouter à notre application. Dans la section de middlewares, sous la configuration des sessions, ajoutez les middlewares
                suivants:
            </p>
            <CodeBlock language="js">{passport}</CodeBlock>
            <p>
                N'oubliez pas non plus d'ajouter l'importation de la librairie <IC>passport</IC>:
            </p>
            <CodeBlock language="js">{importPassport}</CodeBlock>
            <p>
                Comme vous pouvez le voir, on n'utilise pas encore les librairies <IC>passport-local</IC> et <IC>bcrypt</IC>. Nous les 
                utiliserons dans un autre fichier que le <IC>server.js</IC>.
            </p>
        </section>
    </>;
}
