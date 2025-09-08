import IC from '@/components/InlineCode'
import CodeBlock from '@/components/CodeBlock'

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Tester les routes",
    description: "Méthodes et outils pour tester efficacement les routes et APIs Express.js.",
    keywords: ["test", "api", "routes", "postman", "curl", "express"],
    group: "notes"
}

const curlExamples = 
`# Test GET simple
curl -X GET "http://localhost:3000/api/users"

# Test GET avec paramètres de requête
curl -X GET "http://localhost:3000/api/users?page=2&limit=5"

# Test GET d'un utilisateur spécifique
curl -X GET "http://localhost:3000/api/users/123"

# Test POST avec données JSON
curl -X POST "http://localhost:3000/api/users" \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "Jean Dupont",
    "email": "jean@example.com",
    "age": 30
  }'

# Test PUT pour modification
curl -X PUT "http://localhost:3000/api/users/123" \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "Jean Martin",
    "email": "jean.martin@example.com"
  }'

# Test DELETE
curl -X DELETE "http://localhost:3000/api/users/123"

# Test avec authentification
curl -X GET "http://localhost:3000/api/protected" \\
  -H "Authorization: Bearer your-token-here"

# Afficher les en-têtes de réponse
curl -i -X GET "http://localhost:3000/api/users"

# Sauvegarder la réponse dans un fichier
curl -X GET "http://localhost:3000/api/users" -o users.json`;

const testServer = 
`// server.js - Serveur de test simple
import express from 'express';

const app = express();
app.use(express.json());

// Base de données simulée
let users = [
    { id: 1, name: "Jean Dupont", email: "jean@example.com" },
    { id: 2, name: "Marie Martin", email: "marie@example.com" }
];

// Routes de test
app.get('/api/users', (req, res) => {
    const { page = 1, limit = 10 } = req.query;
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + parseInt(limit);
    
    res.json({
        users: users.slice(startIndex, endIndex),
        pagination: {
            currentPage: parseInt(page),
            totalItems: users.length,
            totalPages: Math.ceil(users.length / limit)
        }
    });
});

app.get('/api/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const user = users.find(u => u.id === userId);
    
    if (!user) {
        return res.status(404).json({ error: 'Utilisateur non trouvé' });
    }
    
    res.json(user);
});

app.post('/api/users', (req, res) => {
    const { name, email } = req.body;
    
    // Validation simple
    if (!name || !email) {
        return res.status(400).json({ 
            error: 'Nom et email requis' 
        });
    }
    
    const newUser = {
        id: Math.max(...users.map(u => u.id)) + 1,
        name,
        email
    };
    
    users.push(newUser);
    res.status(201).json(newUser);
});

app.put('/api/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const userIndex = users.findIndex(u => u.id === userId);
    
    if (userIndex === -1) {
        return res.status(404).json({ error: 'Utilisateur non trouvé' });
    }
    
    users[userIndex] = { ...users[userIndex], ...req.body };
    res.json(users[userIndex]);
});

app.delete('/api/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const userIndex = users.findIndex(u => u.id === userId);
    
    if (userIndex === -1) {
        return res.status(404).json({ error: 'Utilisateur non trouvé' });
    }
    
    users.splice(userIndex, 1);
    res.status(204).send();
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(\`Serveur démarré sur le port \${PORT}\`);
});`;

const postmanCollection = 
`{
  "info": {
    "name": "API Users - Tests",
    "description": "Collection de tests pour l'API Users"
  },
  "item": [
    {
      "name": "Lister tous les utilisateurs",
      "request": {
        "method": "GET",
        "header": [],
        "url": {
          "raw": "{{baseUrl}}/api/users",
          "host": ["{{baseUrl}}"],
          "path": ["api", "users"]
        }
      },
      "event": [
        {
          "listen": "test",
          "script": {
            "exec": [
              "pm.test('Status code is 200', function () {",
              "    pm.response.to.have.status(200);",
              "});",
              "",
              "pm.test('Response has users array', function () {",
              "    const jsonData = pm.response.json();",
              "    pm.expect(jsonData).to.have.property('users');",
              "    pm.expect(jsonData.users).to.be.an('array');",
              "});"
            ]
          }
        }
      ]
    },
    {
      "name": "Créer un utilisateur",
      "request": {
        "method": "POST",
        "header": [
          {
            "key": "Content-Type",
            "value": "application/json"
          }
        ],
        "body": {
          "mode": "raw",
          "raw": "{\\n  \\"name\\": \\"Test User\\",\\n  \\"email\\": \\"test@example.com\\"\\n}"
        },
        "url": {
          "raw": "{{baseUrl}}/api/users",
          "host": ["{{baseUrl}}"],
          "path": ["api", "users"]
        }
      },
      "event": [
        {
          "listen": "test",
          "script": {
            "exec": [
              "pm.test('Status code is 201', function () {",
              "    pm.response.to.have.status(201);",
              "});",
              "",
              "pm.test('User created with ID', function () {",
              "    const jsonData = pm.response.json();",
              "    pm.expect(jsonData).to.have.property('id');",
              "    pm.globals.set('userId', jsonData.id);",
              "});"
            ]
          }
        }
      ]
    }
  ],
  "variable": [
    {
      "key": "baseUrl",
      "value": "http://localhost:3000"
    }
  ]
}`;

const automatedTesting = 
`// tests/api.test.js - Tests automatisés avec Jest et Supertest
import request from 'supertest';
import app from '../server.js';

describe('API Users', () => {
    let userId;

    test('GET /api/users - should return list of users', async () => {
        const response = await request(app)
            .get('/api/users')
            .expect(200);

        expect(response.body).toHaveProperty('users');
        expect(Array.isArray(response.body.users)).toBe(true);
    });

    test('POST /api/users - should create new user', async () => {
        const newUser = {
            name: 'Test User',
            email: 'test@example.com'
        };

        const response = await request(app)
            .post('/api/users')
            .send(newUser)
            .expect(201);

        expect(response.body).toHaveProperty('id');
        expect(response.body.name).toBe(newUser.name);
        expect(response.body.email).toBe(newUser.email);
        
        userId = response.body.id; // Sauvegarder pour les tests suivants
    });

    test('GET /api/users/:id - should return specific user', async () => {
        const response = await request(app)
            .get(\`/api/users/\${userId}\`)
            .expect(200);

        expect(response.body).toHaveProperty('id', userId);
        expect(response.body).toHaveProperty('name');
        expect(response.body).toHaveProperty('email');
    });

    test('PUT /api/users/:id - should update user', async () => {
        const updateData = {
            name: 'Updated User'
        };

        const response = await request(app)
            .put(\`/api/users/\${userId}\`)
            .send(updateData)
            .expect(200);

        expect(response.body.name).toBe(updateData.name);
    });

    test('DELETE /api/users/:id - should delete user', async () => {
        await request(app)
            .delete(\`/api/users/\${userId}\`)
            .expect(204);

        // Vérifier que l'utilisateur n'existe plus
        await request(app)
            .get(\`/api/users/\${userId}\`)
            .expect(404);
    });

    test('GET /api/users/999 - should return 404 for non-existent user', async () => {
        const response = await request(app)
            .get('/api/users/999')
            .expect(404);

        expect(response.body).toHaveProperty('error');
    });

    test('POST /api/users - should return 400 for invalid data', async () => {
        const invalidUser = {
            name: '' // Nom vide
        };

        const response = await request(app)
            .post('/api/users')
            .send(invalidUser)
            .expect(400);

        expect(response.body).toHaveProperty('error');
    });
});`;

const packageJsonTest = 
`{
  "name": "api-test-example",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js",
    "test": "jest",
    "test:watch": "jest --watch"
  },
  "dependencies": {
    "express": "^4.18.2"
  },
  "devDependencies": {
    "jest": "^29.7.0",
    "nodemon": "^3.0.1",
    "supertest": "^6.3.3"
  },
  "jest": {
    "testEnvironment": "node",
    "transform": {}
  }
}`;

const debuggingTips = 
`// Middleware de debugging
const debugRequest = (req, res, next) => {
    console.log('=== REQUÊTE ===');
    console.log('Méthode:', req.method);
    console.log('URL:', req.url);
    console.log('Headers:', req.headers);
    console.log('Params:', req.params);
    console.log('Query:', req.query);
    console.log('Body:', req.body);
    console.log('================');
    next();
};

app.use(debugRequest);

// Middleware pour logging des réponses
const debugResponse = (req, res, next) => {
    const originalSend = res.send;
    
    res.send = function(data) {
        console.log('=== RÉPONSE ===');
        console.log('Status:', res.statusCode);
        console.log('Data:', data);
        console.log('================');
        originalSend.call(this, data);
    };
    
    next();
};

app.use(debugResponse);

// Fonction utilitaire pour tester différents scénarios
const testScenarios = async () => {
    const baseUrl = 'http://localhost:3000';
    
    console.log('Test 1: Récupérer tous les utilisateurs');
    const users = await fetch(\`\${baseUrl}/api/users\`);
    console.log('Status:', users.status);
    console.log('Data:', await users.json());
    
    console.log('\\nTest 2: Créer un utilisateur');
    const newUser = await fetch(\`\${baseUrl}/api/users\`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name: 'Test User',
            email: 'test@example.com'
        })
    });
    console.log('Status:', newUser.status);
    const userData = await newUser.json();
    console.log('Data:', userData);
    
    console.log('\\nTest 3: Récupérer l\\'utilisateur créé');
    const getUser = await fetch(\`\${baseUrl}/api/users/\${userData.id}\`);
    console.log('Status:', getUser.status);
    console.log('Data:', await getUser.json());
};`;

export default function Page() {
    return <>
        <section>
            <h2>Importance du test des APIs</h2>
            <p>
                Tester vos routes et APIs est essentiel pour s'assurer qu'elles fonctionnent correctement, 
                retournent les bonnes données et gèrent les erreurs de manière appropriée. Sans tests adequats, 
                il est facile d'introduire des bugs qui peuvent affecter l'expérience utilisateur et la 
                fiabilité de votre application.
            </p>
            <p>
                Il existe plusieurs approches pour tester une API:
            </p>
            <ul>
                <li><strong>Tests manuels</strong>: Utilisation d'outils comme cURL ou Postman</li>
                <li><strong>Tests automatisés</strong>: Scripts de test qui s'exécutent automatiquement</li>
                <li><strong>Tests d'intégration</strong>: Tests qui vérifient le fonctionnement global</li>
                <li><strong>Tests de charge</strong>: Vérification des performances sous charge</li>
            </ul>
        </section>

        <section>
            <h2>Test avec cURL</h2>
            <p>
                cURL est un outil en ligne de commande puissant pour tester rapidement vos APIs. 
                Il est disponible par défaut sur la plupart des systèmes Unix/Linux et macOS:
            </p>
            <CodeBlock language="bash">{curlExamples}</CodeBlock>
            <p>
                Avantages de cURL:
            </p>
            <ul>
                <li>Rapide et simple d'utilisation</li>
                <li>Idéal pour les tests rapides pendant le développement</li>
                <li>Peut être intégré dans des scripts bash</li>
                <li>Affichage détaillé des en-têtes et réponses</li>
                <li>Support de toutes les méthodes HTTP</li>
            </ul>
        </section>

        <section>
            <h2>Création d'un serveur de test</h2>
            <p>
                Pour pratiquer les tests, créons un serveur Express simple avec des routes de base:
            </p>
            <CodeBlock language="javascript">{testServer}</CodeBlock>
            <p>
                Ce serveur fournit une API complète pour gérer des utilisateurs avec toutes les opérations CRUD. 
                Vous pouvez le démarrer avec <IC>node server.js</IC> et tester les différents endpoints.
            </p>
        </section>

        <section>
            <h2>Test avec Postman</h2>
            <p>
                Postman est un outil graphique populaire pour tester les APIs. Il offre une interface 
                conviviale et des fonctionnalités avancées comme les collections, les environnements 
                et les tests automatisés.
            </p>
            
            <h3>Collection Postman exemple</h3>
            <p>
                Voici un exemple de collection Postman pour tester notre API:
            </p>
            <CodeBlock language="json">{postmanCollection}</CodeBlock>
            
            <h3>Fonctionnalités Postman utiles</h3>
            <ul>
                <li><strong>Collections</strong>: Organiser vos requêtes par projet</li>
                <li><strong>Environnements</strong>: Gérer différentes URLs (dev, test, prod)</li>
                <li><strong>Variables</strong>: Réutiliser des valeurs entre requêtes</li>
                <li><strong>Scripts de test</strong>: Automatiser la validation des réponses</li>
                <li><strong>Runner</strong>: Exécuter une collection complète automatiquement</li>
                <li><strong>Monitors</strong>: Surveiller vos APIs en continu</li>
            </ul>
        </section>

        <section>
            <h2>Tests automatisés</h2>
            <p>
                Pour un développement professionnel, il est important d'avoir des tests automatisés 
                qui peuvent s'exécuter dans votre pipeline CI/CD:
            </p>
            <CodeBlock language="javascript">{automatedTesting}</CodeBlock>
            
            <h3>Configuration package.json</h3>
            <CodeBlock language="json">{packageJsonTest}</CodeBlock>
            
            <h3>Avantages des tests automatisés</h3>
            <ul>
                <li>Détection rapide des régressions</li>
                <li>Confiance lors des modifications du code</li>
                <li>Documentation vivante du comportement attendu</li>
                <li>Intégration dans les processus CI/CD</li>
                <li>Couverture exhaustive des cas de test</li>
            </ul>
        </section>

        <section>
            <h2>Debugging et diagnostic</h2>
            <p>
                Voici quelques techniques pour debugger vos APIs lors des tests:
            </p>
            <CodeBlock language="javascript">{debuggingTips}</CodeBlock>
            
            <h3>Outils de debugging recommandés</h3>
            <ul>
                <li><strong>Console.log</strong>: Simple et efficace pour les cas basiques</li>
                <li><strong>Debugger Node.js</strong>: <IC>node --inspect server.js</IC></li>
                <li><strong>Morgan</strong>: Middleware de logging pour Express</li>
                <li><strong>Postman Console</strong>: Voir les détails des requêtes/réponses</li>
                <li><strong>Browser DevTools</strong>: Network tab pour analyser les requêtes</li>
            </ul>
        </section>

        <section>
            <h2>Types de tests à effectuer</h2>
            
            <h3>Tests fonctionnels</h3>
            <ul>
                <li>Vérifier que chaque endpoint retourne les bonnes données</li>
                <li>Tester tous les codes de statut HTTP appropriés</li>
                <li>Valider la structure des réponses JSON</li>
                <li>Tester la gestion des paramètres (route, query, body)</li>
            </ul>

            <h3>Tests d'erreur</h3>
            <ul>
                <li>Données manquantes ou invalides</li>
                <li>Ressources non trouvées (404)</li>
                <li>Erreurs de validation (400, 422)</li>
                <li>Erreurs d'authentification (401, 403)</li>
                <li>Erreurs serveur (500)</li>
            </ul>

            <h3>Tests de sécurité</h3>
            <ul>
                <li>Authentification et autorisation</li>
                <li>Injection SQL et XSS</li>
                <li>Validation des entrées</li>
                <li>Limitation du taux de requêtes</li>
                <li>Exposition d'informations sensibles</li>
            </ul>

            <h3>Tests de performance</h3>
            <ul>
                <li>Temps de réponse sous charge normale</li>
                <li>Comportement sous charge élevée</li>
                <li>Gestion de la mémoire</li>
                <li>Performance des requêtes de base de données</li>
            </ul>
        </section>

        <section>
            <h2>Bonnes pratiques</h2>
            
            <h3>Organisation des tests</h3>
            <ul>
                <li>Séparer les tests par fonctionnalité ou endpoint</li>
                <li>Utiliser des données de test cohérentes</li>
                <li>Nettoyer les données après chaque test</li>
                <li>Utiliser des mocks pour les dépendances externes</li>
            </ul>

            <h3>Couverture des tests</h3>
            <ul>
                <li>Tester les cas de succès et d'échec</li>
                <li>Inclure les cas limites et edge cases</li>
                <li>Vérifier les validations et contraintes métier</li>
                <li>Tester l'intégration avec les bases de données</li>
            </ul>

            <h3>Maintenance des tests</h3>
            <ul>
                <li>Maintenir les tests à jour avec l'évolution de l'API</li>
                <li>Refactoriser les tests quand nécessaire</li>
                <li>Documenter les cas de test complexes</li>
                <li>Surveiller les performances des tests</li>
            </ul>
            
            <p>
                Les tests sont un investissement qui vous fera gagner du temps à long terme et vous 
                donneront confiance dans la qualité de votre API.
            </p>
        </section>
    </>
}