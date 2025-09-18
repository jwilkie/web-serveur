import Image from 'next/image';
import IC from '@/components/InlineCode'

import debugVSCode from '@/public/img/debug-server.png';
import debugVSCodeTool from '@/public/img/debug-server-tool.png';

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Déboguer le serveur",
    description: "Présentation du débogueur de Node.js dans Visual Studio Code, avec le terminal de débogage Javascript.",
    keywords: ["debug", "serveur", "nodejs", "vscode", "breakpoint", "inspection"],
    group: "notes"
}

export default function Page() {
    return <>
        <section>
            <h2>Débogueur de Visual Studio Code</h2>
            <p>
                Une bonne façon de déboguer les erreurs sur le serveur est de mettre des <IC>console.log()</IC>
                sur des variables aux endroits où l'erreur est survenu selon vos stack trace. Cette technique peut
                être très rapide si vous êtes habitué de faire du débogage. Toutefois, si cette technique ne vous sort aucun 
                résultat, je vous suggère fortement d'utiliser le débogueur.
            </p>
            <p>
                Voici comment le démarrer dans Visual Studio Code:
            </p>
            <Image src={debugVSCode} alt="Débogueur dans Visual Studio Code" />
            <ol>
                <li>
                    Ouvrir le fichier <IC>server.js</IC> de votre projet dans Visual Studio Code.
                </li>
                <li>
                    Cliquer sur l'icône du débogueur à la gauche de l'interface graphique (1).
                </li>
                <li>
                    Démarrer un terminal de débogage en cliquant sur le bouton <IC>Javascript Debug Terminal</IC> (2).
                </li>
                <li>
                    Démarrer votre serveur Node.js dans la console ouverte en utilisant la commande <IC>npm start</IC>.
                </li>
            </ol>
        </section>

        <section>
            <h2>Outil de débogage</h2>
            <p>
                Pour tomber en mode débogage, vous devez mettre un point d'arrêt dans votre code. Pour ce faire,
                vous n'avez qu'à cliquer à la gauche de la ligne de code sur laquelle vous voulez mettre le point
                d'arrêt. Vous verrez un petit point rouge apparaître. Si vous voulez retirer le point d'arrêt,
                vous n'avez qu'à cliquer dessus de nouveau.
            </p>
            <p>
                Lorsque le code est arrêté à un point d'arrêt, vous aurez les outils suivants qui apparaîtront:
            </p>
            <Image src={debugVSCodeTool} alt="Outils de débogage dans Visual Studio Code" />
            <ol>
                <li>
                    La ligne présentement exécuté est toujours en jaune. Vous pouvez mettre votre curseur sur
                    des variables pour voir leur contenu.
                </li>
                <li>
                    Outil indiquant au code de recommencer son exécution normale jusqu'au prochain point d'arrêt
                    s'il y en a un.
                </li>
                <li>
                    Outil indiquant au débogueur d'exécuter la ligne courante et de passer à la prochaine ligne de
                    code à exécuter.
                </li>
                <li>
                    Outil indiquant au débogueur d'entrer dans la fonction à la ligne courante, s'il y a lieu.
                </li>
                <li>
                    Outil indiquant au débogueur de sortir de la fonction à la ligne courante, s'il y a lieu.
                </li>
            </ol>
        </section>
    </>
}