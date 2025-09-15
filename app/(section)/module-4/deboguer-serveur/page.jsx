import IC from '@/components/InlineCode'
import CodeBlock from '@/components/CodeBlock'

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Déboguer le serveur",
    description: "Techniques et outils pour déboguer les applications serveur Node.js avec Visual Studio Code, points d'arrêt et inspection des variables.",
    keywords: ["debug", "serveur", "nodejs", "vscode", "breakpoint", "inspection"],
    group: "notes"
}

const launchJson = 
`// .vscode/launch.json
{
    "version": "0.2.0",
    "configurations": [
        {
            "name": "Debug Node.js",
            "type": "node",
            "request": "launch",
            "program": "\${workspaceFolder}/server.js",
            "restart": true,
            "runtimeExecutable": "nodemon",
            "console": "integratedTerminal",
            "env": {
                "NODE_ENV": "development"
            }
        }
    ]
}`;

const serverLogging = 
`import express from 'express';

const app = express();

// Middleware de logging personnalisé
app.use((req, res, next) => {
    console.log(\`[\${new Date().toISOString()}] \${req.method} \${req.url}\`);
    console.log('Headers:', req.headers);
    
    if (req.body) {
        console.log('Body:', req.body);
    }
    
    next();
});

// Exemple de route avec debugging
app.get('/api/users/:id', (req, res) => {
    const userId = req.params.id;
    console.log('Recherche utilisateur ID:', userId);
    
    // Point d'arrêt virtuel - l'exécution s'arrêtera ici
    debugger;
    
    // Simuler une recherche d'utilisateur
    const user = findUserById(userId);
    
    if (!user) {
        console.log('Utilisateur non trouvé');
        return res.status(404).json({ error: 'Utilisateur non trouvé' });
    }
    
    console.log('Utilisateur trouvé:', user);
    res.json(user);
});`;

const errorHandling = 
`// Middleware de gestion d'erreurs global
app.use((error, req, res, next) => {
    console.error('Erreur serveur:');
    console.error('Message:', error.message);
    console.error('Stack:', error.stack);
    console.error('URL:', req.url);
    console.error('Method:', req.method);
    console.error('Body:', req.body);
    console.error('Params:', req.params);
    console.error('Query:', req.query);
    
    res.status(500).json({
        error: 'Erreur interne du serveur',
        message: error.message
    });
});

// Exemple d'utilisation avec try/catch
app.post('/api/users', async (req, res, next) => {
    try {
        console.log('Création d\\'utilisateur avec données:', req.body);
        
        const user = await createUser(req.body);
        console.log('Utilisateur créé:', user);
        
        res.status(201).json(user);
    } catch (error) {
        console.error('Erreur lors de la création:', error);
        next(error); // Passe l'erreur au middleware de gestion d'erreurs
    }
});`;

export default function Page() {
    return <>
        <section>
            <h2>Déboguer le serveur avec VS Code</h2>
            <p>
                Le débogage côté serveur est crucial pour identifier et résoudre les problèmes dans vos applications Node.js. 
                Visual Studio Code offre des outils excellents pour déboguer vos serveurs Express.js.
            </p>
        </section>

        <section>
            <h2>Configuration du débogueur VS Code</h2>
            <p>
                Pour déboguer votre serveur Node.js dans VS Code, créez un fichier de configuration :
            </p>
            <CodeBlock language="json">{launchJson}</CodeBlock>
            <p>
                Cette configuration permet de :
            </p>
            <ul>
                <li>Lancer le serveur en mode debug</li>
                <li>Utiliser nodemon pour le rechargement automatique</li>
                <li>Définir les variables d'environnement</li>
            </ul>
        </section>

        <section>
            <h2>Utilisation des points d'arrêt</h2>
            <h3>Comment créer des points d'arrêt :</h3>
            <ol>
                <li>Cliquez sur le numéro de ligne dans l'éditeur VS Code</li>
                <li>Un point rouge apparaît indiquant un breakpoint</li>
                <li>Lancez le débogueur (F5)</li>
                <li>L'exécution s'arrêtera à cette ligne</li>
            </ol>
            
            <h3>Types de points d'arrêt :</h3>
            <ul>
                <li><strong>Simple :</strong> Arrêt inconditionnel</li>
                <li><strong>Conditionnel :</strong> Arrêt seulement si une condition est vraie</li>
                <li><strong>Logpoint :</strong> Log une valeur sans arrêter l'exécution</li>
            </ul>
        </section>

        <section>
            <h2>Logging côté serveur</h2>
            <CodeBlock language="js">{serverLogging}</CodeBlock>
            <p>
                Le mot-clé <IC>debugger</IC> crée un point d'arrêt programmé qui s'active quand le débogueur est attaché.
            </p>
        </section>

        <section>
            <h2>Gestion et logging des erreurs</h2>
            <CodeBlock language="js">{errorHandling}</CodeBlock>
        </section>

        <section>
            <h2>Outils de debugging dans VS Code</h2>
            <h3>Panel de variables :</h3>
            <ul>
                <li><strong>Locals :</strong> Variables locales de la fonction courante</li>
                <li><strong>Closure :</strong> Variables capturées par les closures</li>
                <li><strong>Global :</strong> Variables globales</li>
            </ul>
            
            <h3>Watch expressions :</h3>
            <p>Ajouter des expressions à surveiller en continu :</p>
            <ul>
                <li><IC>req.body</IC> - Contenu de la requête</li>
                <li><IC>req.params.id</IC> - Paramètre ID</li>
                <li><IC>user.length</IC> - Taille d'un tableau</li>
            </ul>
            
            <h3>Call Stack :</h3>
            <p>Voir la pile d'appels pour comprendre comment on est arrivé à ce point.</p>
        </section>

        <section>
            <h2>Commandes de navigation</h2>
            <ul>
                <li><strong>Continue (F5) :</strong> Continuer l'exécution</li>
                <li><strong>Step Over (F10) :</strong> Exécuter la ligne suivante</li>
                <li><strong>Step Into (F11) :</strong> Entrer dans la fonction appelée</li>
                <li><strong>Step Out (Shift+F11) :</strong> Sortir de la fonction courante</li>
                <li><strong>Restart (Ctrl+Shift+F5) :</strong> Redémarrer le débogage</li>
                <li><strong>Stop (Shift+F5) :</strong> Arrêter le débogage</li>
            </ul>
        </section>

        <section>
            <h2>Debug Console</h2>
            <p>
                La Debug Console permet d'exécuter du code JavaScript dans le contexte du point d'arrêt :
            </p>
            <ul>
                <li>Examiner des variables : <IC>console.log(user)</IC></li>
                <li>Modifier des valeurs : <IC>user.name = "nouveau nom"</IC></li>
                <li>Tester des expressions : <IC>users.filter(u => u.active)</IC></li>
            </ul>
        </section>

        <section>
            <h2>Conseils pour un debugging efficace</h2>
            <ul>
                <li><strong>Logs structurés :</strong> Utilisez des formats cohérents pour vos logs</li>
                <li><strong>Niveaux de log :</strong> Différenciez info, warning, error</li>
                <li><strong>Context :</strong> Loggez toujours le contexte (req, user, params)</li>
                <li><strong>Timing :</strong> Mesurez les performances des opérations coûteuses</li>
                <li><strong>Cleanup :</strong> Retirez les logs de debug avant la production</li>
            </ul>
        </section>
    </>
}