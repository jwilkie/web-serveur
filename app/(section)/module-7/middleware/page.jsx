import IC from '@/components/InlineCode'
import CodeBlock from '@/components/CodeBlock'
import { File, FileExplorer, Folder } from '@/components/FileExplorer';

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Middleware de route",
    description: "Présentation des middleware de route, des fonctions qui s'exécutent avant le traitement des requêtes.",
    keywords: ["js", "node.js", "middleware", "request", "response", "next", "server", "client"],
    group: "notes"
}

const middleware = 
`function monMiddleware(request, response, next) {
    // Faire quelque chose avec request et response ici
    // ...

    // Appeler next() pour passer au prochain traitement
    next();
};`;

const exemple = 
`function trimNom(request, response, next) {
    if (request.body.nom) {
        request.body.nom = request.body.nom.trim();
    }

    next();
}`;

const usage =
`app.post('/api/utilisateurs', trimNom, (request, response) => {
    // Traitement de la requête...

});`;

const multiple =
`app.post('/api/utilisateurs', trimNom, valideNom, (request, response) => {
    // Traitement de la requête...

});`;

export default function Page() {
    return <>
        <section>
            <h2>Spécifique à une route</h2>
            <p>
                Un middleware de route est un middleware qui, contrairement aux middlewares globaux que nous utilisions jusqu'à présent,
                s'applique uniquement à une route spécifique. Cela permet d'exécuter du code avant le traitement de la requête pour cette
                route particulière. On utilise souvent les middlewares de route pour séparer la logique de route dans différentes fonctions
                qui peuvent potentiellement être réutilisées. On utilisera souvent ces middlewares pour des tâches comme la validation
                des données.
            </p>
            <p>
                Dans ce module, nous allons créer nos propres middlewares, ce qui est nouveau pour nous. Il est donc important de bien
                comprendre comment ils sont formés et comment les utiliser.
            </p>
        </section>

        <section>
            <h2>Emplacement des middlewares</h2>
            <p>
                Nous placerons nos middlewares dans le dossier <IC>/middlewares</IC> de notre projet. Ce dossier n'existe pas encore, il
                vous faudra donc le créer. Dans ce dossier, vous pourrez créer plusieurs fichiers Javascript pour organiser vos middlewares.
            </p>
            <FileExplorer>
                <Folder name="db" />
                <Folder name="middlewares" highlight/>
                <Folder name="model" />
                <Folder name="public" />
                <Folder name="views" />
                <File name=".env" />
                <File name=".gitignore" />
                <File name="package.json" />
                <File name="server.js" />
            </FileExplorer>
        </section>

        <section>
            <h2>Anatomie d'un middleware</h2>
            <p>
                Un middleware est une fonction Javascript ressemblant énormément aux fonctions de route, mais qui prends trois paramètres:
            </p>
            <ul>
                <li>request</li>
                <li>response</li>
                <li>next</li>
            </ul>
            <p>
                Le premier et le deuxième paramètre sont les objets <IC>request</IC> et <IC>response</IC> que nous connaissons déjà. Le
                troisième paramètre, <IC>next</IC> est une fonction qui doit être appelée pour passer la main au prochain middleware. On 
                l'appelle généralement quand le middleware a terminé son travail et que l'on veut continuer le traitement de la requête.
            </p>
            <CodeBlock language="js">{middleware}</CodeBlock>
        </section>

        <section>
            <h2>Utilité des middlewares</h2>
            <p>
                Les middlewares de route sont très utiles pour organiser le code de votre serveur. On les utilisera souvent pour effectuer 
                des actions sur les requêtes avant de les traiter, à filtrer les requêtes ou à transformer les données. Ils sont donc très
                utiles pour des tâches comme la validation des données.
            </p>
            <p>
                Voici à quoi peut ressembler un middleware simple:
            </p>
            <CodeBlock language="js">{exemple}</CodeBlock>
            <p>
                Ce middleware n'est pas très utile en soi, mais il illustre bien le concept. Il va enlever les espaces avant et après le
                nom dans le <IC>body</IC> de la requête et passe ensuite la main au prochain traitement avec <IC>next()</IC>.
            </p>
        </section>

        <section>
            <h2>Utilisation des middlewares</h2>
            <p>
                Pour utiliser un middleware de route, il faut d'abord l'importer dans le fichier <IC>server.js</IC>. Ensuite, on l'ajoute
                comme deuxième paramètre de la route, avant la fonction de traitement de la requête.
            </p>
            <p>
                Voici un exemple:
            </p>
            <CodeBlock language="js">{usage}</CodeBlock>
            <p>
                Il est possible d'ajouter plusieurs middlewares à une même route en les enchaînant les uns après les autres. Ils seront
                exécutés dans l'ordre où ils sont ajoutés.
            </p>
            <CodeBlock language="js">{multiple}</CodeBlock>
        </section>
    </>;
}
