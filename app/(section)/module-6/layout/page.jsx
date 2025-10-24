import IC from '@/components/InlineCode'
import CodeBlock from '@/components/CodeBlock'
import ColoredBox from '@/components/ColoredBox';

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Layouts",
    description: "Démonstration de la réutilisation de code avec les layouts dans Handlebars.",
    keywords: ["js", "node.js", "handlebars", "template", "ssr", "rendering", "layouts", "réutilisation", "header", "footer"],
    group: "notes"
}

const main = 
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{title}}</title>

    <link rel="stylesheet" href="/css/global.css">
    {{#each styles}}
        <link rel="stylesheet" href="{{this}}">
    {{/each}}

    {{#each scripts}}
        <script type="module" src="{{this}}"></script>
    {{/each}}
</head>
<body>
    {{{body}}}
</body>
</html>`;

export default function Page() {
    return <>
        <section>
            <h2>Éléments génériques et spécifiques</h2>
            <p>
                Dans une application web, certaines parties du code HTML sont communes à plusieurs pages. Par exemple, 
                l'entête <IC>{'<header>'}</IC> et le pied de page <IC>{'<footer>'}</IC> sont souvent les mêmes sur toutes les pages.
                Il en est généralement de même pour les menus de navigation et plusieurs autres petits éléments du site web. On 
                appelle ces parties communes du code des <strong>éléments génériques</strong>.
            </p>
            <p>
                À l'inverse, chaque page a aussi des parties spécifiques qui lui sont propres. Par exemple, le contenu principal
                de la page d'accueil est différent de celui de la page de contact. On appelle ces parties spécifiques du code 
                des <strong>éléments spécifiques</strong>.
            </p>
            <p>
                Avec ce que vous avez appris jusqu'à présent, nous devons copier-coller le code commun dans chaque page HTML que nous
                créerons. Cela peut rapidement devenir lourd et difficile à maintenir, surtout lorsqu'on doit modifier l'un de ces 
                éléments communs. C'est ici que les <IC>layouts</IC> sont intéressants.
            </p>
        </section>

        <section>
            <h2>main.handlebars</h2>
            <p>
                Un <em>layout</em> est un fichier HTML qui contient le code commun à toutes les pages de notre site web. Avec 
                handlebars, ce fichier s'appelle <IC>main.handlebars</IC> et se trouve dans le dossier <IC>/views/layouts</IC>.
                Nous mettrons dans ce fichier tout le code HTML de base, comme les 
                balises <IC>{'<html>'}</IC>, <IC>{'<head>'}</IC> et <IC>{'<body>'}</IC>, ainsi que les éléments génériques comme
                le <IC>{'<header>'}</IC> et le <IC>{'<footer>'}</IC>.
            </p>
            <p>
                À la base le fichier <IC>main.handlebars</IC> pourrait ressembler à ceci:
            </p>
            <CodeBlock language="handlebars">{main}</CodeBlock>
            <p>
                Voici quelques explications sur ce code:
            </p>
            <ul>
                <li>
                    Dans le code ci-dessus, le marqueur <IC>{'{{{body}}}'}</IC> est un espace réservé qui sera remplacé par le contenu 
                    spécifique de chaque page. C'est ici que le contenu unique de chaque page sera inséré dans le gabarit.
                </li>
                <li>
                    Le marqueur <IC>{'{{title}}'}</IC> est une variable qui peut être définie dynamiquement pour chaque page. Cela
                    permet de changer le titre de la page en fonction du contenu spécifique de chaque page. Nous verrons comment 
                    définir cette variable dans une autre page.
                </li>
                <li>
                    Les blocs <IC>{'{{#each styles}}'}</IC> et <IC>{'{{#each scripts}}'}</IC> permettent d'inclure dynamiquement des
                    fichiers CSS et Javascript spécifiques à chaque page. Nous verrons aussi comment définir ces variables et comment
                    les utiliser avec les instructions <IC>{'{{#each}}'}</IC> dans une autre page.
                </li>
                <li>
                    Le CSS doit aussi être séparé entre une partie générique commune à toutes les pages et une partie spécifique à chaque page.
                    Vous devrez donc généralement créer un fichier <IC>global.css</IC> contenant le CSS commun à toutes les pages, et un fichier
                    CSS spécifique pour chaque page. Le fichier <IC>global.css</IC> sera inclus dans le fichier <IC>main.handlebars</IC>, comme 
                    indiqué ci-dessus.
                </li>
            </ul>
            <p>
                Vous pouvez ajouter de nombreux autres éléments dans ce fichier. À vous de déterminer ce qui est commun à 
                toutes vos pages et de l'ajouter dans ce fichier. Vous pouvez insérer des entêtes, des menus de navigation, des pieds 
                de page, mais aussi des fichiers CSS et Javascript communs à toutes les pages.
            </p>
        </section>

        <section>
            <h2>Obligation</h2>
            <p>
                Il est important de noter que le fichier <IC>main.handlebars</IC> est nécessaire pour que Handlebars fonctionne. Si 
                vous ne créez pas ce fichier, Handlebars ne pourra pas afficher vos pages et vous obtiendrez une erreur. Assurez-vous 
                de bien créer ce fichier et d'y mettre le code HTML de base commun de votre site web.
            </p>
            <ColoredBox title="À noter">
                Il est possible de créer plusieurs fichiers de <em>layout</em> dans le dossier <IC>/views/layouts</IC>. Celà peut 
                arriver dans les plus grosses applications web où certaines pages ont des structures très différentes. Nous ne 
                verrons pas comment y arriver dans ce cours, mais sachez que c'est possible.
            </ColoredBox>
        </section>
    </>;
}
