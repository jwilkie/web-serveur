import IC from '@/components/InlineCode'
import CodeBlock from '@/components/CodeBlock'

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Déboguer le client",
    description: "Techniques et outils pour déboguer les applications web côté client, utilisation des DevTools pour diagnostiquer les problèmes de requêtes HTTP.",
    keywords: ["debug", "client", "devtools", "console", "network", "javascript"],
    group: "notes"
}

const consoleDebug = 
`// Utilisation de console.log pour déboguer
async function debugFetch() {
    console.log('Début de la requête...');
    
    try {
        const response = await fetch('/api/users');
        console.log('Response reçue:', response);
        console.log('Status:', response.status);
        console.log('Headers:', [...response.headers.entries()]);
        
        const data = await response.json();
        console.log('Données parsées:', data);
        
        return data;
    } catch (error) {
        console.error('Erreur détectée:', error);
        console.error('Stack trace:', error.stack);
    }
}`;

const networkInspection = 
`// Ajouter des informations détaillées pour debugging
async function fetchDetaille(url, options = {}) {
    const startTime = performance.now();
    
    console.group(\`Requête vers \${url}\`);
    console.log('Options:', options);
    
    try {
        const response = await fetch(url, options);
        const endTime = performance.now();
        
        console.log(\`Durée: \${endTime - startTime}ms\`);
        console.log('Status:', response.status);
        console.log('Status Text:', response.statusText);
        console.table([...response.headers.entries()]);
        
        const data = await response.json();
        console.log('Réponse:', data);
        console.groupEnd();
        
        return data;
    } catch (error) {
        console.error('Erreur:', error);
        console.groupEnd();
        throw error;
    }
}`;

export default function Page() {
    return <>
        <section>
            <h2>Déboguer les applications côté client</h2>
            <p>
                Le débogage côté client est essentiel pour identifier et résoudre les problèmes dans vos applications web. 
                Les navigateurs modernes offrent des outils puissants pour diagnostiquer les problèmes de communication 
                avec le serveur.
            </p>
        </section>

        <section>
            <h2>Utilisation de la console du navigateur</h2>
            <p>
                La console est votre premier outil de débogage. Utilisez <IC>console.log()</IC>, <IC>console.error()</IC>, 
                et <IC>console.table()</IC> pour examiner les données :
            </p>
            <CodeBlock language="js">{consoleDebug}</CodeBlock>
        </section>

        <section>
            <h2>Onglet Network des DevTools</h2>
            <p>
                L'onglet Network est l'outil le plus important pour déboguer les requêtes HTTP :
            </p>
            <h3>Comment l'utiliser :</h3>
            <ol>
                <li>Ouvrir les DevTools (F12)</li>
                <li>Aller dans l'onglet "Network" ou "Réseau"</li>
                <li>Actualiser la page ou déclencher les requêtes</li>
                <li>Examiner chaque requête individuellement</li>
            </ol>
            
            <h3>Informations disponibles :</h3>
            <ul>
                <li><strong>Status Code :</strong> Code de réponse HTTP (200, 404, 500, etc.)</li>
                <li><strong>Method :</strong> Méthode HTTP utilisée (GET, POST, PUT, etc.)</li>
                <li><strong>Size :</strong> Taille de la requête et de la réponse</li>
                <li><strong>Time :</strong> Durée de la requête</li>
                <li><strong>Headers :</strong> En-têtes de requête et de réponse</li>
                <li><strong>Payload :</strong> Données envoyées dans la requête</li>
                <li><strong>Response :</strong> Réponse complète du serveur</li>
            </ul>
        </section>

        <section>
            <h2>Techniques de logging avancées</h2>
            <CodeBlock language="js">{networkInspection}</CodeBlock>
            <p>
                Cette fonction ajoute des détails utiles pour le débogage :
            </p>
            <ul>
                <li>Groupement des logs avec <IC>console.group()</IC></li>
                <li>Mesure du temps de réponse avec <IC>performance.now()</IC></li>
                <li>Affichage tabulaire des headers avec <IC>console.table()</IC></li>
            </ul>
        </section>

        <section>
            <h2>Onglet Console</h2>
            <p>
                La console affiche toutes les erreurs JavaScript et les logs de votre application :
            </p>
            <h3>Types de messages :</h3>
            <ul>
                <li><strong>Errors (rouge) :</strong> Erreurs JavaScript qui interrompent l'exécution</li>
                <li><strong>Warnings (jaune) :</strong> Avertissements qui n'arrêtent pas l'exécution</li>
                <li><strong>Info (bleu) :</strong> Messages informatifs</li>
                <li><strong>Debug :</strong> Messages de débogage détaillés</li>
            </ul>
        </section>

        <section>
            <h2>Onglet Sources/Debugger</h2>
            <p>
                Pour un débogage plus avancé :
            </p>
            <ul>
                <li><strong>Points d'arrêt :</strong> Cliquez sur une ligne pour arrêter l'exécution</li>
                <li><strong>Step over/into :</strong> Exécuter le code ligne par ligne</li>
                <li><strong>Watch expressions :</strong> Surveiller des variables spécifiques</li>
                <li><strong>Call stack :</strong> Voir la pile d'appels des fonctions</li>
            </ul>
        </section>

        <section>
            <h2>Outils de filtrage</h2>
            <p>
                Dans l'onglet Network, utilisez les filtres pour vous concentrer sur ce qui vous intéresse :
            </p>
            <ul>
                <li><strong>Filtres par type :</strong> JS, CSS, Img, XHR/Fetch</li>
                <li><strong>Filtres par statut :</strong> Erreurs uniquement, codes spécifiques</li>
                <li><strong>Recherche :</strong> Filtrer par nom de fichier ou URL</li>
            </ul>
        </section>

        <section>
            <h2>Conseils pour un débogage efficace</h2>
            <ul>
                <li><strong>Reproduire :</strong> Assurez-vous de pouvoir reproduire le problème</li>
                <li><strong>Isoler :</strong> Testez chaque partie individuellement</li>
                <li><strong>Documenter :</strong> Notez ce que vous observez</li>
                <li><strong>Simplifier :</strong> Réduisez le code au minimum nécessaire</li>
                <li><strong>Tester :</strong> Vérifiez vos corrections</li>
            </ul>
        </section>
    </>
}