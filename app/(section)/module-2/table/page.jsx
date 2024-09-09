import IC from '@/components/InlineCode';
import { WebExample, Code } from '@/components/WebExample';
import ColoredBox from '@/components/ColoredBox';

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Tableaux",
    description: "Présentation de la balise de tableau qui permet d'afficher une grande quantité de données dans un espace restraint.",
    keywords: ["html", "tr", "td", "cellule", "row", "header"],
    group: "notes"
}

const tableSimple = 
`<table>
    <tr>
        <td> 1x1 </td>
        <td> 1x2 </td>
        <td> 1x3 </td>
        <td> 1x4 </td>
    </tr>
    <tr>
        <td> 2x1 </td>
        <td> 2x2 </td>
        <td> 2x3 </td>
        <td> 2x4 </td>
    </tr>
    <tr>
        <td> 3x1 </td>
        <td> 3x2 </td>
        <td> 3x3 </td>
        <td> 3x4 </td>
    </tr>
</table>`;

const tableSection = 
`<table>
    <thead>
        <tr>
            <th> Prix </th>
            <th> Quantité </th>
            <th> Taxe </th>
            <th> Sous-total </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td> 10 </td>
            <td> 2 </td>
            <td> 2.60 </td>
            <td> 22.60 </td>
        </tr>
        <tr>
            <td> 5 </td>
            <td> 3 </td>
            <td> 1.95 </td>
            <td> 16.95 </td>
        </tr>
        <tr>
            <td> 8 </td>
            <td> 2 </td>
            <td> 2.08 </td>
            <td> 18.08 </td>
        </tr>
    </tbody>
    <tfoot>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td> 57.63 </td>
        </tr>
    </tfoot>
</table>`;

const tableCaption =
`<table>
    <caption>Tic&#8209;Tac&#8209;Toe</caption>
    <tr>
        <td> X </td>
        <td>   </td>
        <td> O </td>
    </tr>
    <tr>
        <td> X </td>
        <td> X </td>
        <td>   </td>
    </tr>
    <tr>
        <td> X </td>
        <td> O </td>
        <td> O </td>
    </tr>
</table>`;

const tableFusion =
`<table>
    <tr>
        <td colspan="4">1 X 4</td>
    </tr>
    <tr>
        <td rowspan="3">3 X 1</td>
        <td>1 X 1</td>
        <td>1 X 1</td>
        <td>1 X 1</td>
    </tr>
    <tr>
        <td>1 X 1</td>
        <td colspan="2" rowspan="2">2 X 2</td>
    </tr>
    <tr>
        <td>1 X 1</td>
    </tr>
</table>`;

const tableFusionCSS = 
`table td {
    border: 1px dashed gray;
    text-align: center;
    padding: .5rem;
}`;

export default function Page() {
    return <>
        <section>
            <h2>Tableau simple</h2>
            <p>
                Les tableaux sont une façon d&apos;afficher de l&apos;information dans une page Web sous une forme compacte. Les tableaux servent 
                principalement à afficher des données, comme des budgets, des rapports financiers, des définitions de termes ou encore des 
                notes d&apos;examens. On peut aussi l&apos;utiliser tout simplement pour organiser des données sous différentes catégories.
            </p>
            <p>
                En HTML, les tableaux sont à la base créé à l&apos;aide de 3 balises différentes:
            </p>
            <dl>
                <dt><IC>&lt;table&gt;</IC></dt>
                <dd>
                    C&apos;est la balise englobant le tableau. L&apos;ensemble d&apos;un tableau devrait se retrouver à l&apos;intérieur de cette balise.
                </dd>
                
                <dt><IC>&lt;tr&gt;</IC></dt>
                <dd>
                    Balise représentant une rangée du tableau.
                </dd>
                
                <dt><IC>&lt;td&gt;</IC></dt>
                <dd>
                    Balise représentant une cellule du tableau. Les cellules doivent se retrouver absolument dans une balise de 
                    rangée <IC>&lt;tr&gt;</IC>.
                </dd>
            </dl>
            <p>
                Voici comment créer un simple tableau avec ces 3 balises:
            </p>
            <WebExample title="Tableau simple">
                <Code language="html">{tableSimple}</Code>
            </WebExample>
            <ColoredBox title="À noter: ">
                Le tableau est un peu difficile à remarquer. C&apos;est parce que par défaut, les bordures du tableau ne sont pas affiché. 
                Malheureusement, nous verrons uniquement comment ajouter les bordures avec du CSS dans les prochaines semaines.
            </ColoredBox>
        </section>

        <section>
            <h2>Sections de tableau</h2>
            <p>
                Dans les tableaux plus complexe, il est possible de diviser les tableaux en 3 sections: l&apos;entête, le corps et le pied. Nous 
                utiliserons 3 balises pour séparer ces sections. Ces balises seront mises directement à l&apos;intérieur de la 
                balise <IC>&lt;table&gt;</IC>.
            </p>
            <dl>
                <dt><IC>&lt;thead&gt;</IC></dt>
                <dd>
                    Balise englobant l&apos;entête du tableau. On y mettra en général les différents titres des colonnes.
                </dd>
                
                <dt><IC>&lt;tbody&gt;</IC></dt>
                <dd>
                    Balise englobant le corps du tableau. On y mettra généralement les données du tableau.
                </dd>
                
                <dt><IC>&lt;tfoot&gt;</IC></dt>
                <dd>
                    Balise englobant le pied du tableau. On y mettra généralement les résultats ou les totaux des données du tableau.
                </dd>
            </dl>
            <p>
                Voici à quoi ressemble un tableau avec ses différentes sections:
            </p>
            <WebExample title="Tableau avec sections">
                <Code language="html">{tableSection}</Code>
            </WebExample>
            <ColoredBox title="À noter: ">
                <p>
                    Il y a quelques petits détails à mentionner sur le code ci-dessus:  
                </p>
                <ul>
                    <li>
                        On doit mettre les <IC>&lt;tr&gt;</IC> à l&apos;intérieur des balises de section.
                    </li>
                    <li>
                        Dans un <IC>&lt;thead&gt;</IC>, on doit mettre des <IC>&lt;th&gt;</IC> au lieu de des <IC>&lt;td&gt;</IC>.
                    </li>
                    <li>
                        Il est possible de ne pas mettre de valeur dans une cellule.
                    </li>
                    <li>
                        Il est possible de ne pas mettre toutes les sections. Par exemple, il est possible d&apos;avoir uniquement le <IC>&lt;thead&gt;</IC> et <IC>&lt;tbody&gt;</IC> ou 
                        encore uniquement le <IC>&lt;tbody&gt;</IC> et le <IC>&lt;tfoot&gt;</IC>.
                    </li>
                </ul>
            </ColoredBox>
        </section>

        <section>
            <h2>Légende ou titre du tableau</h2>
            <p>
                Il est possible d&apos;afficher un titre ou une légende à un tableau à l&apos;aide de la balise <IC>&lt;caption&gt;</IC>. Si vous voulez utiliser cette 
                fonctionnalité, vous devez obligatoirement mettre cette balise en premier à l&apos;intérieur de la balise <IC>&lt;table&gt;</IC>.
            </p>
            <WebExample title="Tableau avec titre">
                <Code language="html">{tableCaption}</Code>
            </WebExample>
        </section>

        <section>
            <h2>Fusionner des cellules</h2>
            <p>
                Il est possible de fusionner des cellules à l&apos;aide des attributs <IC>colspan</IC> et <IC>rowspan</IC>. Les attributs sont un moyen de configurer certaines balise. 
                Dans le cas de ces 2 attributs, ils servent à configurer les cellules, donc les balises <IC>&lt;th&gt;</IC> ou <IC>&lt;td&gt;</IC>. Ces attributs 
                doivent indiquer de combien de cellules nous voulons faire la fusion à partir de la cellule spécifiée.
            </p>
            <p>
                La fusion se fait uniquement dans 2 directions: vers la droite pour <IC>colspan</IC> ou vers le bas pour <IC>rowspan</IC>. Il est aussi important 
                de noter que nous devons retirer les cellules qui sont fusionné à la cellule spécifié si nous voulons un HTML valide et un affichage correct.
            </p>
            <WebExample title="Tableau avec fusion">
                <Code language="html">{tableFusion}</Code>
                <Code language="css">{tableFusionCSS}</Code>
            </WebExample>
            <ColoredBox title="À noter: ">
                Les bordures du tableau ci-dessus ont été ajouté pour faciliter la visualisation des fusions. Nous verrons comment styler les tableaux plus tard dans 
                le cours, lorsque nous discuterons du CSS.
            </ColoredBox>
            <ColoredBox title="Attention: ">
                Par le passé, avec la fusion des cellules, il était fréquent d&apos;utiliser les tableaux pour gérer la disposition (layout) de la page Web. 
                Aujourd&apos;hui, les tableaux servent uniquement à faire la présentation de données. Vous ne devriez jamais utiliser les tableaux pour faire la 
                mise en page d&apos;un site web. C&apos;est une très mauvaise pratique. Ce sera plutôt le travail du CSS de s&apos;occuper de la disposition de notre site Web.
            </ColoredBox>
        </section>
    </>
}