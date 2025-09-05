import IC from "@/components/InlineCode";
import CodeBlock from "@/components/CodeBlock";
import ColoredBox from "@/components/ColoredBox";

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Installation avec NPM",
    description: "Présentation de l'installation de librairies externes disponible sur le web avec le gestionnaire de paquets NPM.",
    keywords: ["npm", "package", "packet", "librairie", "install"],
    group: "notes"
}

const npmInstall = 
`# Option longue
> npm install nom-du-package --save

# Option courte
> npm i nom-du-package`;

const packageDependencies = 
`{
    "name": "nom-du-projet",
    "version": "1.0.0",
    "main": "server.js",
    "type": "module",
    "dependencies": {
        "compression": "^1.7.4",
        "express": "^4.17.1",
        "helmet": "^4.1.1"
    }
}`;

const npmInstallDev = 
`# Option longue
> npm install nom-du-package --save-dev

# Option courte
> npm i nom-du-package -D`;

export default function Page() {
    return <>
        <section>
            <h2>Commande d'installation</h2>
            <p>
                Le gestionnaire de paquet de Node.js (NPM) nous permet d'installer des librairies de code externe à Node.js qui 
                sont disponibles sur le web pour ensuite les utiliser dans notre code. Le tout se fait dans la console à l'aide de
                la commande suivante:
            </p>
            <CodeBlock language="terminal">{npmInstall}</CodeBlock>
            <ColoredBox title="Attention:">
                Assurez-vous d'être dans le dossier du projet Node.js avant de lancer ces commandes. Si vous n'êtes pas dans le
                répertoire où se trouve le fichier <IC>package.json</IC>, la commande ne fonctionnera pas.
            </ColoredBox>
            <p>
                Une fois la librairie externe installée, vous devriez voir quelques changements dans votre projet:
            </p>
            <ul>
                <li>
                    Un dossier <IC>node_modules</IC> va être créé dans votre projet. Il contient les fichiers de
                    la librairie installé ainsi que les fichiers des autres librairies dont dépendent la librairie
                    que vous venez d'installer. Vous n'avez pas besoin de toucher à ce dossier.
                </li>
                <li>
                    Un fichier <IC>package-lock.json</IC> va être généré dans votre projet. Il contient l'arbre
                    des dépendances de votre projet. Vous n'avez pas besoin de toucher à ce fichier.
                </li>
                <li>
                    La dernière version de la librairie installé est ajouté automatiquement dans votre
                    fichier <IC>package.json</IC> dans la section <IC>dependencies</IC>. Comme pour les autres
                    changements, je vous suggère de ne pas y toucher.
                    <CodeBlock language="json">{packageDependencies}</CodeBlock>
                </li>
            </ul>
            <p>
                Quand la librairie est installé, vous pourrez simplement l'utiliser en l'important dans votre code
                à l'aide du mot-clé <IC>import</IC> et du nom du paquet que vous avez installé. Il est à noter que chaque librairie
                s'utilise de façon différente. Vous devrez vous référer à la documentation de chaque librairie pour savoir comment
                l'utiliser correctement.
            </p>
            <CodeBlock language="js">{`import { express } from 'express';`}</CodeBlock>
        </section>

        <section>
            <h2>Librairie de développement</h2>
            <p>
                Il est possible d'installer des librairies utilitaires qui ne servent que durant le développement.
                La librairie <IC>nodemon</IC> en est un bon exemple. C'est une librairie qui relance notre serveur
                automatiquement lorsque l'on fait des changements dans notre code. Cette librairie est très utile
                pour le développement, mais complètement inutile lorsque notre application sera en production.
            </p>
            <p>
                Pour installer une librairie de développement, vous utiliserez la commande suivante dans la
                console:
            </p>
            <CodeBlock language="terminal">{npmInstallDev}</CodeBlock>
        </section>

        <section>
            <h2>Soumettre ou partager le projet</h2>
            <p>
                Lorsqu'on installe des librairies externes, celles-ci sont installé dans le dossier <IC>node_modules</IC>.
                En général, ces librairies utilisent aussi d'autres librairies. Ces librairies aussi sont installé dans le
                dossier <IC>node_modules</IC>. Vous remarquez donc qu'avec seulement quelques installation, le
                dossier <IC>node_modules</IC> peut finir par contenir plusieurs milliers de fichiers de code et devenir
                beaucoup plus gros en poids (octets).
            </p>
            <p>
                Lorsqu'il est temps de partager le projet avec un coéquipier ou de soumettre un projet au professeur, vous
                devez donc supprimer le dossier <IC>node_modules</IC> pour faciliter le transfert. Une fois le transfert ou
                la soumission fini le professeur ou le coéquipier pourra rebâtir le dossier <IC>node_modules</IC> en
                lançant la commande suivante:
            </p>
            <CodeBlock language="shell">&gt; npm i</CodeBlock>
            <p>
                Cette commande va simplement voir quelles librairies sont nécessaire pour votre projet dans le
                fichier <IC>package.json</IC> et les télécharger automatiquement dans le dossier <IC>node_modules</IC>.
            </p>
        </section>
    </>
}