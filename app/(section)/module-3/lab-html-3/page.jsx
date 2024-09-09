import Image from 'next/image';
import IC from '@/components/InlineCode';
import { DownloadBlock, File } from '@/components/DownloadBlock';

import html from '@/public/img/html-ramen.jpg';

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Laboratoire - Reproduction d'un formulaire en HTML",
    description: "Présentation du laboratoire sur la reproduction de formulaire en HTML à partir d'une image.",
    keywords: ["html", "reproduction", "formulaire"],
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
                    Créer la structure de base d&apos;un projet Web
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
                            Notez bien le titre de la page dans l&apos;onglet du navigateur.
                        </li>
                        <li>
                            Vous pouvez choisir l&apos;image en haut de la page.
                        </li>
                    </ul>
                </li>
                <li>
                    Respecter les critères ci-dessous:
                    <ul>
                        <li>
                            Le focus par défaut doit être sur le selecteur de textures.
                        </li>
                        <li>
                            Les radiobuttons du même groupe sont bien regroupés par leur attribut <IC>name</IC>.
                        </li>
                        <li>
                            Plusieurs garnitures peuvent être sélectionnées, donc le champ est <IC>multiple</IC>.
                        </li>
                        <li>
                            Les <IC>label</IC> doivent être bien lié à leur champ. Assurez-vous qu&apos;en cliquant sur le nom du champ, 
                            le focus soit mis dans le champ.
                        </li>
                        <li>
                            Les valeurs valides pour l&apos;ail sont: &quot;Aucun&quot;, &quot;Un peu&quot;, &quot;Normal&quot;, 
                            &quot;Beaucoup&quot; et &quot;Énormément&quot;. Sa valeur par défaut est &quot;Normal&quot;.
                        </li>
                        <li>
                            Les valeurs valides pour l&apos;oignon vert sont: &quot;Aucun&quot;, &quot;Oignon vert partiel (blanc seulement)&quot; 
                            et &quot;Oignon vert complet&quot;. Sa valeur par défaut est &quot;Oignon vert complet&quot;.
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
                <File fileName="solution.zip" path="/labs/html-3-solution.zip">solution.zip</File>
            </DownloadBlock>
        </section>
    </>
}