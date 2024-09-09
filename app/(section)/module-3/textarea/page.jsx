import IC from '@/components/InlineCode';
import { WebExample, Code } from '@/components/WebExample';
import ColoredBox from '@/components/ColoredBox';

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Zone de texte",
    description: "Présentation de la balise textarea qui permet à l'utilisateur d'entrer une grande quantité de texte avec potentiel retour de ligne.",
    keywords: ["html", "textarea", "texte"],
    group: "notes"
}

const textarea = 
`<p>
    Zone de texte: 
</p>

<!-- Zone de texte -->
<textarea rows="10" cols="80">
Texte par défaut dans la zone de texte
</textarea>`;

export default function Page() {
    return <>
        <section>
            <h2>Textarea</h2>
            <p>
                Si vous voulez que votre utilisateur puisse entrer des valeurs de texte qui prennent plus d&apos;une ligne, le input de 
                type texte n&apos;est pas très pratique. Vous voulez plutôt utiliser la balise <IC>&lt;textarea&gt;</IC> dans ce cas. 
                Contrairement à la balise <IC>&lt;input&gt;</IC>, le <IC>&lt;textarea&gt;</IC> nécessite une balise de fermeture. 
                Elle devra aussi avoir quelques attributs supplémentaires.
            </p>
            <p>
                Cette balise s&apos;utilise de la façon suivante:
            </p>
            <WebExample title="Zone de texte">
                <Code language="html">{textarea}</Code>
            </WebExample>
            <p>
                Vous noterez dans l&apos;exemple ci-dessus les attributs <IC>rows</IC> et <IC>cols</IC>. Ils représentent respectivement
                le nombre de rangées (lignes) et le nombre de colonne (caractères) utilisé par la zone de texte. Il est important de 
                spécifier ces valeurs pour des raisons de rétrocompatibilité, même si nous pourrons modifier la taille de la boîte de 
                texte plus tard avec le CSS.
            </p>
            <ColoredBox title="Attention: ">
                Il est important de noter qu&apos;au lieu d&apos;utiliser l&apos;attribut <IC>value</IC> pour mettre une valeur par défaut, nous 
                ajoutons simplement le contenu par défaut à l&apos;intérieur de la balise de la zone de texte.
            </ColoredBox>
        </section>
    </>
}