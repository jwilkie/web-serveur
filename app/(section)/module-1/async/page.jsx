import IC from '@/components/InlineCode'
import CodeBlock from '@/components/CodeBlock'

import async from '@/public/img/asynchrone.png'
import Image from 'next/image'

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Code asynchrone",
    description: "Résumé court et simplifié de la programmation asynchrone et de son fonctionnement dans le langage Javascript.",
    keywords: ["js", "async", "callback", "function", "fonction"],
    group: "notes"
}

const func =
    `function additionner(nombre1, nombre2){
    return nombre1 + nombre2;
};`

const varFunc =
    `const additionner = function(nombre1, nombre2){
    return nombre1 + nombre2;
};`

const arrowFunc =
    `const additionner = (nombre1, nombre2) => nombre1 + nombre2;`

const callbackBrowser =
    `let button = document.getElementById('clicker');
clicker.addEventListener('click', (event) => {
    console.log('Cette fonction est un callback');
});`;

const callbackNode =
    `import { readFile } from 'fs';
readFile('./chemin/vers/fichier.txt', (error, data) => {
    console.log(data.toString())
});`;

const callbackIndent =
    `import fs from 'fs';
fs.readFile('./fichier1.txt', (error, data1) => {
    // On a besoin du fichier1 avant de lire le fichier2
    fs.readFile('./' + data1.toString(), (error, data2) => {
        // On a besoin du fichier2 avant de lire le fichier3
        fs.readFile('./' + data2.toString(), (error, data3) => {
            // On affiche le contenu du fichier3
            console.log(data3.toString())

            // Autre code dépendant du fichier3 ici...
        });
    });
});`;

export default function Page() {
    return <>
        <section>
            <h2>Introduction</h2>
            <p>
                La programmation asynchrone est un style de programmation où le programme n'attends pas
                nécessairement qu'une fonction soit terminé pour continuer d'exécuter le reste de son code. Le
                programme exécutera le code associé à la fonction uniquement lorsque celle-ci aura fini de
                s'exécuter.
            </p>
            <p>
                Ce principe est plus facile à comprendre avec un schémas:
            </p>
            <Image src={async} alt="Schémas synchrone asynchrone" />
            <p>
                Cette façon de programmer à plusieurs avantages, dont celui de ne pratiquement pas gaspiller de
                ressources processeurs puisque certains morceaux de codes peuvent s'exécuter pendant que l'on
                attends la réponse d'autres morceaux de codes. De cette façon, le processeur fait toujours quelque
                chose et reste en attente rarement. Cette façon de faire est donc très bonne pour les serveurs qui
                doivent parfois traiter plusieurs milliers de requêtes simultanément.
            </p>
            <p>
                La programmation asynchrone a toutefois ses inconvénients:
            </p>
            <ul>
                <li>
                    Elle est plus compliquée que la programmation séquentielle à laquelle nous sommes
                    généralement habituée
                </li>
                <li>
                    Elle nécessite un peu plus de traitement pour ses fonctions, ce qui en fait généralement
                    un mauvais choix pour les programmes qui nécessite une performance de traitement à court
                    terme
                </li>
                <li>
                    Elle n'exécute pas toujours les fonctions au moment précis de leur appel et la durée avant
                    leur retour est difficile à prévoir, ce qui est problématique pour les programmes nécessitant
                    une précision en durée d'exécution.
                </li>
            </ul>
            <p>
                Javascript est déjà bâtit pour bien fonctionner avec la programmation asynchrone. Les évènements
                que nous enregistrons dans le DOM (comme le clic sur un bouton) en sont un bon exemple. En effet,
                le code du clic sur un bouton est exécuté uniquement lorsque le navigateur en a le temps, ce qui
                en fait du code asynchrone. Node.js en fait de même avec sa boucle d'évènements asynchrone.
            </p>
        </section>

        <section>
            <h2>Fonctions</h2>
            <p>
                Javascript est un langage de programmation ayant une histoire un peu bizarre. Il a entre autre été
                standardisé très tard dans son histoire pour un langage autant utilisé. Il a aussi été revue et mis
                à jour à plusieurs reprises. Cela en fait un langage à la syntaxe particulière.
            </p>
            <p>
                Bref, il y a plusieurs façon de créer une fonction en Javascript et il est important de les connaître 
                avant de se lancer dans la programmation asynchrone.
            </p>
            <p>
                La fonction classique:
            </p>
            <CodeBlock language="js">{func}</CodeBlock>
            <p>
                La fonction comme variable:
            </p>
            <CodeBlock language="js">{varFunc}</CodeBlock>
            <p>
                La fonction lambda (flèche):
            </p>
            <CodeBlock language="js">{arrowFunc}</CodeBlock>
            <p>
                La fonction de type lambda (flèche) est aujourd'hui beaucoup utilisé. Une de ses particularité est
                que si elle contient une seule instruction, elle retourne automatiquement ce résultat et n'a pas
                besoin d'accolades. Elle possède aussi quelques autres différences, mais il n'est pas nécessaire
                de les connaître pour le moment.
            </p>
        </section>

        <section>
            <h2>Callback</h2>
            <p>
                Le callback est la façon originale de faire de la programmation asynchrone en Javascript. Cette
                façon de faire est de moins en moins utilisé, principalement parce que la manipulation de promesse
                (voir ci-dessous) est aujourd'hui généralement plus facile.
            </p>
            <p>
                Le callback est à première vu simple à utiliser. On passe simplement une fonction en paramètre à
                une autre fonction. Dans le Javascript sur navigateur, ajouter un évènement au DOM se fait par
                callback:
            </p>
            <CodeBlock language="js">{callbackBrowser}</CodeBlock>
            <p>
                Dans Node.js, un bon exemple est la lecture d'un fichier sur votre ordinateur. Puisqu'on ne sait
                pas combien de temps la lecture du fichier va durer (petit fichier = rapide, gros fichier = lent),
                on lui passe un callback pour lui dire quoi faire lorsque la lecture sera terminée:
            </p>
            <CodeBlock language="js">{callbackNode}</CodeBlock>
            <p>
                À première vu, le tout semble assez simple. Nous pouvons toutefois voir certains problèmes si nous
                devons chaîner ce genre d'appel l'un dans l'autre. Ceci causera une indentation importante du code vers
                la droite et deviendra beaucoup plus difficile à lire et comprendre. C'est ce qu'on appelle
                le <strong>Callback Hell</strong>.
            </p>
            <CodeBlock language="js">{callbackIndent}</CodeBlock>
            <p>
                On va donc aujourd'hui prioriser d'autres façons de faire de la programmation asynchrone. C'est ici que 
                le concept de promesse entre en jeu.
            </p>
        </section>
    </>;
}
