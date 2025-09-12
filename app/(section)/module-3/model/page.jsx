import IC from '@/components/InlineCode'
import CodeBlock from '@/components/CodeBlock'
import ColoredBox from '@/components/ColoredBox';
import BorderedBox from '@/components/BorderedBox';
import { FileExplorer, File, Folder } from '@/components/FileExplorer';

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Couche des données",
    description: "Démonstration de la création d'une couche de manipulation des données dans votre serveur web.",
    keywords: ["data access layer", "modèle", "couche", "données", "js", "dal", "javascript"],
    group: "notes"
}

const data = 
`Salle de clavardage:
{
    "nom": String,
    "utilisateurs": Utilisateur[],
    "messages": Message[]
}

Utilisateur:
{
    "nom": String
}

Message:
{
    "contenu": String,
    "auteur": Utilisateur,
    "date": Date
}`;

const model =
`// Fichier /model/salles.js

const salles = [];

// Fonction aller chercher toutes les salles
export function getSalles() {
    return salles;
}
    
// Fonction pour ajouter une nouvelle salle
export function addSalle(nomSalle) {
    salles.push({
        nom: nomSalle,
        utilisateurs: [],
        messages: []
    });
}
    
// Fonction pour supprimer une salle
export function deleteSalle(nomSalle) {
    for (let i = 0; i < salles.length; i++) {
        if (salles[i].nom === nomSalle) {
            salles.splice(i, 1);
            return;
        }
    }
}`;

export default function Page() {
    return <>
        <section>
            <h2>Planification des données</h2>
            <p>
                En plus de planifier les routes de notre API, il est aussi important de planifier comment nous allons manipuler les données
                dans notre serveur. Il est important de bien comprendre ce que nous voulons sauvegarder exactement comme données, mais aussi 
                de bien les isoler de la logique de notre serveur pour en faciliter la maintenance et l'évolution.
            </p>
            <p>
                La première étape sera de bien définir nos données. Pour ce faire, nous allons nous poser la question suivante:
            </p>
            <BorderedBox>
                Lors de la planification de mon API, quelles données est-ce que mon serveur manipule?
            </BorderedBox>
            <p>
                Si nous revenons au même exemple vu dans la page de planification de l'API, nous avions 3 ressources principales:
            </p>
            <ul>
                <li>Les salles de clavardage</li>
                <li>Les utilisateurs</li>
                <li>Les messages</li>
            </ul>
        </section>

        <section>
            <h2>Décrire les données</h2>
            <p>
                Une fois les ressources identifiées, nous devons maintenant les décrire. Nous devons donc définir les propriétés de chacun 
                de nos types de données. Ici, vous devez réfléchir aux informations que vous devez absolument conserver pour chaque ressource.
                Ce travail n'est pas toujours évident, mais il devient plus facile avec l'expérience. Dans notre exemple, nous pourrions définir 
                nos données comme suit:
            </p>
            <CodeBlock language="json">{data}</CodeBlock>
            <p>
                Voici quelques remarques sur ces définitions:
            </p>
            <ul>
                <li>
                    Certain types de données sont des types primitifs (chaîne de caractères ou date), tandis que d'autres sont des références
                    à d'autres types de données que nous avons définis (Message ou un Utilisateur). Cela permet de créer des relations entre
                    nos données.
                </li>
                <li>
                    Nous avons utilisé les symboles <IC>[]</IC> pour indiquer qu'une propriété est une liste ou un tableau de valeurs. Par 
                    exemple, une salle de clavardage peut contenir plusieurs utilisateurs et plusieurs messages.
                </li>
            </ul>
            <p>
                Une fois nos données bien définies, nous pouvons passer à l'étape suivante, qui consiste à créer une couche de manipulation
                des données dans notre serveur.
            </p>
        </section>

        <section>
            <h2>Couche de manipulation des données</h2>
            <p>
                La couche de manipulation des données, souvent appelée <strong>modèle</strong>, est responsable de la gestion des données
                dans notre application. Elle fournit une interface pour créer, lire, mettre à jour et supprimer des données, de façon à isoler
                cette logique du reste de l'application. 
            </p>
            <p>
                Nous allons créer des fichiers de code pour cette couche. Cependant, il est important de comprendre que notre modèle changera 
                au courant de la session. En effet, la façon de stocker les données va causer des changements dans cette couche. Au début du 
                cours, nous stockerons les données en mémoire, mais plus tard, nous utiliserons une base de données, ce qui occasionnera des
                changements.
            </p>
            <p>
                Pour l'instant, nous allons créer une structure de base pour notre modèle qui sera sauvergardé dans la mémoire vive du serveur.
                Nous créerons un dossier <IC>/model</IC> à la racine de notre application. C'est dans ce dossier que nous créerons nos fichiers
                de code pour manipuler les données.
            </p>
            <FileExplorer>
                <Folder name="model" highlight>
                    <File name="salles.js" />
                </Folder>
                <Folder name="public">
                    <File name="index.html" />
                </Folder>
                <File name=".env" />
                <File name=".gitignore" />
                <File name="package.json" />
                <File name="package-lock.json" />
                <File name="server.js" />
            </FileExplorer>
        </section>

        <section>
            <h2>Fichier de modèle</h2>
            <p>
                Pour l'instant, les fichiers de modèle qui vont se retrouver dans le dossier <IC>/model</IC> ressembleront à ceci:
            </p>
            <CodeBlock language="js">{model}</CodeBlock>
            <p>
                Voici quelques remarques sur ce code:
            </p>
            <ul>
                <li>
                    Nous utilisons un tableau qui se retrouve dans la mémoire du serveur pour stocker nos données. Ce tableau est privé au 
                    fichier de modèle. Cela signifie que les autres parties de notre application ne peuvent pas y accéder directement. Ils 
                    doivent passer par les fonctions exportées que nous avons définies pour manipuler les données.
                </li>
                <li>
                    Puisque nous utilisons un tableau en mémoire, toutes les données seront perdues si le serveur redémarre. Plus tard, nous
                    mettrons en place une solution de stockage persistant, comme une base de données, pour éviter ce problème.
                </li>
                <li>
                    Nous avons défini des fonctions pour chaque opération que nous voulons effectuer sur nos données. Ces fonctions sont
                    exportées pour qu'elles puissent être utilisées dans d'autres parties de notre application, comme dans la programmation
                    de nos routes.
                </li>
            </ul>
            <ColoredBox title="À noter:">
                Pour ne pas avoir un code trop long, nous n'avons pas ajouté toutes les opérations de la situation de l'exemple. Pour 
                être complet, nous devrions aussi ajouter des fonctions pour lister les utilisateurs, ajouter et supprimer des utilisateurs
                dans une salle, ainsi que pour envoyer et lister les messages. 
            </ColoredBox>
        </section>
    </>
}