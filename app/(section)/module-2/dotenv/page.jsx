import CodeBlock from '@/components/CodeBlock';
import ColoredBox from '@/components/ColoredBox';
import IC from '@/components/InlineCode';

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Fichier de configuration",
    description: "Démonstration de l'utilisation de dotenv pour la gestion des configurations d'une application.",
    keywords: ["dotenv", ".env", "configuration"],
    group: "notes"
}

const dotenv = 
`PORT=5000`;

const importDotenv = 
`// Chargement des configurations de l'application
import 'dotenv/config'`;

export default function Page() {
    return <>
        <section>
            <h2>Isoler les configurations</h2>
            <p>
                Dans une application, il est important de garder les configurations séparées du code source. Cela permet de 
                facilement modifier les paramètres de configuration sans toucher au code, évitant ainsi la recompilation inutile 
                du programme et facilitant le déploiement futur du serveur.
            </p>
            <p>
                Dans le code écrit jusqu'à présent, nous avons une constante <IC>PORT</IC> qui est <em>harcodé</em> dans notre code. 
                Cette constant est un bel exemple de configuration qui devrait être isolée du code source. Si nous voulons changer le
                port sur lequel notre serveur écoute, nous devrions le faire dans un seul endroit, soit dans un fichier de 
                configuration. Ce fichier de configuration s'appellera <IC>.env</IC>. Il sera situé à la racine de notre projet et
                nous y mettrons toutes les configurations de notre application.
            </p>
            <p>
                Créer ce fichier et ajoutez-y la variable suivante:
            </p>
            <CodeBlock language="env">{dotenv}</CodeBlock>
            <p>
                La propriété <IC>PORT</IC> nous permettra de configurer le port sur lequel notre serveur écoute lorsque nous lançons 
                le serveur. Nous ajouterons d'autres propriétés dans ce fichier plus tard, dans des modules subséquents.
            </p>
        </section>

        <section>
            <h2>Chargement des configuration</h2>
            <p>
                Le simple fait d'ajouter le fichier <IC>.env</IC> à notre projet ne suffit pas à faire magiquement fonctionner notre 
                serveur avec ce fichier de configuration. Nous avons quand même un peu de travail à faire pour lier les 2 ensemble.
            </p>
            <p>
                La première chose à faire est d'installer une librairie de code qui nous permettra de lire le fichier <IC>.env</IC>. 
                Cette librairie s'appelle <IC>dotenv</IC>. Pour l'installer, entrez la commande suivante dans votre terminal:
            </p>
            <CodeBlock language="terminal">&gt; npm i dotenv</CodeBlock>
            <p>
                Une fois la librairie installée, nous devons l'utiliser dans notre fichier principal de code. Pour ce faire, ajoutez 
                le code suivant au début de votre fichier <IC>server.js</IC>:
            </p>
            <CodeBlock language="js">{importDotenv}</CodeBlock>
            <ColoredBox title="Attention:">
                Cette ligne de code doit absolument être au début de votre fichier principal pour que les configurations soient 
                chargées au lancement du serveur.
            </ColoredBox>
        </section>

        <section>
            <h2>Utiliser les configurations</h2>
            <p>
                Pour accéder aux valeurs du fichier <IC>.env</IC> dans votre code, vous pourrez utiliser le code suivant:
            </p>
            <CodeBlock language="js">process.env.NOM_VARIABLE</CodeBlock>
            <p>
                Dans notre cas, si nous voulons utiliser la valeur du <IC>PORT</IC> dans le fichier <IC>.env</IC>, nous changerons 
                le démarrage du serveur de la façon suivante:
            </p>
            <CodeBlock language="js">app.listen(process.env.PORT);</CodeBlock>
        </section>
    </>
}