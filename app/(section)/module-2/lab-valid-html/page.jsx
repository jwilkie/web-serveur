import CodeBlock from '@/components/CodeBlock';
import ColoredBox from '@/components/ColoredBox';
import { DownloadBlock, File } from '@/components/DownloadBlock';

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Laboratoire - Validation et correction de HTML",
    description: "Présentation du laboratoire sur la validation et la correction de HTML.",
    keywords: ["html", "validation", "correction"],
    group: "labs"
}

const html = 
`<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>

<body>
    <header>
        <h1>Dinosaures</h1>
        <nav>
            <ul>
                <a link="https://fr.wikipedia.org/wiki/Triceratops"><li>Triceratops</li></a>
                <a link="https://fr.wikipedia.org/wiki/Tyrannosaurus"><li>Tyrannosaurus</li></a>
                <a link="https://fr.wikipedia.org/wiki/Diplodocus"><li>Diplodocus</li></a>
            </ul>
        </nav>

        <main>
            <h3>Introduction</h3>
            <p>
                Orosaurus Procompsognathus Sanpasaurus Baryonyx Baotianmansaurus 
                Doratodon Shanshanosaurus Theiophytalia Suchoprion Koutalisaurus 
                Yaxartosaurus Ichthyornis dispar Squalodon Chindesaurus 
                Daspletosaurus Pteropelyx Marshosaurus Nectosaurus Postosuchus 
                Sinucerasaurus Linhenykus Kentrurosaurus Coelosaurus Callovosaurus 
                Fruitadens Khetranisaurus Apatodon Scolosaurus Animantarx 
                Atrociraptor.
            </p>
            <table>
                <tr>
                    <td><strong>Nom</strong></td>
                    <td><strong>Classe</strong></td>
                    <td><strong>Ordre</strong></td>
                    <td><strong>Famille</strong></td>
                </tr>
                <tr>
                    <td>Triceratops</td>
                    <td>Sauropsida</td>
                    <td>Ornithischia</td>
                    <td>Ceratopsidae</td>
                <tr>
                    <td>Tyrannosaurus</td>
                    <td>Sauropsida</td>
                    <td>Saurischia</td>
                    <td>Tyrannosauridae</td>
                <tr>
                    <td>Diplodocus</td>
                    <td>Sauropsida</td>
                    <td>Saurischia</td>
                    <td>Diplodocidae</td>
            </table>

            <h3>Triceratops</h3>
            <section>
                <p>
                    Isanosaurus Caseosaurus Miragaia Tehuelchesaurus Camptosaurus 
                    Massospondylus Mochlodon Klamelisaurus Maxakalisaurus Unaysaurus 
                    Micropachycephalosaurus Utahraptor Laosaurus Liaoningosaurus 
                    Polyodontosaurus.
                </p>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Triceratops_BW.jpg/220px-Triceratops_BW.jpg">

            <section>
                <h3>Tyrannosaurus</h3>
                <p>
                    Zuniceratops Ouranosaurus Streptospondylus Gallimimus Sahaliyania 
                    Vulcanodon Nectosaurus Lamplughsaura Miragaia Draconyx 
                    Kerberosaurus Aegyptosaurus Barosaurus Demandasaurus Dynamosaurus.
                </p>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Tyranosaurus_rex_1.svg/220px-Tyranosaurus_rex_1.svg.png">

            <h3>Diplodocus</h3>
            <section>
                <p>
                    Aniksosaurus Callovosaurus Ilokelesia Olorotitan Mirischia 
                    Protohadros Orthogoniosaurus Ojoraptorsaurus Laplatasaurus 
                    Talarurus Xiongguanlong Dysganus Glyptodontopelta Aorun 
                    Neosaurus.
                </p>
                <img href="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Diplodocus_carnegii.jpg/280px-Diplodocus_carnegii.jpg">

        </main>
    </header>

    <footer>
        &copy;Collège La Cité
    </footer>
</body>

</html>`;

export default function Page() {
    return <>
        <section>
            <h2>Marche à suivre</h2>
            <p>
                Pour compléter ce laboratoire, vous devez:
            </p>
            <ol>
                <li>
                    Prendre le code ci-dessous et le valider à l&apos;aide des outils de valitions du W3C vu en classe.
                </li>
                <li>
                    Corriger le fichier HTML pour qu&apos;il devienne valide, sans retirer de contenu de la page Web.
                </li>
                <li>
                    Corriger les autres problèmes au niveau des bonnes pratiques du HTML.
                </li>
            </ol>
            <ColoredBox title="Attention: ">
                Je vous suggère fortement de créer un projet complet pour ce fichier HTML et de le tester dans votre navigateur pour que vous 
                soyez certain que vos modifications ne change pas le contenu du site Web.
            </ColoredBox>
        </section>

        <section>
            <h2>Code HTML à valider</h2>
            <CodeBlock language="html">{html}</CodeBlock>
        </section>

        <section>
            <h2>Solution</h2>
            <DownloadBlock>
                <File fileName="solution.zip" path="/labs/html-valid-solution.zip">solution.zip</File>
            </DownloadBlock>
        </section>
    </>
}