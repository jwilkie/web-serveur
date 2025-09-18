import IC from '@/components/InlineCode'
import CodeBlock from '@/components/CodeBlock'

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Erreurs communes",
    description: "Guide des erreurs communes rencontrées lors de l'utilisation de l'API Fetch et comment les identifier, prévenir et corriger.",
    keywords: ["erreurs", "fetch", "debugging", "cors", "network", "http"],
    group: "notes"
}

const stacktraceError =
`TypeError: Cannot read property 'split' of undefined`;

const stacktraceFile =
`at Object.exports.getPath (D:\\Data\\Development\\my-project\\maze.js:59:24)`;

export default function Page() {
    return <>
        <section>
            <h2>Introduction</h2>
            <p>
                Lorsque vous avez des bogues, des erreurs ou des comportements bizarres dans vos projets Web client-serveur, il peut
                être difficile d'identifier la source de ceux-ci pour les corriger. Ceci est principalement dû à:
            </p>
            <ul>
                <li>
                    Le langage Javascript qui est interprété, et qui n'affiche pas beaucoup d'erreurs tant que vous ne lancez pas le
                    code.
                </li>
                <li>
                    Le langage Javascript qui est faiblement typé, ce qui peut causer des erreurs si des variables ne contiennent pas
                    les bonnes données.
                </li>
                <li>
                    L'environnement client-serveur où il est difficile de savoir si les erreurs sont sur le client ou serveur.
                </li>
                <li>
                    L'environnement client-serveur où la majorité de l'information qui transite sur le réseau n'est pas facile à voir.
                </li>
            </ul>
            <p>
                Ceci étant dit, après vous être habitué au langage, aux outils et à l'environnement client-serveur, vous aurez beaucoup
                plus de facilité à identifier vos erreurs et à les corriger.
            </p>
            <p>
                Ce document a pour but de vous montrer plusieurs erreurs ou messages d'erreurs typiques et de vous montrer comment
                identifier vos problèmes avec ceux-ci.
            </p>
        </section>

        <section>
            <h2>Stack trace</h2>
            <p>
                Lorsque vous avez une erreur ou un bogue dans votre application, une des premières choses à faire est de regarder la
                console Javascript pour voir si on y trouve des messages d'erreurs. Comme nous sommes dans un environnement client-serveur,
                nous avons 2 consoles à vérifier: la console du navigateur (client) et la console dans votre éditeur de code (serveur).
            </p>
            <p>
                Lorsque vous avez une erreur dans une console, soit celle de Node.js ou celle du navigateur Web, vous avez généralement
                une stack trace dans la console. Une stack trace est un texte indiquant où l'erreur est survenu dans la chaîne d'appel
                de fonctions. Dans plusieurs cas, la stack trace est difficile à lire si vous ne savez pas où regarder.
            </p>
            <ol>
                <li>
                    Lire l'erreur au sommet de la stack trace. Elle indique souvent ce qui a causé l'erreur.
                    <CodeBlock language="terminal">{stacktraceError}</CodeBlock>
                    Dans l'exemple ci-dessus, on voit qu'on a appelé la fonction <IC>split</IC> à partir d'une
                    variable qui est non défini.
                </li>
                <li>
                    Essayer de trouver le premier fichier qui appartient au projet à partir du haut de la stack
                    trace où l'erreur est survenu. Si le fichier est un fichier d'une librairie de votre projet,
                    vous pouvez généralement l'ignorer.
                    <CodeBlock language="terminal">{stacktraceFile}</CodeBlock>
                </li>
                <li>
                    Aller dans votre code dans le fichier à la ligne spécifié par la stack trace. Dans l'exemple
                    ci-dessus, la ligne est 59. Vous pouvez aussi voir la colonne (le nombre de caractères depuis
                    le début de la ligne) immédiatement après le numéro de ligne. Dans l'exemple ci-dessus, la
                    colonne est 24.
                </li>
                <li>
                    À partir du message d'erreur et de l'endroit où l'erreur est survenu, essayer de réparer le
                    problème.
                </li>
            </ol>
        </section>

        <section>
            <h2>Erreur HTTP 4XX</h2>
            <p>
                Si l'erreur que vous avez dans la console du navigateur est une erreur HTTP entre 400 et 499,
                vous avez 2 choix:
            </p>
            <ol>
                <li>
                    C'est une erreur 404 parce que la route que vous tentez de rejoindre n'existe pas. Ce problème
                    est souvent causé par une faute dans le nom de la route ou par l'utilisation de la
                    mauvaise méthode HTTP. Lisez bien la stack trace pour identifier où l'erreur survient et
                    valider que votre méthode et route HTTP sont valide entre le client et le serveur.
                </li>
                <li>
                    C'est une erreur causé par la validation sur votre serveur. Ce problème ne vous arrivera pas à ce point dans
                    notre serveur puisque nous ne programmons pas encore de validation, mais il arrivera assurément plus tard. Ce
                    problème arrive souvent lorsque votre validation sur le serveur est erronée et retourne des codes d'erreur
                    invalide. Ce problème peut aussi arriver si vos données envoyées au serveur sont mauvaises. Ces erreurs sont parfois
                    un peu plus difficile à trouver puisque nous devons regarder beaucoup de code pour
                    l'identifier. Voici quelques trucs pour vous aider:
                    <ol>
                        <li>
                            Dans votre client, mettre un <IC>console.log()</IC> des données avant de les envoyés
                            pour vous assurer qu'elles sont valides.
                        </li>
                        <li>
                            Dans le serveur, mettre un <IC>console.log()</IC> des données reçu pour vous assurer
                            qu'elles sont valides.
                        </li>
                        <li>
                            Assurez-vous que les noms des variables dans le client et le serveur sont exactement les
                            mêmes.
                        </li>
                        <li>
                            Utiliser le débogueur dans votre validation sur le serveur pour identifier quelle
                            partie de votre validation ne fonctionne pas.
                        </li>
                    </ol>
                </li>
            </ol>
        </section>

        <section>
            <h2>Erreur HTTP 5XX</h2>
            <p>
                Si l'erreur que vous avez dans la console du navigateur est une erreur HTTP entre 500 et 599,
                c'est que votre serveur a eu une erreur l'empêchant de retourner une réponse correcte au
                client.
            </p>
            <p>
                Ces erreurs sont généralement une erreur à l'exécution du serveur. Vous pouvez donc voir la vrai
                stack trace de l'erreur dans la console du serveur et utiliser les techniques ci-dessus pour
                l'identifier et la corriger.
            </p>
        </section>
    </>
}