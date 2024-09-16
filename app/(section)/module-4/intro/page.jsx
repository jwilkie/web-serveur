import IC from '@/components/InlineCode';
import CodeBlock from '@/components/CodeBlock';
import { FileExplorer, Folder, File } from '@/components/FileExplorer';

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Introduction au stylage",
    description: "Présentation du CSS, le langage de stylage des pages web.",
    keywords: ["css", "liaison", "lier", "link"],
    group: "notes"
}

const link = 
`...

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Titre de page</title>

    <!-- Fichier CSS -->
    <link rel="stylesheet" href="/css/nom-de-fichier.css">
</head>

...`;

export default function Page() {
    return <>
        <section>
            <h2>Cascading Style Sheet</h2>
            <p>
                Le CSS est un langage de style servant à décrire comment les éléments d'une page HTML devrait être affiché. 
                C'est l'un des 3 langages principal du Web, avec le HTML et le Javascript. Ce langage nous permettra de créer 
                des "feuilles de styles" que nous pourrons appliquer à notre HTML pour le rendre plus beau. Nous commencerons 
                donc à avoir des pages web beaucoup plus intéressantes et attrayantes.
            </p>
        </section>

        <section>
            <h2>Création d'un fichier CSS</h2>
            <p>
                Pour créer un fichier CSS, vous pouvez le faire comme pour un fichier HTML.
            </p>
            <ul>
                <li>
                    En créant un fichier texte dont vous renommez l'extension à <IC>.css</IC> dans votre explorateur de fichier.
                </li>
                <li>
                    En créant un fichier CSS directement à partir de votre éditeur de code.
                </li>
            </ul>
            <p>
                Peu importe de quelle façon vous créez le fichier, vous devez le mettre dans le dossier <IC>css</IC> de votre 
                projet Web. Cela nous permettra de garder notre code de façon plus organisée.
            </p>
            <FileExplorer>
                <Folder name="nom-du-projet">
                    <Folder name="assets"></Folder>
                    <Folder name="css"></Folder>
                    <Folder name="js"></Folder>
                    <File name="index.html"></File>
                </Folder>
            </FileExplorer>
        </section>
    </>
}