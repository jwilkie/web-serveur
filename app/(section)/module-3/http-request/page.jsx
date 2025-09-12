import IC from '@/components/InlineCode'
import OverflowContainer from '@/components/OverflowContainer'
import BorderedBox from '@/components/BorderedBox'

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Requête HTTP",
    description: "Présentation de la structure et des composants d'une requête HTTP .",
    keywords: ["http", "requête", "méthodes", "url", "get", "post", "put", "delete", "patch", "body", "params", "query", "data"],
    group: "notes"
}

export default function Page() {
    return <>
        <section>
            <h2>Structure de la requête HTTP</h2>
            <p>
                Une requête HTTP est un message envoyé par le client (navigateur web) au serveur pour demander une action ou des 
                informations. La requête a toujours la même structure de base et contient 3 parties principales qui nous intéresseront 
                dans ce cours:
            </p>
            <ul>
                <li>La méthode HTTP</li>
                <li>Adresse du serveur et la route</li>
                <li>Données à envoyer</li>
            </ul>
        </section>

        <section>
            <h2>Les méthodes HTTP</h2>
            <p>
                Les méthodes HTTP définissent l'action que le client souhaite effectuer sur la serveur. Ils sont basé sur le concept
                de CRUD (Create, Read, Update, Delete) utilisé dans la gestion des données. En bref, ça nous indique si la requête 
                sert à faire des recherches, à ajouter, à modifier ou à supprimer des données. Chaque requête HTTP possède une seule 
                méthode HTTP.
            </p>
            <p>
                Voici les méthodes HTTP qui nous intéressent pour ce cours:
            </p>
            <OverflowContainer>
                <table>
                    <thead>
                        <tr>
                            <th>Méthode</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>GET</td>
                            <td>
                                Permet d'aller chercher une ressource sur le serveur. Quand vous naviguez sur un site Web, chaque 
                                fichier HTML, CSS et Javascript est demandé par une requêtes <IC>GET</IC> qui est faite automatiquement 
                                par votre navigateur Web.
                            </td>
                        </tr>
                        <tr>
                            <td>POST</td>
                            <td>
                                Permet d'envoyer des données au serveur pour créer une nouvelle ressource. On l'utilise souvent pour
                                envoyer des données de formulaire ou pour ajouter des données à une base de données.
                            </td>
                        </tr>
                        <tr>
                            <td>PUT</td>
                            <td>
                                Permet de mettre à jour une ressource existante. Elle remplace complètement une ressource ou donnée 
                                existante par une nouvelle version.
                            </td>
                        </tr>
                        <tr>
                            <td>PATCH</td>
                            <td>
                                Permet de mettre à jour partiellement une ressource existante. Contrairement à <IC>PUT</IC>, elle ne
                                remplace que des champs spécifiques de la ressource ou donnée et non son entièreté.
                            </td>
                        </tr>
                        <tr>
                            <td>DELETE</td>
                            <td>
                                Permet de supprimer une ressource sur le serveur. On l'utilise souvent pour supprimer des données d'une 
                                base de données ou pour retirer des fichiers.
                            </td>
                        </tr>
                    </tbody>
                </table>
            </OverflowContainer>
            <p>
                Il existe d'autres méthodes HTTP, mais nous ne les utiliserons pas dans ce cours. Si vous êtes intéressé à en savoir plus,
                je vous conseille de visiter la page suivante:
            </p>
            <p>
                <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Methods" target="_blank">MDN - HTTP request methods</a>
            </p>
        </section>

        <section>
            <h2>Adresse du serveur et la route</h2>
            <p>
                L'adresse du serveur et la route son en fait une adresse URL qui nous permet de retrouver le serveur sur l'Internet
                et de lui indiquer quelle élément on veut qu'il exécute. Lorsqu'on entre une adresse dans la barre d'adresse de notre
                navigateur Web, on ajoute en fait cette adresse URL dans une requête HTTP en arrière-plan. Chaque requête HTTP doit
                contenir une adresse URL.
            </p>
            <p>
                Il est important de comprendre l'anatomie d'une adresse URL. Chacune de ses parties nous sera utile de façon différente.
                Voici un exemple d'URL et de chacune de ses parties:
            </p>
            <BorderedBox>
                http://www.exemple.com:4321/api/users?search=John&role=tech#section1
            </BorderedBox>
            <OverflowContainer>
                <table>
                    <thead>
                        <tr>
                            <th>Partie de l'URL</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><IC>http://</IC></td>
                            <td>
                                Le protocole utilisé pour la communication. On verra typiquement <IC>http</IC> ou <IC>https</IC>. Il est
                                toutefois possible d'en voir d'autres comme <IC>ftp</IC>, <IC>ws</IC> ou encore <IC>file</IC>
                            </td>
                        </tr>
                        <tr>
                            <td><IC>www.exemple.com</IC></td>
                            <td>
                                Le nom de domaine ou l'adresse IP du serveur. C'est ce qui permet de localiser le serveur sur l'Internet.
                                Les routeurs utilisent cette information pour acheminer la requête au bon endroit dans le grand réseau du 
                                web.
                            </td>
                        </tr>
                        <tr>
                            <td><IC>:4321</IC></td>
                            <td>
                                Le port sur lequel le serveur écoute les requêtes. Par défaut, le port 80 est utilisé pour HTTP et le port 
                                443 pour HTTPS. On a donc pas besoin de le spécifier dans l'URL si on utilise ces ports par défaut. 
                                Toutefois, en développement ou pour des services spécifiques, on peut utiliser d'autres ports et là, il faut
                                le spécifier dans l'URL.
                            </td>
                        </tr>
                        <tr>
                            <td><IC>/api/users</IC></td>
                            <td>
                                La route ou le chemin d'accès à la ressource sur le serveur. C'est ce qui permet au serveur de savoir quelle
                                action ou ressource on veut. Le nom de la route est similaire au nom d'une fonction dans un programme. Le 
                                développeur du serveur doit définir les routes avec leur nom et ce qu'elles font. Le client pourra ensuite
                                appeler ces routes en utilisant leur nom dans l'URL.
                            </td>
                        </tr>
                        <tr>
                            <td><IC>?search=John &role=tech</IC></td>
                            <td>
                                Les paramètres de la requête, aussi appelés <em>Query Strings</em>. Ils permettent d'envoyer des informations
                                supplémentaires au serveur directement dans l'adresse URL. Ils sont souvent utilisés pour envoyer des 
                                données simples et sans grandes importances au serveur. Ils sont toujours placés après un <IC>?</IC> et
                                chaque paramètre est séparé par un <IC>&</IC>. Chaque paramètre est constitué d'un nom et d'une valeur, 
                                séparés par un <IC>=</IC>. Il est important de noter que les paramètres de la requête sont visibles et ne 
                                peuvent pas être encryptés. Ils ne doivent donc pas être utilisés pour envoyer des informations sensibles,
                                comme des mots de passe ou des informations personnelles.
                            </td>
                        </tr>
                        <tr>
                            <td><IC>#section1</IC></td>
                            <td>
                                Le fragment ou ancre. Il permet de pointer vers une section spécifique d'une ressource. On le voit souvent
                                dans les pages Web pour naviguer rapidement à une section particulière. Le fragment n'est pas envoyé au 
                                serveur dans une requête HTTP. Il nous est donc inutile dans ce contexte.
                            </td>
                        </tr>
                    </tbody>
                </table>
            </OverflowContainer>
        </section>

        <section>
            <h2>Données à envoyer</h2>
            <p>
                Les données à envoyer sont des informations supplémentaires que le client peut inclure dans la requête HTTP. Elles
                sont souvent utilisées avec les méthodes <IC>POST</IC>, <IC>PUT</IC> et <IC>PATCH</IC> pour envoyer des données au serveur.
                Dans une requête HTTP, on peut ajouter des données à 3 endroits différents:
            </p>
            <OverflowContainer>
                <table>
                    <thead>
                        <tr>
                            <th>Emplacement dans la requête</th>
                            <th>Nom dans Express.js</th>
                            <th>Description</th>
                            <th>Sécurisé</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Query String</td>
                            <td><IC>query</IC></td>
                            <td>
                                Permet d'envoyer des données dans le Query String de l'URL. Utile pour les données simples et non 
                                sensibles. On ne peut pas envoyer de grandes quantités de données ou les chiffrer.
                            </td>
                            <td>Non</td>
                        </tr>
                        <tr>
                            <td>Route de la requête</td>
                            <td><IC>params</IC></td>
                            <td>
                                Permet d'envoyer des données directement dans la route de la requête. Utile pour identifier une ressource
                                spécifique. Comme pour le Query String, on ne peut pas envoyer de grandes quantités de données ou les 
                                chiffrer ici.
                            </td>
                            <td>Non</td>
                        </tr>
                        <tr>
                            <td>Corps de la requête</td>
                            <td><IC>body</IC></td>
                            <td>
                                Permet d'envoyer des données dans le corps de la requête. Utile pour envoyer de grandes quantités de 
                                données ou des informations sensibles. Le corps de la requête peut être chiffré si on utilise HTTPS.
                                Si on utilise une requête <IC>GET</IC>, on ne peut pas théoriquement pas envoyer de données dans le 
                                corps. C'est une limitation du protocole HTTP.
                            </td>
                            <td>Oui, si HTTPS</td>
                        </tr>
                    </tbody>
                </table>
            </OverflowContainer>
        </section>
    </>
}