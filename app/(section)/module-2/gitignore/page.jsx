import IC from '@/components/InlineCode'

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Fichier .gitignore",
    description: "Présentation du fichier .gitignore, un fichier permettant d'ignorer certains fichiers et dossiers dans un projet Git.",
    keywords: ["git", "gitignore", "versionning", "dépôt", "repository", "node_modules", "node.js", "npm"],
    group: "notes"
}

export default function Page() {
    return <>
        <section>
            <h2>Projet Node.js sur Git</h2>
            <p>
                L'utilisation de Git pour vos projet est essentielle. Ceci étant dit, pour les projets Node.js, il y a certaines
                considérations à prendre en compte si on ne veut pas avoir de mauvaises surprises. En effet, un projet Node.js
                va souvent contenir des installations de paquets externe, qui ont été installés avec la commande <IC>npm i</IC>. 
                Ces installations se retrouvent dans le dossier <IC>node_modules</IC> à la racine du projet. Dans un projet moyennement 
                complexe, ce dossier peut facilement contenir plus de 500 000 fichiers. Il est donc évident qu'on ne veut pas
                versionner ce dossier avec Git ou l'héberger sur un dépôt distant comme GitHub.
            </p>
            <p>
                Pour éviter cela, il est important d'utiliser un fichier <IC>.gitignore</IC> à la racine de votre projet. Ce fichier
                permet de spécifier les fichiers et dossiers à ignorer par Git. Chaque ligne de ce fichier représente un fichier ou 
                un dossier à ignorer. Assurez-vous de toujours avoir un fichier <IC>.gitignore</IC> dans vos projets Node.js.
            </p>
        </section>

        <section>
            <h2>Contenu du fichier .gitignore</h2>
            <p>
                Pour ajouter votre fichier <IC>.gitignore</IC>, créez un fichier texte à la racine de votre projet et nommez-le 
                correctement. Vous pouvez trouver le contenu de base d'un fichier <IC>.gitignore</IC> pour un projet Node.js
                ici:
            </p>
            <p>
                <a href="https://github.com/github/gitignore/blob/main/Node.gitignore" target="_blank">Node.gitignore</a>
            </p>
            <p>
                Vous pouvez copier le contenu de ce fichier dans votre propre fichier <IC>.gitignore</IC>. Ce fichier contient
                beaucoup plus d'éléments que ce qui est nécessaire pour ce cours, mais il est un bon point de départ pour la 
                majorité des projets Node.js.
            </p>
        </section>
    </>
}