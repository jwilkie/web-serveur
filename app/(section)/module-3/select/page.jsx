import IC from '@/components/InlineCode';
import { WebExample, Code } from '@/components/WebExample';
import ColoredBox from '@/components/ColoredBox';

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Boîte de sélection",
    description: "Présentation de la balise select qui permet à l'utilisateur de choisir une ou plusieurs options.",
    keywords: ["html", "select", "combobox", "listbox", "dropdown list"],
    group: "notes"
}

const dropdown = 
`<!-- Liste de sélection -->
<p>
    Choisissez la taille du chandail: 
</p>

<select size="1">
    <option>XS</option>
    <option>S</option>
    <option>M</option>
    <option>L</option>
    <option>XL</option>
</select>`;

const box = 
`<!-- Boîte de sélection unique -->
<p>
    Choisissez votre protéine: 
</p>

<select size="4">
    <option>Poulet</option>
    <option>Porc</option>
    <option>Boeuf</option>
    <option>Légumineuse</option>
</select>`;

const multiple = 
`<!-- Boîte de sélection multiple -->
<p>
    Vos animaux préférés: 
</p>

<select size="8" multiple>
    <option>Chat</option>
    <option>Chien</option>
    <option>Lapin</option>
    <option>Hamster</option>
    <option>Serpent</option>
    <option>Tortue</option>
    <option>Oiseau</option>
    <option>Pinguin</option>
</select>`;

const group = 
`<!-- Groupes d'options -->
<p>
    Choisissez votre jeu vidéo: 
</p>

<select size=1>
    <optgroup label="Xbox">
        <option>Halo</option>
        <option>Minecraft</option>
        <option>Forza</option>
    </optgroup>
    <optgroup label="Playstation">
        <option>Ratchet & Clank</option>
        <option>Horizon</option>
        <option>God of War</option>
    </optgroup>
    <optgroup label="Nintendo">
        <option>Pokémon</option>
        <option>The Legend of Zelda</option>
        <option>Metroid</option>
    </optgroup>
</select>`;

const defaut = 
`<!-- Option par défaut -->
<p>
    Accompagnement: 
</p>

<select size="1">
    <option>Salade de tomate</option>
    <option>Salade verte</option>
    <option selected>Soupe minestrone</option>
    <option>Soupe à l'oignon</option>
    <option>Crème de champignon</option>
</select>`;

export default function Page() {
    return <>
        <section>
            <h2>Sélection</h2>
            <p>
                Si vous voulez plutôt que l&apos;utilisateur du site Web puisse sélectionner un ou plusieurs éléments dans une boîte de 
                sélection, c&apos;est la balise <IC>&lt;select&gt;</IC> que vous voulez. Cette balise, avec l&apos;aide de la 
                balise <IC>&lt;option&gt;</IC>, vous permet de créer une boîte avec plusieurs choix que l&apos;utilisateur pourra sélectionner. 
                Elle possède aussi quelques attributs intéressant qui nous permettront de changer son comportement.
            </p>
            <p>
                Dans cette page, nous verrons les façons les plus populaire d&apos;utiliser cette balise.
            </p>
        </section>

        <section>
            <h2>Liste déroulante</h2>
            <p>
                Si vous voulez que votre utilisateur puisse choisir un seul choix parmi plusieurs, la liste déroulante est un bon choix.
                Cette méthode est comparable aux boutons radio, mais est généralement beaucoup plus compacte dans votre interface 
                graphique.
            </p>
            <p>
                Pour créer une liste déroulante, nous utiliserons la balise <IC>&lt;select&gt;</IC> avec un attribut <IC>size</IC> qui 
                aura la valeur de <IC>1</IC>.
            </p>
            <WebExample title="Liste déroulante">
                <Code language="html">{dropdown}</Code>
            </WebExample>
        </section>

        <section>
            <h2>Boîte</h2>
            <p>
                Si vous voulez que votre utilisateur puisse choisir un seul choix parmi plusieurs, mais que vous voulez afficher tous 
                les choix rapidement à l&apos;utilisateur sans qu&apos;il ait besoin de cliquer à quelque part, la boîte de sélection unique est 
                un bon choix. Cette méthode est comparable aux boutons radio et à la liste déroulante.
            </p>
            <p>
                Pour créer une boîte de sélection unique, nous utiliserons la balise <IC>&lt;select&gt;</IC> avec un 
                attribut <IC>size</IC> supérieur à <IC>1</IC>. Si nous ne voulons pas de barre de défilement, nous voudrons mettre cette
                valeur exactement au nombre de <IC>&lt;option&gt;</IC> dans le <IC>&lt;select&gt;</IC>.
            </p>
            <WebExample title="Boîte de sélection unique">
                <Code language="html">{box}</Code>
            </WebExample>
        </section>

        <section>
            <h2>Boîte multiple</h2>
            <p>
                Si vous voulez que votre utilisateur puisse choisir plusieurs choix parmi une liste d&apos;élément, la boîte de sélection 
                multiple est un bon choix. Cette méthode est comparable aux checkbox.
            </p>
            <p>
                Pour créer une boîte de sélection multiple, nous utiliserons la balise <IC>&lt;select&gt;</IC> avec un 
                attribut <IC>size</IC> supérieur à <IC>1</IC>. Si nous ne voulons pas de barre de défilement, nous voudrons mettre cette
                valeur exactement au nombre de <IC>&lt;option&gt;</IC> dans le <IC>&lt;select&gt;</IC>. De plus vous devrez ajouter 
                l&apos;attribut <IC>multiple</IC> sur le <IC>&lt;select&gt;</IC>.
            </p>
            <WebExample title="Boîte de sélection multiple">
                <Code language="html">{multiple}</Code>
            </WebExample>
            <ColoredBox title="Attention: ">
                La boîte de choix multiples utilise principalement le fait que le l&apos;on peut cliquer et glisser dans celle-ci. De plus, 
                elle utilise abondamment les touches du clavier <kbd>Shift</kbd> et <kbd>Ctrl</kbd> pour sélectionner ou désélectionner 
                un ou plusieurs éléments, ce qui n&apos;est pas très intuitif. Bref, puisque cette façon de faire n&apos;est pas très facile à 
                comprendre et à utiliser sur appareil mobile, on préfèrera généralement utiliser les checkboxes.
            </ColoredBox>
        </section>

        <section>
            <h2>Option par défaut</h2>
            <p>
                Si vous voulez offrir une valeur par défaut qui est différente de la valeur au haut d&apos;une liste déroulante ou si vous 
                voulez offrir des options déjà sélectionnées dans une boîte de sélection, l&apos;attribut <IC>selected</IC> nous aidera. 
                Vous pouvez placer cet attribut sur n&apos;importe quel balise <IC>&lt;option&gt;</IC> pour en faire le choix par défaut.
            </p>
            <p>
                Vous ne pouvez mettre qu&apos;une seule valeur par défaut dans un <IC>&lt;select&gt;</IC>, à moins, bien entendu, que votre 
                boîte de sélection soit multiple.
            </p>
            <WebExample title="Option par défaut">
                <Code language="html">{defaut}</Code>
            </WebExample>
        </section>

        <section>
            <h2>Groupes d&apos;options</h2>
            <p>
                Il est possible de regrouper les options dans un <IC>&lt;select&gt;</IC> en petit groupe. Cela nous permet de mieux 
                organiser les boîtes de sélection qui ont de nombreuses options. Pour ce faire, nous utiliserons la 
                balise <IC>&lt;optgroup&gt;</IC> avec son attribut <IC>label</IC>.
            </p>
            <p>
                Voici comment faire pour les utiliser:
            </p>
            <WebExample title="Boîte de sélection avec groupes">
                <Code language="html">{group}</Code>
            </WebExample>
            <ColoredBox title="Attention: ">
                Cliquez bien sur la liste déroulante pour bien voir les groupes. Vous pouvez aussi les utiliser avec les boîtes de 
                sélection unique et multiple.
            </ColoredBox>
        </section>
    </>
}