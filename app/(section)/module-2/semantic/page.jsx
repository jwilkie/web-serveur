import IC from '@/components/InlineCode';
import CodeBlock from '@/components/CodeBlock';

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Balises sémantiques",
    description: "Présentation des balises sémantiques les plus utilisées et de leur signification.",
    keywords: ["html", "entete", "header", "pied", "footer", "section", "navigation", "article", "aside"],
    group: "notes"
}

const header = 
`<header>
    <h1>Titre du site web<h1>
</header>`;

const footer = 
`<footer>
    <p>© Collège La Cité</p>
    <p>Développé par Jonathan Wilkie</p>
</footer>`;

const main = 
`<main>
    <p>Contenu principal de la page</p>
</main>`;

const nav = 
`<nav>
    <ul>
        <li>
            <a href="#">Lien 1</a>
        </li>
        <li>
            <a href="#">Lien 2</a>
        </li>
    </ul>
</nav>`;

const section = 
`<section>
    <h2>Titre de la section</h2>
    <p>
        Contenu de la section
    </p>
</section>`;

export default function Page() {
    return <>
        <section>
            <h2>Un sens à la structure</h2>
            <p>
                Une balise sémantique est une balise qui ne fait, à proprement parler, rien de spécial. Ces balises ont toutefois un sens. Elles 
                indiquent une certaine organisation. En général, ces balises indiquent par leur nom ce qu&apos;elles contiennent. À première vu, ces 
                balises ne semblent pas être utile, mais vous les utiliserez souvent. En effet, elles sont très pratique pour les lecteurs de 
                site Web, pour les personnes ayant des handicaps de la vue ou encore pour l&apos;analyse des sites Web par d&apos;autres programmes. Dans 
                cette page, nous verrons quelques balises sémantiques que vous devrez utiliser dans vos site Web.
            </p>
        </section>

        <section>
            <h2>Entête</h2>
            <p>
                La balise <IC>&lt;header&gt;</IC> contient l&apos;entête d&apos;une page Web ou parfois d&apos;une section d&apos;une page Web. Il ne faut pas 
                confondre cette balise avec la balise <IC>&lt;head&gt;</IC>. Elle contient donc généralement le logo du site Web et son menu. 
                Si vous inspectez ce site Web, vous remarquerez que la barre avec le logo et le menu sont contenu dans une 
                balise <IC>&lt;header&gt;</IC>.
            </p>
            <CodeBlock language="html">{header}</CodeBlock>
        </section>

        <section>
            <h2>Pied de page</h2>
            <p>
                La balise <IC>&lt;footer&gt;</IC> contient le pied d&apos;une page Web ou parfois d&apos;une section d&apos;une page Web. Elle contient donc 
                généralement l&apos;auteur du site Web, les informations de contact, des liens vers des documents connexes et souvent le ©copyright. 
                Si vous inspectez ce site Web, vous remarquerez que la barre en bas du site Web avec le copyright et l&apos;auteur du site Web est 
                contenu dans une balise <IC>&lt;footer&gt;</IC>.
            </p>
            <CodeBlock language="html">{footer}</CodeBlock>
        </section>

        <section>
            <h2>Contenu principal</h2>
            <p>
                La balise <IC>&lt;main&gt;</IC> contient le contenu principal d&apos;une page Web. Cette balise ne devrait pas contenir de contenus 
                qui se répète sur plusieurs pages, comme les barres de navigation, les entêtes ou les pieds de page. Cette balise contient le 
                contenu principal de la page, peu importe son contenu. Si vous inspectez ce site Web, vous remarquerez que ce texte se 
                retrouve éventuellement dans une balise <IC>&lt;main&gt;</IC>.
            </p>
            <CodeBlock language="html">{main}</CodeBlock>
        </section>

        <section>
            <h2>Menu de navigation</h2>
            <p>
                La balise <IC>&lt;nav&gt;</IC> contient généralement un menu de navigation d&apos;un site Web. Cette balise contient généralement 
                une liste <IC>&lt;ul&gt;</IC> de liens vers différentes pages de votre site Web et se retrouve souvent dans une 
                balise <IC>&lt;header&gt;</IC>, <IC>&lt;footer&gt;</IC> ou ailleur où vous auriez pourriez avoir un menu de navigation. Si vous 
                inspectez ce site Web, vous remarquerez que le menu dans l&apos;entête et le menu dans la partie sur le côté du site Web sont tous 
                2 dans une balise <IC>&lt;nav&gt;</IC>.
            </p>
            <CodeBlock language="html">{nav}</CodeBlock>
        </section>

        <section>
            <h2>Sections</h2>
            <p>
                La balise <IC>&lt;section&gt;</IC> contient une section du contenu de votre site Web. On retrouve souvent cette balise à 
                l&apos;intérieur de la balise <IC>&lt;main&gt;</IC> et elle doit contenir une balise <IC>&lt;h?&gt;</IC> au début de son contenu
                pour indiquer son titre. Si vous inspectez ce site Web, vous remarquerez que chaque titre, suivi d&apos;un paragraphe d&apos;explication 
                se retrouve en fait dans une balise <IC>&lt;section&gt;</IC>.
            </p>
            <CodeBlock language="html">{section}</CodeBlock>
        </section>
        
        <section>
            <h2>Autres balises sémantiques</h2>
            <p>
                Il existe de nombreuses autres balises sémantiques, comme:
            </p>
            <ul>
                <li>
                    <IC>&lt;article&gt;</IC>: Représente un article de magazine ou journal.
                </li>
                <li>
                    <IC>&lt;aside&gt;</IC>: Représente un contenu d&apos;à côté, tel qu&apos;un menu sur le côté de votre page.
                </li>
                <li>
                    <IC>&lt;figure&gt;</IC>: Représente un schémas ou une image avec du texte descriptif.
                </li>
                <li>
                    <IC>&lt;details&gt;</IC>: Représente un terme ou du texte accompagné d&apos;une description plus complexe.
                </li>
                <li>
                    <IC>&lt;time&gt;</IC>: Représente un point dans le temps, tel qu&apos;une date et heure.
                </li>
                <li>
                    <IC>&lt;kbd&gt;</IC>: Représente une touche de votre clavier.
                </li>
            </ul>
            <p>
                Nous n&apos;entrerons pas dans les détails de ces balises sur cette page puisqu&apos;elles sont un peu moins souvent utilisé. 
                Je vous suggère donc fortement d&apos;aller lire sur ces balises sémantiques sur le site web MDN pour avoir une idée des autres 
                balises sémantiques qui existe ainsi que leur utilité.
            </p>
            <p>
                <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element">MDN - HTML elements reference</a>
            </p>
        </section>
    </>
}