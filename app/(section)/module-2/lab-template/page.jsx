import IC from '@/components/InlineCode'
import Link from 'next/link';

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Laboratoire - Création d'un gabarit",
    description: "Présentation du laboratoire sur la création d'un gabarit de projet de serveur web avec Node.js et Express.",
    keywords: ["node.js", "js", "javascript", "gabarit", "template", "express"],
    group: "labs"
}

export default function Page() {
    return <>
        <section>
            <h2>Mise en situation</h2>
            <p>
                Vous devez créer un gabarit de projet de serveur web avec Node.js et Express. Ce gabarit servira de point de départ
                pour vos futurs projets de serveur web dans ce cours. En suivant les notes de cours et la démonstration faite en
                classe, vous devez créer un gabarit de serveur web avec les éléments suivants:
            </p>
            <ul>
                <li>Doit être fait en Javascript avec Node.js</li>
                <li>Doit utiliser le framework Express</li>
                <li>Doit isoler ses configurations dans un fichier <IC>.env</IC></li>
                <li>
                    Doit utiliser les middlewares suivants:
                    <ul>
                        <li>helmet</li>
                        <li>cors</li>
                        <li>compression</li>
                        <li>json</li>
                        <li>express.static configuré avec le dossier <IC>public</IC></li>
                    </ul>
                </li>
                <li>Doit être configuré pour utiliser Nodemon en développement</li>
                <li>Doit avoir un fichier <IC>.gitignore</IC> approprié pour un projet Node.js</li>
                <li>Doit avoir un fichier <IC>index.html</IC> de base dans le dossier <IC>public</IC></li>
            </ul>
        </section>

        <section>
            <h2>Solution</h2>
            <p>
                La solution de ce laboratoire est disponible dans une autre page de ce module. Vous pouvez y accéder en suivant le 
                lien suivant:
            </p>
            <p>
                <Link href="/module-2/basic-template/">Gabarit de base</Link>
            </p>
        </section>
    </>;
}
