import IC from '@/components/InlineCode'
import CodeBlock from '@/components/CodeBlock'
import ColoredBox from '@/components/ColoredBox';

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Helpers",
    description: "Démonstration de l'utilisation des helpers pour faire des conditions ou des boucles avec Handlebars.",
    keywords: ["js", "node.js", "handlebars", "template", "ssr", "rendering", "if", "else", "unless", "each", "boucle", "condition"],
    group: "notes"
}

const ifjs = 
`app.get('/compte', (request, response) => {
    response.render('compte', {
        estConnecte: true,
        nom: 'Jonathan',
        recevoirCourriel: false
    });
});`;

const ifhandlebars =
`{{#if estConnecte}}
    <h2>{{nom}}</h2>
    <p>Recevoir des courriels d'information:</p>
    <input type="checkbox" {{#if recevoirCourriel}}checked{{/if}}>
{{/if}}`;

const elsehandlebars = 
`{{#if estConnecte}}
    <h2>{{nom}}</h2>
    <p>Recevoir des courriels d'information:</p>
    <input type="checkbox" {{#if recevoirCourriel}}checked{{/if}}>
{{else}}
    <p>Vous n'êtes pas connecté.</p>
{{/if}}`;

const op =
`app.get('/casino', (request, response) => {
    // On va chercher l'âge de l'utilisateur 
    const age = await getAgeUtilisateur();

    // On vérifie si l'utilisateur est assez vieux
    response.render('casino', {
        estAssezVieux: age >= 18
    });
});`;

const unlesshandlebars =
`{{#unless estConnecte}}
    <a href="/connexion">Se connecter</a>
    <a href="/inscription">S'inscrire</a>
{{/unless}}`;

const eachjs =
`app.get('/liste-epicerie', (request, response) => {
    response.render('epicerie', {
        listeEpicerie: [
            'pomme',
            'banane',
            'pain',
            'oeuf',
            'lait'
        ]
    });
});`;

const eachhandlebars =
`<ul>
    {{#each listeEpicerie}}
        <li>
            {{@index}} - {{this}}
        </li>
    {{/each}}
</ul>`;

const eachcomplexjs =
`app.get('/publications', (request, response) => {
    response.render('publications', {
        publications: [
            { 
                titre: 'Première publication',
                texte: 'Mon premier article', 
                auteur: 'Jonathan', 
                commentaires: [
                    { texte: 'Bravo!', auteur: 'Alice' },
                    { texte: 'Très intéressant', auteur: 'Bob' }
                ]
            },

            // Autre publications...
        ]
    });
});`;

const eachcomplexhandlebars =
`{{#each publications}}
    <article>
        <h2>{{this.titre}}</h2>
        <p>{{this.texte}}</p>
        <cite>Par {{this.auteur}}</cite>
    </article>
    <section>
        <h3>Commentaires</h3>
        <ul>
            {{#each this.commentaires}}
                <li>
                    <p>Commentaire à {{../this.auteur}} de {{this.auteur}}</p>
                    <p>{{this.texte}}</p>
                </li>
            {{/each}}
        </ul>
    </section>
{{/each}}`;

export default function Page() {
    return <>
        <section>
            <h2>Fonctions d'aide</h2>
            <p>
                Lors de la génération du HTML, il est possible d'utiliser certaines fonction d'aide pour nous faciliter la tâche. 
                Ces fonctions d'aide pourront utiliser les variables passées au fichier <IC>.handlebars</IC> pour performer 
                différentes opérations logiques, comme des conditions ou des boucles. On appelle ces fonctions 
                des <strong>helpers</strong>.
            </p>
            <p>
                Pour utiliser ces fonctions dans le HTML, nous utiliserons la syntaxe <IC>{'{{#nomFonction}}'}</IC> pour ouvrir un 
                bloc de fonction et la syntaxe <IC>{'{{/nomFonction}}'}</IC> pour fermer un bloc de fonction.
            </p>
            <p>
                Dans cette page, nous verrons seulement 3 fonctions d'aide, mais il en existe plusieurs autres. Il est même 
                possible de créer nos propres fonctions d'aide. Vous pouvez consulter les pages suivantes pour avoir plus 
                d'information sur ce sujet:
            </p>
            <ul>
                <li>
                    <a href="https://handlebarsjs.com/guide/builtin-helpers.html">Built-in Helpers</a>
                </li>
                <li>
                    <a href="https://handlebarsjs.com/guide/#custom-helpers">Custom Helpers</a>
                </li>
            </ul>
        </section>

        <section>
            <h2>Affichage conditionnel</h2>
            <p>
                La fonction d'aide d'affichage conditionnel permet d'afficher ou d'ajouter du HTML conditionnellement à l'aide 
                d'une variable retournant une valeur booléene. Elle s'utilise avec les 
                instructions <IC>{'{{#if}}'}</IC> et <IC>{'{{/if}}'}</IC>. Vous pouvez l'utiliser de la façon suivante:
            </p>
            <CodeBlock language="js">{ifjs}</CodeBlock>
            <CodeBlock language="handlebars">{ifhandlebars}</CodeBlock>
            <p>
                Dans l'exemple ci-dessus, l'affichage se fait puisque la variable <IC>estConnecte</IC> a la valeur <IC>true</IC>.
                Toutefois, si cette variable avait la valeur <IC>false</IC>, rien ne serait affiché. De la même façon, la case à
                cocher serait cochée seulement si la variable <IC>recevoirCourriel</IC> avait la valeur <IC>true</IC>.
            </p>
            <p>
                Il est aussi possible d'utiliser un <IC>{'{{else}}'}</IC> pour afficher ou ajouter du HTML si la condition n'est pas 
                respecté. Voici un exemple:
            </p>
            <CodeBlock language="handlebars">{elsehandlebars}</CodeBlock>
        </section>

        <section>
            <h2>Affichage conditionnel inverse</h2>
            <p>
                La fonction d'aide <IC>{'{{#if}}'}</IC> s'utilise avec une valeur booléene. Il n'est toutefois pas possible 
                d'effectuer des opérations logiques plus complexes, comme vérifier si une variable est plus grande qu'une autre ou 
                si une chaîne de caractères est plus longue qu'une certaine longueur. Pour ce faire, nous devons exécuter ces 
                opérations logiques dans le code Javascript de la façon suivante:
            </p>
            <CodeBlock language="js">{op}</CodeBlock>
            <p>
                Il y a toutefois une exception à cette règle. Une opération logique très courante est de vérifier si une variable 
                est fausse au lieu de vraie. Pour ce faire, nous pouvons utiliser la fonction d'aide <IC>{'{{#unless}}'}</IC>. Cette 
                fonction est l'inverse de la fonction <IC>{'{{#if}}'}</IC> et s'utilise de la même façon. Voici un exemple:
            </p>
            <CodeBlock language="handlebars">{unlesshandlebars}</CodeBlock>
            <p>
                Dans cet exemple, le bloc de code sera affiché seulement si la variable <IC>estConnecte</IC> a la 
                valeur <IC>false</IC>.
            </p>
        </section>

        <section>
            <h2>Boucles</h2>
            <p>
                La boucle, ou la répétition d'affichage, est une autre opération très courante avec Handlebars. On l'utilise pour 
                répéter un certain bloc de code pour chaque élément d'un tableau. Pour ce faire, nous utilisons la fonction
                d'aide <IC>{'{{#each}}'}</IC> qui doit recevoir un tableau en paramètre. Voici un exemple:
            </p>
            <CodeBlock language="js">{eachjs}</CodeBlock>
            <CodeBlock language="handlebars">{eachhandlebars}</CodeBlock>
            <p>
                Comme vous pouvez le constater avec l'exemple ci-dessus, l'instruction <IC>{'{{#each}}'}</IC> fonctionne de façon 
                très similaire à une boucle <IC>foreach</IC> de différents langages de programmation. À l'intérieur de la boucle, 
                vous pouvez utiliser l'instruction <IC>{'{{this}}'}</IC> pour représenter l'élément sur lequel vous êtes en train 
                de boucler. Vous pouvez aussi utiliser l'instruction <IC>{'{{@index}}'}</IC> pour avoir l'index sur lequel vous 
                êtes en train de boucler.
            </p>
        </section>

        <section>
            <h2>Boucles complexes</h2>
            <p>
                Il est aussi possible de faire des boucles plus complexes, comme des boucles sur des tableaux d'objets ou 
                encore des boucles imbriquées. Pour y arriver, nous utilisons toujours la même instruction <IC>{'{{#each}}'}</IC>,
                mais certaines subtilités supplémentaires seront nécessaires.
            </p>
            <CodeBlock language="js">{eachcomplexjs}</CodeBlock>
            <CodeBlock language="handlebars">{eachcomplexhandlebars}</CodeBlock>
            <p>
                Voici les explications sur les quelques subtilités de l'exemple ci-dessus:
            </p>
            <ul>
                <li>
                    Pour accéder aux propriétés de l'objet courant dans la boucle, nous utilisons la 
                    syntaxe <IC>{'{{this.propriete}}'}</IC>.
                </li>
                <li>
                    Pour accéder à l'objet courant de la boucle parente dans une boucle imbriquée, nous utilisons la 
                    syntaxe <IC>{'{{../this.propriete}}'}</IC>. Le double point <IC>{'..'}</IC> nous permet de
                    remonter d'un niveau dans les boucles imbriquées.
                </li>
            </ul>
        </section>
    </>;
}
