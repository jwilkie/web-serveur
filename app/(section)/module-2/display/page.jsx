import IC from '@/components/InlineCode';

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Types d'affichage",
    description: "Présentation des types d'affichage de base utilisé dans le web.",
    keywords: ["html", "inline", "en bloc", "bloque", "en ligne"],
    group: "notes"
}

export default function Page() {
    return <>
        <section>
            <h2>Affichage par défaut</h2>
            <p>
                En règle générale, chaque balise HTML s&apos;affiche de l&apos;une des 2 manières de base disponible dans un navigateur web, soit en 
                bloc ou en ligne. Cet affichage par défaut de chaque balise indique au navigateur comment disposer l&apos;élément dans son interface
                graphique.
            </p>
            <p>
                Dans cette page, nous vous expliquerons comment fonctionne ces 2 types d&apos;affichage et nous vous indiquerons quelle balise 
                utilise ce type d&apos;affichage par défaut.
            </p>
        </section>

        <section>
            <h2>Affichage en bloc (block)</h2>
            <p>
                L&apos;affichage en bloc est un affichage qui force son élément à prendre toute l&apos;espace possible sur la largeur et à ne prendre que 
                l&apos;espace nécesssaire en hauteur. Par conséquant, tous les éléments en bloc auront tendance à ce mettre un en dessous de l&apos;autre. 
            </p>
            <p>
                Voici une liste des balises vu jusqu&apos;à maintenant qui utilise l&apos;affichage en bloc.
            </p>
            <ul>
                <li><IC>&lt;p&gt;</IC></li>
                <li><IC>&lt;h?&gt;</IC></li>
                <li><IC>&lt;ul&gt;</IC></li>
                <li><IC>&lt;ol&gt;</IC></li>
                <li><IC>&lt;li&gt;</IC></li>
                <li><IC>&lt;header&gt;</IC></li>
                <li><IC>&lt;footer&gt;</IC></li>
                <li><IC>&lt;main&gt;</IC></li>
                <li><IC>&lt;nav&gt;</IC></li>
                <li><IC>&lt;section&gt;</IC></li>
                <li><IC>&lt;table&gt;</IC></li>
            </ul>
        </section>

        <section>
            <h2>Affichage en ligne (inline)</h2>
            <p>
                L&apos;affichage en ligne est un affichage qui force son élément à suivre le texte dans un site Web. Les balises pouvant manipuler 
                du texte ou s&apos;insérer facilement dans le texte ont généralement ce type d&apos;affichage. En général, puisque ce type d&apos;affichage 
                suis le texte, les balises ayant ce type d&apos;affichage se retrouverons l&apos;une à côté de l&apos;autre si elles sont utilisées 
                conjointement.
            </p>
            <p>
                Voici une liste des balises vu jusqu&apos;à maintenant qui utilise l&apos;affichage en ligne.
            </p>
            <ul>
                <li>Le texte</li>
                <li><IC>&lt;strong&gt;</IC></li>
                <li><IC>&lt;a&gt;</IC></li>
                <li><IC>&lt;img&gt;</IC></li>
                <li><IC>&lt;video&gt;</IC></li>
                <li><IC>&lt;audio&gt;</IC></li>
                <li><IC>&lt;iframe&gt;</IC></li>
            </ul>
        </section>

        <section>
            <h2>Autres types d&apos;affichage</h2>
            <p>
                Il existe de nombreux autres types d&apos;affichage. Par exemple, les tableaux, les rangées de tableaux, les cellules de tableau, 
                les listes ainsi que les éléments de liste ont tous leur propre affichage, même si certains d&apos;entre eux ont un affichage très 
                similaire à l&apos;affichage en bloc. Il en existe aussi plusieurs autre.
            </p>
            <p>
                Nous verrons comment manipuler les types d&apos;affichage des éléments HTML lorsque nous verrons le CSS. En effet, la mise en page 
                et la disposition des éléments entre dans le visuel de la page et sera donc fait par le langage CSS.
            </p>
        </section>
    </>
}