import IC from '@/components/InlineCode';
import CodeBlock from '@/components/CodeBlock';
import ColoredBox from '@/components/ColoredBox';

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Entrée et sortie dans le terminal",
    description: "Démonstration de comment afficher ou lire du texte dans le terminal avec Node.js.",
    keywords: ["node.js", "log", "read", "output", "input", "terminal", "texte"],
    group: "notes"
}

const consoleLog = 
`// Affiche les lettre une en dessous de l'autre
for(let i = 0 ; i < 26 ; i++){
    console.log(String.fromCharCode(i + 'A'.charCodeAt()));
}

// Affiche les lettres une à côté de l'autre
let chaine = '';
for(let i = 0 ; i < 26 ; i++){
    chaine += String.fromCharCode(i + 'A'.charCodeAt());
}

console.log(chaine);`;

const readLine = 
`import { createInterface } from 'node:readline/promises';

// Création de l'interface de lecture
const readInterface = createInterface({
    input: process.stdin,
    output: process.stdout
});`;

const question = 
`let nom = await readInterface.question('Quel est votre nom? ');`;

const autre = 
`// Effacer la console
console.clear();

// Chronomètre de performance
console.time('test');

let somme = 0;
for(let i = 1 ; i <= 999999 ; i++){
    somme += i;
}

console.timeEnd('test');

// Couleurs dans la console
// https://stackoverflow.com/questions/9781218/how-to-change-node-jss-console-font-color
// https://nodejs.org/en/knowledge/command-line/how-to-get-colors-on-the-command-line/
console.log('\\x1b[32m\\x1b[43mCouleur!\\x1b[0m');`;

export default function Page() {
    return <>
        <section>
            <h2>Afficher dans le terminal</h2>
            <p>
                Pour afficher dans un terminal, nous utiliserons la commande suivante:
            </p>
            <CodeBlock language="js">
                console.log('Texte à afficher');
            </CodeBlock>
            <p>
                La fonction <IC>console.log</IC> affiche le texte, suivit d'un retour de ligne. Si vous désirez 
                afficher plusieurs choses sur la même ligne, je vous suggère de construire une chaîne de caractère
                au préalable.
            </p>
            <CodeBlock language="js">
                { consoleLog }
            </CodeBlock>
        </section>

        <section>
            <h2>Entrée de données par le terminal</h2>
            <p>
                Pour faire des demandes d'informations dans le terminal, nous aurons besoin d'un peu de 
                configuration et de la librairie <IC>readline</IC>. Ajoutez le code suivant en haut 
                de votre fichier Javascript pour pouvoir faire des entrées dans la console:
            </p>
            <CodeBlock language="js">
                { readLine }
            </CodeBlock>
            <p>
                Il n'est pas nécessaire de comprendre ce code pour l'instant. Une fois ces instructions en place, 
                vous pourrez utiliser le code suivant pour demander des informations à l'utilisateur:
            </p>
            <CodeBlock language="js">
                { question }
            </CodeBlock>
            <p>
                La fonction <IC>question</IC> prends en paramètre une chaine de caractère qui sera affiché avant 
                d'attendre la réponse de l'utilisateur. Le mot-clé <IC>await</IC> est très important. Si vous ne 
                le mettez pas, votre code ne fonctionnera pas correctement.
            </p>
            <ColoredBox heading="À noter">
                La fonction <IC>question()</IC> retourne une promesse qui contiendra éventuellement la chaine de caractère
                de réponse de l'utilisateur. En suivant la première règle des promesses et du code asynchrone, pour avoir 
                le résultat d'une promesse, nous devons mettre le mot-clé <IC>await</IC>, comme il est fait dans l'exemple 
                ci-dessus.
            </ColoredBox>
        </section>

        <section>
            <h2>Autres options du terminal</h2>
            <p>
                Voici quelques autre options que vous pouvez faire avec le terminal dans Node.js:
            </p>
            <CodeBlock language="js">
                { autre }
            </CodeBlock>
        </section>
    </>;
}
