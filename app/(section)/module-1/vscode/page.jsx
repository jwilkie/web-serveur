import Image from 'next/image';

import extension from '@/public/img/vscode-extension.png';
import liveServer from '@/public/img/live-server.png';

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Visual Studio Code",
    description: "Présentation de l'éditeur de code utilisé dans le cours, Visual Studio Code.",
    keywords: ["ide", "éditeur", "code", "vscode", "outil"],
    group: "notes"
}

export default function Page() {
    return <>
        <section>
            <h2>Tout en un</h2>
            <p>
                Visual Studio Code est un éditeur de texte gratuit et open source de Microsoft. Il est sortie récemment et est 
                devenu très populaire rapidement. Depuis plusieurs années, le site Web Stack Overflow indique qu&apos;il est 
                l&apos;éditeur de code/texte le plus utilisé selon leurs sondages. Il doit principalement sont engouement à son 
                extensibilité et à sa personnalisation. En effet, s&apos;il ne fait pas quelque chose, il existe probablement une 
                extension permettant de le faire. Les extensions sont aussi facile à créer et facile à trouver à partir de son 
                interface graphique.
            </p>
            <p>
                Même si cet éditeur est très léger, il possède des fonctionnalités très puissantes comme l&apos;exécution et le 
                débogage du code, le support du versionnement avec Git, l&apos;utilisation d&apos;une console interne et l&apos;exécution de 
                commande directement dans son interface.
            </p>
        </section>

        <section>
            <h2>Téléchargement</h2>
            <p>
                Vous pouvez télécharger Visual Studio Code en cliquant sur le lien ci-dessous.
            </p>
            <p>
                <a href="https://code.visualstudio.com/Download">Visual Studio Code</a>
            </p>
            <p>
                Nous verrons comment utiliser ce logiciel majoritairement en classe. Il contient de nombreuses fonctionnalités 
                que nous verrons au courant de la session. Si vous voulez en apprendre davantages, vous pouvez consulter 
                la <a href="https://code.visualstudio.com/docs/">documentation</a> de Visual Studio Code.
            </p>
        </section>

        <section>
            <h2>Extension de VSCode</h2>
            <p>
                Dans le cadre de ce cours, nous utiliserons une extension de Visual Studio Code que vous devrez absolutment 
                installer. Cette extension se nomme Live Server et nous sera utile pour simuler la mise d&apos;un site web en ligne. 
                Pour en faire son installation, suivez les étapes suivantes:
            </p>
            <ol>
                <li>
                    Cliquer sur l&apos;icône d&apos;extension dans l&apos;interface de Visual Studio Code.
                    <Image src={extension} alt="Icône d'extension dans VSCode" />
                </li>
                <li>
                    Dans la barre de recherche du menu qui s&apos;est ouvert, faite la recherche de &quot;live server&quot;.
                </li>
                <li>
                    Installer l&apos;extension Live Server par Ritwick Dey en cliquant sur le bouton bleu d&apos;installation.
                    <Image src={liveServer} alt="Icône d'extension dans VSCode" />
                </li>
            </ol>
            <p>
                L&apos;utilisation de cet extension vous sera montré en classe, mais vous pouvez toujours consulter 
                sa <a href="https://github.com/ritwickdey/vscode-live-server">documentation</a> pour avoir plus d&apos;information.
            </p>
        </section>

        <section>
            <h2>Alternatives</h2>
            <p>
                Il existe de nombreux autres éditeurs de code qui peuvent être utilisé pour le web. Dans le cadre de ce cours, 
                nous utiliserons Visual Studio Code, mais vous pouvez en utiliser un autre si vous préférez. Sachez seulement 
                que votre enseignant ne pourra pas vous aider si vous avez des problèmes avec ces éditeurs.
            </p>
            <p>
                Voici une courte liste non exhaustive de plusieurs éditeurs de code connu pour le web. Si l&apos;un d&apos;entre eux vous 
                intéresse, je vous recommande une petite recherche sur votre moteur de recherche favori pour avoir plus 
                d&apos;information.
            </p>
            <ul>
                <li>Notepad++</li>
                <li>Sublime Text</li>
                <li>Brackets</li>
                <li>Atom</li>
                <li>Visual Studio</li>
                <li>WebStorm</li>
            </ul>
        </section>
    </>
}