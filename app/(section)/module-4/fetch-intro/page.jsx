import IC from '@/components/InlineCode'
import CodeBlock from '@/components/CodeBlock'

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Fetch - Introduction",
    description: "Introduction aux bases de l'API Fetch JavaScript pour effectuer des requêtes HTTP asynchrones depuis le navigateur.",
    keywords: ["fetch", "api", "javascript", "async", "http", "requête"],
    group: "notes"
}

const basicFetch = 
`fetch('https://api.exemple.com/data')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Erreur:', error));`;

const asyncFetch =
`async function fetchData() {
    try {
        const response = await fetch('https://api.exemple.com/data');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Erreur:', error);
    }
}`;

export default function Page() {
    return <>
        <section>
            <h2>Introduction à l'API Fetch</h2>
            <p>
                L'API Fetch est une interface JavaScript moderne qui permet d'effectuer des requêtes HTTP de manière asynchrone. 
                Elle remplace l'ancienne XMLHttpRequest et offre une syntaxe plus simple et plus puissante pour communiquer 
                avec les serveurs web.
            </p>
            <p>
                Fetch est basé sur les Promises JavaScript, ce qui permet d'utiliser les syntaxes <IC>then/catch</IC> ou 
                <IC>async/await</IC> pour gérer les réponses de manière élégante.
            </p>
        </section>

        <section>
            <h2>Syntaxe de base</h2>
            <p>
                Voici un exemple simple d'utilisation de fetch avec la syntaxe des Promises :
            </p>
            <CodeBlock language="js">{basicFetch}</CodeBlock>
            <p>
                Et voici le même exemple avec la syntaxe async/await, plus moderne et lisible :
            </p>
            <CodeBlock language="js">{asyncFetch}</CodeBlock>
        </section>

        <section>
            <h2>Avantages de Fetch</h2>
            <ul>
                <li><strong>Syntaxe moderne :</strong> Plus simple et plus lisible que XMLHttpRequest</li>
                <li><strong>Support des Promises :</strong> Intégration native avec async/await</li>
                <li><strong>Flexibilité :</strong> Support de tous les types de requêtes HTTP</li>
                <li><strong>Streaming :</strong> Possibilité de traiter les réponses en streaming</li>
                <li><strong>Support natif :</strong> Intégré dans tous les navigateurs modernes</li>
            </ul>
        </section>
    </>
}