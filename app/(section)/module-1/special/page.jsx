import IC from '@/components/InlineCode';
import OverflowContainer from '@/components/OverflowContainer';
import ColoredBox from '@/components/ColoredBox';

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Charactères spéciaux",
    description: "Présentation des séquences d'échapement en HTML pour les caractères spéciaux.",
    keywords: ["html", "échappement", "texte"],
    group: "notes"
}

export default function Page() {
    return <>
        <section>
            <h2>Séquences d&apos;échappement</h2>
            <p>
                Certains caractères en HTML ne peuvent pas être affiché facilement. On peut catégoriser ces caractères en 2 groupes 
                différents:
            </p>
            <ul>
                <li>Les caractères réservé par le HTML</li>
                <li>Les caractères ne se trouvant pas sur un clavier</li>
            </ul>
            <p>
                Un peu comme le langage Java ou C#, le HTML possède donc des séquences d&apos;échappement pour corriger ce problème. 
                Toutefois, contrairement à la plupart des langages de programmation, nous n&apos;utiliserons pas la barre oblique 
                inverse <IC>\</IC> pour échapper nos caractères. Nous utiliserons plutôt l&apos;esperluette <IC>&</IC>.
            </p>
        </section>

        <section>
            <h2>Caractères réservés</h2>
            <p>
                Le langage HTML possède 5 caractères réservés. Pour chacun d&apos;entre eux, nous pouvons utiliser les séquences d&apos;échappements 
                suivantes:
            </p>
            <OverflowContainer>
                <table>
                    <thead>
                        <tr>
                            <th>Caractère</th>
                            <th>Échappement avec numéro</th>
                            <th>Échappement avec texte</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>&quot;</td>
                            <td>&amp;#34;</td>
                            <td>&amp;quot;</td>
                        </tr>
                        <tr>
                            <td>&apos;</td>
                            <td>&amp;#39;</td>
                            <td>&amp;apos;</td>
                        </tr>
                        <tr>
                            <td>&amp;</td>
                            <td>&amp;#38;</td>
                            <td>&amp;amp;</td>
                        </tr>
                        <tr>
                            <td>&lt;</td>
                            <td>&amp;#60;</td>
                            <td>&amp;lt;</td>
                        </tr>
                        <tr>
                            <td>&gt;</td>
                            <td>&amp;#62;</td>
                            <td>&amp;gt;</td>
                        </tr>
                    </tbody>
                </table>
            </OverflowContainer>
        </section>

        <section>
            <h2>Caractères n&apos;étant pas sur un clavier</h2>
            <p>
                Les caractères n&apos;étant pas sur un clavier sont nombreux. Il y a en effet une table Unicode complète de caractère 
                qui, pour la plupart, ne sont pas accessible sur votre clavier. Pour ces caractères, il est possible de trouver 
                leur séquence d&apos;échappement facilement sur le Web. Ils commencent généralement par les symboles <IC>&amp;#</IC>, 
                mais certains d&apos;entre eux sont utilisé assez fréquement pour avoir une version textuelle commençant uniquement 
                par <IC>&amp;</IC>. 
            </p>
            <p>
                Voici tout de même quelques caractères intéressant à connaître:
            </p>
            <OverflowContainer>
                <table>
                    <thead>
                        <tr>
                            <th>Caractère</th>
                            <th>Échappement</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>&nbsp;</td>
                            <td>&amp;nbsp;</td>
                            <td>Un espace ne pouvant pas séparer les mots sur plusieurs lignes.</td>
                        </tr>
                        <tr>
                            <td>&#8209;</td>
                            <td>&amp;#8209;</td>
                            <td>Un tiret ne pouvant pas séparer les mots sur plusieurs lignes.</td>
                        </tr>
                        <tr>
                            <td>©</td>
                            <td>&amp;copy;</td>
                            <td>Le symbole de copyright.</td>
                        </tr>
                        <tr>
                            <td>¢</td>
                            <td>&amp;cent;</td>
                            <td>Le symbole des cents</td>
                        </tr>
                    </tbody>
                </table>
            </OverflowContainer>
            <ColoredBox title="À noter: ">
                Les caractères qui ne sont pas sur le clavier peuvent aussi être copier/coller directement dans le fichier HTML 
                puisque celui-ci supporte l&apos;encodage unicode UTF-8. Si vous ne voulez pas utiliser les séquences d&apos;échapement pour 
                ces caractères, vous avez tout à fait le droit.
            </ColoredBox>
        </section>
    </>
}