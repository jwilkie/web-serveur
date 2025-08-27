import IC from '@/components/InlineCode'
import CodeBlock from '@/components/CodeBlock'
import ColoredBox from '@/components/ColoredBox';

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Promesses",
    description: "Démonstration de l'utilisation des promesses en Javascript avec les mot-clé async et await.",
    keywords: ["js", "promise", "async", "await", "then"],
    group: "notes"
}

const promiseSimple = 
`import { readFile } from 'fs/promises';

// La lecture du fichier se fait de façon asynchrone
// et retourne une promesse.
let promesse = readFile('./fichier1.txt');

// On passe une fonction à la promesse. Cette fonction
// s'exécutera uniquement lorsque la lecture du fichier 
// est terminée. Le paramètre "resultat" contient le
// contenu du fichier lu.
promesse.then((resultat) => {
    console.log(resultat.toString());
});`;

const promiseChain =
`let promesse = longueFonction();
promesse.then((data) => {
    // Traitement des données de la longue fonction
})
.then((data2) => {
    // Autre traitement à faire après le 1er 
    // traitement
})
.then((data3) => {
    // Traitement à faire après les 2 premiers 
    // traitements
});`;

const awaitIntro = 
`// Fonction qui retourne une promesse
import { readFile } from 'fs/promises'

// Version écourté
const data = await readFile('./fichier.txt');

// Version longue
const promise = await readFile('./fichier.txt');
const data = await promise;`;

const asyncIntro = 
`// Il y a un await dans la fonction, on doit 
// donc mettre la fonction 'async'
async function lireFichier() {
    let data = await readFile('./fichier.txt');
    return data.toString();
}`;

const asyncReturn = 
`// La fonction 'lireFichier' est marqué comme 
// 'async'. On doit donc utiliser 'await' pour 
// avoir son résultat.
const texte = await lireFichier()`;

export default function Page() {
    return <>
        <section>
            <h2>Fonctionnement de base</h2>
            <p>
                Les promesses sont une première façon de simplifier la lecture et l'utilisation du code asynchrone. Une 
                promesse est en fait un objet qui est retourné par une fonction qui s'exécute de façon asynchrone. 
                Nous pourrons par la suite donner une fonction à cet objet (un peu comme un callback) pour que celle-ci 
                s'exécute lorsque la fonction asynchrone sera terminée. Pour ce faire, nous utiliserons la 
                fonction <IC>then</IC> de la promesse. Voici un exemple:
            </p>
            <CodeBlock language="js">{ promiseSimple }</CodeBlock>
            <p>
                Si vous trouvez qu'à première vu, cela a l'air plus compliqué que les callback, je vous comprends.
                Sachez simplement que si vous appelez une fonction qui renvoie une promesse, vous avez du code 
                asynchrone et vous devrez utiliser la fonction <IC>then</IC> pour lui dire quoi faire avec le 
                résultat par la suite.
            </p>
            <p>
                L'utilisation de promesse permet tout de même de simplifier le chaînage puisque la 
                fonction <IC>then</IC> retournent elle aussi une promesse. Voici un exemple:
            </p>
            <CodeBlock language="js">{ promiseChain }</CodeBlock>
            <ColoredBox title="À noter:">
                Dans ce cours, nous ne verrons pas comment créer nos propres promesses. Bien qu'intéressant lorsque nous avons
                un peu plus d'expérience, ce n'est pas nécessaire pour l'instant. Nous nous contenterons d'utiliser les promesses
                venant d'autres librairies de code.
            </ColoredBox>
        </section>
        
        <section>
            <h2>Async / Await</h2>
            <p>
                Bien que les promesses simplifie beaucoup le code asynchrone, il est toujours plus difficile à 
                lire que du code séquentiel. Avec les nouvelles versions de Javascript, une nouvelle syntaxe pour 
                manipuler les promesses est apparut. Les mots-clés <IC>async</IC> et <IC>await</IC> ont été ajouté
                pour que la programmation avec les promesses se fasse presque de la même façon que la 
                programmation séquentielle.
            </p>
            <p>
                En règle générale, ces mot-clés vous simplifierons énormément la vie lors de l'écriture de code asynchrone. 
                Vous n'avez qu'à vous rappeler de 3 petites règles:
            </p>
            <ol>
                <li>
                    Si vous voulez avoir le résulat d'une promesse, vous devez y mettre le mot-clé <IC>await</IC> devant.
                    <CodeBlock language="js">{awaitIntro}</CodeBlock>
                </li>
                <li>
                    Si vous avez un <IC>await</IC> dans une fonction, vous devez mettre le mot-clé <IC>async</IC> devant
                    sa déclaration.
                    <CodeBlock language="js">{asyncIntro}</CodeBlock>
                </li>
                <li>
                    Une fonction marqué <IC>async</IC> retourne toujours une promesse. Si vous voulez le résultat de cette fonction,
                    vous devez donc mettre un <IC>await</IC> devant son appel.
                    <CodeBlock language="js">{asyncReturn}</CodeBlock>
                </li>
            </ol>
            <p>
                Si vous vous rappelez de ces 3 règles, vous n'aurez aucun problème à écrire du code asynchrone avec les promesses 
                pour ce cours.
            </p>
        </section>

        <section>
            <h2>Plus d'informations</h2>
            <p>
                Pour plus d'information à propos du code asynchrone en Javascript, je vous suggère d'aller voir 
                la ressource suivante:
            </p>
            <p>
                <a href="https://javascript.info/async" target="_blank" rel="noopener noreferrer">Promises, async/await</a>
            </p>
        </section>
    </>;
}
