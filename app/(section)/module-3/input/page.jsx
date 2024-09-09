import IC from '@/components/InlineCode';
import CodeBlock from '@/components/CodeBlock';
import { WebExample, Code } from '@/components/WebExample';
import ColoredBox from '@/components/ColoredBox';

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Balises d'entrée",
    description: "Présentation de la balise input qui permet à l'utilisateur d'entrer des données dans l'interface du site web.",
    keywords: ["html", "input", "type", "texte", "nombre", "checkbox", "radio", "color", "date", "time", "bouton", "submit"],
    group: "notes"
}

const text = 
`<!-- Input de type texte -->
Votre nom: 
<input type="text">`;

const number = 
`<!-- Input de type nombre -->
Votre grandeur (cm): 
<input type="number">`;

const range = 
`<!-- Input de type range -->
Niveau de satisfaction: 
<input type="range">`;

const checkbox = 
`<!-- Input de type checkbox -->
Option 1: 
<input type="checkbox">
Option 2: 
<input type="checkbox">
Option 3: 
<input type="checkbox">`;

const radio = 
`<!-- Input de type radiobutton -->
Option 1: 
<input type="radio" name="groupe1">
Option 2: 
<input type="radio" name="groupe1">
Option 3: 
<input type="radio" name="groupe1">`;

const date = 
`<!-- Input de type date -->
Votre date de naissance: 
<input type="date">`;

const time = 
`<!-- Input de type time -->
Heure de la réservation: 
<input type="time">`;

const color = 
`<!-- Input de type color -->
Votre couleur préféré: 
<input type="color">`;

const password = 
`<!-- Input de type password -->
Mot de passe: 
<input type="password">`;

const submit = 
`<!-- Input de soumission -->
<input type="submit" value="Envoyer le formulaire">`;

export default function Page() {
    return <>
        <section>
            <h2>Entrée de données</h2>
            <p>
                Bien qu&apos;il existe de nombreuses balises pour demander des informations à un utilisateur de notre site Web, nous 
                utiliserons le plus souvent la balise <IC>&lt;input&gt;</IC>. Cette balise offre une multitude d&apos;options pour demander 
                des informations de types différents à l&apos;utilisateur.
            </p>
            <p>
                Cette balise s&apos;utilise de la façon suivante:
            </p>
            <CodeBlock language="html">{'<input type="type_de_données" value="contenu_par_défaut">'}</CodeBlock>
            <p>
                La valeur de l&apos;attribut <IC>type</IC> est le format ou le type de données que nous voulons demander à l&apos;utilisateur et 
                l&apos;attribut <IC>value</IC> est la valeur par défaut contenu dans l&apos;input.
            </p>
            <ColoredBox title="Attention: ">
                Il est important de noter que cette balise n&apos;a pas de balise fermante et que par défaut, elle utilise l&apos;affichage en 
                ligne.
            </ColoredBox>
        </section>

        <section>
            <h2>Texte</h2>
            <p>
                L&apos;input de base est celui qui accepte le texte. C&apos;est essentiellement une boîte de texte dans laquelle l&apos;utilisateur peut entrer 
                des données.
            </p>
            <WebExample title="Input de type texte">
                <Code language="html">{text}</Code>
            </WebExample>
        </section>

        <section>
            <h2>Nombre</h2>
            <p>
                L&apos;input qui accepte des nombres. C&apos;est essentiellement une boîte de texte qui n&apos;accepte que des nombres et qui permet 
                l&apos;incrémentation et la décrémentation par des petits boutons dans l&apos;input.
            </p>
            <WebExample title="Input de type nombre">
                <Code language="html">{number}</Code>
            </WebExample>
        </section>

        <section>
            <h2>Range</h2>
            <p>
                L&apos;input qui accepte un intervalle. C&apos;est essentiellement une barre sur laquelle nous pouvons sélectionner un nombre. 
                C&apos;est donc une autre façon de faire entrer un nombre à notre utilisateur.
            </p>
            <WebExample title="Input de type range">
                <Code language="html">{range}</Code>
            </WebExample>
        </section>

        <section>
            <h2>Checkbox</h2>
            <p>
                L&apos;input qui est une case à cocher. Elle permet à l&apos;utilisateur de sélectionner une option. Si plusieurs cases à cocher 
                sont disponible, chacune d&apos;entre elle est mutuellement exclusive et le choix d&apos;une n&apos;affecte pas le choix d&apos;une autre.
            </p>
            <WebExample title="Input de type checkbox">
                <Code language="html">{checkbox}</Code>
            </WebExample>
        </section>

        <section>
            <h2>Radiobutton</h2>
            <p>
                L&apos;input qui donne plusieurs options à un utilisateur sous forme de case à cocher, mais qui n&apos;accepte qu&apos;une seule option à 
                la fois. Bref, si vous sélectionnez une option, les autres options se décocheront automatiquement. Pour que le tout 
                fonctionne, nous devons utiliser l&apos;attribut <IC>name</IC> pour indiquer que les boutons radios font partie du même groupe.
            </p>
            <WebExample title="Input de type radio">
                <Code language="html">{radio}</Code>
            </WebExample>
        </section>

        <section>
            <h2>Date</h2>
            <p>
                L&apos;input qui permet d&apos;entrer une date. Elle aura généralement une icône pour ouvrir un calendrier, permettant à 
                l&apos;utilisateur de choisir une date ou encore d&apos;écrire la date par lui-même.
            </p>
            <WebExample title="Input de type date">
                <Code language="html">{date}</Code>
            </WebExample>
        </section>

        <section>
            <h2>Heure</h2>
            <p>
                L&apos;input qui permet d&apos;entrer une heure. Elle aura généralement une icône pour ouvrir un menu déroulant, permettant à 
                l&apos;utilisateur de choisir une heure ou encore d&apos;écrire l&apos;heure par lui-même.
            </p>
            <WebExample title="Input de type temps">
                <Code language="html">{time}</Code>
            </WebExample>
        </section>

        <section>
            <h2>Couleur</h2>
            <p>
                L&apos;input qui permet d&apos;entrer une couleur. Elle offrira généralement un bouton pour ouvrir un sélecteur de couleur, 
                permettant à l&apos;utilisateur de choisir sa couleur plus facilement.
            </p>
            <WebExample title="Input de type couleur">
                <Code language="html">{color}</Code>
            </WebExample>
        </section>

        <section>
            <h2>Mot de passe</h2>
            <p>
                L&apos;input qui permet d&apos;entrer un mot de passe. Elle ressemble en grande partie à un input de type texte, mais où les 
                caractères entrés sont caché par un symbole quelconque. On l&apos;utilise majoritairement pour entrer des mots de passe sur 
                les sites web où nous pouvons nous connecter.
            </p>
            <WebExample title="Input de type mot de passe">
                <Code language="html">{password}</Code>
            </WebExample>
        </section>

        <section>
            <h2>Bouton de soumission</h2>
            <p>
                L&apos;input qui permet d&apos;afficher un bouton de soumission. On l&apos;utilisera généralement comme bouton pour soumettre un 
                formulaire dans un site web. L&apos;attribut <IC>value</IC> nous permet de spécifier le texte du bouton. Nous verrons 
                comment programmer ces boutons en Javascript, dans les derniers modules du cours.
            </p>
            <WebExample title="Input de type soumission">
                <Code language="html">{submit}</Code>
            </WebExample>
        </section>

        <section>
            <h2>Autres inputs</h2>
            <p>
                Il existe une panoplie d&apos;autres inputs disponible. Si vous voulez voir la liste complète supporté, je vous recommande 
                de vous rendre au site web suivant:
            </p>
            <p>
                <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input" target="_blank">
                    MDN - &lt;input&gt;: The Input (Form Input) element
                </a>
            </p>
        </section>
    </>
}