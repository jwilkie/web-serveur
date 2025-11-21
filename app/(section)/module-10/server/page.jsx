import Link from 'next/link';
import IC from '@/components/InlineCode'
import CodeBlock from '@/components/CodeBlock';
import ColoredBox from '@/components/ColoredBox';

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "SSE côté serveur",
    description: "Démonstration de l'utilisation du SSE côté serveur avec un middleware pour envoyer des événements au client en temps réel.",
    keywords: ["request", "response", "http", "sse", "server sent events", "bidirectionnel", "temps réel"],
    group: "notes"
}

const initStream = 
`app.get('/stream', (request, response) => {
    response.initStream();    
}));`;

const pushJson = 
`app.post('/nouvelle-donnee', (request, response) => {
    // Ajouter la donnée dans la base de données
    await addDonneeBaseDeDonnees(request.body.donnee);

    // Diffuser l'ajout aux clients connectés via SSE
    response.pushJson({ 
        newData: request.body.donnee 
    }, 'ajout-donnee');

    // Retourner une réponse au client qui a fait l'ajout
    response.status(200).end();
}));`;

export default function Page() {
    return <>
        <section>
            <h2>Middleware</h2>
            <p>
                Dans le cadre de ce cours, nous allons utiliser les Server Sent Events (SSE) avec un midlleware dans Express. 
                Vous pouvez trouver ce middleware dans la section Middleware de SSE. Allez le télécharger et l'installer dans 
                votre projet avant de continuer. Une fois fait, revenez ici pour la suite où nous vous montrerons comment 
                l'utiliser.
            </p>
            <p>
                <Link href="/module-10/middleware/">Middleware de SSE</Link>
            </p>
            <p>
                L'installation est complété? Parfait! Passons à l'utilisation du SSE côté serveur.
            </p>
        </section>
        
        <section>
            <h2>Ouverture de connexion</h2>
            <p>
                Une fois le middleware installé, vous avez accès à une nouvelle fonction dans l'objet <IC>response</IC> de 
                vos routes Express. Cette fonction s'appelle <IC>initStream()</IC> et elle permet d'initialiser une connexion 
                SSE avec le client.
            </p>
            <p>
                En fait, c'est le client qui initie la connexion SSE en faisant une requête HTTP vers une route spécifique de
                votre serveur. Cette route doit absoluement être faites avec la méthode GET et elle doit appeler la fonction
                <IC>initStream()</IC> pour établir la connexion SSE avec le client.
            </p>
            <CodeBlock language="js">{initStream}</CodeBlock>
            <p>
                Le nom du chemin de la route peut être n'importe quoi. Tant que le client fait une requête GET vers cette route, 
                la connexion SSE sera établie.
            </p>
            <ColoredBox title="À noter:">
                <p>
                    Le middleware utilise une liste de diffusion interne pour gérer les connexions SSE. Chaque fois qu'un client
                    initie une connexion SSE en appelant <IC>initStream()</IC>, il est ajouté à cette liste de diffusion. Par la 
                    suite, lorsque nous enverrons des données via SSE, tous les clients connectés recevront les données envoyées.
                </p>
                <p>
                    Si vous voulez avoir différentes listes de diffusions ou encore des règles de diffusion plus complexes, vous 
                    devrez modifier ou créer votre propre middleware SSE.
                </p>
            </ColoredBox>
        </section>

        <section>
            <h2>Diffusion de données</h2>
            <p>
                Une fois la connexion SSE établie avec le ou les clients, vous pouvez leur envoyer des données en temps réel en
                utilisant la fonction <IC>pushJson()</IC> disponible dans l'objet <IC>response</IC> de vos routes. Cette fonction
                permet d'envoyer des données au format JSON aux clients connectés via SSE.
            </p>
            <p>
                La fonction prends 2 paramètres: Les données (objet ou tableau) à envoyer et un nom d'évènement qui pourra être 
                utilisé côté client pour identifier le type de données reçues.
            </p>
            <CodeBlock language="js">{pushJson}</CodeBlock>
            <p>
                Dans le cas de l'exemple ci-dessus, chaque fois qu'une nouvelle donnée est ajoutée via la route 
                POST <IC>/nouvelle-donnee</IC>, le serveur diffuse un évènement SSE nommé <IC>ajout-donnee</IC>. Cet évènement
                sera reçu par tous les clients qui ont ouvert une connexion SSE avec le serveur. Les clients pourront alors
                réagir à cet évènement, par exemple, en mettant à jour leur interface graphique pour afficher la nouvelle donnée.
            </p>
        </section>

        <section>
            <h2>Fermeture de connexion</h2>
            <p>
                Comme mentionné précédemment, la connexion SSE reste ouverte tant que le client ou le serveur ne la ferme pas.
                Dans ce middleware, la fermeture de la connexion SSE ne peux pas être faite manuellement. Elle se fait 
                automatiquement lorsque le client ferme la connexion, par exemple en fermant l'onglet du navigateur ou  en 
                changeant de page.
            </p>
            <p>
                Si vous avez besoin de fermer la connexion SSE côté serveur pour une raison quelconque, vous devrez modifier le
                middleware pour ajouter cette fonctionnalité.
            </p>
        </section>
    </>;
}
