import IC from '@/components/InlineCode';
import CodeBlock from '@/components/CodeBlock';
import ColoredBox from '@/components/ColoredBox';

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Entrée et sortie dans les fichiers",
    description: "Démonstration de comment écrire ou lire du texte dans un fichier avec Node.js.",
    keywords: ["node.js", "write", "lecture", "read", "écriture", "files", "fichier"],
    group: "notes"
}

const readFile =
`import { readFile } from 'node:fs/promises';

// Utilisation de la fonction readFile
let data = await readFile('./chemin/vers/fichier.txt');
let text = data.toString();
console.log(text);`;

const writeFile =
`import { writeFile } from 'node:fs/promises';

let texte = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
writeFile('./chemin/vers/fichier.txt', texte);`;

const catchError =
`import { readFile, writeFile } from 'node:fs/promises'

// En lecture de fichier
try {
    let data = await readFile('./chemin/non-accessible.txt');
    console.log(data.toString())
}
catch(error){
    console.log(error);
}

// En écriture de fichier
try {
    await writeFile('./etc/non-accessible.txt', texte);
}
catch(error){
    console.log(error);
}`;

export default function Page() {
    return <>
        <section>
            <h2>Lire un fichier</h2>
            <p>
                Pour lire un fichier de façon courte et lisible, nous avons simplement besoin de la librairie de
                code <IC>fs</IC> venant directement avec Node.js. Le code suivant permettra de lire le contenu d'un
                fichier texte et de retourner sa valeur sous forme de chaîne de caractères:
            </p>
            <CodeBlock language="js">{readFile}</CodeBlock>
            <ColoredBox heading="À noter">
                La fonction <IC>readFile()</IC> retourne une promesse qui contiendra éventuellement le contenu du fichier.
                Pour avoir le résultat d'une promesse, nous suivrons donc la première règle des promesses et du code asynchrone, 
                soit d'ajouter <IC>await</IC> devant celle-ci.
            </ColoredBox>
        </section>

        <section>
            <h2>Écrire dans un fichier</h2>
            <p>
                Pour écrire dans un fichier texte, le code est très simple et ressemble beaucoup à celui 
                pour la lecture de fichier, mais sans le <IC>await</IC>.
            </p>
            <CodeBlock language="js">{ writeFile }</CodeBlock>
        </section>

        <section>
            <h2>Capter les erreurs</h2>
            <p>
                Si vous vous désirez capter les erreurs, s'il y en a, vous pouvez alors utiliser le <IC>await</IC>, mais avec 
                un <IC>try/catch</IC> de la façon suivante:
            </p>
            <CodeBlock language="js">{ catchError }</CodeBlock>
        </section>
    </>;
}
