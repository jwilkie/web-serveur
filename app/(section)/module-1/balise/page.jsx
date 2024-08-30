import IC from '@/components/InlineCode';
import CodeBlock from '@/components/CodeBlock';
import ColoredBox from '@/components/ColoredBox';
import { WebExample, Code } from '@/components/WebExample';

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Texte, balises et concept de base",
    description: "Présentation du HTML, le langage de structure d'une page web.",
    keywords: ["html", "balise", "texte", "commentaire", "paragraphe", "entête", "important", "liste"],
    group: "notes"
}

const croisement = 
`<!-- Ceci n'est pas du HTML valide et peut causer des problèmes et erreurs. -->

<balise1>
    <balise2>
</balise1>
</balise2>`;

const texte = 
`<body>

    Ceci est du texte affiché dans la page web.

</body>`;

const comment = 
`<!-- Ceci n'est pas affiché -->

Ceci est affiché`;

const strong =
`<p>
    Ce texte n'est pas très important, mais il contient toutefois 
    <strong> une partie importante </strong> 
    pour démontrer à quoi sert la balise &lt;strong&gt;.
</p>`;

const header = 
`<h1>Un titre important H1</h1>
<h2>Un titre H2</h2>
<h3>Un titre H3</h3>
<h4>Un titre H4</h4>
<h5>Un titre H5</h5>
<h6>Un titre H6</h6>`;

const paragraph =
`<p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Nullam ut augue in odio volutpat aliquet a at ipsum. Donec 
    lobortis est in lorem ultricies eleifend. Etiam molestie 
    est sem, et vehicula quam malesuada quis.
</p>`;

const ol = 
`Étapes de création d'une page Web:

<ol>
    <li>Créer le fichier HTML</li>
    <li>Mettre des trucs dans le fichier HTML</li>
    <li>Tester le fichier HTML</li>
</ol>`;

const ul =
`Liste de trucs à faire:

<ul>
    <li>Laboratoire de Web</li>
    <li>Un travail pour un autre cours</li>
    <li>Étudier</li>
</ul>`;

const nested = 
`Liste d'épicerie:

<ul>
    <li>
        Fruits
        <ul>
            <li>Pomme</li>
            <li>Orange</li>
            <li>Kiwi</li>
        </ul>
    </li>
    <li>
        Légume
    </li>
    <li>
        Autre
        <ol>
            <li>Bière</li>
            <li>Gâteau</li>
        </ol>
    </li>
</ul>`;

const dl = 
`Définitions:

<dl>
    <dt>h1</dt>
    <dd>Balise d'entête</dd>

    <dt>p</dt>
    <dd>Balise de paragraphe</dd>

    <dt>ul</dt>
    <dd>Balise de liste non ordonnée</dd>
</dl>`;

export default function Page() {
    return <>
        <section>
            <h2>Concept de base</h2>
            <p>
                Dans la page d&apos;introduction au HTML, nous avons brièvement étudié les balises de base permettant de créer une 
                page Web sans aucun contenu. Dans ce document, nous commencerons à regarder les balises permettant d&apos;ajouter 
                du contenu à notre page Web. Toutes ces balises doivent être ajouté à l&apos;intérieur de la balise <IC>&lt;body&gt;</IC>. 
                En effet, la balise <IC>&lt;body&gt;</IC> contient le contenu d&apos;une page Web. Donc, la majorité des balises que 
                nous ajouterons seront toujours cette balise.
            </p>
            <p>
                Il est important de comprendre que le HTML est un langage de balisage hiérarchique. Ceci veut dire que l&apos;on 
                peut généralement mettre des balises dans une autre balise. Ce principe est éssentiel au bon fonctionnement du 
                HTML et sera utilisé très fréquemment. Vous aurez donc très souvent à mettre des balises dans une autre balise 
                et cela est normal. Habituez-vous rapidement!
            </p>
            <p>
                Il faut tout de fois faire attention. Lorsque nous mettons des balises à l&apos;intérieur d&apos;une autre, il est 
                parfois possible de faire des erreurs et de croiser les balises. C&apos;est un énorme problème que vous devez régler 
                le plus rapidement possible. Le croisement de balise peut générer des erreurs et des problèmes sévères dans vos 
                pages web.
            </p>
            <CodeBlock language="html">{croisement}</CodeBlock>
            <ColoredBox title="Attention: ">
                Le HTML sert uniquement à structurer nos pages Web. Il ne sert donc aucunement à faire une &quot;belle&quot; page Web. 
                Vous ne devez pas utiliser le HTML pour styliser vos interfaces. Nous utiliserons le CSS pour cela dans quelques 
                semaines. Attendez-vous donc à ce que vos premières pages Web ne soit pas très belle pour le moment.
            </ColoredBox>
        </section>

        <section>
            <h2>Texte</h2>
            <p>
                Le texte fait partie intégrante du web et du HTML. En effet, les premières page web constitait simplement à 
                afficher de l&apos;information textuel. Encore aujourd&apos;hui, la majorité des sites web sont basé sur l&apos;affichage 
                de texte. Dans le HTML, vous pouvez insérer du texte presque n&apos;importe où. Il vous suffit de taper du texte 
                normalement et celui-ci sera affiché dans la page web.
            </p>
            <CodeBlock language="html">{texte}</CodeBlock>
            <p>
                Il est important de noter que le texte devra généralement être insérer dans certaines balises particulière si 
                on veut bien respecter les bonnes pratiques de programmation web. Bien que cela soit valide, on ne devrait jamais 
                mettre de texte directement dans le <IC>&lt;body&gt;</IC>.
            </p>
            <ColoredBox title="Attention: ">
                Le HTML gère les caractères blanc (espaces, tabulations et retours de lignes) de façon particulière. En effet, 
                si le navigateur voit plusieurs caractères blancs de suite, il les combinera simplement en un espace. Bref, si 
                vous mettez plusieurs espaces entre 2 mots ou si vous faites plusieurs retours de ligne entre 2 phrase, un seul 
                espace sera affiché. Faites attentionm puisque cela peut parfois être déroutant lorsque nous commençons à 
                utiliser le HTML.
            </ColoredBox>
        </section>

        <section>
            <h2>Commentaires</h2>
            <p>
                Les commentaires, comme dans les langages de programmation, servent à aider à organiser le code dans un fichier. 
                Les commentaires ne sont pas affichés lorsque la page HTML est affiché dans un navigateur Web. Pour faire un 
                commentaire en HTML, vous devez simplement mettre du texte entre les balises <IC>&lt;--</IC> et <IC>--&gt;</IC>.
            </p>
            <WebExample title="Commentaires en HTML">
                <Code language="html">{comment}</Code>
            </WebExample>
        </section>

        <section>
            <h2>Texte important</h2>
            <p>
                Si vous désirez spécifier qu&apos;une partie du texte de votre page Web est important, vous pouvez utiliser la 
                balise <IC>&lt;strong&gt;</IC>. Par défaut, la plupart des navigateur Web afficheront les éléments dans une 
                balise <IC>&lt;strong&gt;</IC> en gras. Toutefois, n&apos;utilisez pas cette balise pour mettre du contenu en gras. 
                Cette balise ne sert qu&apos;à indiquer l&apos;importance d&apos;un morceau de texte. Comme mentionné ci-dessus, le CSS que 
                nous apprendrons dans quelques semaines nous permettra de mettre du contenu en gras pour le côté visuel de 
                notre site Web.
            </p>
            <WebExample title="Texte important en HTML">
                <Code language="html">{strong}</Code>
            </WebExample>
        </section>

        <section>
            <h2>Entête</h2>
            <p>
                Les balises d&apos;entête (header), servent à mettre des titres dans les pages Web. Essentiellement, le texte ou les 
                balises qui se trouve dans les balises d&apos;entête seront considéré comme un titre dans la page. Le numéro dans 
                le <IC>&lt;h?&gt;</IC> est un nombre de 1 à 6 représentant l&apos;importance du titre. Ainsi, un 
                titre <IC>&lt;h1&gt;</IC> est un titre plus important, ou plus global qu&apos;un titre <IC>&lt;h2&gt;</IC>. En 
                général, vous n&apos;aurez qu&apos;à utiliser les 3 premiers niveaux des entêtes.
            </p>
            <WebExample title="Entête en HTML">
                <Code language="html">{header}</Code>
            </WebExample>
            <ColoredBox title="Attention: ">
                Vous devez toujours utiliser les titres dans le bon ordre. Ainsi, un <IC>&lt;h4&gt;</IC> devrait toujours être 
                après un <IC>&lt;h3&gt;</IC> qui devrait toujours être après un <IC>&lt;h2&gt;</IC>, ainsi de suite. Vous ne 
                devez donc pas passer directement d&apos;un <IC>&lt;h1&gt;</IC> à un <IC>&lt;h5&gt;</IC>.
            </ColoredBox>
        </section>

        <section>
            <h2>Paragraphe</h2>
            <p>
                Les paragraphes servent à mettre un bloque de texte dans le HTML. Même si vous n&apos;avez que quelques mots à écrire, 
                le paragraphe peut être une bonne idée. Il y a toutefois d&apos;autres balise qui peuvent nous être utile pour le 
                texte. Pour créer un paragraphe, nous utiliserons la balise <IC>&lt;p&gt;</IC>.
            </p>
            <WebExample title="Paragraphe en HTML">
                <Code language="html">{paragraph}</Code>
            </WebExample>
        </section>

        <section>
            <h2>Liste ordonnée</h2>
            <p>
                Les listes ordonnées <IC>&lt;ol&gt;</IC> servent principalement à afficher une liste de texte avec un numéro devant 
                chacun d&apos;eux. On l&apos;utilise conjointement avec la balise <IC>&lt;li&gt;</IC> qui représente un élément de la liste.
            </p>
            <WebExample title="Liste ordonnée en HTML">
                <Code language="html">{ol}</Code>
            </WebExample>
        </section>

        <section>
            <h2>Liste non ordonnée</h2>
            <p>
                Les listes non ordonnées <IC>&lt;ul&gt;</IC> servent principalement à afficher une liste de texte simplement avec 
                des points ou barres. On l&apos;utilise lui-aussi conjointement avec la balise <IC>&lt;li&gt;</IC> qui représente un 
                élément de la liste, comme pour la liste ordonnée.
            </p>
            <WebExample title="Liste non ordonnée en HTML">
                <Code language="html">{ul}</Code>
            </WebExample>
            <ColoredBox title="Attention: ">
                La balise <IC>&lt;li&gt;</IC> doit absolument se retrouver à l&apos;intérieur d&apos;une 
                balise <IC>&lt;ol&gt;</IC> ou <IC>&lt;ul&gt;</IC>. Si vous ne respectez pas cette règle, votre HTML ne sera pas 
                valide et il vous causera des problèmes plus tard.
            </ColoredBox>
        </section>

        <section>
            <h2>Liste imbriquée</h2>
            <p>
                Les listes, ordonnées ou non peuvent être mises l&apos;une dans l&apos;autre pour créer plusieurs niveau dans la liste. Il 
                est même possible de mélanger les listes ordonnée et non ordonnée ensemble. Pour ce faire, nous mettrons 
                simplement des listes à l&apos;intérieur des <IC>&lt;li&gt;</IC>.
            </p>
            <WebExample title="Liste imbriquée en HTML">
                <Code language="html">{nested}</Code>
            </WebExample>
            <ColoredBox title="Attention: ">
                Les listes imbriquées doivent toujours être ajouté à l&apos;intérieur d&apos;un <IC>&lt;li&gt;</IC>. Certaines personnes ont 
                parfois tendance à les mettre directement dans la liste parente, ce qui n&apos;est pas du HTML valide. À l&apos;affichage, 
                la liste semblera peut-être correcte, mais cela peut causer d&apos;énormes problèmes plus tard.
            </ColoredBox>
        </section>

        <section>
            <h2>Liste de description</h2>
            <p>
                Les listes de description <IC>&lt;dl&gt;</IC> sont utilisé pour afficher un terme ou une courte phrase, suivi de 
                sa description. On l&apos;utilisera conjointement avec les balises <IC>&lt;dt&gt;</IC> pour donner le terme 
                et <IC>&lt;dd&gt;</IC> pour donner la description.
            </p>
            <WebExample title="Liste de description en HTML">
                <Code language="html">{dl}</Code>
            </WebExample>
            <ColoredBox title="Attention: ">
                La balise <IC>&lt;dt&gt;</IC> doit toujours être suivie de la balise <IC>&lt;dd&gt;</IC>. De la même façon, la 
                balise <IC>&lt;dd&gt;</IC> doit toujours être précédé de la balise <IC>&lt;dt&gt;</IC>. Si vous ne suivez pas 
                cette règle, votre HTML ne sera pas valide et risque de vous créer des erreurs plus tard.
            </ColoredBox>
        </section>
    </>
}