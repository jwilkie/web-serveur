import IC from '@/components/InlineCode';
import BorderedBox from '@/components/BorderedBox';
import ColoredBox from '@/components/ColoredBox';

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Planification d'un API serveur",
    description: "Introduction aux cas d'utilisation et à la planification d'un API serveur simple.",
    keywords: ["api", "serveur", "planification", "javascript", "méthode", "http", "route", "requête", "réponse", "données"],
    group: "notes"
}

export default function Page() {
    return <>
        <section>
            <h2>Définitions</h2>
            <p>
                Un API (Application Programming Interface) est un ensemble de fonctions et procédures qui expose ou donne accès à des
                fonctionnalités ou des données pour des applications ou des services. En des termes plus simple, c'est un intermédiaire
                qui permet à deux applications de communiquer entre elles. Dans notre cas, se sera un intermédiaire entre un client
                (navigateur Web) et un serveur (serveur Node.js).
            </p>
            <p>
                Dans ce cours, nous programmerons un API serveur, donc un ensemble de fonctions et procédures qui permettront aux
                navigateurs Web, notre client, de faire des requêtes pour accéder à des données ou des services rendu disponibles par
                le serveur.
            </p>
        </section>

        <section>
            <h2>Les cas d'utilisation</h2>
            <p>
                La planification d'un API nécessite une réflexion sur ce qu'on veut accomplir avec notre serveur. C'est en fait un cas
                typique de <strong>cas d'utilisation</strong> (use/case). Les cas d'utilisation décrivent les interactions entre les
                utilisateurs et le système. Pour un API serveur, les utilisateurs sont les clients (navigateur Web) et le système est le
                serveur. Il faut donc trouver les différentes actions que les clients pourront faire avec le serveur. Pour y arriver, on
                peut se poser la question suivante:
            </p>
            <BorderedBox>
                Quelles actions pourront être accompli par les clients utilisant mon serveur?
            </BorderedBox>
            <p>
                Voici un exemple pour nous aider:
            </p>
            <BorderedBox>
                On veut créer un système où les utilisateurs peuvent créer ou supprimer des salles de clavardage.
                Si une salle de clavardage existe un utilisateur pourra la rejoindre. Si un utilisateur est dans
                une salle de clavardage, il pourra envoyer des messages ou quitter la salle de clavardage.
                Finalement, on veut que les utilisateurs puissent voir les salles de clavardage présentement
                disponible et aussi voir les utilisateurs qui sont présent dans un salle de clavardages.
            </BorderedBox>
            <p>
                Dans cette situation, notre serveur a besoin de sauvegarder les données sur les salles de
                clavardage et de permettre aux utilisateurs de faire les actions suivantes:
            </p>
            <ul>
                <li>Lister les salles de clavardage</li>
                <li>Créer une salle de clavardage</li>
                <li>Supprimer une salle de clavardage</li>
                <li>Lister les utilisateur dans une salle de clavardage</li>
                <li>Joindre une salle de clavardage</li>
                <li>Sortir d'une salle de clavardage</li>
                <li>Envoyer un message dans une salle de clavardage</li>
            </ul>
            <p>
                Déterminer cette liste de fonctionnalités est l'une des étapes les plus importantes pour la création de votre serveur
                ou même de toutes vos applications. Il sera possible de modifier ou d'ajouter des éléments à cette liste plus tard,
                mais si votre planification est bien faite, vous aurez beaucoup plus de facilité à programmer vos applications par la
                suite.
            </p>
        </section>

        <section>
            <h2>Définir les routes</h2>
            <p>
                Notre API serveur utilisera le protocole HTTP. Dans ce protocole, c'est les routes qui définissent les
                fonctionnalités. Nous voulons donc convertir chacun des cas d'utilisation ci-dessus en une route pour
                notre serveur.
            </p>
            <p>
                Pour chacun des cas, nous lui créerons une route, définissons quelle méthode HTTP est la plus appropriée, indiquons quelles
                données devra être envoyées et reçues dans les requêtes et réponses HTTP. Finalement, si nous envoyons des données, nous
                devrons aussi spécifier de quelle façon nous les enverrons dans la requête HTTP (body, query ou params).
            </p>
            <p>
                Avec l'exemple ci-dessus, nous pourrions définir les propriétés suivantes:
            </p>
            <table>
                <thead>
                    <tr>
                        <th>Cas d'utilisation</th><th>Route</th><th>Méthode HTTP</th><th>Données requête</th><th>Données réponse</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Lister les salles de clavardage</td>
                        <td>/api/salles</td>
                        <td>GET</td>
                        <td>Rien</td>
                        <td><IC>String[]</IC> Tableau des noms des salles de clavardage</td>
                    </tr>
                    <tr>
                        <td>Créer une salle de clavardage</td>
                        <td>/api/salles</td>
                        <td>POST</td>
                        <td><IC>String</IC> Nom de la salle à créer (body)</td>
                        <td>Rien</td>
                    </tr>
                    <tr>
                        <td>Supprimer une salle de clavardage</td>
                        <td>/api/salles</td>
                        <td>DELETE</td>
                        <td><IC>String</IC> Nom de la salle à supprimer (body)</td>
                        <td>Rien</td>
                    </tr>
                    <tr>
                        <td>Lister les utilisateur dans une salle de clavardage</td>
                        <td>/api/salles/utilisateur?nom-salle=XXX</td>
                        <td>GET</td>
                        <td><IC>String</IC> Nom de la salle de clavardage dont nous voulons lister les utilisateurs (query)</td>
                        <td><IC>String[]</IC> Tableau des noms d'utilisateur dans la salle de clavardage</td>
                    </tr>
                    <tr>
                        <td>Joindre une salle de clavardage</td>
                        <td>/api/salles/utilisateur</td>
                        <td>POST</td>
                        <td>
                            <div><IC>String</IC> Nom de la salle à joindre (body)</div>
                            <div><IC>String</IC> Nom de l'utilisateur à joindre à la salle (body)</div>
                        </td>
                        <td>Rien</td>
                    </tr>
                    <tr>
                        <td>Sortir d'une salle de clavardage</td>
                        <td>/api/salles/utilisateur</td>
                        <td>DELETE</td>
                        <td>
                            <div><IC>String</IC> Nom de la salle à joindre (body)</div>
                            <div><IC>String</IC> Nom de l'utilisateur à sortir de la salle (body)</div>
                        </td>
                        <td>Rien</td>
                    </tr>
                    <tr>
                        <td>Envoyer un message dans une salle de clavardage</td>
                        <td>/api/salles/message</td>
                        <td>POST</td>
                        <td>
                            <div><IC>String</IC> Nom de la salle à joindre (body)</div>
                            <div><IC>String</IC> Nom de l'utilisateur qui écrit le message (body)</div>
                            <div><IC>String</IC> Message à envoyer dans la salle (body)</div>
                        </td>
                        <td>Rien</td>
                    </tr>
                </tbody>
            </table>
            <p>
                Pour les plus observateurs, vous aurez peut-être remarqué que le tableau présente quelques éléments intéressants.
                Voici quelques remarques:
            </p>
            <ul>
                <li>
                    Plusieurs routes sont pareilles. Par exemple, la route <IC>/api/salles</IC> est utilisée pour 3 actions différentes.
                    Ce n'est pas un problème, car chaque méthode HTTP est différente pour chacun de ces cas d'utilisation. Si la route
                    et la méthode HTTP sont les mêmes, alors il y aurait un conflit et il faudrait changer la route ou la méthode HTTP d'un 
                    des cas.
                </li>
                <li>
                    Devant chaque route, nous avons ajouté le préfixe <IC>/api</IC>. C'est une bonne pratique de nommer les routes et éviter 
                    d'avoir des conflits avec des routes statiques qui pourraient exister dans notre serveur. En bref, c'est pour éviter que
                    ces routes aient le même nom que des fichiers statiques dans votre dossier <IC>public</IC>.
                </li>
                <li>
                    Nous avons utilisé différentes façons d'envoyer les données dans les requêtes HTTP. Nous allons généralement favoriser le
                    corps de la requête (body) pour envoyer des données, mais n'oubliez pas que la méthode <IC>GET</IC> ne supporte pas ce mode 
                    d'envoi. Dans ce cas, vous pouvez utiliser les paramètres d'URL (params) ou le Query String (query).
                </li>
                <li>
                    Même si ce n'est pas le cas ici, il est possible d'envoyer des données de différentes façons dans une même requête HTTP.
                    Par exemple, vous pourriez envoyer certaines données dans le corps de la requête et d'autres dans le Query String.
                    C'est à vous de décider comment vous voulez envoyer les données, mais n'oubliez pas de sécuriser vos données sensibles dans 
                    le corps de la requête.
                </li>
            </ul>
            <ColoredBox title="À noter:">
                Il n'y a pas nécessairement de meilleures façons de définir les routes pour un API serveur. Par contre, il y a des
                bonnes pratiques à suivre pour nommer les routes et choisir les méthodes HTTP appropriées. La définition d'un bon API 
                viendra avec l'expérience et la pratique.
            </ColoredBox>
            <p>
                Une fois toutes les propriété défini, il ne nous reste qu'à programmer notre API dans notre
                serveur.
            </p>
        </section>
    </>;
}
