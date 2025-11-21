import CodeBlock from '@/components/CodeBlock';
import ColoredBox from '@/components/ColoredBox';
import { DownloadBlock, File } from '@/components/DownloadBlock';
import IC from '@/components/InlineCode'
import Link from 'next/link';

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Middleware de SSE",
    description: "Présentation d'un middleware de SSE pour gérer des cas simple de communication bidirectionnelle entre le serveur et le client dans les applications web Express avec Node.js.",
    keywords: ["node", "express", "middleware", "response", "http", "sse", "server sent events", "bidirectionnel", "temps réel", "json"],
    group: "templates"
}

export default function Page() {
    return <>
        <section>
            <h2>Installation</h2>
            <p>
                Le middleware de SSE de Express est un simple fichier JavaScript que vous pouvez télécharger et inclure dans 
                votre projet. Il gère les fonctionnalités de base des SSE, comme l'ouverture de la connexion et la diffusion de 
                messages au format JSON.
            </p>
            <p>
                Voici les étapes pour l'installer dans votre projet:
            </p>
            <ol>
                <li>
                    Téléchargez le fichier <IC>sse.js</IC> dans la section de téléchargement ci-dessous.
                </li>
                <li>
                    Placez le fichier dans le répertoire <IC>/middlewares</IC> de votre projet Express.
                </li>
                <li>
                    Importez le middleware dans votre fichier principal de serveur <IC>server.js</IC>.
                    <CodeBlock language="js">{`import sse from './middlewares/sse.js';'`}</CodeBlock>
                </li>
                <li>
                    Ajouter le middleware à votre application Express dans la section des middlewares avant vos routes. L'ordre 
                    de l'ajout de ce middleware n'est pas important tant qu'il est ajouté avant les routes.
                    <CodeBlock language="js">{`app.use(sse());`}</CodeBlock>
                </li>
            </ol>
        </section>

        <section>
            <h2>Utilisation</h2>
            <p>
                Ce middleware expose 2 nouvelles fonctions disponible dans l'objet <IC>response</IC> des routes Express:
            </p>
            <ol>
                <li>
                    <IC>initStream()</IC>: Pour initialiser une connexion SSE avec le client.
                </li>
                <li>
                    <IC>pushJson()</IC>: Pour diffuser des données JSON aux clients via la connexion SSE.
                </li>
            </ol>
            <p>
                Vous pouvez en apprendre d'avantage sur l'utilisation de ces fonctions dans la page dédiée à l'utilisation 
                du SSE côté serveur.
            </p>
            <p>
                <Link href="/module-10/server">SSE côté serveur</Link>
            </p>
        </section>

        <section>
            <h2>Téléchargement</h2>
            <DownloadBlock>
                <File fileName="sse.js" path="/templates/sse.js">sse.js</File>
            </DownloadBlock>
        </section>
    </>;
}
