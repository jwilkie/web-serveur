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
            <h2>Protocole de communication</h2>
            <p>
                HTTP est un protocole de communication. En des termes plus simple, c'est un langage qui est utilisé par les 
                clients web pour communiquer avec les serveurs web. Un peu comme moi, qui vous parle ou vous écrit en français 
                pour partager la matière avec vous, les clients web parle le HTTP pour se faire comprendre par un serveur web.
            </p>
            <p>
                HTTP est très flexible et extensible. Il a été inventé dans le début des années 1990 et est encore aujourd'hui 
                utilisé pour la majorité des communications sur l'Internet, avec l'aide de plusieurs mises à niveau pour rester 
                pertinent. Dans ce cours, nous utiliserons le protocole HTTP pour communiquer entre un client (navigateur Web) 
                et un serveur (serveur Node.js).
            </p>
            <p>
                Comme mentionné dans les pages précédantes, n'oubliez pas que la communication client-serveur part toujours du 
                client. En effet, c'est le client qui enverra des messages ou requêtes HTTP au serveur. Le contraire n'arrivera 
                jamais (...presque jamais). Ce comportement est une caractéristique fondamentale du protocole HTTP.
            </p>
            <p>
                Bien que l'utilisation de ce protocole peut être très complexe, nous essayerons de la simplifier le plus possible.
                Nous décrirons donc dans les prochaines pages, les 2 éléments fondamentaux du protocole: les <strong>requêtes</strong> et 
                les <strong>réponses</strong> HTTP.
            </p>
        </section>

        <section>
            <h2>Limitations</h2>
            <p>
                HTTP est un protocole de communication est aujourd'hui très permissif et flexible. Cependant, il n'en a pas toujours
                été ainsi. En effet, à ses débuts, HTTP était un protocole très simple et limité. Par exemple, il ne supportait
                que 2 méthodes de requêtes: <IC>GET</IC> et <IC>POST</IC>. De la même façon, il ne supportait pas les communications
                bi-directionnelle. Heureusement, avec le temps, le protocole a évolué et s'est adapté aux besoins du web moderne.
            </p>
            <p>
                Aujourd'hui, il est peu probable que vous fassiez face à une limitation de ce protocole, mais il est important de
                garder en tête que certaines limitations peuvent exister, surtout si vous travaillez avec des systèmes plus anciens
                ou des technologies spécifiques.
            </p>
            <p>
                Dans ce cours, nous n'aborderons pas ces limitations, mais si vous êtes curieux d'en savoir plus, n'hésitez pas
                à consulter la documentation suivante:
            </p>
            <p>
                <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Evolution_of_HTTP" target="_blank">
                    MDN - Evolution of HTTP
                </a>
            </p>
        </section>
    </>
}