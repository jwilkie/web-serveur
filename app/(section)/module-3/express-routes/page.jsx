import IC from '@/components/InlineCode'
import CodeBlock from '@/components/CodeBlock'

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Routes dans Express",
    description: "Création et gestion des routes HTTP avec Express.js pour construire des APIs REST.",
    keywords: ["express", "routes", "api", "http", "nodejs"],
    group: "notes"
}

const basicRoutes = 
`import express from 'express';

const app = express();

// Route GET simple
app.get('/api/users', (req, res) => {
    res.json({ message: 'Liste des utilisateurs' });
});

// Route POST pour créer un utilisateur
app.post('/api/users', (req, res) => {
    res.status(201).json({ message: 'Utilisateur créé' });
});

// Route PUT pour modifier un utilisateur
app.put('/api/users/:id', (req, res) => {
    const userId = req.params.id;
    res.json({ message: \`Utilisateur \${userId} modifié\` });
});

// Route DELETE pour supprimer un utilisateur
app.delete('/api/users/:id', (req, res) => {
    const userId = req.params.id;
    res.status(204).send(); // 204 No Content
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

export default function Page() {
    return <>
        <section>
            <h2>Introduction aux routes Express</h2>
            <p>
                Les routes dans Express.js définissent comment votre application répond aux requêtes des clients 
                pour des endpoints spécifiques. Chaque route est définie par une méthode HTTP (GET, POST, PUT, DELETE) 
                et un chemin (URL). Express utilise un système de routing flexible et puissant qui permet de 
                créer des APIs REST complexes.
            </p>
            <p>
                Une route Express se compose de trois éléments principaux:
            </p>
            <ul>
                <li><strong>Méthode HTTP</strong>: GET, POST, PUT, DELETE, etc.</li>
                <li><strong>Chemin (path)</strong>: L'URL ou le pattern d'URL</li>
                <li><strong>Handler function</strong>: La fonction qui traite la requête</li>
            </ul>
        </section>

        <section>
            <h2>Routes de base</h2>
            <p>
                Voici comment créer des routes pour les opérations CRUD de base:
            </p>
            <CodeBlock language="javascript">{basicRoutes}</CodeBlock>
            <p>
                Dans cet exemple, nous avons créé quatre routes qui correspondent aux opérations CRUD:
            </p>
            <ul>
                <li><strong>GET</strong>: Lire/récupérer des données</li>
                <li><strong>POST</strong>: Créer de nouvelles données</li>
                <li><strong>PUT</strong>: Mettre à jour des données existantes</li>
                <li><strong>DELETE</strong>: Supprimer des données</li>
            </ul>
        </section>

        <section>
            <h2>Paramètres de route</h2>
            <p>
                Express permet d'extraire des données des URLs de plusieurs façons:
            </p>
            <CodeBlock language="javascript">{parametersExample}</CodeBlock>
            <p>
                Types de paramètres:
            </p>
            <ul>
                <li>
                    <strong>Route parameters</strong> (<IC>:id</IC>): Valeurs intégrées dans l'URL, 
                    accessibles via <IC>req.params</IC>
                </li>
                <li>
                    <strong>Query parameters</strong> (<IC>?page=1&limit=10</IC>): Paramètres optionnels 
                    après le <IC>?</IC>, accessibles via <IC>req.query</IC>
                </li>
                <li>
                    <strong>Body parameters</strong>: Données envoyées dans le corps de la requête (POST/PUT), 
                    accessibles via <IC>req.body</IC>
                </li>
            </ul>
        </section>

        <section>
            <h2>Middleware</h2>
            <p>
                Les middlewares sont des fonctions qui s'exécutent pendant le cycle de vie d'une requête. 
                Ils ont accès aux objets de requête (<IC>req</IC>) et de réponse (<IC>res</IC>), ainsi qu'à 
                la fonction <IC>next</IC> qui passe le contrôle au middleware suivant.
            </p>
            <CodeBlock language="javascript">{middlewareExample}</CodeBlock>
            <p>
                Les middlewares sont utiles pour:
            </p>
            <ul>
                <li>Authentification et autorisation</li>
                <li>Logging et monitoring</li>
                <li>Parsing des données (JSON, form data)</li>
                <li>Validation des données</li>
                <li>Gestion des erreurs</li>
                <li>Ajout d'en-têtes de sécurité</li>
            </ul>
        </section>

        <section>
            <h2>Express Router</h2>
            <p>
                Pour organiser votre code, Express fournit la classe <IC>Router</IC> qui permet de 
                créer des modules de routes modulaires et montables:
            </p>
            <CodeBlock language="javascript">{routerExample}</CodeBlock>
            <p>
                Les avantages du Router:
            </p>
            <ul>
                <li>Organisation modulaire du code</li>
                <li>Séparation des préoccupations</li>
                <li>Réutilisabilité des modules de routes</li>
                <li>Facilite les tests unitaires</li>
                <li>Maintenance plus simple pour les grandes applications</li>
            </ul>
        </section>

        <section>
            <h2>Gestion des erreurs</h2>
            <p>
                Une API robuste doit gérer les erreurs de manière cohérente et informative:
            </p>
            <CodeBlock language="javascript">{errorHandling}</CodeBlock>
            <p>
                Bonnes pratiques pour la gestion d'erreurs:
            </p>
            <ul>
                <li>Toujours utiliser try/catch dans les fonctions async</li>
                <li>Créer un middleware d'erreur global</li>
                <li>Retourner des codes de statut HTTP appropriés</li>
                <li>Fournir des messages d'erreur clairs mais sécurisés</li>
                <li>Logger les erreurs pour le débogage</li>
                <li>Ne jamais exposer de stack traces en production</li>
            </ul>
        </section>

        <section>
            <h2>Validation des données</h2>
            <p>
                La validation des données entrantes est cruciale pour la sécurité et la fiabilité de votre API:
            </p>
            <CodeBlock language="javascript">{validationExample}</CodeBlock>
            <p>
                Techniques de validation recommandées:
            </p>
            <ul>
                <li>Valider toutes les données d'entrée</li>
                <li>Utiliser des middlewares de validation réutilisables</li>
                <li>Retourner des messages d'erreur détaillés pour les développeurs</li>
                <li>Considérer l'utilisation de bibliothèques comme Joi ou Yup</li>
                <li>Valider les types, formats et contraintes métier</li>
                <li>Nettoyer et normaliser les données (trim, toLowerCase)</li>
            </ul>
        </section>

        <section>
            <h2>Bonnes pratiques</h2>
            <p>
                Voici quelques bonnes pratiques pour créer des routes Express maintenables:
            </p>
            
            <h3>Structure des URLs</h3>
            <ul>
                <li>Utiliser des noms au pluriel pour les collections: <IC>/api/users</IC></li>
                <li>Utiliser des hiérarchies logiques: <IC>/api/users/123/posts</IC></li>
                <li>Éviter les verbes dans les URLs, utiliser les méthodes HTTP</li>
                <li>Utiliser des kebab-case: <IC>/api/user-profiles</IC></li>
            </ul>

            <h3>Codes de statut</h3>
            <ul>
                <li>200 OK pour les opérations de lecture réussies</li>
                <li>201 Created pour les créations réussies</li>
                <li>204 No Content pour les suppressions réussies</li>
                <li>400 Bad Request pour les erreurs de validation</li>
                <li>404 Not Found pour les ressources inexistantes</li>
                <li>500 Internal Server Error pour les erreurs serveur</li>
            </ul>

            <h3>Sécurité</h3>
            <ul>
                <li>Toujours valider et nettoyer les données d'entrée</li>
                <li>Utiliser HTTPS en production</li>
                <li>Implémenter une authentification robuste</li>
                <li>Limiter le taux de requêtes (rate limiting)</li>
                <li>Ne jamais exposer d'informations sensibles dans les réponses</li>
            </ul>
        </section>
    </>
}