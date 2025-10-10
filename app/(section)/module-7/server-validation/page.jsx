import IC from '@/components/InlineCode'
import CodeBlock from '@/components/CodeBlock'
import ColoredBox from '@/components/ColoredBox';

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Validation serveur",
    description: "Démonstration de la validation serveur et de l'utilisation de middleware de route pour y parvenir.",
    keywords: ["js", "node.js", "validation", "server", "middleware"],
    group: "notes"
}

const middleware = 
`import { isNomValide } from '../public/js/validation.js';

function nomValide(request, response, next) {
    if(isNomValide(request.body.nom) {
        return next();
    }

    response.status(400).end();
}`;

const usage = 
`import { nomValide, courrielValide, motDePasseValide } from './middlewares/validation.js';

// ...

app.post('/api/utilisateurs', 
    nomValide, 
    courrielValide, 
    motDePasseValide, 
    (request, response) => {
        // Traitement de la requête...
});`;

export default function Page() {
    return <>
        <section>
            <h2>Raison</h2>
            <p>
                Jusqu'à présent, nous développions notre serveur comme si rien de mal ne pouvait arriver. Nous vivions dans un monde idéal
                de papillons et de licornes où tous les utilisateurs étaient honnêtes et ne faisaient jamais d'erreurs. Malheureusement,
                c'est loin d'être la réalité. L'Internet est plutôt comme le Far West, où les utilisateurs malveillants et les erreurs 
                sont monnaie courante. C'est ici que la validation serveur entre en jeu.
            </p>
            <p>
                La validation serveur est essentielle pour garantir la sécurité et l'intégrité des données dans une application web. Elle 
                permet de s'assurer que les données envoyées par le client sont correctes et conformes aux attentes avant de les traiter 
                ou de les stocker. Si les données sont invalides, le serveur peut renvoyer une réponse d'erreur au client, empêchant ainsi
                toute opération potentiellement dangereuse ou incorrecte. On protège ainsi notre application et ses données.
            </p>
        </section>

        <section>
            <h2>Création de middleware de validation</h2>
            <p>
                Pour implémenter la validation serveur, nous allons utiliser des middleware de route. Ces middleware seront exécutés avant
                le traitement de la requête et permettront de valider les données reçues. Si les données sont invalides, le middleware
                pourra renvoyer une réponse d'erreur au client sans que la requête n'atteigne le traitement de la route principale. On 
                créera ces middleware dans un fichier <IC>/middlewares/validation.js</IC>.
            </p>
            <p>
                Voici le format général d'un middleware de validation:
            </p>
            <CodeBlock language="js">{middleware}</CodeBlock>
            <p>
                Voici quelques détails importants à propos de ce middleware:
            </p>
            <ul>
                <li>
                    Pour faciliter le développement de la validation, nous allons utiliser des fonctions de validation réutilisables. 
                    Vous pouvez importer ces fonctions depuis le fichier <IC>/public/js/validation.js</IC> que nous avons créé dans 
                    une page précédante.
                </li>
                <li>
                    Le middleware vérifie si le nom est valide et si c'est le cas, il appelle <IC>next()</IC> pour passer au prochain 
                    traitement. Le return est important ici pour s'assurer que la fonction s'arrête après l'appel à <IC>next()</IC>.
                </li>
                <li>
                    Si le nom n'est pas valide, le middleware renvoie une réponse avec le code 400 (Bad Request), sans retourner de 
                    données. À moins d'offrir un API publique, il n'est pas recommandé de fournir plus de détails sur l'erreur pour des
                    des raisons de sécurité. Puisque <IC>next()</IC> n'est pas appelé dans ce cas, le traitement de la requête s'arrête ici.
                </li>
            </ul>
        </section>

        <section>
            <h2>Utilisation des middleware de validation</h2>
            <p>
                Pour utiliser un middleware de validation, il faut l'importer dans le fichier <IC>server.js</IC> et l'ajouter comme
                deuxième paramètre de la route, avant la fonction de traitement de la requête.
            </p>
            <p>
                Voici un exemple:
            </p>
            <CodeBlock language="js">{usage}</CodeBlock>
            <p>
                Chaque middleware sera exécuté dans l'ordre où ils sont ajoutés, validant ainsi les différentes parties des données de 
                la requête. Si une validation échoue, la requête sera arrêtée et une réponse d'erreur sera renvoyée au client.
            </p>
            <ColoredBox title="À noter:">
                Si vous ne voulez pas créer un middleware pour chaque champ de données, vous pouvez créer des middleware qui valident
                plusieurs champs à la fois. Ils seront un peu plus complexes et potentiellement moins réutilisables, mais ils peuvent être
                plus facile à lire dans la route.
            </ColoredBox>
        </section>
    </>;
}
