import IC from '@/components/InlineCode'
import CodeBlock from '@/components/CodeBlock'
import OverflowContainer from '@/components/OverflowContainer'

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Middlewares",
    description: "Démonstration de l'installation et l'ajout de middlewares dans une application Express.js.",
    keywords: ["node.js", "npm", "express.js", "middlewares", "helmet", "cors", "compression"],
    group: "notes"
}

const install = 
`# Version longue
> npm i helmet
> npm i compression
> npm i cors

# Version courte
> npm i helmet compression cors`;

const expressMiddleware = 
`// Chargement des configurations
import 'dotenv/config'

// Importation de Express et de plusieurs middlewares
import express, { json } from 'express'
import helmet from 'helmet'
import compression from 'compression'
import cors from 'cors'

// Création du serveur
const app = express();

// Ajout de middlewares
app.use(helmet());
app.use(compression());
app.use(cors());
app.use(json());

// Démarrage du serveur
app.listen(process.env.PORT);`;

export default function Page() {
    return <>
        <section>
            <h2>Introduction</h2>
            <p>
                Par défaut, Express ne fait pas grand chose. On peut toutefois lui ajouter différentes fonctionnalités par la
                programmation de routes, que nous ferons plus tard, mais aussi par l'ajout de middlewares. Un middleware est une
                fonction qui s'exécute lorsque votre serveur recevra des requêtes du client ou lorsqu'il leur enverra des réponses.
                Ils sont très pratiques pour ajouter des fonctionnalités modulaires à votre application.
            </p>
            <p>
                Il existe de nombreux middlewares déjà préconçus que vous pouvez utiliser avec Express.js. Certains d'entres eux sont
                directement intégrés à Express.js, alors que d'autres doivent être installés par NPM. Dans cette page, nous ajouterons
                quelques middlewares populaires à notre serveur.
            </p>
        </section>

        <section>
            <h2>Installation des middlewares</h2>
            <p>
                À cette étape, nous voulons ajouter 4 middlewares à notre serveur. Les voici:
            </p>
            <OverflowContainer>
                <table>
                    <thead>
                        <tr>
                            <th>Nom</th><th>Description</th><th>Nouvelle installation</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>helmet</td>
                            <td>
                                Permet de sécuriser notre serveur face à différentes attaques HTTP connues. En développement,
                                ce middleware n'est pas très utile, mais lorsque notre application est mise en ligne sur
                                le web, ce middleware devient vraiment important pour protéger notre serveur.
                            </td>
                            <td>Oui</td>
                        </tr>
                        <tr>
                            <td>compression</td>
                            <td>
                                Permet compresser et décompresser les requêtes et les réponses si possible pour envoyer
                                des données moins volumineuse sur le réseau. Bref, les données sont envoyées plus rapidement 
                                sur l'Internet.
                            </td>
                            <td>Oui</td>
                        </tr>
                        <tr>
                            <td>cors</td>
                            <td>
                                Permet d'activer les requêtes pour le Cross-Origin Resource Sharing (CORS). Ce type de
                                requête est envoyé lorsque nous utilisons plusieurs serveurs pour notre application web. Ce
                                middleware est très pratique pour gérer les problèmes de sécurité liés à ce type de requêtes.
                            </td>
                            <td>Oui</td>
                        </tr>
                        <tr>
                            <td>json</td>
                            <td>
                                Permet de lire les données envoyées dans le format JSON dans une requête HTTP. Dans ce cours, nous
                                utiliserons uniquement les données au format JSON, ce qui rend ce middleware essentiel. Sans ce 
                                middleware, vous ne pourrez pas lire et traiter les données envoyées à notre serveur.
                            </td>
                            <td>Non</td>
                        </tr>
                    </tbody>
                </table>
            </OverflowContainer>
            <p>
                Tous ces middlewares, à l'exception de <IC>json</IC>, doivent être installés par NPM. Pour ce faire, nous devons 
                entrer les commandes suivantes dans notre terminal:
            </p>
            <CodeBlock language="terminal">{install}</CodeBlock>
        </section>

        <section>
            <h2>Utilisation des middlewares</h2>
            <p>
                Pour utiliser ces middlewares dans Express, nous devons les importer avec un <IC>import</IC>, mais 
                aussi utiliser la fonction <IC>app.use</IC> de la façon suivante:
            </p>
            <CodeBlock language="js">{expressMiddleware}</CodeBlock>
            <p>
                Vous noterez que les middlewares doivent être intégrer dans le serveur express  avec <IC>app.use</IC> avant
                le démarrage du serveur qui se fait avec <IC>app.listen</IC>.
            </p>
        </section>
    </>
}