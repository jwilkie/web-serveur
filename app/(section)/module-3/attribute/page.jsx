import IC from '@/components/InlineCode';
import { WebExample, Code } from '@/components/WebExample';

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Attributs de champ",
    description: "Présentation des différents attributs qui peuvent être utilisés sur les champs d'entrée.",
    keywords: ["html", "placeholder", "maxlength", "min", "max", "step", "name", "readonly", "disabled", "autofocus"],
    group: "notes"
}

const maxlength = 
`<!-- Longueur maximale -->
<input type="text" maxlength="10">`;

const min = 
`<!-- Valeur minimum -->
<input type="number" min="0">`;

const max = 
`<!-- Valeur maximum -->
<input type="number" max="100">`;

const step = 
`<!-- Interval d'incrémentation -->
<input type="number" step="5">`;

const placeholder = 
`<!-- Texte temporaire -->
<input type="email" placeholder="test@exemple.com">`;

const checked =
`<!-- Coché par défaut -->
<input type="checkbox">
<input type="checkbox" checked>
<input type="checkbox">`;

const name = 
`<!-- Nom de champ -->
<input type="text" name="prenom">`;

const readonly = 
`<!-- Lecture seule -->
<input type="text" value="Lecture seule" readonly>`;

const disabled = 
`<!-- Désactivé -->
<input type="text" value="Désactivé" disabled>`;

const autofocus = 
`<!-- Focus automatique -->
<input type="text" autofocus>`;

export default function Page() {
    return <>
        <section>
            <h2>Différents attributs</h2>
            <p>
                Les différents champs d&apos;entrée de données peuvent recevoir différents attributs pour leur donner des effets particuliers.
                Ces attributs sont parfois uniquement disponible pour certains types de champs alors que d&apos;autres peuvent être placé
                sur n&apos;importe quel champ.
            </p>
            <p>
                Cette page fait un court résumé des différents attributs que vous pouvez retrouver sur les champs d&apos;entrée.
            </p>
        </section>

        <section>
            <h2>Longueur maximale</h2>
            <p>
                Pour les champs de texte, il est possible de spécifier une longueur maximale de texte en nombre de caractères. Si 
                l&apos;utilisateur essai de mettre plus de texte que la longueur maximale indiqué, le navigateur empêchera l&apos;entrée de 
                nouveaux caractères.
            </p>
            <p>
                Voici comment l&apos;utiliser:
            </p>
            <WebExample title="Longueur maximale">
                <Code language="html">{maxlength}</Code>
            </WebExample>
            <p>
                Cet attribut est applicable aux balises champs suivants:
            </p>
            <ul>
                <li><IC>&lt;input&gt;</IC> de type <IC>text</IC></li>
                <li><IC>&lt;input&gt;</IC> de type <IC>tel</IC></li>
                <li><IC>&lt;input&gt;</IC> de type <IC>password</IC></li>
                <li><IC>&lt;input&gt;</IC> de type <IC>email</IC></li>
                <li><IC>&lt;input&gt;</IC> de type <IC>url</IC></li>
                <li><IC>&lt;textarea&gt;</IC></li>
            </ul>
        </section>

        <section>
            <h2>Valeur minimum</h2>
            <p>
                Pour les champs permettant de choisir un nombre, il est possible de spécifier une valeur minimum pouvant être sélectionné. 
                Si l&apos;utilisateur essai de mettre une valeur plus petite, le navigateur l&apos;en empêchera.
            </p>
            <p>
                Voici comment l&apos;utiliser:
            </p>
            <WebExample title="Valeur minimum">
                <Code language="html">{min}</Code>
            </WebExample>
            <p>
                Cet attribut est applicable aux balises champs suivants:
            </p>
            <ul>
                <li><IC>&lt;input&gt;</IC> de type <IC>number</IC></li>
                <li><IC>&lt;input&gt;</IC> de type <IC>range</IC></li>
            </ul>
        </section>

        <section>
            <h2>Valeur maximum</h2>
            <p>
                Pour les champs permettant de choisir un nombre, il est possible de spécifier une valeur maximum pouvant être sélectionné. 
                Si l&apos;utilisateur essai de mettre une valeur plus grande, le navigateur l&apos;en empêchera.
            </p>
            <p>
                Voici comment l&apos;utiliser:
            </p>
            <WebExample title="Valeur maximale">
                <Code language="html">{max}</Code>
            </WebExample>
            <p>
                Cet attribut est applicable aux balises champs suivants:
            </p>
            <ul>
                <li><IC>&lt;input&gt;</IC> de type <IC>number</IC></li>
                <li><IC>&lt;input&gt;</IC> de type <IC>range</IC></li>
            </ul>
        </section>

        <section>
            <h2>Valeur d&apos;incrémentation</h2>
            <p>
                Pour les champs permettant de choisir un nombre, il est possible de spécifier une valeur d&apos;incrément. Ainsi, si on 
                augmente ou diminue le nombre à partir du champ, on devrait voir qu&apos;il &quot;saute&quot; par dessus certains nombres.
            </p>
            <p>
                Voici comment l&apos;utiliser:
            </p>
            <WebExample title="Valeur d'incrémentation">
                <Code language="html">{step}</Code>
            </WebExample>
            <p>
                Cet attribut est applicable aux balises champs suivants:
            </p>
            <ul>
                <li><IC>&lt;input&gt;</IC> de type <IC>number</IC></li>
                <li><IC>&lt;input&gt;</IC> de type <IC>range</IC></li>
            </ul>
        </section>

        <section>
            <h2>Texte temporaire</h2>
            <p>
                Pour les champs contenant du texte ou des nombres, il est possible de spécifier un texte temporaire qui sera affiché 
                lorsque le champ est vide. Dès que le champ contient quelque chose, ce texte disparaîtra. Cet attribut est pratique 
                pour donner un indicatif de comment remplir le champ à l&apos;utilisateur.
            </p>
            <p>
                Voici comment l&apos;utiliser:
            </p>
            <WebExample title="Texte temporaire">
                <Code language="html">{placeholder}</Code>
            </WebExample>
            <p>
                Cet attribut est applicable aux balises champs suivants:
            </p>
            <ul>
                <li><IC>&lt;input&gt;</IC> de type <IC>text</IC></li>
                <li><IC>&lt;input&gt;</IC> de type <IC>tel</IC></li>
                <li><IC>&lt;input&gt;</IC> de type <IC>password</IC></li>
                <li><IC>&lt;input&gt;</IC> de type <IC>email</IC></li>
                <li><IC>&lt;input&gt;</IC> de type <IC>url</IC></li>
                <li><IC>&lt;input&gt;</IC> de type <IC>number</IC></li>
                <li><IC>&lt;textarea&gt;</IC></li>
            </ul>
        </section>

        <section>
            <h2>Coché par défaut</h2>
            <p>
                Pour les champs de case à cocher, comme les inputs de type <IC>checkbox</IC> et <IC>radio</IC>, nous pouvons cocher 
                la case par défaut au chargement de la page. Pour se faire, il suffit simplement d&apos;ajouter l&apos;attribut <IC>checked</IC> à
                l&apos;input voulu.
            </p>
            <p>
                Voici comment l&apos;utiliser:
            </p>
            <WebExample title="Texte temporaire">
                <Code language="html">{checked}</Code>
            </WebExample>
            <p>
                Cet attribut est applicable aux balises champs suivants:
            </p>
            <ul>
                <li><IC>&lt;input&gt;</IC> de type <IC>checkbox</IC></li>
                <li><IC>&lt;input&gt;</IC> de type <IC>radio</IC></li>
            </ul>
        </section>

        <section>
            <h2>Nom de champ</h2>
            <p>
                Un peu comme pour le champ de bouton radio, il est possible d&apos;utiliser l&apos;attribut <IC>name</IC> sur les autres champs 
                pour leur donner un nom en arrière-plan. Cela sera pratique plus tard lorsque nous essayerons de prendre les valeurs 
                des champs et d&apos;en faire quelque chose en Javascript. Il est généralement recommandé de mettre un nom de champ à chaque 
                champ que vous avez dans votre page.
            </p>
            <p>
                Voici comment l&apos;utiliser:
            </p>
            <WebExample title="Nom de champ">
                <Code language="html">{name}</Code>
            </WebExample>
            <p>
                Cet attribut est applicable aux balises champs suivants:
            </p>
            <ul>
                <li>Tous les <IC>&lt;input&gt;</IC> qui ne sont pas de type <IC>submit</IC>, <IC>button</IC> ou <IC>reset</IC></li>
                <li><IC>&lt;textarea&gt;</IC></li>
                <li><IC>&lt;select&gt;</IC></li>
            </ul>
        </section>

        <section>
            <h2>Lecture seule</h2>
            <p>
                Si vous voulez qu&apos;un utilisateur puisse sélectionner et copier le texte d&apos;un champ, mais ne puisse pas le modifier, on 
                utilisera l&apos;attribut <IC>readonly</IC>. Cet attribut empêchera l&apos;utilisateur de modifier les champs indiqués.
            </p>
            <p>
                Voici comment l&apos;utiliser:
            </p>
            <WebExample title="Lecture seule">
                <Code language="html">{readonly}</Code>
            </WebExample>
            <p>
                Cet attribut est applicable aux balises champs suivants:
            </p>
            <ul>
                <li>Tous les <IC>&lt;input&gt;</IC></li>
                <li><IC>&lt;textarea&gt;</IC></li>
                <li><IC>&lt;select&gt;</IC></li>
            </ul>
        </section>

        <section>
            <h2>Désactivé</h2>
            <p>
                Si vous voulez désactiver un champ pour empêcher un utilisateur de l&apos;utiliser, vous pouvez y mettre 
                l&apos;attribut <IC>disabled</IC>. Cet attribut indique qu&apos;un champ est désactivé en empêchant l&apos;utilisateur de le modifier, 
                mais aussi en stylant différemment les champs. C&apos;est une façon facile d&apos;indiquer à l&apos;utilisateur que le champ ne peut 
                pas être utilisé.
            </p>
            <p>
                Voici comment l&apos;utiliser:
            </p>
            <WebExample title="Désactivé">
                <Code language="html">{disabled}</Code>
            </WebExample>
            <p>
                Cet attribut est applicable aux balises champs suivants:
            </p>
            <ul>
                <li>Tous les <IC>&lt;input&gt;</IC></li>
                <li><IC>&lt;textarea&gt;</IC></li>
                <li><IC>&lt;select&gt;</IC></li>
            </ul>
        </section>

        <section>
            <h2>Focus automatique</h2>
            <p>
                Lors du chargement de la page, si vous voulez que le focus soit automatiquement mis sur un champ en particulier, vous 
                pouvez ajouter l&apos;attribut <IC>autofocus</IC>. Si vous raffraîchissez la page, vous remarquerez que le focus est mis 
                automatiquement dans le champ d&apos;exemple ci-dessous.
            </p>
            <p>
                Le focus est un terme utilisé pour les éléments avec lesquels l&apos;utilisateur peut intéragir dans une page web. L&apos;élément 
                qui a le focus peut être intéractif avec le clavier de l&apos;ordinateur. Par exemple, si on clique sur un champ de texte, 
                on y met le focus puisqu&apos;on peut écrire dedans avec notre clavier.
            </p>
            <p>
                Une seul élément à la fois peut avoir le focus dans notre page web. Par conséquant, une seule balise dans votre page 
                web peut avoir l&apos;attribut <IC>autofocus</IC>
            </p>
            <p>
                Voici comment l&apos;utiliser:
            </p>
            <WebExample title="Focus automatique">
                <Code language="html">{autofocus}</Code>
            </WebExample>
            <p>
                Cet attribut est applicable aux balises champs suivants:
            </p>
            <ul>
                <li>Tous les <IC>&lt;input&gt;</IC></li>
                <li><IC>&lt;textarea&gt;</IC></li>
                <li><IC>&lt;select&gt;</IC></li>
            </ul>
        </section>
    </>
}