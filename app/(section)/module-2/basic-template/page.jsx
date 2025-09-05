import IC from '@/components/InlineCode'
import { DownloadBlock, File } from '@/components/DownloadBlock'

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Gabarit de base",
    description: "Présentation du gabarit de base pour la création de serveurs web avec Node.js et Express.js.",
    keywords: ["templates", "gabarit", "node.js", "express", "middlewares", "dotenv"],
    group: "templates"
}

export default function Page() {
    return <>
        <section>
            <h2>Guide d'utilisation</h2>
            <p>
                Ce gabarit de base est un point de départ pour vos projets de création de serveurs web avec Node.js
                et Express.js. Nous aurons des gabarits plus complexes dans les modules suivants, mais ils seront 
                tous basés sur celui-ci. Voici comment l'utiliser:
            </p>
            <ol>
                <li>Télécharger le gabarit de base dans la section ci-dessous</li>
                <li>Décompresser l'archive ZIP téléchargée</li>
                <li>Changer le nom du dossier du gabarit pour le nom de votre projet</li>
                <li>
                    Ouvrir le dossier du projet dans Visual Studio Code et modifier le fichier <IC>package.json</IC>
                    <ol>
                        <li>Modifier le <IC>name</IC> du package</li>
                        <li>Modifier la <IC>description</IC> du package</li>
                        <li>Modifier l'<IC>author</IC> du package</li>
                    </ol>
                </li>
                <li>
                    Ouvrir une terminal dans le dossier du projet et lancer les commandes ci-dessous
                    <ol>
                        <li>Lancer la commande <IC>npm i</IC></li>
                        <li>Lancer la commande <IC>npm run dev</IC></li>
                    </ol>
                </li>
            </ol>
        </section>

        <section>
            <h2>Téléchargement</h2>
            <DownloadBlock>
                <File fileName="gabarit-base.zip" path="/templates/basic.zip">gabarit-base.zip</File>
            </DownloadBlock>
        </section>
    </>
}