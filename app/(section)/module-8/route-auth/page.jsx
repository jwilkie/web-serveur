import IC from '@/components/InlineCode'
import CodeBlock from '@/components/CodeBlock';
import ColoredBox from '@/components/ColoredBox';

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Routes d'authentification",
    description: "Démonstration de la création des routes d'authentification avec passport dans une application Express.js.",
    keywords: ["node.js", "express", "db", "sqlite", "route", "endpoint", "login", "logout", "sign in", "passport", "authentification"],
    group: "notes"
}

const inscription =
`app.post('/api/inscription', courrielValide, motDePasseValide, async (request, response, next) => {
    try {
        // Si la validation passe, on crée l'utilisateur
        await addUtilisateur(request.body.courriel, request.body.motDePasse);
        response.sendStatus(201);
    }
    catch (error) {
        // S'il y a une erreur de SQL, on regarde
        // si c'est parce qu'il y a conflit
        // d'identifiant
        if(error.code === 'SQLITE_CONSTRAINT') {
            response.sendStatus(409);
        }
        else {
            next(error);
        }
    }
});`;

const inscriptionImport = 
`import { addUtilisateur } from './model/utilisateur.js'`;

const connexion =
`app.post('/api/connexion', courrielValide, motDePasseValide, (request, response, next) => {
    // On lance l'authentification avec passport.js
    passport.authenticate('local', (error, user, info) => {
        if (error) {
            // S'il y a une erreur, on laisse Express la 
            // gérer
            next(error);
        }
        else if (!user) {
            // Si la connexion échoue, on envoit
            // l'information au client avec un code
            // 401 (Unauthorized)
            response.status(401).json(info);
        }
        else {
            // Si tout fonctionne, on ajoute
            // l'utilisateur dans la session et on 
            // retourne un code 200 (OK)
            request.logIn(user, (error) => {
                if (error) {
                    // On laisse Express gérer l'erreur
                    next(error);
                }

                response.sendStatus(200);
            });
        }
    })(request, response, next);
});`;

const deconnexion =
`app.post('/api/deconnexion', (request, response, next) => {
    // Déconnecter l'utilisateur
    request.logOut((erreur) => {
        if (erreur) {
            // On laisse Express gérer l'erreur
            next(erreur);
        }
        else {
            // Indiquer que la déconnexion a réussi
            response.status(200).end();
        }
    });
});`;

const publicValidation =
`// Fichier /public/js/validation.js

export const isCourrielValide = (courriel) =>
    typeof courriel === 'string' &&
    courriel.match(/^(?:[a-z0-9!#$%&'*+\\x2f=?^_\`\\x7b-\\x7d~\\x2d]+(?:\.[a-z0-9!#$%&'*+\\x2f=?^_\`\\x7b-\\x7d~\\x2d]+)*|"(?:[\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x21\\x23-\\x5b\\x5d-\\x7f]|\\\\[\\x01-\\x09\\x0b\\x0c\\x0e-\\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9\\x2d]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9\\x2d]*[a-z0-9])?|\\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9\\x2d]*[a-z0-9]:(?:[\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x21-\\x5a\\x53-\\x7f]|\\[\\x01-\\x09\\x0b\\x0c\\x0e-\\x7f])+)\])$/i)

export const isMotDePasseValide = (motDePasse) => 
    typeof motDePasse === 'string' && 
    motDePasse.length >= 8;`;

const middlewareValidation =
`// Fichier /middleware/validation.js

import { isCourrielValide, isMotDePasseValide } from '../public/js/validation.js'

export function courrielValide(request, response, next) {
    if (isCourrielValide(request.body.courriel)) {
        return next();
    }

    response.status(400).end();
}

export function motDePasseValide(request, response, next) {
    if (isMotDePasseValide(request.body.motDePasse)) {
        return next();
    }

    response.status(400).end();
}`;

export default function Page() {
    return <>
        <section>
            <h2>Routes HTTP</h2>
            <p>
                À la base, nous aurons besoin uniquement de 3 routes pour gérer l'authentification.
            </p>
            <ol>
                <li>Route pour l'inscription d'un compte</li>
                <li>Route pour la connexion à un compte</li>
                <li>Route pour la déconnexion d'un compte</li>
            </ol>
            <p>
                Cette page détaillera comment programmer ces 3 routes dans votre fichier <IC>server.js</IC>.
            </p>
        </section>

        <section>
            <h2>Inscription</h2>
            <p>
                L'inscription est, à la base, une route assez facile à programmer. Elle suit les même règle que les
                routes précédemment créer dans le cours. Sa seule difficulté est que nous voulons probablement
                retourner une erreur différente si l'utilisateur essait de se créer un compte avec un identifiant déjà
                existant. Dans notre cas, si un utilisateur essaie de créer un compte dont l'adresse courriel est déjà
                utilisée, nous voulons retourner un code 409 (Conflict) au lieu du classique 400 (Bad Request).
            </p>
            <p>
                Voici comment on pourrait faire:
            </p>
            <CodeBlock language="js">{inscription}</CodeBlock>
            <p>
                L'inscription nécessite un ajout dans la base de données avec la fonction <IC>addUtilisateur()</IC>. 
                Assurez-vous de faire l'importation de cette fonction en haut de votre fichier.
            </p>
            <CodeBlock language="js">{inscriptionImport}</CodeBlock>
        </section>

        <section>
            <h2>Connexion</h2>
            <p>
                La connexion est un peu plus compliqué que l'inscription. Lors de la connexion, nous devons lancer
                l'authentification avec <IC>passport</IC>. Ensuite, selon le résultat de <IC>passport</IC>, nous
                devons retourner un message au client. Le code est donc un peu plus complexe et différent de ce que
                l'on fait habituellement. Voici un exemple qui pourrait fonctionner:
            </p>
            <CodeBlock language="js">{connexion}</CodeBlock>
            <p>
                Si vous utiliser ce code, assurez-vous de mettre les paranthèses et accolades aux bonnes places. Si
                vous en mettez trop, pas assez ou aux mauvais endroits, ça pourrait vous causer des problèmes.
            </p>
        </section>

        <section>
            <h2>Déconnexion</h2>
            <p>
                La déconnexion est définitivement le plus facile des 3 routes à programmer. Il suffit simplement
                d'indiquer à <IC>passport</IC> de déconnecter l'utilisateur en vidant sa session.
            </p>
            <CodeBlock language="js">{deconnexion}</CodeBlock>
        </section>

        <section>
            <h2>Fonction next</h2>
            <p>
                Vous avez probablement remarqué que dans les 3 routes, nous avons ajouté un paramètre <IC>next()</IC> à la
                fonction de gestion de la route, comme lorsque nous créons un middleware. Dans les middlewares, on utilisait cette 
                fonction pour passer au middleware suivant. Ici, on l'utilisons pour laisser Express gérer les erreurs qui pourraient 
                survenir. 
            </p>
            <ColoredBox title="À noter:">
                Habituellement, Express gère les erreurs automatiquement, mais comme nous utilisons <IC>passport</IC>, et que cette 
                librairie n'a pas été conçue pour les versions récentes d'Express, nous devons gérer les erreurs nous-même en utilisant 
                la fonction <IC>next()</IC>.
            </ColoredBox>
        </section>

        <section>
            <h2>Middleware de validation</h2>
            <p>
                Vous noterez que des middlewares de validation sont utilisés dans les routes d'inscription et de connexion. Ces
                middlewares permettent de s'assurer que les données envoyées par le client sont valides avant de tenter de créer un compte
                ou de connecter un utilisateur. Les middlewares <IC>courrielValide</IC> et <IC>motDePasseValide</IC> doivent être programmés
                dans le fichier <IC>/middleware/validation.js</IC> et probablement aussi dans le fichier <IC>/public/js/validation.js</IC>.
            </p>
            <p>
                Ils pourraient ressembler à ceci:
            </p>
            <CodeBlock language="js">{publicValidation}</CodeBlock>
            <CodeBlock language="js">{middlewareValidation}</CodeBlock>
            <ColoredBox title="À noter:">
                La fonction de validation du courriel utilise une expression régulière (regex) assez complexe. Les adresses courriel sont 
                connue pour être difficiles à valider correctement. L'expression régulière utilisée ici est une version simplifiée du 
                standard officiel pour les adresses courriel (RFC 5322) qui devrait fonctionner dans la majorité des cas. Vous pouvez la 
                trouver à quelques endroits sur le web.
            </ColoredBox>
        </section>
    </>;
}
