import { DownloadBlock, File } from '@/components/DownloadBlock'

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Laboratoire - Jeu du bonhomme pendu",
    description: "Présentation du laboratoire de programmation du jeu de bonhomme pendu dans un terminal avec Node.js.",
    keywords: ["node.js", "js", "javascript", "hangman"],
    group: "labs"
}

export default function Page() {
    return <>
        <section>
            <h2>Mise en situation</h2>
            <p>
                Vous devez programmer un jeu de bonhomme pendu qui va chercher un mot aléatoirement dans un 
                dictionnaire français et le fait deviner au joueur.
            </p>
            <p>
                Voici quelques spécifications supplémentaires:
            </p>
            <ul>
                <li>Le joueur a un nombre illimité de chances</li>
                <li>Le jeu s'arrête lorsque le joueur a trouvé le mot</li>
                <li>Lorsque le jeu s'arrête, le nombre de coups utilisé est affiché</li>
            </ul>
            <p>
                Si vous ne connaissez pas le jeu du bonhomme pendu, vous pouvez lire la page suivante pour avoir plus d'informations:
            </p>
            <p>
                <a href="https://fr.wikipedia.org/wiki/Pendu_(jeu)">Pendu (jeu)</a>
            </p>
        </section>

        <section>
            <h2>Fonctions supplémentaires</h2>
            <p>
                Si vous voulez vous pratiquer, n'hésitez pas à essayer d'ajouter les éléments suivant au jeu:
            </p>
            <ul>
                <li>Permettre au joueur de recommencer une nouvelle partie s'il le désire</li>
                <li>Donner un nombre maximal de chance au joueur avant qu'il perde</li>
                <li>Afficher un visuel en caractère avec de la couleur dans la console</li>
            </ul>
        </section>

        <section>
            <h2>Solution et fichiers de départ</h2>
            <DownloadBlock>
                <File fileName="liste-francais.txt" path="/labs/hangman-liste-francais.txt"></File>
                <File fileName="solution.zip" path="/labs/hangman-solution.zip"></File>
            </DownloadBlock>
        </section>
    </>;
}
