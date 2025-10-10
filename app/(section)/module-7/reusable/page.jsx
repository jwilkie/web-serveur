import IC from '@/components/InlineCode'
import CodeBlock from '@/components/CodeBlock'

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Fonction de validation réutilisable",
    description: "Démonstration de la création de fonctions de validation réutilisables qui pourront être utilisées à la fois côté client et côté serveur pour valider les données.",
    keywords: ["js", "node.js", "validation", "server", "client", "function", "valid"],
    group: "notes"
}

const nom = 
`// Version en fonction normale
export function isNomValide(nom) {
    return typeof nom === 'string' &&
        nom.trim().length > 0;
}
        
// Version en fonction fléchée
export const isNomValide = (nom) =>
    typeof nom === 'string' &&
    nom.trim().length > 0;`;

export default function Page() {
    return <>
        <section>
            <h2>Pour le client et le serveur</h2>
            <p>
                Comme nous l'avons vu jusqu'à présent, les fichiers de code s'exécutant côté serveur et côté client sont séparés. Les 
                fichiers du client se trouvent dans le dossier <IC>/public</IC> tandis que les fichiers du serveur se trouvent partout 
                ailleurs. Ceci est une bonne pratique pour séparer les responsabilités, mais cela complique la réutilisation de code 
                entre les deux environnements. 
            </p>
            <p>
                La séparation des fichiers ci-dessus n'est toutefois pas exacte. Il est vrai que le navigateur n'a accès qu'aux fichiers
                du dossier <IC>/public</IC>, mais le serveur a théoriquement accès à tous les fichiers du projet. Nous pouvons donc créer
                des fichiers de code qui seront utilisés par le serveur et le client, si nous les plaçons dans le dossier <IC>/public</IC>.
            </p>
            <p>
                Cela apporte toutefois un certain risque. En effet, le code placé dans le dossier <IC>/public</IC> sera accessible par
                le navigateur. Il ne faut donc pas y placer de code sensible. Les fonctions de validation de base sont toutefois assez 
                inoffensives et peuvent être placées dans ce dossier en toute sécurité.
            </p>
            <p>
                Nous allons donc créer un fichier <IC>/public/js/validation.js</IC> dans lequel nous allons placer des fonctions de
                validation réutilisables. Ces fonctions pourront ensuite être utilisées par le serveur et le client pour valider les
                données.
            </p>
        </section>

        <section>
            <h2>Validation simple</h2>
            <p>
                Une fonction de validation réutilisable par le client et le serveur doit être simple et ne pas dépendre de bibliothèques
                externes. On l'utilisera donc pour valider des types de données simples comme des chaînes de caractères, des nombres, des
                tableaux ou des objets.
            </p>
            <p>
                En général, on aura une fonction de validation pour chaque champ de vos données. Si, par exemple, notre application gère 
                des utilisateurs, on pourrait avoir des fonctions de validation pour le nom, le prénom, le courriel, le mot de passe, etc. 
                Les fonctions de validation serviront à vérifier un seul champ et retourneront un booléen indiquant si la donnée est
                valide ou non.
            </p>
            <p>
                Voici un exemple de fonctions de validation simples pour valider un nom:
            </p>
            <CodeBlock language="js">{nom}</CodeBlock>
            <p>
                Comme vous pouvez le voir, ces fonctions consistent en une seule expression qui enchaîne des vérifications logiques à 
                l'aide d'opérateurs et de fonction booléennes.
            </p>
        </section>

        <section>
            <h2>Outils pour validation</h2>
            <p>
                Lorsque vous écrivez ces fonctions de validation, vous aurez besoin de plusieurs fonctions utilitaires pour vérifier vos 
                données. Voici quelques fonctions utilitaires qui pourraient vous être utiles:
            </p>
            
            <h3>typeof</h3>
            <p>
                L'opérateur <IC>typeof</IC> permet de vérifier le type d'une variable. Il retourne une chaîne de caractères indiquant le
                type de la variable, généralement parmis les types 
                suivants: <IC>string</IC>, <IC>number</IC>, <IC>boolean</IC>, <IC>object</IC>, <IC>function</IC> et <IC>undefined</IC>.
            </p>
            <CodeBlock language="js">{`typeof variable === 'string'`}</CodeBlock>

            <h3>Array.isArray()</h3>
            <p>
                L'opérateur <IC>typeof</IC> ne permet pas d'identififier les tableaux. C'est ici que la méthode <IC>Array.isArray()</IC> entre 
                en jeu. Elle permet de vérifier si une variable est un tableau. 
            </p>
            <CodeBlock language="js">{`Array.isArray(variable)`}</CodeBlock>

            <h3>Number.isInteger()</h3>
            <p>
                Les nombres en Javascript sont tous de type <IC>number</IC>. Contrairement à d'autres langages, il n'y a pas de type 
                spécifique pour les entiers ou les nombres à virgule. Pour vérifier si un nombre est un entier, on peut utiliser la 
                méthode <IC>Number.isInteger()</IC>. Si vous avez besoin de vérifier si un nombre est un nombre à virgule, vous pouvez
                utiliser l'inverse de cette méthode avec l'opérateur de négation <IC>!</IC>.
            </p>
            <CodeBlock language="js">{`Number.isInteger(variable)`}</CodeBlock>

            <h3>trim()</h3>
            <p>
                La méthode <IC>trim()</IC> permet de supprimer les espaces au début et à la fin d'une chaîne de caractères. On va 
                généralement l'utiliser avant de valider différents aspects d'une chaîne de caractères, comme sa longueur ou son format.
            </p>
            <CodeBlock language="js">{`variable.trim()`}</CodeBlock>

            <h3>toLowerCase()</h3>
            <p>
                La méthode <IC>toLowerCase()</IC> permet de convertir une chaîne de caractères en minuscules. Cela peut être utile
                pour valider des chaînes de caractères de manière insensible à la casse.
            </p>
            <CodeBlock language="js">{`variable.toLowerCase()`}</CodeBlock>

            <h3>match() ou test()</h3>
            <p>
                Les méthodes <IC>match()</IC> et <IC>test()</IC> permettent de vérifier si une chaîne de caractères correspond à une 
                expression régulière. Les expressions régulières sont très puissantes pour valider le format de chaînes de caractères, 
                comme les codes postaux, les numéros de téléphone, les adresses courriel, etc. Les expressions régulières ne sont pas 
                matière à ce cours, mais vous pouvez en apprendre davantage à leur sujet en ligne. Il existe déjà plusieurs expressions
                régulières pour valider les formats les plus courants.
            </p>
            <CodeBlock language="js">{`variable.match(/^[ABCEGHJ-NPRSTVXY]\\d[ABCEGHJ-NPRSTV-Z][ -]?\\d[ABCEGHJ-NPRSTV-Z]\\d$/i)`}</CodeBlock>
        </section>

        <section>
            <h2>Ordre de validation</h2>
            <p>
                Lorsque vous écrivez une fonction de validation, il est important de penser à l'ordre dans lequel vous allez effectuer les
                vérifications. Certaines vérifications doivent être faites en premier pour éviter des erreurs. Entres autres, il faut 
                toujours vérifier le type de la donnée en premier. Par exemple, si vous devez vérifier la longueur d'une chaîne de
                caractères, vous devez d'abord vous assurer que la donnée est bien une chaîne de caractères. Si vous essayez de vérifier
                qu'un nombre entier est supérieur à zéro, vous devez d'abord vous assurer que la donnée est bien un nombre et aussi qu'il 
                est entier.
            </p>
            <p>
                Voici un ordre général de validation que vous pouvez suivre:
            </p>
            <ol>
                <li>Vérifier le type de la donnée</li>
                <li>Vérifier le sous-type de la donnée (pour les nombres par exemple)</li>
                <li>Vérifier si la donnée est vide</li>
                <li>Vérifier le restant des contraintes</li>
            </ol>
        </section>
    </>;
}
