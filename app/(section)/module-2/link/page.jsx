import IC from '@/components/InlineCode';
import { WebExample, Code } from '@/components/WebExample';
import CodeBlock from '@/components/CodeBlock';

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Liens",
    description: "Présentation de la balise d'ancre qui permet de rediriger l'utilisateur sur votre site web.",
    keywords: ["html", "a", "ancre", "anchor", "hyperlien"],
    group: "notes"
}

const linkNothing = 
`<!-- Un lien qui ne fait rien -->
<a>Texte du lien</a>`;

const linkDest = 
`<!-- Un lien qui pointe sur eCité -->
<p>
    <a href="https://ecite.lacitec.on.ca/">Vers eCité!</a>
</p>

<!-- Un lien interne vers la page de la semaine 2 du site Web -->
<p>
    <a href="/web-client/module-2/">Semaine 2</a>
</p>

<!-- Un lien qui ne fait rien, mais qui éventuellement pointera sur une page -->
<p>
    <a href="#">Pas encore de liens</a>
</p>`;

const linkDest2 = 
`<!-- Un lien qui pointe sur eCité -->
<p>
    <a href="https://ecite.lacitec.on.ca/" target="_top">Vers eCité!</a>
</p>

<!-- Un lien interne vers la page de la semaine 2 du site Web -->
<p>
    <a href="/web-client/module-2/" target="_top">Semaine 2</a>
</p>

<!-- Un lien qui ne fait rien, mais qui éventuellement pointera sur une page -->
<p>
    <a href="#" target="_top">Pas encore de liens</a>
</p>`;

const anchor = 
`<h2 id="ancre-exemple">Balise de base</h2>

...

<!-- Une ancre vers le titre de la page -->
<a href="#ancre-exemple"> Vers le haut! </a>`;

const anchor2 = 
`<a href="#ancre-exemple" target="_top"> Vers le haut! </a>`;

const target = 
`<!-- Un lien qui ouvre dans un nouvel onglet -->
<p>
    <a href="https://ecite.lacitec.on.ca/" target="_blank">Vers eCité!</a>
</p>

<!-- Une ancre qui ouvre dans un nouvel onglet -->
<a href="#ancre-exemple" target="_blank"> Vers le haut! </a>`;

export default function Page() {
    return <>
        <section>
            <h2 id="ancre-exemple">Balise de base</h2>
            <p>
                Les liens, aussi appelé &quot;hyperliens&quot;, &quot;ancres&quot; ou &quot;anchors&quot;, sont un moyen de rediriger 
                l&apos;utilisateur du site Web vers une autre page ou vers une autre partie de la page. Les liens ont été pendant longtemps le 
                coeur du web puisqu&apos;ils nous permettaient de naviguer au travers des différentes pages. On les utilise toujours beaucoup 
                aujourd&apos;hui, mais en combinaison avec d&apos;autres éléments. La balise utilisé pour créer un lien est <IC>&lt;a&gt;</IC>. Si 
                nous utilisons simplement cette balise tel quel, elle ne fera rien.
            </p>
            <WebExample title="Lien sans attribut">
                <Code language="html">{linkNothing}</Code>
            </WebExample>
        </section>

        <section>
            <h2>Destination</h2>
            <p>
                Il est possible de spécifier la destination d&apos;un lien à l&apos;aide de l&apos;attribut <IC>href</IC>. Cet attribut s&apos;attend à recevoir un URL 
                vers une autre page Web. Il est aussi possible d&apos;utiliser un chemin relatif pour pointer sur une autre page à l&apos;intérieur de notre 
                site Web. Finalement, si vous voulez simplement un lien qui ne pointe sur rien (un placeholder), vous pouvez utiliser 
                l&apos;URL <IC>#</IC> pour qu&apos;il pointe sur la page courante.
            </p>
            <CodeBlock language="html">{linkDest}</CodeBlock>
            <WebExample title="Lien avec destination">
                <Code language="html" display={false}>{linkDest2}</Code>
            </WebExample>
        </section>

        <section>
            <h2>Ancres</h2>
            <p>
                Au lieu de faire un lien vers une autre page, il est possible de faire un lien vers un emplacement dans une même page. C&apos;est 
                ce qu&apos;on appèle un &quot;ancre&quot; ou &quot;anchor&quot;. Pour utiliser un ancre, il faut simplement spécifier un 
                attribut <IC>id</IC> à un élément dans la page vers lequel on veut se rendre. Par la suite dans la balise <IC>&lt;a&gt;</IC>, il 
                suffit simplement de mettre le nom de l&apos;attribut <IC>id</IC> dans l&apos;attribut <IC>href</IC> après un symbole <IC>#</IC>.
            </p>
            <CodeBlock language="html">{anchor}</CodeBlock>
            <WebExample title="Lien avec ancre">
                <Code language="html" display={false}>{anchor2}</Code>
            </WebExample>
        </section>

        <section>
            <h2>Cible</h2>
            <p>
                Par défaut, la balise de lien affecte la page elle-même, c&apos;est-à-dire que lorsqu&apos;on clique sur le lien, c&apos;est la page elle-même 
                qui est redirigé vers la nouvelle page. Il y a toutefois moyen de changer ce comportement. En effet, il est entre autre possible 
                de forcer les liens à s&apos;ouvrir dans un nouvel onglet. Pour ce faire, nous utiliserons l&apos;attribut <IC>target</IC> avec la 
                valeur <IC>_blank</IC>.
            </p>
            <WebExample title="Cible pour les liens">
                <Code language="html">{target}</Code>
            </WebExample>
        </section>
    </>
}