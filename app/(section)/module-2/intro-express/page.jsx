import IC from '@/components/InlineCode'
import CodeBlock from '@/components/CodeBlock'

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Introduction à Express.js",
    description: "Démonstration de la création d'un serveur web de base avec Express.js.",
    keywords: ["node.js", "express", "serveur"],
    group: "notes"
}

const express = 
`import express from 'express';

// Création du serveur
const app = express();

// Démarrage du serveur
const PORT = 5000;
app.listen(PORT);`;

export default function Page() {
    return <>
        <section>
            <h2>Introduction</h2>
            <p>
                Express.js est une librairie de code permettant de facilement créer des serveurs Web efficace avec Node.js. C'est la 
                librairie principale que nous utiliserons dans ce cours. Même si la base de Express.js est assez facile à utiliser, 
                c'est une librairie qui utilise des notions complexes du protocole HTTP. On peut donc autant faire quelque chose de 
                simple ou de très complexe avec celle-ci.
            </p>
            <p>
                Si vous voulez plus d'information sur cette librairie de code, je vous suggère fortement d'aller voir sa 
                documentation officielle. C'est d'ailleurs l'une des principale source utilisé pour la création de ce cours.
            </p>
            <p>
                <a href="https://expressjs.com/" target="_blank">Express</a>
            </p>
        </section>

        <section>
            <h2>Création du serveur Express.js</h2>
            <p>
                Pour utiliser Express, vous devez premièrement l'installer. Pour ce faire, entrez la commande suivante dans votre 
                terminal:
            </p>
            <CodeBlock language="terminal">&gt; npm i express</CodeBlock>
            <p>
                Par la suite, vous pourrez commencer à écrire le code de base de votre application dans votre fichier <IC>server.js</IC>. 
                Voici un squelette de code de base pour commencer à utiliser Express:
            </p>
            <CodeBlock language="js">{express}</CodeBlock>
            <p>
                Voici quelques informations importantes à la compréhension de ce code:
            </p>
            <ul>
                <li>
                    <CodeBlock language="js">{`import express from 'express';`}</CodeBlock>
                    <p>
                        Pour utiliser une librairie de code, nous devons utiliser le mot-clé import. La librairie de code de Express 
                        nous expose une fonction que nous pourrons utiliser pour créer notre serveur Web.
                    </p>
                </li>
                <li>
                    <CodeBlock language="js">{`const app = express();`}</CodeBlock>
                    <p>
                        Création de l'instance de Express.js. Cette instance nous permettra de configurer notre serveur web dans les 
                        prochaines étapes de notre développement.
                    </p>
                </li>
                <li>
                    <CodeBlock language="js">{`app.listen(PORT);`}</CodeBlock>
                    <p>
                        Démarrage du serveur Web. Celui-ci écoutera les requêtes sur le port spécifié en paramètre. L'exécution 
                        de cette fonction doit se faire après que votre serveur soit configuré, donc généralement vers la fin du 
                        fichier <IC>server.js</IC>.
                    </p>
                </li>
            </ul>
        </section>
    </>
}