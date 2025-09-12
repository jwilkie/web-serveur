import IC from '@/components/InlineCode'
import OverflowContainer from '@/components/OverflowContainer'

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Réponse HTTP",
    description: "Présentation de la structure et des composants d'une réponse HTTP.",
    keywords: ["http", "réponse", "status", "codes", "data"],
    group: "notes"
}

export default function Page() {
    return <>
        <section>
            <h2>Structure de la réponse HTTP</h2>
            <p>
                Une réponse HTTP est la réponse du serveur à une requête du client. Elle suit une structure 
                similaire à la requête mais contient des informations spécifiques au résultat de l'opération 
                demandée par le client. Dans ce cours, seulement 2 éléments de la réponse HTTP seront utilisés:
            </p>
            <ul>
                <li>Code de status HTTP</li>
                <li>Corps de la réponse</li>
            </ul>
        </section>

        <section>
            <h2>Codes de statut HTTP</h2>
            <p>
                Les codes de statut indiquent le résultat de la requête. Ils sont utiles pour savoir si la requête a réussi ou échoué. 
                Certains de ces codes sont très connus, comme par exemple le code <IC>404 - Not Found</IC>. Ces codes sont regroupés en 
                cinq catégories: <IC>1xx</IC>, <IC>2xx</IC>, <IC>3xx</IC>, <IC>4xx</IC> et <IC>5xx</IC>.
            </p>
            <p>
                Pour ce cours, il est important de bien connaître les codes de status dans les catégories 2xx et 4xx qui sont présenté 
                ci-dessous. Nous utiliserons fréquemment ces codes lors de la programmation de routes dans Express.js.
            </p>
            
            <h3>1xx - Informations</h3>
            <p>
                Ces codes indiquent que la requête a été reçue et que le processus est en cours. Ils sont rarement utilisés dans les
                applications web courantes. On ne les utilisera pas dans le cours. Voici quelques exemples:
            </p>
            <OverflowContainer>
                <table>
                    <thead>
                        <tr>
                            <th>Code</th>
                            <th>Nom</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>100</td>
                            <td>Continue</td>
                            <td>Le serveur invite le client à continuer la requête</td>
                        </tr>
                        <tr>
                            <td>101</td>
                            <td>Switching Protocols</td>
                            <td>Le serveur change de protocole</td>
                        </tr>
                    </tbody>
                </table>
            </OverflowContainer>

            <h3>2xx - Succès</h3>
            <p>
                Ces codes indiquent que la requête a été reçue, comprise et acceptée avec succès. On les utilisera pour indiquer 
                qu'une requête envoyée au serveur a été traitée avec succès. Voici quelques exemples:
            </p>
            <OverflowContainer>
                <table>
                    <thead>
                        <tr>
                            <th>Code</th>
                            <th>Nom</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>200</td>
                            <td>OK</td>
                            <td>Requête réussie, réponse standard</td>
                        </tr>
                        <tr>
                            <td>201</td>
                            <td>Created</td>
                            <td>Ressource créée avec succès</td>
                        </tr>
                    </tbody>
                </table>
            </OverflowContainer>

            <h3>3xx - Redirection</h3>
            <p>
                Ces codes indiquent que le client doit effectuer une action supplémentaire pour compléter la requête. Ils sont
                souvent utilisés pour rediriger le client vers une autre URL. Ces codes sont un peu plus complexes et on ne les 
                utilisera pas dans le cours. Voici quelques exemples:
            </p>
            <OverflowContainer>
                <table>
                    <thead>
                        <tr>
                            <th>Code</th>
                            <th>Nom</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>301</td>
                            <td>Moved Permanently</td>
                            <td>Ressource déplacée définitivement</td>
                        </tr>
                        <tr>
                            <td>307</td>
                            <td>Temporary Redirect</td>
                            <td>Ressource déplacée temporairement</td>
                        </tr>
                    </tbody>
                </table>
            </OverflowContainer>

            <h3>4xx - Erreur client</h3>
            <p>
                Ces codes indiquent que la requête contient une erreur ou que le client n'a pas les permissions nécessaires pour
                accéder ou exécuter la ressource demandée. On les utilisera pour indiquer qu'une requête envoyée au serveur a
                échoué à cause d'une erreur du client. Voici quelques exemples:
            </p>
            <OverflowContainer>
                <table>
                    <thead>
                        <tr>
                            <th>Code</th>
                            <th>Nom</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>400</td>
                            <td>Bad Request</td>
                            <td>Requête malformée ou invalide</td>
                        </tr>
                        <tr>
                            <td>401</td>
                            <td>Unauthorized</td>
                            <td>Authentification requise</td>
                        </tr>
                        <tr>
                            <td>403</td>
                            <td>Forbidden</td>
                            <td>Accès interdit</td>
                        </tr>
                        <tr>
                            <td>404</td>
                            <td>Not Found</td>
                            <td>Ressource non trouvée</td>
                        </tr>
                        <tr>
                            <td>405</td>
                            <td>Method Not Allowed</td>
                            <td>Méthode HTTP non supportée</td>
                        </tr>
                        <tr>
                            <td>409</td>
                            <td>Conflict</td>
                            <td>Conflit avec l'état actuel de la ressource</td>
                        </tr>
                    </tbody>
                </table>
            </OverflowContainer>

            <h3>5xx - Erreur serveur</h3>
            <p>
                Ces codes indiquent que le serveur a rencontré une erreur ou est incapable de traiter la requête. On n'aime pas voir 
                ces codes car ils signifient qu'il y a un problème avec le serveur ou au chemin pour se rendre au serveur. On ne les 
                utilisera pas directement, mais Express.js pourra en envoyer si nécessaire. Voici quelques exemples:
            </p>
            <OverflowContainer>
                <table>
                    <thead>
                        <tr>
                            <th>Code</th>
                            <th>Nom</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>500</td>
                            <td>Internal Server Error</td>
                            <td>Erreur interne du serveur</td>
                        </tr>
                        <tr>
                            <td>501</td>
                            <td>Not Implemented</td>
                            <td>Fonctionnalité non implémentée</td>
                        </tr>
                        <tr>
                            <td>502</td>
                            <td>Bad Gateway</td>
                            <td>Erreur de passerelle</td>
                        </tr>
                    </tbody>
                </table>
            </OverflowContainer>
        </section>

        <section>
            <h2>Corps de la réponse</h2>
            <p>
                Le corps de la réponse contient les données renvoyées par le serveur au client, si nécessaire. En effet, une réponse 
                peut être vide et ne rien contenir dans son corps. S'il y a des données, elles peuvent être sous différents formats, 
                comme du texte brut, du HTML, du JSON, etc. Dans ce cours, nous utiliserons principalement le format JSON pour envoyer 
                des données structurées entre le serveur et le client.
            </p>
            <p>
                Le corps de la réponse est chiffrable si nous utilisons le protocole HTTPS. Cela signifie que les données renvoyé par 
                le serveur sont sécurisées.
            </p>
        </section>
    </>
}