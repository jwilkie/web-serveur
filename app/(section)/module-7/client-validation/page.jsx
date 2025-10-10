import IC from '@/components/InlineCode'
import CodeBlock from '@/components/CodeBlock'
import ColoredBox from '@/components/ColoredBox';

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Validation cliente",
    description: "Démonstration de la validation cliente et de son importance pour les performances des applications web.",
    keywords: ["js", "node.js", "validation", "client", "form", "input", "http"],
    group: "notes"
}

const champs = 
`<form novalidate>
    <label>
        Nom:
        <input type="text" id="nom-input" />
        <div id="erreur-nom" class="erreur"></div>
    </label>

    <label>
        Courriel:
        <input type="email" id="courriel-input" />
        <div id="erreur-courriel" class="erreur"></div>
    </label>

    <!-- ... -->
</form>`;

const simple =
`<form novalidate>
    <!-- ... -->

    <input type="submit" value="Créer un utilisateur" />
    <div id="champ-erreur" class="erreur"></div>
</form>`;

const usage =
`import { isNomValide, isCourrielValide } from './validation.js';

const nomInput = document.getElementById('nom-input');
const courrielInput = document.getElementById('courriel-input');
const champErreur = document.getElementById('champ-erreur');

async function creerUtilisateurServeur(event) {
    event.preventDefault();

    // Préparation des données
    const data = {
        nom: nomInput.value,
        courriel: courrielInput.value
    };

    // Vider les champs d'erreur avant validation
    champErreur.innerText = '';

    // Validation des données
    if (!isNomValide(data.nom)) {
        champErreur.innerText = 'Le nom entré n\\'est pas valide.';
        return;
    }

    if (!isCourrielValide(data.courriel)) {
        champErreur.innerText = 'Le courriel entré n\\'est pas valide.';
        return;
    }

    // Envoi de la requête au serveur
    
    // ...
}`;

const multiple = 
`let valide = true;

if (!isNomValide(data.nom)) {
    champErreurNom.innerText = 'Le nom entré n\\'est pas valide.';
    valide = false;
}
    
if (!isCourrielValide(data.courriel)) {
    champErreurCourriel.innerText = 'Le courriel entré n\\'est pas valide.';
    valide = false;
}
    
if (!valide) {
    return;
}`;

export default function Page() {
    return <>
        <section>
            <h2>Raison</h2>
            <p>
                La validation cliente consiste à vérifier que les données saisies par un utilisateur et à les vérifier avant de les
                envoyer au serveur. Elle permet d'améliorer l'expérience utilisateur en fournissant des informations immédiates dans 
                l'interface graphique sur les potentielles erreurs de saisie, ce qui est beaucoup plus convivial pour votre utilisateur.
                De plus, la validation cliente réduit la charge sur le serveur en empêchant l'envoi de requêtes inutiles, ce qui peut
                nettement améliorer les performances de votre serveur si vous avez beaucoup d'utilisateurs.
            </p>
            <p>
                La validation cliente est intimement liée à l'interface utilisateur. On validera donc uniquement les données saisies par 
                l'utilisateur. Toutes les autres données envoyées au serveur, qui seraient cachées à l'utilisateur, ne seront pas validées 
                puisque ce serait un traitement inutile. En effet, un utilisateur malveillant peut facilement contourner la validation
                cliente en modifiant le code du côté client ou en utilisant des outils comme le Thunder Client pour envoyer des requêtes 
                directement au serveur.
            </p>
        </section>

        <section>
            <h2>Champs d'erreur</h2>
            <p>
                Dans ce cours, pour afficher les messages d'erreurs de validation, nous allons utiliser des champs d'erreur dans le HTML. 
                Ces champs seront des éléments HTML, comme des <IC>&lt;div&gt;</IC> ou des <IC>&lt;span&gt;</IC>, qui seront placés de 
                façon stratégique dans votre interface utilisateur pour afficher les messages d'erreurs. Ils seront stylisés pour ne pas 
                être visible, à moins de contenir un message d'erreur.
            </p>
            <p>
                Voici un exemple de champ d'erreur dans le HTML (dans vos fichier <IC>.handlebars</IC>):
            </p>
            <CodeBlock language="html">{champs}</CodeBlock>
            <p>
                Vous noterez que chaque champ d'erreur est associé à un champ de saisie. Il est toutefois aussi possible d'avoir un seul
                champ d'erreur pour plusieurs champs de saisie, selon la complexité de votre interface utilisateur.
            </p>
            <CodeBlock language="html">{simple}</CodeBlock>
            <ColoredBox title="Attention:">
                Vous pouvez probablement voir l'attribut <IC>novalidate</IC> dans les exemples de formulaire ci-dessus. Cet attribut 
                désactive la validation par défaut du navigateur, qui peut être assez envahissante et difficile à contrôler. Nous
                voulons gérer la validation nous-même pour avoir un contrôle total sur l'expérience utilisateur. Assurez-vous donc de 
                toujours inclure cet attribut dans vos formulaires.
            </ColoredBox>
            <ColoredBox title="À noter:">
                Il y a plusieurs façons d'afficher les erreurs dans une interface utilisateur. Nous utilisons dans ce cours une approche 
                très simple, mais il est possible de rendre cela plus complexe. Par exemple, vous pourriez vouloir afficher les erreurs
                dans une boîte modale, dans un toast, avec des icônes, etc. 
            </ColoredBox>
        </section>

        <section>
            <h2>Ajouter la validation cliente</h2>
            <p>
                La validation cliente sera effectuée dans les fichiers Javascript du côté client, comme <IC>/public/js/page.js</IC>. Il y 
                a de nombreuses façons de l'implémenter. Dans notre cas, pour simplifier notre code, on va généralement l'ajouter juste 
                avant une requête <IC>fetch()</IC> qui envoie des données au serveur qui ont été saisies par l'utilisateur.
            </p>
            <p>
                Voici un exemple:
            </p>
            <CodeBlock language="js">{usage}</CodeBlock>
            <p>
                Voici quelques détails importants à propos de ce code:
            </p>
            <ul>
                <li>
                    Nous utiliserons les fonctions de validation réutilisables que nous avons créées dans le
                    fichier <IC>/public/js/validation.js</IC> pour faire notre validation. Notre client et notre serveur utiliseront 
                    donc les mêmes bases de validation, évitant ainsi les incohérences. N'oubliez pas d'importer ces fonctions au début 
                    du fichier.
                </li>
                <li>
                    La validation est effectué juste après la préparation des données et avant l'envoi de la requête au serveur 
                    avec <IC>fetch()</IC>.
                </li>
                <li>
                    Juste avant la validation, on vide les champs d'erreur pour s'assurer que les anciens messages d'erreur ne restent
                    pas affichés. Si vous avez un gros formulaire ou beaucoup de données à valider, il serait probablement préférable de
                    créer une fonction réutilisable pour effacer les erreurs.
                </li>
                <li>
                    Si une donnée n'est pas valide, on affiche un message d'erreur dans le bon champ d'erreur du HTML et on utilise
                    le <IC>return</IC> pour arrêter l'exécution de la fonction et empêcher l'envoi de la requête au serveur.
                </li>
            </ul>
        </section>

        <section>
            <h2>Multiples messages d'erreurs</h2>
            <p>
                L'exemple précédant est pratique pour des formulaires simples avec peu de champs, mais si vous avez un formulaire plus
                complexe ou des grandes quantités de données à valider, il peut être préférable d'afficher tous les messages d'erreurs à la
                fois plutôt que de s'arrêter à la première erreur trouvée. Votre utilisateur sera ainsi en mesure de corriger toutes les
                erreurs en une seule fois. Pour y arriver, vous pouvez utiliser une variable booléenne pour suivre si une erreur a été 
                trouvée et afficher les messages d'erreur en conséquence de façon similaire à ceci:
            </p>
            <CodeBlock language="js">{multiple}</CodeBlock>
        </section>
    </>;
}
