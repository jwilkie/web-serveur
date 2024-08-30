import CodeBlock from '@/components/CodeBlock';
import IC from '@/components/InlineCode';

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Introduction au HTML",
    description: "Présentation du HTML, le langage de structure d'une page web.",
    keywords: ["html", "gabarit", "head", "body", "balise"],
    group: "notes"
}

const balises = 
`<balise-en-bloc> 
    ...
</balise-en-bloc>

ou

<balise-en-ligne />`;

const gabarit = 
`<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        
    </body>
</html>`;

export default function Page() {
    return <>
        <section>
            <h2>Introduction</h2>
            <p>
                Lorsque nous créons un site web, nous allons diviser le travail en 3 sections: la structure de la page web, 
                le style et le visuel de la page web et finalement le comportement de la page web. Chacune de ces 3 sections 
                utilise son propre langage de programmation, soit respectivement le HTML, le CSS et le Javascript. La première 
                chose à développer sera toujours la structure en HTML, c&apos;est donc le premier langage que nous apprendrons.
            </p>
            <p>
                Le HTML est un langage de balisage. Contrairement à un langage de programmation comme le Java ou le C#, les 
                langages de balisage ne contiennent pas de logique. Ils ne servent qu&apos;à définir et structurer de l&apos;information. 
                Le HTML sert donc à définir et à structurer nos pages Web. Comme vous pourrez le constater, le HTML sera 
                beaucoup plus simple à apprendre qu&apos;un langage de programmation. Vous serez très à l&apos;aise avec son utilisation 
                au bout de seulement quelques semaines.
            </p>
            <p>
                Il est important de noter: Chaque page web est un fichier HTML.
            </p>
        </section>

        <section>
            <h2>Les balises</h2>
            <p>
                Puisque le HTML est un langage de balise, il est essentiel de savoir ce qu&apos;est une balise en HTML pour pouvoir 
                l&apos;utiliser. En effet, en HTML, tout est une balise. On les retrouve généralement sous le format suivant:
            </p>
            <CodeBlock language="html">{balises}</CodeBlock>
            <p>
                Chaque balise possède un nom. Elles vont aussi, en général, contenir du texte ou d&apos;autres balises. Finalement, 
                une balise doit se fermer à l&apos;aide d&apos;une balise de fermeture contenant une barre oblique <IC>/</IC>. C&apos;est ce 
                qu&apos;on appelle une <strong>balise en bloc</strong>. Il existe aussi des balises qui ne peuvent rien contenir. On appelle ces 
                balises des <strong>balises en ligne</strong>. Dans ce cas particulier, nous omettrons la balise de fermeture et mettrons la 
                barre oblique <IC>/</IC> directement à la fin de la balise d&apos;ouverture.
            </p>
            <p>
                Il existe plus de 100 balises différentes en HTML et elles utilisent tous une syntaxe similaire à celle montré 
                ci-dessus. Vous n&apos;aurez pas à apprendre toutes les balises par coeur, mais il est important de connaître les 
                balises de base. Pour les balises plus complexe ou plus rarement utilisé, vous pourrez utiliser les ressources 
                disponibles sur ce site ou ailleurs sur Internet. Nous commencerons à voir plus en détail chaque balise un peu 
                plus tard. Pour le moment, voyons comment construire la structure de base d&apos;une page Web.
            </p>
        </section>

        <section>
            <h2>Gabarit d&apos;un fichier HTML</h2>
            <p>
                Chaque page Web que nous allons créer utilisera le gabarit HTML de base ci-dessous. Comme tous les fichiers de 
                code, les fichier HTML sont des fichiers textes. Pour les créer, vous pouvez simplement créer un fichier texte 
                vide dans votre explorateur de fichier où vous changerez l&apos;extension pour <IC>.html</IC> au lieu de <IC>.txt</IC>. 
                Vous pouvez aussi créer le fichier directement dans votre éditeur de code, en vous assurant de bien mettre 
                l&apos;extension à <IC>.html</IC>. Si le fichier n&apos;a pas la bonne extension les navigateurs Web ne seront pas en 
                mesure d&apos;afficher votre page Web.
            </p>
            <CodeBlock language="html">{gabarit}</CodeBlock>
            <p>
                Chaque balise dans ce gabarit est importante. Voici donc une courte explication de chacune d&apos;entre elle:
            </p>
            <dl>
                <dt><IC>&lt;!doctype html&gt;</IC></dt>
                <dd>
                    Commande indiquant au navigateur Web que le fichier contient du HTML sous le format le plus récent. 
                    Contrairement à ce que l&apos;on peut penser, cette commande n&apos;est théoriquement pas une balise, mais plutôt une 
                    instruction de contrôle pour le navigateur. Assurez-vous de toujours ajouter le Doctype au haut de votre 
                    fichier HTML.
                </dd>

                <dt><IC>&lt;html&gt;</IC></dt>
                <dd>
                    La balise englobant la page Web. Toute la page Web au complet est inséré à l&apos;intérieur de cette balise. 
                    Nous indiquons aussi la langue du contenu de la page Web dans cette balise.
                </dd>

                <dt><IC>&lt;head&gt;</IC></dt>
                <dd>
                    La balise indiquant au navigateur quoi faire avant d&apos;afficher la page. Toutes les balises à l&apos;intérieur 
                    du <IC>&lt;head&gt;</IC> servent à configurer la page Web avant son affichage. On y mettra plusieurs 
                    balises de configuration à l&apos;intérieur.
                </dd>

                <dt><IC>&lt;meta&gt;</IC></dt>
                <dd>
                    La balise permettant de donner de l&apos;information sur la page. Nous l&apos;utilisons généralement pour indiquer 
                    certaines informations importante au navigateur ou aux moteurs de recherche. Elle se retrouve uniquement à 
                    l&apos;intérieur de la balise <IC>&lt;head&gt;</IC>. Dans notre gabarit, nous l&apos;utilisons pour indiquer 
                    l&apos;encodage de la page Web (utf-8) et la fenêtre d&apos;affichage pour que le site web fonctionne mieux sur les 
                    versions mobiles.
                </dd>
                
                <dt><IC>&lt;title&gt;</IC></dt>
                <dd>
                    La balise permettant d&apos;indiquer le titre de la page. Le titre de la page sera affiché dans l&apos;onglet de la 
                    page Web dans le navigateur. Comme pour la balise <IC>&lt;meta&gt;</IC>, la balise <IC>&lt;title&gt;</IC> se 
                    retrouve uniquement à l&apos;intérieur de la balise <IC>&lt;head&gt;</IC>. De plus, une page Web doit contenir 
                    un seul titre.
                </dd>

                <dt><IC>&lt;body&gt;</IC></dt>
                <dd>
                    La balise contenant le corps de la page Web. Essentiellement, toutes les balises contrôlant l&apos;affichage et 
                    la structure du site Web se retrouve à l&apos;intérieur de cette balise. Nous mettrons donc la majorité de notre 
                    code dans la balise <IC>&lt;body&gt;</IC>.
                </dd>
            </dl>
            <p>
                Si vous ouvrez le fichier HTML ci-dessus dans votre navigateur, vous aurez simplement une page blanche avec un 
                titre. Nous verrons dans les prochaines pages comment ajouter des éléments à notre page Web à l&apos;aides de 
                différentes balises.
            </p>
        </section>
    </>
}