import CodeBlock from '@/components/CodeBlock';
import IC from '@/components/InlineCode'

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Interface graphique",
    description: "Démonstration de la programmation de l'interface graphique côté client pour l'authentification dans une application web.",
    keywords: ["navigateur", "fetch", "route", "endpoint", "login", "logout", "sign in", "authentification", "client"],
    group: "notes"
}

const auth = 
`<h2>{{type}}</h2>

<form id="form-auth">
    <label>
        Courriel
        <input type="email" id="input-courriel">
    </label>

    <label>
        Mot de passe
        <input type="password" id="input-mot-de-passe">
    </label>
    
    <input type="submit" value="{{type}}">

    <div id="erreurs" class="erreur"></div>
</form>`;

const server = 
`// Route pour la page d'inscription
app.get('/inscription', (request, response) => {
    response.render('auth', { 
        title: 'Inscription | Mon site web',
        styles: ['/css/auth.css'],
        scripts: ['/js/inscription.js'],
        type: 'Inscription' 
    });
});

// Route pour la page de connexion
app.get('/connexion', (request, response) => {
    response.render('auth', { 
        title: 'Connexion | Mon site web',
        styles: ['/css/auth.css'],
        scripts: ['/js/connexion.js'],
        type: 'Connexion' 
    });
});`;

const inscription =
`import { isCourrielValide, isMotDePasseValide } from './validation.js';

const inputCourriel = document.getElementById('input-courriel');
const inputMotDePasse = document.getElementById('input-mot-de-passe');
const formAuth = document.getElementById('form-auth');
const erreurs = document.getElementById('erreurs');

async function inscription(event) {
    event.preventDefault();

    // Les noms des variables doivent être les mêmes
    // que celles spécifié dans les configuration de
    // passport dans le fichier "auth.js"
    const data = {
        courriel: inputCourriel.value,
        motDePasse: inputMotDePasse.value
    };

    // Réinitialiser les erreurs
    erreurs.innerText = '';

    // Validation cliente
    if(!isCourrielValide(data.courriel)) {
        erreurs.innerText = 'Le courriel n\\'est pas valide.';
        return;
    }

    if(!isMotDePasseValide(data.motDePasse)) {
        erreurs.innerText = 'Le mot de passe doit contenir au moins 8 caractères.';
        return;
    }

    // Envoyer la requête au serveur
    let response = await fetch('/api/inscription', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });

    // Traitement de la réponse
    if (response.ok) {
        // Si l'authentification est réussi, on
        // redirige vers une autre page
        window.location.replace('/connexion');
    }
    else if(response.status === 409) {
        erreurs.innerText = 'Un compte avec ce courriel existe déjà.';
    }   
};

formAuth.addEventListener('submit', inscription);`;

const connexion =
`import { isCourrielValide, isMotDePasseValide } from './validation.js';

const inputCourriel = document.getElementById('input-courriel');
const inputMotDePasse = document.getElementById('input-mot-de-passe');
const formAuth = document.getElementById('form-auth');
const erreurs = document.getElementById('erreurs');

async function connexion(event) {
    event.preventDefault();

    // Les noms des variables doivent être les mêmes
    // que celles spécifié dans les configuration de
    // passport dans le fichier "auth.js"
    const data = {
        courriel: inputCourriel.value,
        motDePasse: inputMotDePasse.value
    };

    // Réinitialiser les erreurs
    erreurs.innerText = '';

    // Validation cliente
    if(!isCourrielValide(data.courriel)) {
        erreurs.innerText = 'Le courriel n\\'est pas valide.';
        return;
    }

    if(!isMotDePasseValide(data.motDePasse)) {
        erreurs.innerText = 'Le mot de passe doit contenir au moins 8 caractères.';
        return;
    }

    // Envoyer la requête au serveur
    let response = await fetch('/api/connexion', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });

    // Traitement de la réponse
    if (response.ok) {
        // Si l'authentification est réussi, on
        // redirige vers une autre page
        window.location.replace('/');
    }
    else if(response.status === 401) {
        // Si l'authentification ne réussi pas, on
        // a le message d'erreur dans l'objet "data"
        let data = await response.json()
        
        if(data.error === 'mauvais_utilisateur') {
            erreurs.innerText = 'Aucun compte ne correspond à ce courriel.';
        }
        else if(data.error === 'mauvais_mot_de_passe') {
            erreurs.innerText = 'Le mot de passe est incorrect.';
        }
    }   
};

formAuth.addEventListener('submit', connexion);`;

const deconnexion = 
`const btnDeconnexion = document.getElementById('btn-deconnexion');

async function deconnexion() {
    let response = await fetch('/api/deconnexion', {
        method: 'POST'
    });

    if (response.ok) {
        // Si la déconnexion est réussie, on redirige 
        // vers une autre page
        window.location.replace('/');
    }
}

if(btnDeconnexion) {
    btnDeconnexion.addEventListener('click', deconnexion);
}`;

const deconnexionInclude = 
`app.get('/', (request, response) => {
    response.render('accueil', {
        title: 'Accueil | Mon site web',
        styles: ['/css/accueil.css'],
        // On ajoute le script de déconnexion dans toutes 
        // les pages où le bouton de déconnexion est 
        // présent
        scripts: ['/js/accueil.js', '/js/deconnexion.js']
    });
});`;

const deconnexionScript = 
`<script type="module" src="/js/deconnexion.js"></script>
{{#each scripts}}
    <script type="module" src="{{this}}"></script>
{{/each}}`;

export default function Page() {
    return <>
        <section>
            <h2>Page client</h2>
            <p>
                Pour permettre à un utilisateur d'utiliser le système d'authentification de notre serveur, nous aurons besoin d'ajouter deux 
                pages dans notre site web. 
            </p>
            <ol>
                <li>Une page d'inscription</li>
                <li>Une page de connexion</li>
            </ol>
            <p>
                Dans ces deux pages, nous mettrons un formulaire HTML simple qui permettra à l'utilisateur d'entrer son courriel et son mot 
                de passe. Lorsque l'utilisateur soumettra le formulaire, nous enverrons les données au serveur.
            </p>
            <p>
                Le HTML de ces deux pages pourrait ressembler à ceci:
            </p>
            <CodeBlock language="handlebars">{auth}</CodeBlock>
            <p>
                Notez que le formulaire est très similaire entre les deux pages. La seule différence est le texte du bouton de soumission
                et le titre de la section. Avec une utilisation judicieuse de Handlebars, il est donc facile de réutiliser un bonne partie 
                du code HTML pour les deux pages. 
            </p>
            <CodeBlock language="js">{server}</CodeBlock>
        </section>

        <section>
            <h2>Script client pour l'inscription</h2>
            <p>
                Pour que le formulaire d'inscription fonctionne, nous devons ajouter du code Javascript côté client qui appelera la route
                d'inscription que nous avons programmée dans le serveur. Ce code sera placé dans un fichier 
                nommé <IC>/public/inscription.js</IC> et il contiendra un code similaire à ceci:
            </p>
            <CodeBlock language="js">{inscription}</CodeBlock>
        </section>

        <section>
            <h2>Script client pour la connexion</h2>
            <p>
                Pour la connexion, nous utiliserons un code très similaire à celui de l'inscription, mais qui appellera la route de
                connexion du serveur. Le code ressemblera à ceci:
            </p>
            <CodeBlock language="js">{connexion}</CodeBlock>
            <p>
                Notez les quelques différences entre les deux scripts:
            </p>
            <ul>
                <li>
                    Le nom de la fonction exécuté par le formulaire est différente.
                </li>
                <li>
                    L'URL appelée dans le <IC>fetch</IC> est différente.
                </li>
                <li>
                    La redirection après un appel réussi est différente.
                </li>
                <li>
                    Le traitement des erreurs venant du serveur est différent puisqu'on ne reçoit pas les mêmes codes d'erreurs.
                </li>
            </ul>
        </section>

        <section>
            <h2>Script client pour la déconnexion</h2>
            <p>
                Pour la déconnexion, nous n'avons pas besoin d'une page dédiée, mais il y aura généralement un bouton dans l'interface de 
                chaque page qui permettra à l'utilisateur de se déconnecter. On retrouve souvent ce bouton à quelque part dans l'entête ou 
                le menu de navigation du site web. Dans votre site web, son code pourrait ressembler à ceci:
            </p>
            <CodeBlock language="handlebars">{`<button id="btn-deconnexion">Déconnexion</button>`}</CodeBlock>
            <p>
                Le code Javascript pour gérer la déconnexion sera placé dans un fichier <IC>/public/deconnexion.js</IC> et il pourrait 
                ressembler à ceci:
            </p>
            <CodeBlock language="js">{deconnexion}</CodeBlock>
            <p>
                Il est important de noter que la déconnexion pourra potentiellement se faire sur toutes les pages du site web. Il sera donc
                important d'inclure le script de déconnexion dans toutes les pages où le bouton de déconnexion est présent. Vous pouvez le 
                faire en ajoutant le script dans le tableau des scripts utilisé lors du rendu de la page. 
            </p>
            <CodeBlock language="js">{deconnexionInclude}</CodeBlock>
            <p>
                Si toutes les pages de votre site web ont un bouton de déconnexion, vous pouvez même ajouter le script dans le fichier de
                layout principal de votre site web pour qu'il soit inclus partout automatiquement.
            </p>
            <CodeBlock language="handlebars">{deconnexionScript}</CodeBlock>
        </section>
    </>;
}
