import Image from 'next/image';
import IC from '@/components/InlineCode';
import { DownloadBlock, File } from '@/components/DownloadBlock';

import html1 from '@/public/img/html-pokemon-1.png';
import html2 from '@/public/img/html-pokemon-2.png';
import html3 from '@/public/img/html-pokemon-3.png';

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Laboratoire - Reproduction d'une structure de HTML",
    description: "Présentation du laboratoire sur la reproduction de HTML valide à partir d'une image.",
    keywords: ["html", "reproduction"],
    group: "labs"
}

export default function Page() {
    return <>
        <section>
            <h2>Marche à suivre</h2>
            <p>
                Écrivez le code HTML permettant de reproduire la page web affiché ci-dessous en suivant les étapes suivantes:
            </p>
            <ol>
                <li>
                    Créer la structure de base d&apos;un projet Web.
                </li>
                <li>
                    Créer une page <IC>index.html</IC> de base suivant le gabarit du cours.
                </li>
                <li>
                    Ajouter les balises et le contenu nécessaire pour que votre page Web apparaîsse comme spécifié ci-dessous.
                    <ul>
                        <li>
                            Notez bien la taille des titres les uns par rapport aux autres et respectez la bonne hierarchie des titres.
                        </li>
                        <li>
                            Vous n&apos;avez pas besoin de copier le texte mot pour mot. L&apos;utilisation de <em>Lorem Ipsum</em> est suffisante.
                        </li>
                        <li>
                            Notez bien le titre de la page dans l&apos;onglet du navigateur.
                        </li>
                        <li>
                            Vous pouvez choisir 6 Pokémons différents ou utiliser lister quelque chose d&apos;autre qui vous intéresse.
                        </li>
                    </ul>
                </li>
                <li>
                    Les liens du menu en haut doivent déplacer la vue du navigateur pour afficher le bon Pokémon ou les statistiques.
                </li>
                <li>
                    Les liens &quot;retour en haut&quot; doivent déplacer la vue du navigateur pour afficher le haut de la page.
                </li>
                <li>
                    Les liens vers PokémonDB doivent être des liens externes.
                </li>
                <li>
                    Assurez-vous de bien utiliser les balises sémantiques.
                </li>
            </ol>
        </section>

        <section>
            <h2>Image à reproduire</h2>
            <Image src={html1} alt="Image à reproduire en HTML - Partie 1" />
            <Image src={html2} alt="Image à reproduire en HTML - Partie 2" />
            <Image src={html3} alt="Image à reproduire en HTML - Partie 3" />
        </section>

        <section>
            <h2>Solution</h2>
            <DownloadBlock>
                <File fileName="solution.zip" path="/labs/html-2-solution.zip">solution.zip</File>
            </DownloadBlock>
        </section>
    </>
}