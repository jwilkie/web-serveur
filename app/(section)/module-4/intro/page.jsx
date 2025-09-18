import IC from '@/components/InlineCode'

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Introduction",
    description: "Introduction à la communication entre une page web et un serveur web.",
    keywords: ["client", "serveur", "communication", "http", "introduction"],
    group: "notes"
}

export default function Page() {
    return <>
        <section>
            <h2>Communication entre une page web et un serveur</h2>
            <p>
                Dans ce module, nous allons explorer comment les pages web communiquent avec les serveurs web. Cette communication 
                est essentielle pour créer des applications web dynamiques et interactives qui ont des comportements plus complexes
                qu'une page web statique.
            </p>
            <p>
                Jusqu'à présent, nous avons communiqué avec nos serveurs à l'aide d'outils, comme le Thunder Client. Maintenant, nous 
                allons apprendre à le faire directement depuis nos pages web en utilisant du Javascript du côté client. Pour y arriver, 
                nous allons explorer la fonction <IC>fetch()</IC>, qui permet de programmer l'envoi de requêtes HTTP depuis le langage
                Javascript, soit dans le navigateur, soit dans un environnement serveur comme Node.js.
            </p>
        </section>
    </>
}