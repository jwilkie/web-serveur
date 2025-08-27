/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Laboratoire - Installation des logiciels",
    description: "Présentation du laboratoire sur l'installation des logiciels utilisé dans le cours.",
    keywords: ["nodejs", "vscode", "navigateur", "chromes", "edge", "firefox"],
    group: "labs"
}

export default function Page() {
    return <>
        <section>
            <h2>Marche à suivre</h2>
            <p>
                Suivez les étapes ci-dessous pour installer tous les outils et logiciels nécessaire pour suivre le cours. N'hésitez 
                pas à consulter les différentes pages de ce module si vous avez besoin de plus de précision sur l'installation de 
                certains logiciels ou outils.
            </p>
            <ol>
                <li>
                    Télécharger et installer Visual Studio Code.
                </li>
                <li>
                    Télécharger et installer Node.js (version Current).
                </li>
                <li>
                    Assurez-vous d'avoir un navigateur web moderne supportant les éléments vus dans ce cours. Les navigateurs 
                    suivants sont autorisé:
                    <ul>
                        <li>Google Chrome</li>
                        <li>Mozilla Firefox</li>
                        <li>Microsoft Edge</li>
                    </ul>
                </li>
            </ol>
        </section>
    </>
}