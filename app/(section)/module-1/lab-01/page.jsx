import BorderedBox from "@/components/BorderedBox";
import CodeBlock from "@/components/CodeBlock";
import ColoredBox from "@/components/ColoredBox";
import { DownloadBlock, File } from "@/components/DownloadBlock";
import IC from "@/components/InlineCode";
import OverflowContainer from "@/components/OverflowContainer";
import { Code, WebExample } from "@/components/WebExample";
import YoutubeVideo from "@/components/YoutubeVideo";

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Laboratoire 1",
    description: "Laboratoire sur l'utilisation des composants de base de ce gabarit.",
    keywords: ["gabarit", "apprentissage"],
    group: "labs"
}

const js = 
`let chaine = 'Une chaine';
let tab = [];

let i = 0;
for(const char in chaine) {
    tab.push(char);
    i++;
}

console.log(\`Taille du tableau: \${i}\`)`;

const css = 
`html {
    box-sizing: border-box;
}`;

const html = 
`<html>
    <head>
        <title>Test</title>
    </head>
    <body>
        <h1>Test</h1>
    </body>
</html>`

const exempleHTML1 =
`<input type="button" value="Changer de couleur" id="couleur">`;

const exempleHTML2 =
`<div class="container">
    <div class="box"></div>
</div>`;

const exempleCSS =
`.container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 10rem;
}

.box {
    width: 5rem;
    height: 5rem;
    background-color: #a00;
    transition: 1s;
}

.box:hover {
    transform: rotate(190deg);
}`;

const exempleJS =
`let bouton = document.getElementById('couleur');
let box = document.querySelector('.box');
bouton.addEventListener('click', () => {
    box.style.backgroundColor = '#00a';
});`;

export default function Page() {
    return <>
        <section>
            <h2>Code</h2>
            <p>
                Du code inline dans un <IC>paragraphe</IC> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae atque nihil <IC>corporis</IC> ea qui? At similique dolorem quo eos laboriosam, iste id rerum suscipit culpa voluptatum ut maiores illo nihil.
            </p>
            <CodeBlock language="html">
                {html}
            </CodeBlock>
            <CodeBlock language="css">
                {css}
            </CodeBlock>
            <CodeBlock language="js">
                {js}
            </CodeBlock>
            <CodeBlock language="Texte">
                {'Texte sans highlight'}
            </CodeBlock>
        </section>

        <section>
            <h2>Web Example</h2>
            <WebExample title="Transition">
                <Code language="html">{exempleHTML1}</Code>
                <Code language="html">{exempleHTML2}</Code>
                <Code language="css">{exempleCSS}</Code>
                <Code language="js" display={false}>{exempleJS}</Code>
            </WebExample>
            <WebExample title="Small">
                <Code language="html" display={false}>{'<div class="box">Allo</div>'}</Code>
                <Code language="css" display={false}>{'.box{background-color:#333;color:#fff}'}</Code>
            </WebExample>
        </section>

        <section>
            <h2>Bordered Box</h2>
            <BorderedBox>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam a, doloribus voluptatum vero labore rerum quibusdam nam, ad consectetur iste ullam saepe aperiam quae rem molestias harum vel alias qui.
            </BorderedBox>
        </section>

        <section>
            <h2>Colored Box</h2>
            <ColoredBox title="Attention">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas suscipit repudiandae ad inventore nihil ratione? Voluptatibus eius autem quis pariatur quasi itaque minima, consequatur, molestiae dicta, soluta temporibus sit ab.
            </ColoredBox>
        </section>

        <section>
            <h2>Download Block</h2>
            <DownloadBlock>
                <File fileName="test.txt" path="/lab-01/test.txt"></File>
                <File fileName="archive.zip" path="/lab-01/archive.zip"></File>
                <File fileName="UnNomDeFichierTresLong_avecDes_Soulignement.json" path="/lab-01/test.json"></File>
                <File path="/img/e-cite.png"></File>
                <File path="/lab-01/Video.avi"></File>
                <File path="/lab-01/Audio.mp3"></File>
                <File path="/lab-01/Adobe.pdf"></File>
            </DownloadBlock>
        </section>

        <section>
            <h2>Vidéo</h2>
            <YoutubeVideo code="sdUUx5FdySs" title="Kiwi!" />
        </section>

        <section>
            <h2>Liste</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis numquam tempora exercitationem. Corrupti repellat voluptatum laboriosam itaque omnis dignissimos esse autem quis, similique ducimus est hic ex voluptatem officiis quisquam.
            </p>
            <ol start={50}>
                <li>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. In repellat reprehenderit obcaecati repellendus, quam incidunt nam molestias cum rerum, modi accusamus numquam cumque odio rem nesciunt illo. Cum, quod temporibus?
                </li>
                <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex doloribus quos eius! Vero tempore maiores amet ducimus expedita officia aut dolorum deleniti sint error! Dignissimos accusantium nesciunt sint assumenda eos.
                    <ol>
                        <li>
                            Test 2.1
                            <ul>
                                <li>Allo</li>
                                <li>Bonjour</li>
                                <li>Salut</li>
                            </ul>
                        </li>
                        <li>Test 2.2</li>
                        <li>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur porro rem officiis adipisci aut pariatur, quas quae animi, culpa possimus consequuntur, a non eos error perferendis nobis voluptas modi atque.
                        </li>
                    </ol>
                </li>
                <li>Test 3</li>
                <li>Test 4</li>
            </ol>
        </section>

        <section>
            <h2>Tableau</h2>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic deserunt, impedit aperiam ipsam delectus adipisci voluptate maxime velit, alias eum a rerum harum dolore quae animi doloribus quas libero nostrum?
            </p>
            <OverflowContainer>
                <table>
                    <thead>
                        <tr>
                            <th>Nom</th><th>Prenom</th><th>Date</th><th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Wilkie</td>
                            <td>Jonathan</td>
                            <td>2005-12-05</td>
                            <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis labore, voluptatibus tenetur atque ut eligendi vel architecto quo, nihil rem obcaecati. Incidunt eveniet vero exercitationem laboriosam illo error? Est, excepturi.</td>
                        </tr>
                        <tr>
                            <td>Wilkie</td>
                            <td>UnTresGrandNomPourForcerUnOverflow</td>
                            <td>2022-06-01</td>
                            <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum tempore, hic ullam impedit culpa dicta aliquid saepe ipsam, quos ratione, eius optio dolorem nostrum excepturi similique molestiae. Eligendi, autem fugit.</td>
                        </tr>
                        <tr>
                            <td>Wilkie</td>
                            <td>Jonathan</td>
                            <td>2024-01-01</td>
                            <td>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum aliquam ea voluptate eius quo doloribus earum veniam doloremque quisquam dolorum enim quidem tempora, ex minima sit aspernatur quis ducimus harum.</td>
                        </tr>
                    </tbody>
                </table>
            </OverflowContainer>
        </section>
    </>;
}
