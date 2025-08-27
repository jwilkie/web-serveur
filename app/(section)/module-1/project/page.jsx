import CodeBlock from '@/components/CodeBlock';
import ColoredBox from '@/components/ColoredBox';
import IC from '@/components/InlineCode';

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Création de projet Node.js",
    description: "Démonstration de la création d'un projet vide avec Node.js.",
    keywords: ["node.js", "npm", "project", "init", "start"],
    group: "notes"
}

const init = 
`> npm init

...

package name: (nom-du-projet)
version: (1.0.0)
description: Description de votre projet ici.
entry point: (index.js) server.js
test command:
git repository:
keywords:
author: Jonathan Wilkie
license: (ISC) UNLICENSED
About to write to C:\Users\JWilki\Desktop\nom-du-projet\package.json:

{
  "name": "nom-du-projet",
  "version": "1.0.0",
  "description": "Description de votre projet ici.",
  "main": "server.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Jonathan Wilkie",
  "license": "UNLICENSED"
}


Is this OK? (yes)`;

export default function Page() {
    return <>
        <section>
            <h2>Étapes de création d'un projet</h2>
            <p>
                La création d'un projet Node.js ne se fait pas au travers d'une interface graphique, mais plutôt par des commandes que 
                nous entrerons dans un terminal. Ceci étant dit, ne vous inquiétez pas, car ces commandes sont simples et faciles à 
                utiliser. Voici les étapes à suivre:
            </p>
            <ol>
                <li>
                    Créer un dossier vide à l'emplacement de votre choix. Ce dossier contiendra tous les fichiers de votre projet.
                    Ce dossier peut être créé au travers de l'explorateur de fichiers, mais doit respecter quelques règles:
                    <ul>
                        <li>
                            Le nom du dossier doit être en <IC>snake_case</IC> en minuscules.
                        </li>
                        <li>
                            Le dossier ne doit pas être à un emplacement sauvegardé automatiquement dans le cloud (OneDrive, iCloud, 
                            Google Drive, etc.). Si c'est le cas, vous risquez d'avoir des gros problèmes de synchronisation plus tard.
                        </li>
                    </ul>
                </li>
                <li>
                    Ouvrir le dossier vide créé dans Visual Studio Code et ouvrez le terminal intégré de celui-ci qui se trouve dans le 
                    menu <IC>Terminal</IC> et <IC>New Terminal</IC>. Dans le terminal, entrez la commande suivante:
                    <CodeBlock language="terminal">{'> npm init'}</CodeBlock>
                    <ColoredBox title="Attention: ">
                        Si vous êtes sur Windows et que vous utilisez le terminal PowerShell, vous pourriez avoir une erreur lors de 
                        l'exécution des commandes <IC>npm</IC>. Si c'est le cas, vous pouvez simplement changer le terminal que vous 
                        utilisez pour <IC>Command Prompt</IC> ou <IC>git-bash</IC>. Autrement, il est possible de corriger le problème
                        en lançant certaines commandes dans PowerShell, mais c'est plus compliqué.
                    </ColoredBox>
                </li>
                <li>
                    Répondez aux questions posé dans le terminal. Si vous faites une erreur, ce n'est pas grave. Vous pourrez toujours
                    les corriger plus tard.
                    <ol>
                        <li>
                            Le nom du package est le nom de votre projet. Si vous avez bien nommé votre dossier, vous pouvez simplement
                            appuyer sur la touche <kbd>Entrée</kbd> pour valider la valeur par défaut entre parenthèses.
                        </li>
                        <li>
                            Ajouter une description courte de votre projet.
                        </li>
                        <li>
                            Le point d'entrée est le fichier principal de votre projet. N'utilisez pas la valeur par défaut et changez la 
                            plutôt pour <IC>server.js</IC>.
                        </li>
                        <li>
                            Ajouter votre nom comme auteur du projet.
                        </li>
                        <li>
                            Changer la license par défaut du projet pour <IC>UNLICENSED</IC> pour que votre code ne soit pas libre de 
                            droit.
                        </li>
                        <li>
                            Les autres options peuvent être laissées par défaut. Vous pouvez simplement appuyer sur la 
                            touche <kbd>Entrée</kbd> pour valider chacune d'entre elles.
                        </li>
                    </ol>
                    <CodeBlock language="terminal">{init}</CodeBlock>
                </li>
                <li>
                    L'exécution de la commande précédante va créer un fichier nommé <IC>package.json</IC> dans le dossier de votre projet.
                    Ouvrez ce fichier. et 
                    <ol>
                        <ul>
                            <li>
                                Vérifiez que toutes les informations sont correctes dans le fichier <IC>package.json</IC>. Si vous avez 
                                fait une erreur, vous pouvez l'éditer manuellement.
                            </li>
                            <li>
                                Modifier le fichier <IC>package.json</IC> pour ajouter la ligne suivante sous le champ <IC>main</IC>. 
                                L'importance de cette ligne vous sera expliquée plus tard.
                                <CodeBlock language="json">{'"type": "module", '}</CodeBlock>
                            </li>
                        </ul>
                    </ol>
                </li>
                <li>
                    À la racine du dossier de votre projet, créez un fichier nommé <IC>server.js</IC>. Il sera le fichier de code 
                    principal de votre projet.
                </li>
            </ol>
        </section>

        <section>
            <h2>Écrire un programme</h2>
            <p>
                Le fichier server.js est le point d'entrée à notre programme. Nous allons donc écrire notre code Javascript dans ce 
                fichier. Pour tester que tout fonctionne bien, nous pouvons écrire un programme simple comme ci-dessous.
            </p>
            <p>
                Éventuellement, nous allons séparer notre code dans plusieurs fichiers, mais nous nous contenterons de ce merveilleux 
                programme pour l'instant:
            </p>
            <CodeBlock language="js">{`console.log('J\\'aime le Javascript');`}</CodeBlock>
        </section>

        <section>
            <h2>Exécuter un programme</h2>
            <p>
                Pour exécuter notre programme, nous le ferons au travers de notre terminal dans Visual Studio Code. Vous pouvez 
                simplement taper la commande suivante:
            </p>
            <CodeBlock language="terminal">{`> npm start`}</CodeBlock>
            <ColoredBox title="Attention: ">
                Si vous avez une erreur disant que le fichier <IC>package.json</IC> est introuvable, assurez-vous que vous êtes bien
                dans le bon dossier de votre projet. Ce problème arrice souvent lorsque vous ouvrez le dossier parent de votre projet
                dans Visual Studio Code au lieu du dossier de votre projet lui-même.
            </ColoredBox>
        </section>
    </>
}