import Image from 'next/image';
import IC from '@/components/InlineCode'

import debugChrome from '@/public/img/debug-chrome.png';
import debugChromeTool from '@/public/img/debug-chrome-tool.png';
import debugChromeNetwork from '@/public/img/debug-chrome-network.png';

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Déboguer le client",
    description: "Présentation du débogueur disponible dans les navigateurs web pour identifier et corriger les problèmes du côté client.",
    keywords: ["debug", "client", "devtools", "console", "network", "javascript"],
    group: "notes"
}

export default function Page() {
    return <>
        <section>
            <h2>Outils de développement du navigateur</h2>
            <p>
                Une bonne façon de déboguer les erreurs sur le client est de mettre des <IC>console.log()</IC> sur
                des variables aux endroits où l'erreur est survenu selon vos stack trace. Cette technique peut
                être très rapide si vous êtes habitué de faire du débogage (comme moi). Toutefois, si cette
                technique ne vous sort aucun résultat, je vous suggère fortement d'utiliser le débogueur.
            </p>
            <p>
                Voici 3 façon d'y accèder:
            </p>
            <ul>
                <li>
                    Faire un clique droit dans votre page Web et cliquer sur <IC>Inspecter</IC>.
                </li>
                <li>
                    Dans le menu en haut à droite, cliquer sur <IC>Plus d'outils</IC> &gt; <IC>Outils de développement</IC>
                </li>
                <li>
                    Utiliser le raccourci clavier <IC>Ctrl</IC> + <IC>Shift</IC> + <IC>I</IC>
                </li>
            </ul>
        </section>

        <section>
            <h2>Interface du code source</h2>
            <p>
                Voici l'interface graphique de base pour l'accès au code dans votre navigateur ainsi que la
                description de certaines de ses sections:
            </p>
            <Image src={debugChrome} alt="Outils de développement de Chrome" />
            <ol>
                <li>
                    Onglet permettant de voir les fichiers du projet. En général, l'onglet <IC>Elements</IC> sert
                    pour visualiser le HTML et le CSS de la page Web. L'onglet <IC>Source</IC> sert plutôt à voir
                    le code Javascript (ou tout autre fichier) chargé par votre site Web.
                </li>
                <li>
                    La section à gauche montre tous le fichiers chargé par le site Web. Nous nous intéresserons
                    principalement aux fichiers Javascript ici.
                </li>
                <li>
                    La section des lignes de code et des points d'arrêt (breakpoint). Pour mettre un point d'arrêt
                    dans le navigateur, vous pouvez simplement cliquer sur le numéro de la ligne. Cliquer de
                    nouveau sur un point d'arrêt pour l'enlever. Les points d'arrêt forceront le code à s'arrêter
                    à une ligne spécifique et à attendre que vous lui indiquiez quoi faire.
                </li>
                <li>
                    Contenu du fichier sélectionné. Vous pouvez voir l'ensemble du fichier ici. Si vous êtes en
                    mode débogage, vous pouvez sélectionner du code ou mettre votre souris sur des variables pour
                    voir leur contenu.
                </li>
            </ol>
        </section>

        <section>
            <h2>Utilisation du débogueur</h2>
            <p>
                Si le code Javascript est arrêté à un point d'arrêt que vous avez mis, l'interface changera
                légèrement pour vous offrir de nouveaux outils:
            </p>
            <Image src={debugChromeTool} alt="Débogeur de Chrome" />
            <ol>
                <li>
                    La ligne présentement exécuté est toujours en bleu. Vous pouvez mettre votre curseur sur
                    des variables ou sélectionner du code autour de cette ligne pour voir leur résultat.
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

        <section>
            <h2>Interface de réseau</h2>
            <p>
                Si vous voulez voir les requêtes HTTP faites par votre application dans le navigateur web, vous pouvez
                utiliser l'onglet <IC>Network</IC> dans les outils de développement. Cet interface est très pratique pour voir ce qui 
                est réellement envoyé sur le réseau. Voici une image de cette interface avec quelques détails importants:
            </p>
            <Image src={debugChromeNetwork} alt="Onglet Réseau de Chrome" />
            <ol>
                <li>
                    Onglet <IC>Network</IC> dans les outils de développement. C'est ici que vous pouvez voir toutes
                    les requêtes HTTP faites par votre application site web.
                </li>
                <li>
                    Liste des requêtes HTTP faites par votre application. Les requêtes sont listées en ordre chronologique, où la 
                    première requête est en haut de la liste et la plus récente en bas. Vous pouvez cliquer sur une requête pour voir
                    plus de détails à son sujet.
                </li>
                <li>
                    Détails de la requête sélectionnée. Vous pouvez voir plusieurs informations sur la requête ici, comme les l'URL 
                    de la requête, la méthode HTTP utilisée, les données envoyées, le statut de la réponse et même les données de la
                    réponse. Vous pouvez voir beaucoup d'autres informations, mais nous ne les verrons pas dans ce cours.
                </li>
            </ol>
        </section>
    </>
}