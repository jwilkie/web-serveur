import IC from '@/components/InlineCode';

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Validation du HTML",
    description: "Présentation des conséquence d'un HTML non valide et des outils pour valider le HTML.",
    keywords: ["html", "valider", "seo", "compatibilité", "w3c"],
    group: "notes"
}

export default function Page() {
    return <>
        <section>
            <h2>Conséquences</h2>
            <p>
                Parfois, bien qu&apos;un site web semble s&apos;afficher correctement dans un navigateur, son HTML n&apos;est pas nécessairement
                valide. Cela peut arriver de plusieurs façon, comme une balise mal fermée, une mauvaise utilisation de certains 
                attributs ou encore parce que vous avez oublié de mettre le <IC>&lt;!doctype html&gt;</IC> au haut de votre fichier 
                HTML.
            </p>
            <p>
                Bien que cela ne semble pas être vraiment utile à corriger puisque les navigateurs sont très permissif, il y a de 
                très bonnes raison pour lesquelles on devrait toujours avoir un HTML valide:
            </p>

            <h3>SEO</h3>
            <p>
                Cet acronyme en anglais veut dire &quot;Search Engine Optimization&quot;, donc optimization des engins de recherche. 
                Essentiellement, un site web avec un HTML valide sera mieux classé lorsque les engins de recherche les analyseront. 
                Bref, un HTML valide veut dire que vous avez plus de chance d&apos;être mieux classé dans les recherches de Google.
            </p>
            
            <h3>Compatibilité</h3>
            <p>
                Certains navigateur sont beaucoup moins permissif que d&apos;autres. C&apos;est entres autres le cas des navigateurs qui ont 
                accès à moins de ressources, comme les navigateur sur des téléphones cellulaires ou sur des consoles de jeux. Si 
                vous voulez que votre site web fonctionne bien partout, il est important que son HTML soit valide.
            </p>
        </section>

        <section>
            <h2>Outil de validation</h2>
            <p>
                Très souvent, vos éditeurs de code Web ne vous afficheront pas par défaut si votre HTML n&apos;est pas valide. Il existe 
                toutefois plusieurs services pour vous aider. On utilisera souvent des outils qui nous permettent de faire du 
                &quot;linting&quot;. Ce terme signifie &quot;Analyser le code pour en ressortir les erreurs&quot;.
            </p>
            <p>
                Le W3C, le World Wide Web Consortium, est l&apos;organisme qui est derrière la standardisation du Web. Sans ce consortium, 
                le Web serait encore un total chaos. Derrières ce consortium, il y a de nombreuses compagnies, comme Google, Microsoft, 
                Apple, Amazon. Toutefois, on y retrouve aussi un nombre phénoménal de développeur indépendant venant de partout dans le 
                monde. Ce consortium nous fourni un analyseur de code pour nous permettre de valider notre HTML. Vous pouvez le 
                retrouver ici:
            </p>
            <p>
                <a href="https://validator.w3.org/#validate_by_input" target="_blank">Service de validation du W3C</a>
            </p>
        </section>
    </>
}