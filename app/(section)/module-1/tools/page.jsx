/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Outils et logiciels",
    description: "Présentation des outils et logiciels utilisés dans ce cours de développement web serveur.",
    keywords: ["ide", "développement", "outils", "logiciels", "vscode", "node.js", "navigateur"],
    group: "notes"
}

export default function Page() {
    return <>
        <section>
            <h2>Liste des logiciels</h2>
            <p>
                Pour ce cours, nous aurons besoin de quelques logiciels. Vous devez les installer le plus tôt possible puisque nous en 
                aurons besoin dès le premier cours. Voici la liste de ces outils:
            </p>
            <ul>
                <li>Visual Studio Code</li>
                <li>Node.js</li>
                <li>Navigateur web moderne à jour (Chrome, Firefox, Edge, etc.)</li>
            </ul>
        </section>

        <section>
            <h2>Visual Studio Code</h2>
            <p>
                Visual Studio Code (ou VSCode) est un environnement de développement intégré (IDE) gratuit et open-source développé par 
                Microsoft. Il est très populaire parmi les développeurs web en raison de sa légèreté, de sa rapidité et de sa grande 
                flexibilité grâce à l'utilisation d'extensions. Vous pouvez le télécharger ici:
            </p>
            <p>
                <a href="https://code.visualstudio.com/">Visual Studio Code</a>
            </p>
        </section>

        <section>
            <h2>Node.js</h2>
            <p>
                Node.js est un environnement d'exécution JavaScript qui se lance dans un terminal au lieu d'un navigateur web. Il est 
                basé sur le moteur JavaScript V8 de Chrome. Il permet aux développeurs de créer des applications natives en Javascript,
                est particulièrement adapté pour les applications en temps réel et facilite énormément le développement de services.
                Bref, il est parfait pour la programmation de serveur web. Vous pouvez le télécharger ici:
            </p>
            <p>
                <a href="https://nodejs.org/fr/download/current">Node.js</a>
            </p>
            <p>
                Vous devez installer la version courante (Current) et non la version LTS (Long Term Support). Pour vous faciliter la 
                tâche, je vous recommande d'installer la version préconstruite avec installateur (.msi sous Windows, .pkg sous MacOS).
            </p>
        </section>

        <section>
            <h2>Navigateur web</h2>
            <p>
                Vous devez utiliser un navigateur web moderne et à jour pour suivre ce cours. Tous les navigateurs web modernes ont 
                généralement une bonne quantité d'outils de développement qui nous permettront de suivre et de déboguer facilement notre 
                code. Les navigateurs recommandés sont:
            </p>
            <ul>
                <li>
                    <a href="https://www.google.com/intl/fr_ca/chrome/">Google Chrome</a>
                </li>
                <li>
                    <a href="https://www.firefox.com/fr/">Mozilla Firefox</a>
                </li>
                <li>
                    <a href="https://www.microsoft.com/fr-ca/edge/">Microsoft Edge</a>
                </li>
            </ul>
        </section>
    </>
}