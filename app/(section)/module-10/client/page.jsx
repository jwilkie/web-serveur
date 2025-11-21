import CodeBlock from '@/components/CodeBlock';
import ColoredBox from '@/components/ColoredBox';
import IC from '@/components/InlineCode'

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "SSE côté client",
    description: "Démonstration de l'utilisation du SSE côté client pour recevoir des événements envoyés par le serveur en temps réel.",
    keywords: ["request", "response", "http", "sse", "server sent events", "bidirectionnel", "temps réel"],
    group: "notes"
}

const eventSSE = 
`source.addEventListener('joueur-deplace', (event) => {
    const data = JSON.parse(event.data);

    // Code à exécuter ici
});

source.addEventListener('joueur-retirer', (event) => {
    const data = JSON.parse(event.data);

    // Code à exécuter ici
})`;

export default function Page() {
    return <>
        <section>
            <h2>Source d'évènement</h2>
            <p>
                Pour utiliser les Server Sent Events (SSE) côté client, nous devons appeler la route du serveur qui initialise
                le canal de communication SSE. Exceptionnellement, cette route ne sera pas appelé avec <IC>fetch()</IC>. Nous
                utiliserons plutôt l'objet <IC>EventSource</IC>.
            </p>
            <p>
                Cet objet nous permet d'ouvrir automatiquement une connexion SSE avec le serveur. Par la suite, nous pourrons
                écouter les évènements envoyés par le serveur en temps réel avec une syntaxe très similaire à celle que l'on 
                connait avec les évènements du DOM.
            </p>
            <p>
                Voici comment créer une instance de <IC>EventSource</IC>:
            </p>
            <CodeBlock language="js">{`const source = new EventSource('/nom-de-la-route')`}</CodeBlock>
            <p>
                Le constructeur de EventSource prend en paramètre la route vers laquelle notre connexion sera établie. Ce nouvel 
                objet fera automatiquement la requête GET pour ouvrir la connexion.
            </p>
        </section>

        <section>
            <h2>Recevoir des données</h2>
            <p>
                Une fois la connexion établie, le serveur peut nous envoyer des évènements à n'importe quel moment. Nous pouvons 
                écouter ces évènements en ajoutant des listeners sur le <IC>EventSource</IC>. Pour ajouter ces listeners, nous
                utiliserons une fonction que vous connaissez déjà: <IC>addEventListener()</IC>.
            </p>
            <p>
                La grosse différence entre les évènements du DOM et les évènements SSE est que les évènements SSE sont nommés 
                par vous-même sur le serveur. Vous devez donc connaître le nom des évènements que le serveur envoie pour pouvoir
                les écouter correctement.
            </p>
            <p>
                Voici un exemple d'écoute d'évènement SSE:
            </p>
            <CodeBlock language="js">{eventSSE}</CodeBlock>
            <p>
                Voici quelques points importants à noter sur ce code:
            </p>
            <ul>
                <li>
                    Vous pouvez ajouter des listeners sur plusieurs évènements différents. Il est aussi possible d'ajouter 
                    plusieurs listeners sur le même évènement.
                </li>
                <li>
                    Les données envoyées par le serveur pourront être récupérées dans la propriété <IC>data</IC> de 
                    l'objet <IC>event</IC>.
                </li>
                <li>
                    Les données envoyées par le serveur sont toujours au format texte. Puisque le middleware de SSE envoie les
                    données au format JSON, nous devons utiliser <IC>JSON.parse()</IC> pour convertir les données en objet 
                    Javascript.
                </li>
                <li>
                    N'oubliez pas que le nom de l'évènement doit correspondre exactement à celui utilisé sur le serveur.
                </li>
            </ul>
        </section>
    </>;
}
