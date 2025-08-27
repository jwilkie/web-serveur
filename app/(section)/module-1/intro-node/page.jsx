import CodeBlock from "@/components/CodeBlock"

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Introduction à Node.js",
    description: "Présentation de Node.js, de NPM et de leur rôle dans le développement web.",
    keywords: ["node.js", "npm", "terminal"],
    group: "notes"
}

export default function Page() {
    return <>
        <section>
            <h2>Node.js</h2>
            <p>
                Node.js est un environnement d'exécution de Javascript à open source et multiplateforme qui s'exécute à l'extérieur 
                d'un navigateur web, soit dans un terminal ou au travers de services. On l'utilise principalement pour le 
                développement de serveur web, mais aussi pour le développement d'outils liés au web. Node.js nous permettra donc de 
                créer des serveurs web pour que nos applications ou sites web puissent s'y connecter. Node.js a été initialement 
                publié en 2009.
            </p>
            <p>
                Un des buts premiers de Node.js était d'avoir l'option de créer des serveurs web avec le langage Javascript puisque 
                ce langage était déjà utilisé pour la programmation des interfaces graphiques web. Ceci permet d'avoir un seul 
                langage de programmation pour tout le développement d'une application web contrairement à avant, où la majorité des 
                serveurs web était programmé en PHP, Java, C# et même VB.NET.
            </p>
            <p>
                Un autre des buts importants de Node.js était d'être beaucoup plus efficace que les autres serveurs web. En effet, 
                les serveurs web reçoivent aujourd'hui une quantité phénoménale de requêtes. Par le passé, ces serveurs utilisaient 
                multiples fils d'exécutions parallèles pour répondre à ces besoins. Toutefois, cette façon de faire était hautement 
                limitée par le processeur du serveur. De plus, certains fil d'exécution pouvait être en dormance pendant plusieurs 
                secondes lors de certains traitements, ce qui gaspillait du temps de traitement. Node.js règle ces problèmes en 
                utilisant sa boucle d'évènement asynchrone.
            </p>
            <p>
                Pour tester que Node.js est bien installé et fonctionne correctement, vous pouvez utiliser la commande suivante 
                dans un terminal:
            </p>
            <CodeBlock language="terminal">{'> node --version'}</CodeBlock>
        </section>

        <section>
            <h2>NPM</h2>
            <p>
                NPM est un gestionnaire de package qui s'installe automatiquement avec Node.js. Il était autrefois l'acronyme 
                de <em>Node Package Manager</em>, mais aujourd'hui, on est plus vraiment certain. NPM est en fait une banque de 
                code en ligne qui permet aux développeurs de facilement ajouter des librairies de codes à leur projet. Nous 
                utiliseront NPM à plusieurs reprises durant la session pour trouver ou ajouter des librairies de code ou pour 
                manipuler nos projets.
            </p>
            <p>
                Pour tester que NPM s'est bien installé avec Node.js et fonctionne correctement, vous pouvez utiliser la commande 
                suivante dans un terminal:
            </p>
            <CodeBlock language="terminal">{'> npm --version'}</CodeBlock>
        </section>
    </>
}