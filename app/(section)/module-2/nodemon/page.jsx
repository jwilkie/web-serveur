import IC from '@/components/InlineCode'
import CodeBlock from '@/components/CodeBlock'

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Nodemon",
    description: "Présentation de l'installation et de l'utilisation de base de Nodemon, un utilitaire facilitant le développement d'applications Node.js.",
    keywords: ["nodemon", "node.js", "package.json", "automatisation"],
    group: "notes"
}

const scripts = 
`"scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js",
    "test": "echo \\"Error: no test specified\\" && exit 1"
}`;

export default function Page() {
    return <>
        <section>
            <h2>Automatisation au développement</h2>
            <p>
                Nodemon est un outil très pratique lorsqu'on développe des applications sur Node.js. Son but est de surveiller les
                fichiers dans un projet et de redémarrer automatiquement le programme lorsqu'une modification est détectée. Cela nous 
                évite d'avoir à arrêter et relancer manuellement nos programmes lors du développement. C'est très pratique lorsqu'on 
                crée un serveur web, par exemple.
            </p>
            <p>
                Cet outil doit être installé avec <IC>npm</IC>. Toutefois, cet outil ne doit pas faire partie du serveur que nous 
                développerons cette session. C'est uniquement un outil que nous utiliserons en développement. Par conséquent, nous 
                installerons Nodemon en tant que dépendance de développement. La commande d'installation sera donc un peu différente.
                La voici:
            </p>
            <CodeBlock language="terminal">&gt; npm i nodemon -D</CodeBlock>
            <p>
                Notez l'utilisation de l'option <IC>-D</IC>, qui indique que Nodemon est installé en tant que dépendance de 
                développement.
            </p>
        </section>

        <section>
            <h2>Lancer avec Nodemon</h2>
            <p>
                Pour lancer notre application avec Nodemon, nous changerons légèrement le script de démarrage de notre projet. Les 
                scripts de démarrage, et tout autre script lié au développement, sont définis dans le fichier <IC>package.json</IC>.
                Dans celui-ci, on retrouve une section <IC>scripts</IC> qui contient des commandes que nous pouvons exécuter avec la 
                commande <IC>npm</IC>. Nous modifierons légèrement cette section pour créer une commande qui utilise Nodemon. Voici 
                à quoi devrait ressembler la section <IC>scripts</IC> dans notre fichier <IC>package.json</IC>:
            </p>
            <CodeBlock language="json">{scripts}</CodeBlock>
            <p>
                Voici plus en détail ce que font ces scripts:
            </p>
            <ul>
                <li>
                    <IC>start</IC>: lance le serveur avec Node.js. C'est la commande que nous utiliserons en production lorsque nous 
                    déploierons notre application. Cette commande exite théoriquement déjà à l'interne dans Node.js, mais il n'est pas
                    mauvais de la redéfinir explicitement.
                </li>
                <li>
                    <IC>dev</IC>: lance le serveur avec Nodemon. C'est la commande que nous utiliserons en développement.
                </li>
                <li>
                    <IC>test</IC>: un script de test par défaut qui n'est pas très utile dans notre cas. On ne l'utilisera pas dans ce
                    cours.
                </li>
            </ul>
            <p>
                Maintenant, lorsque nous voudrons lancer notre serveur en développement, ce que nous ferons toujours lorsqu'on 
                travaille sur notre serveur, nous pourrons utiliser la commande suivante:
            </p>
            <CodeBlock language="terminal">&gt; npm run dev</CodeBlock>
        </section>
    </>
}