import Image from 'next/image'
import IC from '@/components/InlineCode'

import thunderclientNew from '@/public/img/thunderclient-new.png'
import thunderclientRoute from '@/public/img/thunderclient-route.png'
import thunderclientQuery from '@/public/img/thunderclient-query.png'
import thunderclientBody from '@/public/img/thunderclient-body.png'
import thunderclientResponse from '@/public/img/thunderclient-response.png'

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Tester les routes",
    description: "Présentation d'outils pour tester efficacement les routes programmées dans Express.js.",
    keywords: ["test", "api", "routes", "thunder client", "express", "postman"],
    group: "notes"
}

export default function Page() {
    return <>
        <section>
            <h2>Introduction</h2>
            <p>
                Une fois notre serveur Express.js programmé, il est important de tester les routes que nous avons créées pour s'assurer 
                qu'elles fonctionnent comme prévu. Il existe plusieurs outils qui peuvent nous aider à accomplir cette tâche. Dans ce cours, 
                nous utiliserons le Thunder Client, une extension populaire pour Visual Studio Code pour nous aider. Vous pouvez rechercher 
                l'extension directement dans Visual Studio Code ou visiter le site officiel de l'extension:
            </p>
            <p>
                <a href="https://www.thunderclient.com/" target="_blank">Thunder Client</a>
            </p>
        </section>

        <section>
            <h2>Création d'une requête</h2>
            <p>
                L'extension Thunder Client est assez simple à utiliser. Une fois installée, vous verrez une nouvelle icône dans la barre 
                latérale de Visual Studio Code. En cliquant sur cette icône, vous accéderez à l'interface de Thunder Client. Vous pouvez 
                alors cliquer sur le bouton "New Request" pour créer une nouvelle requête HTTP.
            </p>
            <Image src={thunderclientNew} alt="Bouton de création d'une nouvelle requête dans Thunder Client" />
            <p>
                Dans l'interface de création de requête, vous pouvez sélectionner la méthode HTTP (GET, POST, PUT, DELETE, etc.) et entrer
                l'URL de la route que vous souhaitez tester. Par exemple, si votre serveur tourne localement sur le port 3000 et que vous 
                avez une route GET définie à <IC>/api/utilisateur</IC>, vous entreriez <IC>http://localhost:3000/api/utilisateur</IC> dans le champ URL.
            </p>
            <Image src={thunderclientRoute} alt="Interface de Thunder Client pour définir la route et la méthode HTTP" />
            <p>
                Si votre route nécessite d'envoyer des données, vous pouvez le faire en utilisant les 
                onglets <strong>Query</strong> et <strong>Body</strong>. L'onglet Query est utilisé pour ajouter des données dans le
                Query String de l'URL, tandis que l'onglet Body est utilisé pour envoyer des données dans le corps de la requête.
            </p>
            <Image src={thunderclientQuery} alt="Onglet Query dans Thunder Client pour ajouter des paramètres de requête" />
            <Image src={thunderclientBody} alt="Onglet Body dans Thunder Client pour ajouter des données dans le corps de la requête" />
            <p>
                Dans ce cours, nous enverrons toujours des données au format JSON dans le corps de nos requêtes. Assurez-vous donc de 
                sélectionner le type <IC>JSON</IC> dans l'onglet Body lorsque vous envoyez des données.
            </p>
        </section>

        <section>
            <h2>Envoyer une requête et analyser la réponse</h2>
            <p>
                Une fois que vous avez configuré votre requête, vous pouvez cliquer sur le bouton <strong>Send</strong> qui se trouve juste 
                à côté du champ URL. Ce bouton soumettra la requête à votre serveur qui tentera de traiter la demande. Si tout se passe bien,
                vous verrez une réponse s'afficher dans la partie de réponse de Thunder Client.
            </p>
            <Image src={thunderclientResponse} alt="Section de réponse dans Thunder Client affichant le code de statut et le corps de la réponse" />
            <p>
                Vous noterez ici que le code de statut HTTP est affiché en haut à gauche et que les données retournées par le serveur sont
                affichées dans le corps de la réponse. Vous pouvez utiliser ces informations pour vérifier que votre route fonctionne comme prévu.
            </p>
        </section>
    </>
}