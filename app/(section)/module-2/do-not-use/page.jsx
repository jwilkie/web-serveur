import IC from '@/components/InlineCode';
import OverflowContainer from '@/components/OverflowContainer';

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Balises à ne pas utiliser",
    description: "Présentation des balises que vous ne devez pas utiliser.",
    keywords: ["html", "do not use", "br", "hr", "en ligne"],
    group: "notes"
}

export default function Page() {
    return <>
        <section>
            <h2>Mauvaises pratiques et balises obsolètes</h2>
            <p>
                De nombreuses balises ne devraient pas être utilisé pour la conception de nos sites web. Parfois, c&apos;est parce que ces 
                balises sont trop vieilles et ne devraient plus être utilisé dans du HTML moderne ou parfois parce qu&apos;elles sont 
                difficile à styler avec le CSS. L&apos;utilisation de ces balises est un très mauvaise pratique.
            </p>
            <p>
                Voici une liste de quelques balises que vous ne devriez jamais utiliser:
            </p>
            <OverflowContainer>
                <table>
                    <thead>
                        <tr>
                            <th>Balise</th>
                            <th>Utilité</th>
                            <th>Raison pour ne pas l&apos;utiliser</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><IC>&lt;br&gt;</IC></td>
                            <td>Retour de ligne</td>
                            <td>Difficile à styler avec le CSS et mauvaise utilisation générale par les étudiants</td>
                        </tr>
                        <tr>
                            <td><IC>&lt;hr&gt;</IC></td>
                            <td>Séparateur horizontal</td>
                            <td>Difficile à styler avec le CSS</td>
                        </tr>
                        <tr>
                            <td><IC>&lt;center&gt;</IC></td>
                            <td>Centrer du contenu</td>
                            <td>N&apos;est plus disponible en HTML5</td>
                        </tr>
                        <tr>
                            <td><IC>&lt;applet&gt;</IC></td>
                            <td>Insérer des logiciels externes dans la page web</td>
                            <td>N&apos;est plus disponible en HTML5</td>
                        </tr>
                        <tr>
                            <td><IC>&lt;acronym&gt;</IC></td>
                            <td>Indiquer la valeur d&apos;un acronyme</td>
                            <td>Elle est remplacé par la balise <IC>&lt;abbr&gt;</IC> en HTML5</td>
                        </tr>
                        <tr>
                            <td><IC>&lt;bgsound&gt;</IC></td>
                            <td>Mettre de l&apos;audio en fond de page</td>
                            <td>Elle est remplacé par la balise <IC>&lt;audio&gt;</IC> en HTML5</td>
                        </tr>
                        <tr>
                            <td><IC>&lt;dir&gt;</IC></td>
                            <td>Créer une hierarchie d&apos;élément</td>
                            <td>Elle est supprimé en HTML5 et on utilisera plutôt les <IC>&lt;ul&gt;</IC></td>
                        </tr>
                        <tr>
                            <td><IC>&lt;frame&gt;</IC>, <IC>&lt;frameset&gt;</IC> et <IC>&lt;noframe&gt;</IC></td>
                            <td>Créer des sous-pages</td>
                            <td>N&apos;est plus disponible en HTML5 et on utilisera plutôt les <IC>&lt;iframe&gt;</IC></td>
                        </tr>
                        <tr>
                            <td><IC>&lt;blink&gt;</IC></td>
                            <td>Fait clignoter du texte</td>
                            <td>N&apos;est plus disponible en HTML5</td>
                        </tr>
                        <tr>
                            <td><IC>&lt;font&gt;</IC></td>
                            <td>Change la couleur, la taille et la police de caractère du texte</td>
                            <td>N&apos;est plus disponible en HTML5 puisque le CSS le gère</td>
                        </tr>
                    </tbody>
                </table>
            </OverflowContainer>
        </section>
    </>
}