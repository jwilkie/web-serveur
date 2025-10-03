import IC from '@/components/InlineCode'
import CodeBlock from '@/components/CodeBlock'
import ColoredBox from '@/components/ColoredBox';

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Partials",
    description: "Démonstration de la réutilisation de code avec les partials dans Handlebars.",
    keywords: ["js", "node.js", "handlebars", "template", "ssr", "rendering", "partials", "réutilisation"],
    group: "notes"
}

const partial = 
`<!-- Fichier /views/partials/une-section.handlebars -->
<section>
    <h2>Partials</h2>
    <p>
        Lorem ipsum dolor sit, amet consectetur
        adipisicing elit. Vero ex nesciunt reiciendis
        dicta odio tenetur. Eligendi, voluptatibus!
    </p>
</section>`;

const usage = 
`<!-- Fichier /views/home.handlebars -->
<h1>Layouts et partials</h1>
{{> une-section}}`;

const publicationPartial =
`<!-- Fichier /views/partials/publication.handlebars -->
<article>
    <h2>{{this.titre}}</h2>
    <blockquote>{{this.texte}}</blockquote>
    <cite>Par {{this.auteur}}</cite>
</article>`;

const publicationUsage =
`<!-- Utilisation du partial ici -->
{{#each publications}}
    {{> publication this}}
{{/each}}`;

const commentPartial =
`<!-- Fichier /views/partials/commentaire.handlebars -->
<li>
    <p>Commentaire à {{auteur}} de {{commentaire.auteur}}</p>
    <p>{{commentaire.texte}}</p>
</li>`;

const commentUsage =
`<!-- Utilisation du partial ici -->
{{#each publications}}
    <!-- ... -->
    {{#each this.commentaires}}
        {{> commentaire commentaire=this auteur=../this.auteur}}
    {{/each}}
{{/each}}`;

export default function Page() {
    return <>
        <section>
            <h2>Isolation ou réutilisation de code</h2>
            <p>
                Un des points négatifs du HTML de base est qu'il n'offre pas de moyen simple pour réutiliser des morceaux de code.
                Par exemple, si vous avez un bloc de code HTML qui se répète dans plusieurs pages, ou même plusieurs fois dans la
                même page, vous devez copier-coller ce code à chaque endroit où vous en avez besoin. Cela peut rapidement devenir
                lourd à maintenir, surtout si vous devez modifier ce code plus tard. C'est ici que les <IC>partials</IC> de 
                Handlebars sont intéressants.
            </p>
            <p>
                Un <IC>partial</IC> est un morceau de code HTML que vous pouvez définir une fois et réutiliser partout dans vos
                fichiers Handlebars. Cela vous permet de diviser votre code HTML en petits morceaux réutilisables (ou non) dans 
                différents fichiers de code. Pour créer un <IC>partial</IC>, il suffit simplement de créer un fichier avec 
                l'extension <IC>.handlebars</IC> dans le dossier <IC>/views/partials</IC> de votre projet.
            </p>
            <p>
                Pour utiliser un <IC>partial</IC>, vous devez l'inclure dans un autre fichier Handlebars en utilisant la 
                syntaxe suivante:
            </p>
            <CodeBlock language="handlebars">{'{{> nomDuPartial}}'}</CodeBlock>
            <p>
                Dans cette syntaxe, le symbole <IC>{'>'}</IC> indique que nous voulons inclure un <IC>partial</IC>, 
                et <IC>nomDuPartial</IC> est le nom du fichier sans l'extension. 
            </p>
            <p>
                Voici un exemple plus complet:
            </p>
            <CodeBlock language="handlebars">{partial}</CodeBlock>
            <CodeBlock language="handlebars">{usage}</CodeBlock>
        </section>

        <section>
            <h2>Paramétrer les partials</h2>
            <p>
                Les <IC>partials</IC> peuvent aussi recevoir des données dynamiques, tout comme les fichiers Handlebars normaux. 
                Pour ce faire, vous devez passer une donnée en second paramètre de l'inclusion du <IC>partial</IC>. Il deviendra  
                alors possible de l'utiliser dans le code du <IC>partial</IC> avec le marqueur <IC>{'{{this}}'}</IC>.
            </p>
            <CodeBlock language="handlebars">{publicationPartial}</CodeBlock>
            <CodeBlock language="handlebars">{publicationUsage}</CodeBlock>
            <p>
                Dans cet exemple, nous avons un tableau de publications, où chaque publication est un objet avec les 
                propriétés <IC>titre</IC>, <IC>texte</IC> et <IC>auteur</IC>. Dans notre fichier Handlebars, nous bouclons sur 
                chaque publication et passons chaque objet au <IC>partial</IC> en passsant <IC>this</IC> en second paramètre. Dans le
                code du <IC>partial</IC>, nous pouvons alors accéder aux propriétés de chaque publication en utilisant 
                <IC>{'{{this.propriete}}'}</IC>.
            </p>
        </section>

        <section>
            <h2>Paramètres nommés</h2>
            <p>
                Il est aussi possible de passer des paramètres nommés au <IC>partial</IC> en utilisant la syntaxe suivante:
            </p>
            <CodeBlock language="handlebars">{'{{> nomDuPartial param1=valeur1 param2=valeur2}}'}</CodeBlock>
            <p>
                Un paramètre nommé est similaire au passage de données en second paramètre, mais nous pouvons ajouter plusieurs 
                paramètres de cette façon. Voici un exemple complet:
            </p>
            <CodeBlock language="handlebars">{commentPartial}</CodeBlock>
            <CodeBlock language="handlebars">{commentUsage}</CodeBlock>
            <p>
                Dans cet exemple, nous avons un tableau de publications, où chaque publication contient un <IC>auteur</IC> et un 
                tableau de <IC>commentaires</IC>. Nous passons le commentaire et l'auteur de la publication parente en tant que
                paramètres du partial. Dans le code du <IC>partial</IC>, nous pouvons alors accéder à ces paramètres en utilisant
                leur nom.
            </p>
        </section>
    </>;
}
