import IC from '@/components/InlineCode'
import CodeBlock from '@/components/CodeBlock'
import OverflowContainer from '@/components/OverflowContainer';

const importBase = `import { readFile } from 'node:fs';`;

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Importations de code",
    description: "Démonstration de l'importation de modules dans Node.js et de leur provenance.",
    keywords: ["node.js", "import", "from"],
    group: "notes"
}

export default function Page() {
    return <>
        <section>
            <h2>Import</h2>
            <p>
                Comme avec la plupart des autres langages de programmation, nous utiliserons des librairies
                internes et externe à l'environnement de développement. Lorsque c'est le cas, nous devrons
                importer ces librairies dans notre code, un peu de la même façon que les <IC>import</IC> en Java,
                les <IC>using</IC> en C# ou que les <IC>#include</IC> en C++.
            </p>
            <p>
                Avec Node.js, nous importerons les modules des librairies avec le mot-clé <IC>import</IC>:
            </p>
            <CodeBlock language="js">{importBase}</CodeBlock>
            <p>
                Entre les accolades, nous mettons les différentes fonctionnalités que nous voulons importer dans notre
                code. La chaîne de caractère après le <IC>from</IC> indique de quel module nous chargeons ces
                fonctionnalités. Différents modules ont différentes fonctionnalités.
            </p>
        </section>

        <section>
            <h2>Modules souvent utilisés</h2>
            <p>
                Il existe une énorme quantité de libraires externe à Node.js sur NPM que nous pourrons télécharger
                plus tard. Il existe aussi plusieurs librairies internes à Node.js que nous utiliserons. Voici une
                liste contenant plusieurs des librairies que nous utiliserons durant le cours.
            </p>
            <OverflowContainer>
                <table>
                    <thead>
                        <tr>
                            <th>Nom</th><th>Interne/Externe</th><th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>node:fs</td>
                            <td>Interne</td>
                            <td>Permet d'intéragir avec le système de fichier de l'ordinateur</td>
                        </tr>
                        <tr>
                            <td>node:path</td>
                            <td>Interne</td>
                            <td>Utilitaires pour faciliter l'utilisation des chemins d'accès sur votre ordinateur</td>
                        </tr>
                        <tr>
                            <td>node:readline</td>
                            <td>Interne</td>
                            <td>Permet de contrôler l'écriture et la lecture dans la console ou dans un fichier</td>
                        </tr>
                        <tr>
                            <td>node:crypto</td>
                            <td>Interne</td>
                            <td>Utilitaires pour l'encryption et la sécurité informatique</td>
                        </tr>
                        <tr>
                            <td>express</td>
                            <td>Externe</td>
                            <td>Permet de créer des serveurs Web</td>
                        </tr>
                        <tr>
                            <td>passport</td>
                            <td>Externe</td>
                            <td>Permet de gérer l'authentification à un service web</td>
                        </tr>
                        <tr>
                            <td>helmet</td>
                            <td>Externe</td>
                            <td>Permet de sécuriser un serveur web utilisant Express</td>
                        </tr>
                        <tr>
                            <td>express&#8209;session</td>
                            <td>Externe</td>
                            <td>Permet de créer des sessions sécurisées pour permettre l'authentification avec Express</td>
                        </tr>
                        <tr>
                            <td>bcrypt</td>
                            <td>Externe</td>
                            <td>Fonction de hachage pour les mots de passe</td>
                        </tr>
                        <tr>
                            <td>mysql</td>
                            <td>Externe</td>
                            <td>Permet de faire des connections et des requêtes à des bases de données MySQL/MariaDB</td>
                        </tr>
                    </tbody>
                </table>
            </OverflowContainer>
        </section>
    </>;
}
