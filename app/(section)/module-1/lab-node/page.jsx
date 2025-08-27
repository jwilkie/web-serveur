import CodeBlock from '@/components/CodeBlock';
import { DownloadBlock, File } from '@/components/DownloadBlock';

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Laboratoire - Programmation simple avec Node.js",
    description: "Présentation du laboratoire de programmation avec Node.js où l'on doit créer des scripts pour résoudre des problèmes simples.",
    keywords: ["node.js", "js", "javascript"],
    group: "labs"
}

const exerciceFacture =
`  3 @  4,99$ =    14,97$ 
  8 @ 12,29$ =    98,32$ 
121 @  1,37$ =   165,77$ 
  Sous-total =   279,06$ 
       Taxes =    37,67$ (13,5%) 
 Grand-total =   316,73$`;

 const exercicePassword = 
`jwilki:12345 
dude123:JaimeLesChats 
link:zelda 
admin:admin 
plAnt3:s0l3i1`;

 const exerciceFrequence = 
`Chaîne saisie: J'ai reçu un éléphant pour Noël! 
Longueur de la chaîne: 32 
Nombre de caractères alphanumériques: 25 

A: 2/25 =  8,0%  B: 0/25 =  0,0%  C: 1/25 =  4,0%  D: 0/25 =  0,0% 
E: 4/25 = 16,0%  F: 0/25 =  0,0%  G: 0/25 =  0,0%  H: 1/25 =  4,0% 
I: 1/25 =  4,0%  J: 1/25 =  4,0%  K: 0/25 =  0,0%  L: 2/25 =  8,0% 
M: 0/25 =  0,0%  N: 3/25 = 12,0%  O: 2/25 =  8,0%  P: 2/25 =  8,0% 
Q: 0/25 =  0,0%  R: 2/25 =  8,0%  S: 0/25 =  0,0%  T: 1/25 =  4,0% 
U: 3/25 = 12,0%  V: 0/25 =  0,0%  W: 0/25 =  0,0%  X: 0/25 =  0,0% 
Y: 0/25 =  0,0%  Z: 0/25 =  0,0%`;

export default function Page() {
    return <>
        <section>
            <h2>Marche à suivre</h2>
            <p>
                Écrire un programme en Node.js pour chacune des situations suivantes:
            </p>
            <p>
                Exercices de base:
            </p>
            <ol>
                <li>
                    Demandez à l'utilisateur d'entrer un mot de passe. Après, demandez-lui de rerentrer son mot de 
                    passe. Ci celui-ci est différent de l'original, recommencez jusqu'à ce que les 2 soit pareil.
                </li>
                <li>
                    Déterminez si un chiffre entré par l'usager est un nombre premier. Un nombre est premier s'il 
                    et uniquement divisible par 1 et par lui-même.
                </li>
                <li>
                    Demandez à l'utilisateur d'entrer des nombres jusqu'à ce qu'il entre le nombre zéro (0).
                    Affichez la somme, la moyenne, le maximum et le minimum de tous les nombres entrés
                    par l'utilisateur.
                </li>
                <li>
                    Demandez à l'utilisateur d'entrer une phrase. Demandez ensuite à l'utilisateur d'entrer un 
                    mot. Finalement, dans la phrase entrée, remplacez toutes les occurrences du mot entré par des 
                    étoiles (*). Par exemple, dans la phrase « Le mot de passe est secret et ne devrait jamais 
                    passer en texte clair », si on remplace le mot « Passe » par des étoiles, on obtient la phrase 
                    « Le mot de ***** est secret et ne devrait jamais *****r en texte clair ». À la fin du 
                    programme, affichez le nombre de mots qui ont été remplacés.
                </li>
                <li>
                    Demandez à l'utilisateur d'entrer successivement le nombre d'articles achetés ainsi que le 
                    prix unitaire de cet article jusqu'à ce que l'utilisateur entre un nombre d'article nul (0). 
                    À chaque fois qu'un prix est entré, affichez une ligne de facture indiquant le nombre 
                    d'article, son prix unitaire ainsi que le total pour cet article. Demandez ensuite le taux de 
                    taxation à l'utilisateur (ex : 13.5%). Le programme devra finalement afficher le sous-total, 
                    les taxes ainsi que le grand total. Vous devriez avoir une facture semblable à ceci :
                    <CodeBlock language="shell">{ exerciceFacture }</CodeBlock>
                </li>
                <li>
                    Écrire un programme qui demande à l'utilisateur d'entrer une chaîne de caractères et qui 
                    affiche à la console un rapport détaillé de l'analyse de la fréquence de l'occurrence des 
                    caractères alphabétiques qui se trouvent dans cette chaîne. Voici un exemple d'affichage de ce 
                    programme :
                    <CodeBlock language="shell">{ exerciceFrequence }</CodeBlock>
                </li>
            </ol>
            <p>
                Exercices sur les fichiers:
            </p>
            <ol>
                <li>
                    Demandez à l'utilisateur de spécifier un chemin vers un fichier dans la console. Par la suite, 
                    affichez ce fichier comme si c'était du texte à la console.
                </li>
                <li>
                    Créez un programme qui écrit dans un fichier tout ce que l'utilisateur écrit dans la console. 
                    Quand l'utilisateur entre le code « :q » dans la console, le programme se termine.
                </li>
                <li>
                    Demandez l'utilisateur d'entrer un nom d'utilisateur et un mot de passe. Validez si le nom 
                    d'utilisateur et le mot de passe concorde à partir d'un fichier de données contenant ce type 
                    de données. Vous pouvez utiliser le fichier texte ci-dessous pour faire vos tests.
                    <CodeBlock language="shell">{ exercicePassword }</CodeBlock>
                </li>
            </ol>
            <p>
                Exercices sur les modules:
            </p>
            <ol>
                <li>
                    Programmer un algorithme de tri par bulle dans votre propre module pour pouvoir le réutiliser.
                </li>
                <li>
                    Trouvez et affichez tous les nombres premiers entre 2 et 1000. Séparez votre code qui indique si un nombre premier 
                    et le code pour trouver les nombres premiers entre 2 et 1000 dans 2 modules différents.
                </li>
                <li>
                    Créer un programme qui génère 10 séquences aléatoires de 10 lettres. Vous devez ensuite faire taper par l'utilisateur 
                    ces 10 séquences une à une le plus vite possible. Calculez le nombre de millisecondes prise par l'utilisateur pour 
                    taper ces séquences. Vous pouvez utiliser Date.now() qui retourne le nombre de millisecondes depuis le 1 janvier 1970 
                    pour calculer le temps. Sauvegardez le nom et le temps en millisecondes du top 5 des joueurs les plus rapide. Vous 
                    devez afficher ce palmarès à la fin de votre programme. Séparez votre code dans plusieurs modules pour favoriser la 
                    lisibilité.
                </li>
            </ol>
        </section>

        <section>
            <h2>Solution</h2>
            <p>
                Merci à Sébastien Hamon pour sa contribution aux solutions.
            </p>
            <DownloadBlock>
                <File fileName="solution.zip" path="/labs/intro-nodejs-solution.zip">solution.zip</File>
            </DownloadBlock>
        </section>
    </>;
}
