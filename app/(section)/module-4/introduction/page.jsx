/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Introduction",
    description: "Introduction à la communication entre une page web et un serveur web, concepts de base des requêtes HTTP et des réponses.",
    keywords: ["client", "serveur", "communication", "http", "introduction"],
    group: "notes"
}

export default function Page() {
    return <>
        <section>
            <h2>Introduction à la communication entre une page web et un serveur</h2>
            <p>
                Dans ce module, nous allons explorer comment les pages web communiquent avec les serveurs web. Cette communication 
                est essentielle pour créer des applications web dynamiques et interactives qui peuvent échanger des données 
                en temps réel sans avoir besoin de recharger la page.
            </p>
            <p>
                Nous apprendrons les concepts fondamentaux de la communication client-serveur, les différents types de requêtes 
                HTTP, et comment utiliser l'API Fetch JavaScript moderne pour effectuer ces communications de manière efficace.
            </p>
        </section>

        <section>
            <h2>Objectifs d'apprentissage</h2>
            <p>À la fin de ce module, vous serez capable de :</p>
            <ul>
                <li>Comprendre les principes de base de la communication client-serveur</li>
                <li>Utiliser l'API Fetch JavaScript pour effectuer des requêtes HTTP</li>
                <li>Envoyer et recevoir des données entre le client et le serveur</li>
                <li>Gérer les erreurs de communication</li>
                <li>Déboguer les problèmes côté client et serveur</li>
                <li>Créer des applications web complètes avec interface utilisateur</li>
            </ul>
        </section>
    </>
}