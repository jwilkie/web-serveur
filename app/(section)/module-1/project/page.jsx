import IC from '@/components/InlineCode';
import ColoredBox from '@/components/ColoredBox';
import { FileExplorer, File, Folder } from '@/components/FileExplorer';

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Création de projet",
    description: "Présentation de la création d'un projet web vide avec Visual Studio Code.",
    keywords: ["vscode", "dossier", "organisation"],
    group: "notes"
}

export default function Page() {
    return <>
        <section>
            <h2>Structure de projet web</h2>
            <p>
                Les projets web sont simplement un ensemble de différents fichiers que le navigateur peut lire et exécuter. De 
                ce fait, les projets web sont simplement un dossier dans lequel on mettra des fichiers. Ceci étant dit, les 
                projets web peuvent parfois contenir plusieurs centaines de fichiers. Il faut donc bien les organiser dans une 
                structure de fichier. 
            </p>
            <p>
                Les structures de projets web peuvent grandement différer dépendant des technologies utilisées. Dans le cadre de 
                ce cours, puisque nous verrons seulement le web client de base, nous utiliserons une structure de projet très 
                simple. Vous devrez utiliser cette structure pour tous vos projets dans ce cours cette session.
            </p>
            <p>
                La structure que nous utiliserons ressemblera à ceci:
            </p>
            <FileExplorer>
                <Folder name="assets">
                    <File name="logo.png" />
                </Folder>
                <Folder name="css">
                    <File name="styles.css" />
                </Folder>
                <Folder name="js">
                    <File name="main.js" />
                </Folder>
                <File name="index.html" />
                <File name="autre-fichier.html" />
            </FileExplorer>

            <ColoredBox title="Attention: ">
                Lorsque vous reproduirez cette structure de fichier avec votre éditeur de code, vous pouvez bien entendu omettre les 
                fichier que vous n&apos;utilisez pas pour le moment, tel que les fichier CSS, JS et images. Les dossiers doivent toutefois
                être bien présent dans votre structure de projet pour nos utilisations futures.
            </ColoredBox>
        </section>

        <section>
            <h2>index.html</h2>
            <p>
                Le fichier <IC>index.html</IC> est l&apos;un des plus important de votre site web. Il représente toujours la page 
                d&apos;acceuil du site web. Chaque site web doit donc toujours avoir un fichier nommé par ce nom. Assurez-vous de 
                bien écrire le nom, tout en minuscule, sans faute. Autrement, vous allez avoir quelques problèmes plus tard.
            </p>
            <p>
                Lorsque vous voudrez créer d&apos;autres pages, vous pourrez simplement créer des fichiers HTML avec des noms 
                différents à la racine (dans le dossier principal) du projet.
            </p>
        </section>
    </>
}