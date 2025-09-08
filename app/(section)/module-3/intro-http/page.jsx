import IC from '@/components/InlineCode'

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Introduction au protocole HTTP",
    description: "Introduction aux concepts de base du protocole HTTP et à son rôle dans la communication web.",
    keywords: ["http", "protocole", "web", "communication"],
    group: "notes"
}

export default function Page() {
    return <>
        <section>
            <h2>Qu'est-ce que le protocole HTTP?</h2>
            <p>
                HTTP (HyperText Transfer Protocol) est le protocole de communication fondamental du World Wide Web. 
                Il définit comment les messages sont formatés et transmis entre les clients (navigateurs web) et les 
                serveurs web. HTTP est un protocole de type requête-réponse, ce qui signifie qu'un client envoie une 
                requête à un serveur, et le serveur répond avec les données demandées.
            </p>
            <p>
                Le protocole HTTP fonctionne en mode <IC>stateless</IC>, c'est-à-dire que chaque requête est 
                indépendante et le serveur ne conserve pas d'informations sur les requêtes précédentes. Cette 
                caractéristique simplifie l'architecture des serveurs web mais nécessite des mécanismes additionnels 
                pour maintenir l'état des sessions utilisateur.
            </p>
        </section>

        <section>
            <h2>Historique et versions</h2>
            <p>
                Le protocole HTTP a évolué au fil des années:
            </p>
            <ul>
                <li><strong>HTTP/0.9 (1991)</strong>: La première version, très simple, ne supportait que la méthode GET</li>
                <li><strong>HTTP/1.0 (1996)</strong>: Ajout des méthodes POST et HEAD, des codes de statut et des en-têtes</li>
                <li><strong>HTTP/1.1 (1997)</strong>: Version la plus utilisée pendant longtemps, avec des connexions persistantes</li>
                <li><strong>HTTP/2 (2015)</strong>: Amélioration des performances avec la multiplexation des requêtes</li>
                <li><strong>HTTP/3 (2022)</strong>: Utilise QUIC au lieu de TCP pour de meilleures performances</li>
            </ul>
            <p>
                Pour ce cours, nous nous concentrerons principalement sur HTTP/1.1, qui reste la version la plus 
                couramment utilisée et comprise.
            </p>
        </section>

        <section>
            <h2>Concepts clés</h2>
            <p>
                Pour bien comprendre HTTP, il est important de maîtriser quelques concepts fondamentaux:
            </p>
            <ul>
                <li><strong>Client-Serveur</strong>: Architecture où le client (navigateur) fait des demandes au serveur</li>
                <li><strong>URL/URI</strong>: Identifiant unique pour localiser une ressource sur le web</li>
                <li><strong>Méthodes HTTP</strong>: Verbes qui indiquent l'action à effectuer (GET, POST, PUT, DELETE, etc.)</li>
                <li><strong>Codes de statut</strong>: Indiquent le résultat de la requête (200, 404, 500, etc.)</li>
                <li><strong>En-têtes</strong>: Métadonnées accompagnant les requêtes et réponses</li>
                <li><strong>Corps du message</strong>: Données optionnelles transmises avec la requête ou la réponse</li>
            </ul>
        </section>

        <section>
            <h2>Importance pour le développement web</h2>
            <p>
                Comprendre HTTP est essentiel pour tout développeur web car:
            </p>
            <ul>
                <li>Il régit toutes les communications entre le navigateur et votre serveur</li>
                <li>Il influence les performances de votre application web</li>
                <li>Il détermine comment votre API sera structurée et utilisée</li>
                <li>Il affecte la sécurité de votre application</li>
                <li>Il est la base des API REST que nous étudierons dans ce module</li>
            </ul>
            <p>
                Dans les pages suivantes, nous explorerons en détail la structure des requêtes et réponses HTTP, 
                ainsi que leur utilisation pratique avec Express.js.
            </p>
        </section>
    </>
}