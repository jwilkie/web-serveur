import IC from '@/components/InlineCode'
import CodeBlock from '@/components/CodeBlock'
import BorderedBox from '@/components/BorderedBox'

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Serveur statique et dynamique",
    description: "Présentation de la différence entre un serveur statique et un serveur dynamique et démonstration de l'ajout de contenu statique à votre serveur.",
    keywords: ["express", "node.js", "serveur", "statique", "dynamique", "hybride"],
    group: "notes"
}

const expressStatic =
`// Chargement du fichier de configuration et 
// Importations générales du projet
// ...

// Création du serveur
// ...

// Ajout des middlewares
// Autre middleware ...
app.use(express.static('public'));

// Programmation des routes 
// ...

// Démarrage du serveur 
// ...`;

export default function Page() {
    return <>
        <section>
            <h2>Types de fonctionnement des serveurs</h2>
            <p>
                Les serveurs web ont principalement 2 type de fonctionnement, soit statique et dynamique.
            </p>
            <p>
                Un serveur web statique sert simplement à retourner de fichiers. On utilise donc ce type de fonctionnement pour 
                héberger les sites web simples. En effet, un serveur web statique pourra sans problème retourner des 
                fichiers <IC>.html</IC>, <IC>.css</IC>, <IC>.js</IC>, des images, des vidéos ou même du texte. La majorité des sites 
                web sont hébergés sur un serveur statique.
            </p>
            <p>
                Un serveur web dynamique, quant à lui, ne servira pas à retourner des fichiers, mais plutôt à exécuter du code 
                lorsqu'il reçoit une requête. Ce code pourra modifier des variables, faire des recherches dans une base de données, 
                écrire dans des fichiers et plus encore. Les applications web plus complexe utiliseront ce type de fonctionnement. 
                Les sites web utilisant des connexions, nécessitant des bases de données ou permettant l'intéraction avec d'autres 
                utilisateurs sont hébergés sur des serveurs dynamiques.
            </p>
            <p>
                La plupart des serveurs dynamiques aujourd'hui sont hybrides. C'est-à-dire qu'ils permettent de retourner des 
                fichiers de façon statique, mais permettent aussi de programmer certains comportements à l'aide d'un langage de 
                programmation. Notre serveur créé avec Express dans ce cours sera un serveur hybride.
            </p>
        </section>

        <section>
            <h2>Serveur statique avec Express</h2>
            <p>
                Par défaut, notre serveur Express est un serveur dynamique. Il faut le configurer pour qu'il puisse aussi servir 
                des fichiers de façon statique. Pour ce faire, nous utiliserons un middleware intégré à Express. Il est donc déjà 
                installé et nous avons simplement à l'ajouter dans le code de notre serveur <IC>server.js</IC>.
            </p>
            <CodeBlock language="js">{expressStatic}</CodeBlock>
            <p>
                Lorsque nous utilisons le middleware <IC>static</IC>, nous spécifions quel dossier contiendra les fichiers à remettre 
                de façon statique. Je vous demande de le spécifier, par convention, dans un dossier nommé <IC>public</IC>. Ce dossier 
                n'existe probablement pas encore, donc vous devez le creer. Assurez-vous aussi d'appeler ce middleware après ceux que 
                l'on utilise déjà.
            </p>
            <p>
                Pour tester le serveur statique, vous pouvez maintenant mettre un fichier <IC>index.html</IC> dans le 
                dossier <IC>public</IC>. Si vous démarrer votre serveur, vous serez en mesure de voir cette page web dans votre 
                navigateur si vous accédez à l'addresse <IC>http://localhost:VOTRE_PORT</IC>.
            </p>
            <p>
                Vous pouvez aussi mettre d'autres types de fichiers dans ce dossier. Par exemple, vous pouvez mettre des fichiers CSS,
                Javascript, des images ou des vidéos. En fait, vous pouvez mettre n'importe quel projet que vous avez fait dans votre 
                cours de web client dans ce dossier. Votre serveur sera en mesure de servir tous les fichiers
            </p>
        </section>

        <section>
            <h2>Code client et serveur</h2>
            <p>
                Puisque Express.js est maintenant un seveur hybride, notre projet contiendra donc du code qui sera exécuté sur le
                client (navigateur web) et du code qui sera exécuté sur le serveur (Node.js). Lorsqu'on est débutant en programmation 
                web, il est facile de se mélanger et de ne pas savoir quel code va où, ou encore où chaque morceau de code  est 
                exécuté. Pour éviter cette confusion, voici une règle simple à suivre:
            </p>
            <BorderedBox>
                Tout code qui est dans le dossier <IC>public</IC> est du code client. Tout code qui est à l'extérieur de ce
                dossier est du code serveur.
            </BorderedBox>
            <p>
                Rappellez-vous de cette simple règle et vous ne devriez pas avoir trop de problème à faire la distinction entre le
                code client et le code serveur pour le reste du cours.
            </p>
        </section>
    </>
}