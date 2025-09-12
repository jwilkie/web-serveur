import IC from '@/components/InlineCode'
import CodeBlock from '@/components/CodeBlock'
import ColoredBox from '@/components/ColoredBox';
import { Code } from '@/components/WebExample';

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Routes dans Express",
    description: "Démonstration de la création et gestion des routes HTTP avec Express.js pour construire des APIs REST.",
    keywords: ["express", "routes", "api", "http", "nodejs", "rest"],
    group: "notes"
}

const handler =
`(request, response) => {
// ....
}`;

const basicRoutes =
`// Importations 
// ...

// Création du serveur
let app = express();

// Ajout de middlewares
// ...

// Ajout des routes
app.get('/api/salles', (request, response) => {
    // Code à exécuter quand on reçoit un GET 
    // sur la route /api/salles
});

app.post('/api/salles', (request, response) => {
    // Code à exécuter quand on reçoit un POST 
    // sur la route /api/salles
});

app.delete('/api/salles/utilisateur', (request, response) => {
    // Code à exécuter quand on reçoit un DELETE 
    // sur la route /api/salles/utilisateur
});

// Démarrage du serveur
// ...`;

const request =
`app.post('/api/utilisateur', (request, response) => {
    // Aller chercher les données dans le corps de la requête (body)
    request.body.nomDeDonnee;

    // Aller chercher les données dans le query string (query)
    request.query.nomDeDonnee;

    // ...
});`;

const response =
`app.get('/api/utilisateur', (request, response) => {
    // Envoyer une réponse JSON
    const utilisateur = { id: 1, nom: 'Monkey D Luffy' };
    response.status(200).json(utilisateur);
});

app.delete('/api/utilisateur', (request, response) => {
    // Envoyer une réponse vide
    response.status(200).end();
});`;

const created =
`app.post('/api/utilisateur', (request, response) => {
    // Code pour créer un utilisateur
    // ...
    response.status(201).end();
});`;

const parametersExample =
    `// Paramètres de route (route parameters)
app.get('/api/users/:id', (req, res) => {
    const userId = req.params.id;
    console.log('ID utilisateur:', userId);
    res.json({ id: userId, name: 'Jean Dupont' });
});

// Paramètres multiples
app.get('/api/users/:userId/posts/:postId', (req, res) => {
    const { userId, postId } = req.params;
    res.json({ 
        message: \`Post \${postId} de l'utilisateur \${userId}\`
    });
});

// Paramètres optionnels avec regex
app.get('/api/users/:id(\\\\d+)', (req, res) => {
    // N'accepte que des IDs numériques
    const userId = parseInt(req.params.id);
    res.json({ id: userId });
});

// Paramètres de requête (query parameters)
app.get('/api/users', (req, res) => {
    const { page = 1, limit = 10, search } = req.query;
    
    console.log('Page:', page);
    console.log('Limite:', limit);
    console.log('Recherche:', search);
    
    res.json({
        users: [],
        pagination: {
            page: parseInt(page),
            limit: parseInt(limit)
        }
    });
});`;

const middlewareExample =
    `// Middleware pour parser le JSON
app.use(express.json());

// Middleware personnalisé pour logging
const logger = (req, res, next) => {
    console.log(\`\${new Date().toISOString()} - \${req.method} \${req.url}\`);
    next(); // Important: appeler next() pour continuer
};

app.use(logger);

// Middleware d'authentification
const authenticateUser = (req, res, next) => {
    const token = req.headers.authorization;
    
    if (!token) {
        return res.status(401).json({ error: 'Token manquant' });
    }
    
    // Vérifier le token (simulation)
    if (token !== 'Bearer valid-token') {
        return res.status(401).json({ error: 'Token invalide' });
    }
    
    // Ajouter les infos utilisateur à la requête
    req.user = { id: 123, name: 'Jean Dupont' };
    next();
};

// Appliquer le middleware à des routes spécifiques
app.get('/api/protected', authenticateUser, (req, res) => {
    res.json({ 
        message: 'Route protégée', 
        user: req.user 
    });
});`;

const routerExample =
    `// routes/users.js
import express from 'express';
const router = express.Router();

// Toutes ces routes seront préfixées par /api/users
router.get('/', (req, res) => {
    res.json({ users: [] });
});

router.get('/:id', (req, res) => {
    const userId = req.params.id;
    res.json({ id: userId, name: 'Jean Dupont' });
});

router.post('/', (req, res) => {
    const { name, email } = req.body;
    res.status(201).json({ 
        id: Date.now(), 
        name, 
        email 
    });
});

router.put('/:id', (req, res) => {
    const userId = req.params.id;
    const updateData = req.body;
    res.json({ 
        id: userId, 
        ...updateData 
    });
});

router.delete('/:id', (req, res) => {
    const userId = req.params.id;
    res.status(204).send();
});

export default router;

// app.js
import express from 'express';
import usersRouter from './routes/users.js';

const app = express();

app.use(express.json());
app.use('/api/users', usersRouter);`;

const errorHandling =
    `// Middleware de gestion d'erreur global
const errorHandler = (err, req, res, next) => {
    console.error('Erreur:', err.stack);
    
    // Erreur de validation
    if (err.name === 'ValidationError') {
        return res.status(400).json({
            error: 'Erreur de validation',
            details: err.message
        });
    }
    
    // Erreur générique
    res.status(500).json({
        error: 'Erreur interne du serveur'
    });
};

// Route avec gestion d'erreur
app.get('/api/users/:id', async (req, res, next) => {
    try {
        const userId = req.params.id;
        
        // Simulation d'une erreur
        if (userId === '999') {
            throw new Error('Utilisateur non trouvé');
        }
        
        res.json({ id: userId, name: 'Jean Dupont' });
    } catch (error) {
        next(error); // Passer l'erreur au middleware d'erreur
    }
});

// Middleware 404 pour les routes non trouvées
app.use('*', (req, res) => {
    res.status(404).json({
        error: 'Route non trouvée',
        method: req.method,
        url: req.originalUrl
    });
});

// Le middleware d'erreur doit être en dernier
app.use(errorHandler);`;

const validationExample =
    `// Middleware de validation pour création d'utilisateur
const validateUser = (req, res, next) => {
    const { name, email, age } = req.body;
    const errors = [];
    
    // Validation du nom
    if (!name || name.trim().length < 2) {
        errors.push({
            field: 'name',
            message: 'Le nom doit contenir au moins 2 caractères'
        });
    }
    
    // Validation de l'email
    const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
    if (!email || !emailRegex.test(email)) {
        errors.push({
            field: 'email',
            message: 'Format d\\'email invalide'
        });
    }
    
    // Validation de l'âge
    if (age !== undefined && (typeof age !== 'number' || age < 0 || age > 120)) {
        errors.push({
            field: 'age',
            message: 'L\\'âge doit être un nombre entre 0 et 120'
        });
    }
    
    if (errors.length > 0) {
        return res.status(422).json({
            error: 'Erreur de validation',
            details: errors
        });
    }
    
    next();
};

// Utiliser le middleware de validation
app.post('/api/users', validateUser, (req, res) => {
    const { name, email, age } = req.body;
    
    // Ici, les données sont validées
    const newUser = {
        id: Date.now(),
        name: name.trim(),
        email: email.toLowerCase(),
        age: age || null,
        createdAt: new Date().toISOString()
    };
    
    res.status(201).json(newUser);
});`;

const model =
`import { addSalle, getSalles } from './model/salles.js';

app.get('/api/salles', (request, response) => {
    // On va chercher les salles avec la fonction du modèle
    const salles = getSalles();

    // On retourne les salles au client
    response.status(200).json(salles);
});

app.post('/api/salles', (request, response) => {
    // On ajoute la nouvelle salle avec la fonction du modèle
    addSalle(request.body.nom);

    // On retourne une réponse vide au client lui indiquant 
    // que la création a réussi dans son statut
    response.status(201).end();
});`;

export default function Page() {
    return <>
        <section>
            <h2>Introduction</h2>
            <p>
                Les routes dans Express.js définissent comment votre application répond aux requêtes des clients. Elles vont suivre la
                planification de l'API que nous avons fait précédemment. Chaque route dans express sera composé des 3 éléments suivants:
            </p>
            <ul>
                <li>Une méthode HTTP (GET, POST, PUT, PATCH ou DELETE)</li>
                <li>Un chemin (route)</li>
                <li>Une fonction qui traite la requête</li>
            </ul>
            <p>
                Nous avons déjà défini les méthodes HTTP et les routes dans la planification de notre API. La seule partie qu'il nous reste
                a définir est donc la fonction qui traitera la requête. Cette fonction est souvent appelée un <em>handler</em>. Elle reçoit
                deux objets en paramètres, <IC>request</IC> et <IC>response</IC>, qui nous permettrons respectivement de lire les informations
                de la requête et d'envoyer une réponse au client.
            </p>
            <CodeBlock language="js">{handler}</CodeBlock>
        </section>

        <section>
            <h2>Ajout de routes</h2>
            <p>
                Dans notre fichier principal <IC>server.js</IC>, nous allons ajouter les routes de notre API sous l'ajout des middlewares.
                Voici un exemple de routes:
            </p>
            <CodeBlock language="javascript">{basicRoutes}</CodeBlock>
            <p>
                Voici quelques points importants à noter dans cet exemple:
            </p>
            <ul>
                <li>
                    On crée la route en appelant la méthode correspondant à la méthode HTTP que l'on veut utiliser à partir de
                    l'objet <IC>app</IC>. Par exemple, pour une route qui répond aux requêtes GET, on utilise <IC>app.get()</IC>.
                </li>
                <li>
                    Le premier argument est le nom de la route. Dans notre exemple, nous avons
                    utilisé <IC>/api/salles</IC> et <IC>/api/salles/utilisateur</IC>. Vous pouvez définir n'importe quel nom de route,
                    mais assurez-vous qu'il est cohérent avec la planification de votre API et qu'il suit les bonnes pratiques.
                </li>
                <li>
                    Le deuxième argument est la fonction handler qui sera exécutée lorsque la route est appelée. Cette fonction reçoit
                    deux paramètres: <IC>request</IC> et <IC>response</IC>.
                </li>
            </ul>
        </section>

        <section>
            <h2>Objet request</h2>
            <p>
                Le paramètre <IC>request</IC> de la fonction de traitement de la route contient un objet avec toutes les informations
                sur la requête HTTP reçue du client. Nous l'utiliserons pour lire les données JSON envoyées par le client.
            </p>
            <p>
                Pour aller chercher les données, il faut savoir où elles se trouvent. Comment mentionné dans les pages précédantes, il y a 3
                endroits possibles: dans les paramètres de l'URL (params), dans le Query String (query) ou dans le corps de la requête (body).
            </p>
            <ColoredBox title="À noter:">
                <p>
                    Nous ne verrons pas comment utiliser les paramètres de l'URL ici puisqu'ils sont légèrement plus complexe. Vous pourrez 
                    plutôt utiliser le Query String à la place puisqu'il est un peu plus simple à utiliser. Si vous voulez vraiment utiliser 
                    les paramètres de l'URL, vous pouvez consulter la documentation officielle d'Express à ce sujet:
                </p>
                <p>
                    <a href="https://expressjs.com/en/guide/routing.html#route-parameters" target="_blank">
                        Express.js - Route parameters
                    </a>
                </p>
            </ColoredBox>
            <p>
                Voici comment accéder aux données:
            </p>
            <CodeBlock language="javascript">{request}</CodeBlock>
            <p>
                Comme vous pouvez le voir, l'accès aux données est très similaire, même si la source des données est différente. Vous n'avez
                qu'à utiliser la bonne propriété de l'objet <IC>request</IC>.
            </p>
        </section>

        <section>
            <h2>Objet response</h2>
            <p>
                Le paramètre <IC>response</IC> de la fonction de traitement de la route contient un objet avec toutes les méthodes
                nécessaires pour envoyer une réponse au client. Nous l'utiliserons pour envoyer des réponses contenant du JSON ou encore
                des réponses vides.
            </p>
            <p>
                Pour envoyer une réponse, nous utiliserons la syntaxe suivante:
            </p>
            <CodeBlock language="js">{response}</CodeBlock>
            <p>
                Chaque fonction de traitement doit absolument envoyer une réponse au client. Si ce n'est pas le cas, la requête du client 
                restera en attente jusqu'à ce qu'elle expire et Express.js affichera un avertissement dans la console. Assurez-vous donc de
                toujours envoyer une réponse, même si c'est une réponse vide.
            </p>
            <p>
                Notez que dans l'exemple, nous avons utilisé la méthode <IC>status()</IC> pour définir le code de statut HTTP de la réponse.
                Dans ce cours, nous allons toujours définir le code de statut explicitement pour plus de clarté. Nous retournons présentement 
                toujours le code 200, indiquant que la requête a été traitée avec succès, mais nous verrons plus tard retourner des codes 
                d'erreur. Pour l'instant, je vous recommande de simplement retourner le code 200 ou 201, dépendant du contexte de la requête. 
            </p>
            <CodeBlock language="js">{created}</CodeBlock>
        </section>

        <section>
            <h2>Routes non définies</h2>
            <p>
                Il est possible que le client envoie une requête à une route qui n'existe pas dans notre API. Dans ce genre de situation, c'est 
                Express.js qui gèrera l'erreur. Par défaut, il retournera une réponse HTTP avec le code de statut 404 (Not Found). Ce 
                comportement pourra être modifié plus tard si nécessaire, mais il est amplement suffisant pour l'instant.
            </p>
        </section>

        <section>
            <h2>Utilisation du modèle</h2>
            <p>
                La grande majorité des routes de notre API devra interagir avec les données de notre application. Pour ce faire, nous allons 
                utiliser la couche de manipulation des données que nous avons créée précédemment. Une route qui utilise le modèle pourrait 
                ressembler à ceci:
            </p>
            <CodeBlock language="js">{model}</CodeBlock>
            <p>
                Comme vous pouvez le voir dans l'exemple précédant, le code de chaque route sera différent, mais restera généralement assez 
                simple. Chaque route devra appeler une ou plusieurs fonctions du modèle pour manipuler les données, puis envoyer une réponse
                au client.
            </p>
        </section>
    </>
}