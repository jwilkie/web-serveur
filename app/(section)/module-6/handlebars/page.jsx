import IC from '@/components/InlineCode'
import CodeBlock from '@/components/CodeBlock'
import ColoredBox from '@/components/ColoredBox';
import { File, FileExplorer, Folder } from '@/components/FileExplorer';

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Handlebars",
    description: "Présentation de l'outil de génération de HTML Handlebars et de sa configuration.",
    keywords: ["js", "node.js", "handlebars", "template", "ssr", "rendering", "configuration", "views"],
    group: "notes"
}

const server =
    `// ...

// Importer les fichiers et librairies
// ...
import { engine } from 'express-handlebars';

// Création du serveur
const app = express();

// Configuration d'engin de rendu
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');

// Ajout de middlewares
// ...`;

export default function Page() {
    return <>
        <section>
            <h2>Introduction</h2>
            <p>
                Handlebars est l'un des nombreux engins de génération de HTML, que l'on appelle aussi engin de rendus HTML. Ces
                engins nous permettent de générer du HTML à partir de données. On l'utilise fréquement pour répéter certaines
                sections du HTML automatiquement ou encore pour cacher ou afficher certaines parties du HTML en fonction des données.
            </p>
            <p>
                Dans notre cas, nous utiliserons Handlebars pour générer le HTML sur notre serveur Express. Nous utiliserons donc la
                librairie <IC>express-handlebars</IC> que vous pouvez télécharger dans votre projet avec la commande suivante:
            </p>
            <CodeBlock language="terminal">npm i express-handlebars</CodeBlock>
            <p>
                Il exsite de nombreuses implémentation de Handlebars dans Express, mais celle que vous installerez avec la commande
                ci-dessus est la plus populaire et la plus facile à utiliser.
            </p>
        </section>

        <section>
            <h2>Configurations du projet</h2>
            <p>
                Pour utiliser Handlebars dans Express, nous devons faires quelques configurations. La première consiste à créer une
                nouvelle structure de dossier dans notre projet. À la racine de votre projet, vous devrez créer un
                dossier <IC>views</IC> dans lequel vous mettrez les dossiers <IC>layouts</IC> et <IC>partials</IC>. Vous créerez
                aussi le fichier <IC>main.handlebars</IC> que vous mettrez dans le dossier <IC>layouts</IC>.
            </p>
            <p>
                À la fin, vous devez avoir une structure similaire à ceci dans votre dossier de projet:
            </p>
            <FileExplorer>
                <Folder name="model" />
                <Folder name="public" />
                <Folder name="views" highlight>
                    <Folder name="layouts">
                        <File name="main.handlebars" />
                    </Folder>
                    <Folder name="partials" />
                </Folder>
                <File name=".env" />
                <File name="server.js" />
            </FileExplorer>
            <p>
                Voici quelques explications sur cette structure de dossier:
            </p>
            <ul>
                <li>
                    Le dossier <IC>views</IC> est le répertoire où nous mettrons maintenant les pages HTML de notre site web. Le
                    dossier <IC>public</IC> est toujours là pour les fichiers statiques comme les images, les fichiers CSS et
                    JavaScript, mais les pages HTML seront déplacées vers le nouveau dossier. De plus, les pages HTML devront
                    maintenant avoir l'extension <IC>.handlebars</IC> au lieu de <IC>.html</IC>. Ça nous permet d'utiliser les
                    fonctionnalités de Handlebars que nous verrons dans une autre page.
                </li>
                <li>
                    Le dossier <IC>layouts</IC> est le répertoire où nous mettrons les gabarits de nos pages. Un gabarit est une page
                    HTML qui contient des sections communes à toutes les pages de notre site web, comme l'entête, le pied de page et 
                    les menus de navigation. Le fichier <IC>main.handlebars</IC> est le gabarit principal de notre site web. Toutes 
                    les pages utiliseront ce gabarit par défaut.
                </li>
                <li>
                    Finalement, le dossier <IC>partials</IC> est le répertoire où nous mettrons les fragments de code HTML que nous
                    voulons réutiliser ou isoler dans plusieurs pages ou gabarits.
                </li>
            </ul>
        </section>

        <section>
            <h2>Configurations du serveur</h2>
            <p>
                Maintenant que nous avons configuré la structure de dossier de notre projet, nous devons configurer notre serveur
                Express pour utiliser Handlebars. Pour ce faire, nous devons modifier le fichier <IC>server.js</IC> de notre projet.
            </p>
            <p>
                Voici les lignes à ajouter:
            </p>
            <CodeBlock language="js">{server}</CodeBlock>
            <p>
                Voici quelques explications sur ces lignes:
            </p>
            <ul>
                <li>
                    Nous importons la fonction <IC>engine()</IC> de la librairie <IC>express-handlebars</IC>. Cette fonction nous
                    permet de créer un moteur de rendu Handlebars pour Express.
                </li>
                <li>
                    Nous utilisons la méthode <IC>app.engine()</IC> pour définir un moteur dans Express. Il est possible d'avoir
                    plusieurs moteurs dans un même projet, mais nous garderons le projet simple et nous n'en utiliserons qu'un seul.
                </li>
                <li>
                    La fonction <IC>app.set()</IC> est utilisée pour définir des variables dans Express. Nous l'utilisons ici pour
                    définir le moteur de rendu par défaut et le répertoire par défaut des pages web.
                </li>
            </ul>
        </section>
        
        <section>
            <h2>Autres engins de rendu</h2>
            <p>
                Il existe de nombreux autres engins de rendu. En voici une courte liste qui fonctionne avec Express:
            </p>
            <ul>
                <li>
                    <a href="https://pugjs.org/api/getting-started.html" target="_blank">Pug</a>
                </li>
                <li>
                    <a href="https://www.npmjs.com/package/mustache" target="_blank">Mustache</a>
                </li>
                <li>
                    <a href="https://ejs.co/" target="_blank">EJS</a>
                </li>
            </ul>
            <p>
                Nous avons décidé d'utiliser Handlebars dans le cours puisqu'il gardait la syntaxe de base du HTML et que 
                l'intégration des données se faisait de façon très similaire à d'autres plateformes de programmation web avancé que 
                vous verrez dans d'autres cours. En fait, il se base sur l'engin Mustache, présent dans la liste ci-dessus, qui est 
                utilisé comme base pour plusieurs engin de génération de code. Vous y trouverez donc des similitudes avec plusieurs 
                autres librairies de code.
            </p>
        </section>
    </>;
}
