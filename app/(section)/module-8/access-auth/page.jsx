import BorderedBox from '@/components/BorderedBox';
import CodeBlock from '@/components/CodeBlock';
import { File, FileExplorer, Folder } from '@/components/FileExplorer';
import IC from '@/components/InlineCode'

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Gestion des accès",
    description: "Présentation des méthodes pour protéger les routes et gérer les accès et permissions des utilisateurs dans une application Express.js.",
    keywords: ["node.js", "express", "route", "endpoint", "middleware", "accès", "authorisation", "permission"],
    group: "notes"
}

const routeUser = 
`app.get('/api/commandes', async (request, response) => {
    // On va chercher les commandes de l'utilisateur 
    // courant pour les retourner au client
    const commandes = await getCommandesByIdUtilisateur(request.user.id_utilisateur);
    response.json(commandes);
});`;

const middlewareAuthentifie = 
`// Middleware pour les routes d'API protégées
export function userAuth(request, response, next) {
    if(request.user) {
        return next();
    }

    response.status(401).end();
}
    
// Middleware pour les routes de page protégées
export function userAuthRedirect(request, response, next) {
    if(request.user) {
        return next();
    }

    response.status(401).redirect('/connexion');
}`;

const middlewarePermission = 
`// Middleware pour les routes d'API réservées aux 
// administrateurs
export function userAdmin(request, response, next) {
    if(request.user && request.user.niveau_acces === 2) {
        return next();
    }

    response.status(403).end();
};

// Middleware pour les routes de page réservées aux
// administrateurs
export function userAdminRedirect(request, response, next) {
    if(request.user && request.user.niveau_acces === 2) {
        return next();
    }
        
    response.status(403).redirect('/unauthorized');
};`;

const routeInterface = 
`app.get('/', (request, response) => {
    response.render('accueil', {
        title: 'Accueil | Mon site web',
        styles: ['/css/accueil.css'],
        scripts: ['/js/accueil.js', '/js/deconnexion.js'],
        user: request.user,
        isAdmin: request.user && request.user.niveau_acces === 2
    });
});`;

const interfaceMenu = 
`<nav>
    <ul>
        <li>
            <a href="/">Accueil</a>
        </li>

        <!-- Page connexion uniquement si l'utilisateur n'est pas connecté -->
        {{#unless user}}
            <li>
                <a href="/connexion">Connexion</a>
            </li>
        {{/unless}}

        <!-- Page inscription uniquement si l'utilisateur n'est pas connecté -->
        {{#unless user}}
            <li>
                <a href="/inscription">Inscription</a>
            </li>
        {{/unless}}

        <!-- Bouton déconnexion uniquement si l'utilisateur est connecté -->
        {{#if user}}
            <li>
                <input type="button" value="Déconnexion" id="btn-deconnexion" />
            </li>
        {{/if}}

        <!-- Page d'administration uniquement si l'utilisateur est administrateur -->
        {{#if isAdmin}}
            <li>
                <a href="/administration">Administration</a>
            </li>
        {{/if}}
    </ul>
</nav>`;

const interfaceProfile =
`<h2>Profil de l'utilisateur</h2>
<div>
    Nom: {{user.nom}}
</div>
<div>
    Courriel: {{user.courriel}}
</div>`;

export default function Page() {
    return <>
        <section>
            <h2>Données de l'utilisateur courant</h2>
            <p>
                Lorsqu'un utilisateur est authentifié dans une application Express.js avec <IC>passport</IC>, ses données sont accessibles 
                dans l'objet <IC>request.user</IC> à chaque requête qu'il fait au serveur. Cet objet contient les informations de 
                l'utilisateur telles qu'elles sont définies dans la base de données. Il est donc possible d'utiliser ces informations pour
                différents besoins dans l'application.
            </p>
            <p>
                Voici un exemple:
            </p>
            <CodeBlock language="js">{routeUser}</CodeBlock>
            <p>
                Une des particularités de l'objet <IC>request.user</IC> est qu'il est défini uniquement lorsque l'utilisateur est 
                authentifié. Si l'utilisateur n'est pas authentifié, cet objet sera <IC>undefined</IC>. On peut donc utiliser cette
                caractéristique pour vérifier si l'utilisateur est connecté ou non.
            </p>
        </section>

        <section>
            <h2>Protéger une route</h2>
            <p>
                Lorsque nous ajoutons l'authentification dans une application web, il est nécessaire de vérifier chacune de nos routes pour
                se poser la question suivante:
            </p>
            <BorderedBox>
                Est-ce que cette route doit être accessible uniquement aux utilisateurs authentifiés?
            </BorderedBox>
            <p>
                Si ce n'est pas le cas, il n'y a rien de spécial à faire. Par contre, si la route doit être uniquement accessible aux
                utilisateurs connectés, il faudra ajouter une vérification. Pour ce faire, nous allons créer des middlewares similaires
                à ceux que nous avons créés pour valider les données des utilisateurs. Nous créerons ces middlewares dans un nouveau fichier
                nommé <IC>/middleware/auth.js</IC>.
            </p>
            <FileExplorer>
                <Folder name="middlewares">
                    <File name="validation.js" />
                    <File name="auth.js" highlight />
                </Folder>
            </FileExplorer>
            <p>
                Dans ce fichier, nous allons créer les middlewares qui vérifieront si l'utilisateur est connecté avant de lui permettre 
                d'accéder à une route protégée.
            </p>
            <CodeBlock language="js">{middlewareAuthentifie}</CodeBlock>
            <p>
                Les middlewares sont assez simple à comprendre. Vous noterez toutefois qu'il y en a deux. Le premier 
                middleware, <IC>userAuth()</IC>, est destiné aux routes d'API qui retournent des données au format JSON. Il 
                retourne un code 401 (Unauthorized) si l'utilisateur n'est pas authentifié. Le deuxième 
                middleware, <IC>userAuthRedirect()</IC>, est destiné aux routes qui retournent des pages HTML avec la 
                fonction <IC>response.render()</IC>. Dans ce cas, si l'utilisateur n'est pas authentifié, on le redirige vers la page de
                connexion.
            </p>
        </section>
        
        <section>
            <h2>Permissions</h2>
            <p>
                Dans certaines applications, les utilisateurs connectés n'ont pas tous les mêmes droits d'accès. Un exemple typique est 
                d'avoir des utilisateurs réguliers et des administrateurs. Les administrateurs ont généralement plus de permissions et ont 
                donc accès à certaines routes et pages que les utilisateurs réguliers ne peuvent pas voir. Pour gérer ce genre de situation, 
                vous pouvez créer des middlewares supplémentaires qui vérifient le niveau d'accès de l'utilisateur avant de lui permettre
                d'accéder à une route protégée.
            </p>
            <p>
                Les middlewares de permission pourraient ressembler à ceci:
            </p>
            <CodeBlock language="js">{middlewarePermission}</CodeBlock>
            <p>
                Encore une fois, il y a deux versions du middleware: une pour les routes d'API et une pour les routes de pages. Dans le cas 
                des routes de pages, on redirige l'utilisateur vers une page d'erreur que nous aurons préalablement créée. Dans les 2 cas, 
                l'erreur retournée si l'utilisateur n'a pas les permissions nécessaires est le code 403 (Forbidden). 
            </p>
        </section>

        <section>
            <h2>Changer l'affichage en fonction de l'authentification</h2>
            <p>
                Fréquemment, dans une application avec authentification, certaines parties de l'interface graphique changent en fonction
                de l'état d'authentification de l'utilisateur. Par exemple, un menu de navigation pourrait afficher un lien vers la page
                de profil de l'utilisateur uniquement si celui-ci est connecté. De même, les liens vers les pages de connexion et 
                d'inscription pourraient être cachés lorsque l'utilisateur est connecté. On pourrait aussi ajouter des liens supplémentaires
                si l'utilisateur connecté est un administrateur.
            </p>
            <p>
                Pour arriver à ce résultat, nous utiliserons les données de l'utilisateur courant disponible dans 
                l'objet <IC>request.user</IC>, que nous pourrons passer à Handlebars lors du rendu des pages. Voici un exemple de page 
                Handlebars qui change son menu de navigation en fonction de l'état d'authentification de l'utilisateur:
            </p>
            <CodeBlock language="js">{routeInterface}</CodeBlock>
            <CodeBlock language="handlebars">{interfaceMenu}</CodeBlock>
            <p>
                N'oubliez pas d'inclure les variables <IC>user</IC> et <IC>isAdmin</IC> dans toutes les routes qui utilisent Handlebars,
                particulièrement si votre menu de navigation est inclus dans toutes les pages. Autrement, le menu ne pourra pas s'afficher 
                correctement dans certaines pages.
            </p>
            <p>
                Il est aussi possible d'afficher des informations spécifiques à l'utilisateur dans l'interface, comme son nom, courriel ou 
                autres données personnelles. Pour ce faire, il suffit d'utiliser les données de l'objet <IC>user</IC> dans le fichier 
                Handlebars. Assurez-vous toutefois de ne pas afficher d'informations sensibles, comme le mot de passe.
            </p>
            <CodeBlock language="handlebars">{interfaceProfile}</CodeBlock>
        </section>
    </>;
}
