import IC from '@/components/InlineCode'
import CodeBlock from '@/components/CodeBlock'
import ColoredBox from '@/components/ColoredBox';

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Génération d'une page",
    description: "Démonstration de la génération de HTML côté serveur avec des éléments génériques et spécifiques.",
    keywords: ["js", "node.js", "handlebars", "template", "ssr", "rendering", "spécifiques", "génériques", "layout"],
    group: "notes"
}

const view =
`<section>
    <h2>Contenu spécifique d'une page</h2>
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    </p>
</section>
<section>
    <h2>Génération de la page</h2>
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    </p>
</section>`;

const route = 
`app.get('/ma-route', (request, response) => {
   response.render('ma-page');
});`;

const mainEx =
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exemple</title>
</head>
<body>
    <header>
        <h1>Titre principal</h1>
    </header>
    <main>
        {{{body}}}
    </main>
    <footer>
        &copy; Jonathan Wilkie
    </footer>
</body>
</html>`;

const viewEx =
`<section>
    <h2>Sous-titre</h2>
    <p>
        Ceci est le contenu spécifique de la page.
    </p>
</section>`;

const finalEx =
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exemple</title>
</head>
<body>
    <header>
        <h1>Titre principal</h1>
    </header>
    <main>
        <section>
            <h2>Sous-titre</h2>
            <p>
                Ceci est le contenu spécifique de la page.
            </p>
        </section>
    </main>
    <footer>
        &copy; Jonathan Wilkie
    </footer>
</body>
</html>`;

export default function Page() {
    return <>
        <section>
            <h2>Contenu spécifique d'une page</h2>
            <p>
                Nous avons vu que le contenu commun à toutes les pages de notre site web se trouve dans le 
                fichier <IC>main.handlebars</IC>. Le contenu spécifique, quant à lui, se trouve dans des fichiers ayant eux aussi 
                l'extension <IC>.handlebars</IC> mais qui se trouvent directement dans le dossier <IC>/views</IC>. Par exemple,
                nous pourrions mettre le contenu spécifique de la page d'accueil dans un fichier <IC>home.handlebars</IC> et celui 
                de la page de contact dans un fichier <IC>contact.handlebars</IC>.
            </p>
            <p>
                Dans ces fichiers, nous n'avons pas besoin de répéter le code commun qui se trouve dans le layout. Nous mettons
                uniquement le code HTML spécifique à cette page. Souvent, ce code est le contenu de la balise <IC>{'<main>'}</IC>.
                Le fichier peut donc être aussi simple que ceci:
            </p>
            <CodeBlock language="handlebars">{view}</CodeBlock>
        </section>
        
        <section>
            <h2>Combinaison de fichier</h2>
            <p>
                Lorsque handlebars génère une page, il combine le layout <IC>main.handlebars</IC> avec un fichier de page spécifique.
                Il remplace le marqueur <IC>{'{{{body}}}'}</IC> du layout par le contenu du fichier de la page.
            </p>
            <p>
                Voici un exemple pour mieux l'illustrer. Les fichiers suivants existent dans notre projet:
            </p>
            <CodeBlock language="handlebars">{mainEx}</CodeBlock>
            <CodeBlock language="handlebars">{viewEx}</CodeBlock>
            <p>
                Lorsque handlebars génère la page, il combine les deux fichiers pour générer le HTML final suivant:
            </p>
            <CodeBlock language="html">{finalEx}</CodeBlock>
        </section>

        <section>
            <h2>Génération de la page</h2>
            <p>
                Pour générer une page spécifique avec Express et Handlebars, nous devons programmer la route qui retournera cette 
                page. Dans votre fichier <IC>server.js</IC>, vous aurez donc à programmer une route pour chaque page de votre site 
                web. Chacune de ces routes utilisera la méthode HTTP <IC>GET</IC> et aura la forme suivante:
            </p>
            <CodeBlock language="js">{route}</CodeBlock>
            <p>
                Dans le code ci-dessus, vous pouvez voir que nous utilisons la méthode <IC>response.render()</IC>. Cette méthode
                s'occupe de générer le HTML de la page en utilisant le layout <IC>main.handlebars</IC> et le fichier de la page
                spécifié en paramètre, dans ce cas-ci <IC>ma-page.handlebars</IC>. Cette fonction s'occupe aussi de retourner en 
                réponse le HTML généré au client qui a fait la requête.
            </p>
            <p>
                Bref, Si un client contacte la route <IC>/ma-route</IC> de notre serveur, il recevra en réponse le HTML généré 
                en combinant le layout <IC>main.handlebars</IC> et le fichier <IC>ma-page.handlebars</IC>
            </p>
            <ColoredBox title="Attention">
                Lorsque vous spécifiez la page à générer dans la méthode <IC>response.render()</IC>, vous ne devez pas
                inclure l'extension <IC>.handlebars</IC>. Vous devez seulement spécifier le nom du fichier sans l'extension.
            </ColoredBox>
        </section>
    </>;
}
