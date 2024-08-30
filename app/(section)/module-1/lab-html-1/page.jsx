import Image from 'next/image';
import IC from '@/components/InlineCode';
import { DownloadBlock, File } from '@/components/DownloadBlock';

import html from '@/public/img/reproduction-html-1.jpg';

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Laboratoire - Reproduction de HTML simple",
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
                            Notez bien les mots en importance dans le texte.
                        </li>
                        <li>
                            Assurez-vous que vous listes imbriquées sont bien écrite en HTML valide.
                        </li>
                        <li>
                            Notez bien le titre de la page dans l&apos;onglet du navigateur.
                        </li>
                    </ul>
                </li>
            </ol>
        </section>

        <section>
            <h2>Image à reproduire</h2>
            <Image src={html} alt="Image à reproduire en HTML" />
        </section>

        <section>
            <h2>Solution</h2>
            <DownloadBlock>
                <File fileName="solution.zip" path="/labs/html-1-solution.zip">solution.zip</File>
            </DownloadBlock>
        </section>
    </>
}