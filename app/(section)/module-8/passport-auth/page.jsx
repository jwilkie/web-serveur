import IC from '@/components/InlineCode'
import CodeBlock from '@/components/CodeBlock';
import ColoredBox from '@/components/ColoredBox';
import { File, FileExplorer, Folder } from '@/components/FileExplorer';

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Configuration de passport",
    description: "Démonstration de la configuration de la librairie passport pour l'authentification dans une application Express.js.",
    keywords: ["node.js", "express", "db", "sqlite", "user", "email", "courriel", "mot de passe", "password", "passport", "authentification"],
    group: "notes"
}

const packages =
`import bcrypt from 'bcrypt'
import passport from 'passport'
import { Strategy } from 'passport-local'
import { getUtilisateurById, getUtilisateurByCourriel } from './model/utilisateur.js'`;

const strategy = 
`// Configuration générale de la stratégie.
// On indique ici qu'on s'attends à ce que le client
// envoit un variable "courriel" et "motDePasse" au
// serveur pour l'authentification.
const config = {
    usernameField: 'courriel',
    passwordField: 'motDePasse'
};

// Configuration de la stratégie d'authentification locale
passport.use(new Strategy(config, async (courriel, motDePasse, done) => {
    // S'il y a une erreur avec la base de données,
    // on retourne l'erreur au serveur
    try {
        // On va chercher l'utilisateur dans la base
        // de données avec son identifiant, le
        // courriel ici
        const utilisateur = await getUtilisateurByCourriel(courriel);

        // Si on ne trouve pas l'utilisateur, on
        // retourne que l'authentification a échoué
        // avec un code d'erreur
        if (!utilisateur) {
            return done(null, false, { error: 'mauvais_utilisateur' });
        }

        // Si on a trouvé l'utilisateur, on compare
        // son mot de passe dans la base de données
        // avec celui envoyé au serveur. On utilise
        // une fonction de bcrypt pour le faire
        const valide = await bcrypt.compare(motDePasse, utilisateur.mot_de_passe);

        // Si les mot de passe ne concorde pas, on
        // retourne que l'authentification a échoué
        // avec un code d'erreur
        if (!valide) {
            return done(null, false, { error: 'mauvais_mot_de_passe' });
        }

        // Si les mot de passe concorde, on retourne
        // l'information de l'utilisateur au serveur
        return done(null, utilisateur);
    }
    catch (error) {
        return done(error);
    }
}));`;

const serialization =
`passport.serializeUser((utilisateur, done) => {
    // On mets uniquement l'identifiant dans la session
    done(null, utilisateur.id_utilisateur);
});`;

const deserialization = 
`passport.deserializeUser(async (idUtilisateur, done) => {
    // S'il y a une erreur de base de donnée, on
    // retourne l'erreur au serveur
    try {
        // Puisqu'on a juste l'identifiant dans la 
        // session, on doit être capable d'aller chercher 
        // l'utilisateur avec celle-ci dans la base de 
        // données.
        const utilisateur = await getUtilisateurById(idUtilisateur);
        done(null, utilisateur);
    }
    catch (error) {
        done(error);
    }
});`;

export default function Page() {
    return <>
        <section>
            <h2>Fichier de configuration</h2>
            <p>
                Pour configurer <IC>passport</IC>, il sera nécessaire de créer un nouveau fichier dans notre projet. Créez un fichier
                nommé <IC>auth.js</IC> dans le répertoire principal de votre projet.
            </p>
            <FileExplorer>
                <Folder name="db" />
                <Folder name="middlewares"/>
                <Folder name="model" />
                <Folder name="public" />
                <Folder name="views" />
                <File name=".env" />
                <File name=".gitignore" />
                <File name="auth.js" highlight />
                <File name="package.json" />
                <File name="server.js" />
            </FileExplorer>
            <p>
                Ce fichier utilisera la librairie <IC>passport</IC>, <IC>passport-local</IC> et <IC>bcrypt</IC> pour gérer 
                l'authentification des utilisateurs. Il aura aussi besoin d'accéder à notre base de données pour aller chercher les
                informations des utilisateurs. Assurez-vous donc d'ajouter les importations suivantes en haut de votre fichier:
            </p>
            <CodeBlock language="js">{packages}</CodeBlock>
            <p>
                Vous devrez par la suite importer ce fichier à partir de votre fichier <IC>server.js</IC>. Nous n'avons pas besoin 
                d'importer un champ spécifique ou une fonction. Nous voulons simplement que le code dans ce fichier soit exécuté. Nous 
                allons utiliser une importation simple comme ceci:
            </p>
            <CodeBlock language="js">{`import './auth.js';`}</CodeBlock>
            <p>
                Ce fichier contiendra 3 sections principales:
            </p>
            <ol>
                <li>Définition de la stratégie locale</li>
                <li>Sérialisation de l'utilisateur</li>
                <li>Désérialisation de l'utilisateur</li>
            </ol>
        </section>

        <section>
            <h2>Stratégie locale</h2>
            <p>
                La première section de notre fichier <IC>auth.js</IC> sera la définition de la stratégie locale. C'est cette section
                qui permettra de valider les informations d'un utilisateur lorsqu'il tente de se connecter à notre site web. Assurez-vous 
                de bien lire les commentaires dans le code pour bien comprendre chaque étape du processus.
            </p>
            <p>
                Le code ressemblera à ceci:
            </p>
            <CodeBlock language="js">{strategy}</CodeBlock>
            <ColoredBox title="À noter:">
                <p>
                    Vous avez probablement remarqué que nous utilisons un <IC>try/catch</IC> dans la fonction de validation de la stratégie. 
                    Cette façon de faire nous permet de capturer toute erreur qui pourrait survenir lors de l'accès à la base de données. 
                    Nous n'avions pas vraiment utilisé cette approche jusqu'à maintenant puisque depuis la version 5 de Express, les erreurs 
                    dans le code asynchrone sont automatiquement gérées par la librairie. Toutefois, <IC>passport</IC> a été conçu pour de 
                    vieilles versions d'Express, ce qui nous oblige à gérer les erreurs nous-même.
                </p>
                <p>
                    La librairie <IC>passport</IC> est l'une des plus utilisé pour l'authentification, mais le code de son infrastructure 
                    de base n'a pas été mis à jour depuis quelques années pour des raisons de rétrocompatibilité. Bref, beaucoup de code 
                    touchant à <IC>passport</IC> utilise des approches plus anciennes de Node.js et Express.js. Espérons que cela changera
                    dans le futur.
                </p>
            </ColoredBox>
        </section>

        <section>
            <h2>Sérialisation des données</h2>
            <p>
                La deuxième section de notre fichier <IC>auth.js</IC> sera la sérialisation des données de l'utilisateur. Cette étape
                permet de déterminer quelles informations de l'utilisateur seront stockées dans la base de données de session. Dans une 
                application de base, on stockera simplement l'identifiant de l'utilisateur. Toutefois, dans une application plus complexe,
                on pourrait vouloir stocker plus d'informations pour des raisons de performance.
            </p>
            <p>
                Voici comment faire la sérialisation:
            </p>
            <CodeBlock language="js">{serialization}</CodeBlock>
        </section>

        <section>
            <h2>Désérialisation des données</h2>
            <p>
                La troisième et dernière section de notre fichier <IC>auth.js</IC> sera la désérialisation des données de l'utilisateur. 
                Cette étape permet de récupérer les informations de l'utilisateur à partir de la base de données de session. Puisqu'à 
                l'étape de sérialisation nous n'avons stocké que l'identifiant de l'utilisateur, nous devrons aller chercher le reste de 
                ses informations dans la base de données principale. 
            </p>
            <p>
                Voici comment faire la désérialisation:
            </p>
            <CodeBlock language="js">{deserialization}</CodeBlock>
        </section>
    </>;
}
