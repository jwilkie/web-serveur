import IC from '@/components/InlineCode'
import CodeBlock from '@/components/CodeBlock'
import ColoredBox from '@/components/ColoredBox';
import Link from 'next/link';
/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Génération avec données",
    description: "Démonstration de la génération de HTML côté serveur avec des données dynamiques.",
    keywords: ["js", "node.js", "handlebars", "template", "ssr", "rendering", "data", "variables"],
    group: "notes"
}

const data = 
`app.get('/', (request, response) => {
    response.render('home', {
        texte: 'Ceci est un petit paragraphe de texte',
        nombre: 42
    });
});`;

const handlebars = 
`<section>
    <h2>Ajouter des données</h2>
    <p>
        {{texte}}
    </p>
    <input type="number" value="{{nombre}}">
</section>`;

const db = 
`app.get('/menu', async (request, response) => {
    // La fonction getMenu() retourne une liste de plats
    // provenant d'une base de données de restaurant
    let plats = await getMenu();

    response.render('menu', {
        plats: plats
    });
});`;

const layout =
`app.get('/ma-page', (request, response) => {
    response.render('ma-page', {
        // Données dynamiques pour le layout
        title: 'Titre de ma page',
        styles: ['/css/ma-page.css'],
        scripts: ['/js/ma-page.js'],

        // Autres données spécifiques à cette page
        autreDonnee: 'Autre données spécifique à cette page'
    });
});`;

export default function Page() {
    return <>
        <section>
            <h2>Ajouter des données</h2>
            <p>
                Jusqu'à présent, notre génération de pages avec Handlebars va seulement combiner le layout et le contenu spécifique 
                de chaque page. Il est toutefois possible de faire beaucoup plus. Une des fonctionnalités les plus intéressantes de
                Handlebars est la possibilité d'ajouter des données dynamiques dans nos pages. Cet ajout de données nous permet de 
                modifier le contenu de nos pages en fonction de données qui peuvent changer, comme des informations provenant d'une
                base de données ou des entrées utilisateur.
            </p>
            <p>
                Pour ajouter des données dynamiques au rendu de nos pages, nous devons les passer en second paramètre de l'utilisation 
                de la méthode <IC>response.render()</IC>, de la façon suivante:
            </p>
            <CodeBlock language="js">{data}</CodeBlock>
            <p>
                Dans le code ci-dessus, nous passons 2 données dynamiques au rendu de la page. Une variable <IC>texte</IC> qui 
                contient une chaîne de caractères et une variable <IC>nombre</IC> qui contient un nombre. Ces variables seront par la 
                suite accessibles dans le fichier de la page spécifique, ici <IC>home.handlebars</IC>, ainsi que dans le layout.
            </p>
            <p>
                Pour utiliser ces variables dans les fichiers Handlebars, nous utilisons la syntaxe <IC>{'{{variable}}'}</IC>, 
                où <IC>variable</IC> est le nom de la variable que nous voulons insérer. Voici un exemple: 
            </p>
            <CodeBlock language="handlebars">{handlebars}</CodeBlock>
            <p>
                Nous utilisons ici comme données des variables très simple pour nos données, mais il est tout à fait possible de 
                passer des données venant d'une base de données ou d'une autre source à nos fichiers <IC>.handlebars</IC>.
            </p>
            <CodeBlock language="js">{db}</CodeBlock>
            <ColoredBox title="À noter">
                Nous verrons plus en détail comment interagir avec les tableaux et les objets dans les fichiers Handlebars dans une
                autre page. Pour l'instant, sachez simplement que vous pouvez passer des données complexes à vos rendus.
            </ColoredBox>
        </section>

        <section>
            <h2>Modifier le layout dynamiquement</h2>
            <p>
                Puisque le layout est aussi un fichier Handlebars, il est aussi possible d'y insérer des données dynamiques. Nous 
                allons d'ailleurs fréquement insérer des données dynamiques dans le layout, comme pour le titre de la page ou pour 
                le chargement de fichiers CSS ou JavaScript spécifiques à certaines pages.
            </p>
            <p>
                Si vous allez voir la page des <Link href="/module-6/layout">layouts</Link>, vous verrez que nous avions inséré des
                variables dynamiques pour le titre de la page ainsi que pour le chargement de fichiers CSS et JavaScript. Ces
                variables sont aussi passées en second paramètre de la méthode <IC>response.render()</IC>, comme ceci:
            </p>
            <CodeBlock language="js">{layout}</CodeBlock>
        </section>
    </>;
}
