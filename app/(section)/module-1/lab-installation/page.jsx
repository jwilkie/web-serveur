/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Laboratoire - Installation des outils et logiciels",
    description: "Présentation du laboratoire sur l'installation des outils nécessaire pour ce cours.",
    keywords: ["installation", "vscode", "extension", "live server", "navigateur"],
    group: "labs"
}

export default function Page() {
    return <>
        <section>
            <h2>Marche à suivre</h2>
            <p>
                Suivez les étapes ci-dessous pour installer tous les outils et logiciels nécessaire pour suivre le cours. 
                N&apos;hésitez pas à consulter les différentes pages de ce module si vous avez besoin de plus de précision sur 
                l&apos;installation de certains logiciels ou outils.
            </p>

            <ol>
                <li>
                    Télécharger et installer Visual Studio Code.
                </li>
                <li>
                    Installer l&apos;extension Live Server de Visual Studio Code.
                </li>
                <li>
                    Assurez-vous d&apos;avoir un navigateur web moderne supportant les éléments vus dans ce cours. Les navigateurs 
                    suivant sont autorisé:
                    <ul>
                        <li>Google Chromes</li>
                        <li>Microsoft Edge</li>
                        <li>Mozilla Firefox</li>
                        <li>Apple Safari</li>
                    </ul>
                </li>
            </ol>
        </section>
    </>
}