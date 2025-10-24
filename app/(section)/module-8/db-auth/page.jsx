import Image from 'next/image';
import IC from '@/components/InlineCode'
import CodeBlock from '@/components/CodeBlock';
import { File, FileExplorer, Folder } from '@/components/FileExplorer';

import dbUser from '@/public/img/db-user.png'

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Table de données pour l'authentification",
    description: "Présentation de la modélisation des données gérérique pour l'authentification des utilisateurs dans une application.",
    keywords: ["node.js", "express", "db", "sqlite", "user", "email", "courriel", "mot de passe", "password", "authentification"],
    group: "notes"
}

const db =
`// ...

if(IS_NEW) {
    await db.exec(
        \`CREATE TABLE utilisateur(
            id_utilisateur INTEGER PRIMARY KEY,
            courriel TEXT NOT NULL UNIQUE,
            mot_de_passe TEXT NOT NULL,
            niveau_acces INTEGER DEFAULT 1
        );\`
    );
}

export { db }`;

const addUser =
`export async function addUtilisateur(courriel, motDePasse) {
    let motDePasseEncrypte = await bcrypt.hash(motDePasse, 10);

    await db.run(
        \`INSERT INTO utilisateur(courriel, mot_de_passe)
        VALUES (?, ?);\`,
        [courriel, motDePasseEncrypte]
    )
}`;

const getUser =
`export async function getUtilisateurById(idUtilisateur) {
    const utilisateur = await db.get(
        \`SELECT id_utilisateur, courriel, mot_de_passe, niveau_acces 
        FROM utilisateur
        WHERE id_utilisateur = ?;\`,
        [idUtilisateur]
    );

    return utilisateur;
}`;

const getUserEmail =
`export async function getUtilisateurByCourriel(courriel) {
    const utilisateur = await db.get(
        \`SELECT id_utilisateur, courriel, mot_de_passe, niveau_acces 
        FROM utilisateur
        WHERE courriel = ?;\`,
        [courriel]
    );

    return utilisateur;
}`;


export default function Page() {
    return <>
        <section>
            <h2>Modèle de données</h2>
            <p>
                Pour avoir une authentification simple par mot de passe, nous avons besoin d'au moins 2 données à sauvegarder pour nos
                utilisateurs:
            </p>
            <ol>
                <li>
                    Un identifiant
                    <div>
                        Ce sera souvent un nom d'utilisateur unique ou encore une adresse courriel.
                    </div>
                </li>
                <li>
                    Un mot de passe
                    <div>
                        Un texte secret que seul l'utilisateur connaît. L'utilisateur prouve son identité en fournissant ce mot de passe.
                    </div>
                </li>
            </ol>
            <p>
                Ces 2 champs sont essentiels pour l'authentification de base par mot de passe. Il est toutefois aussi fréquent de voir 
                d'autres champs, comme la date de dernière connexion, le niveau d'accès de l'utilisateur et autres informations 
                personnelles utiles pour une application web.
            </p>
        </section>

        <section>
            <h2>Table de données</h2>
            <p>
                Dans ce cours, nous utilisons une base de données SQL relationnelle avec SQLite. Nous voulons donc stocker les données de 
                nos utilisateurs dans une table de cette base de données. Nous allons donc créer une table nommée <IC>utilisateur</IC> qui
                pourrait ressembler à ceci:
            </p>
            <Image src={dbUser} alt="Table de données d'une classe utilisateur" />
            <p>
                Voici quelques petits détails à noter:
            </p>
            <ul>
                <li>
                    Il est techniquement possible de mettre la clé primaire sur le courriel unique et ainsi supprimer le 
                    champ <IC>id_utilisateur</IC>. Ceci dit, l'identifiant numérique est souvent plus performant lors de l'utilisation de
                    la vérification des droits d'accès dans une application. On va donc le conserver ici.
                </li>
                <li>
                    Il est possible de changer le champ du courriel par un champ du genre <IC>nom_utilisateur</IC>. Tant que le nom 
                    d'utilisateur est unique, ça fonctionnera très bien.
                </li>
                <li>
                    Le mot de passe ne sera jamais stocké en texte clair. On va toujours le chiffrer pour garantir qu'il ne puisse pas
                    être connu par une personne qui aurait accès à la base de données. Dans notre cas, nous chiffrons le mot de passe avec 
                    la librairie de hachage <IC>bcrypt</IC>. Un mot de passe haché avec <IC>bcrypt</IC> prendra toujours 60 caractères. Si 
                    votre base de données le permet, spécifiez la taille du champ pour optimiser la mémoire.
                </li>
                <li>
                    Le niveau d'accès est un champ optionnel qui permet de différencier les types d'utilisateurs. Par exemple, un niveau
                    d'accès de 1 pourrait être un utilisateur régulier, tandis qu'un niveau d'accès de 5 pourrait être un administrateur.
                    Ce champ peut être relié à une autre table indiquant le nom de chaque niveau d'accès. Ça peut être une bonne pratique 
                    pour augmenter la compréhension de nos données.
                </li>
            </ul>
            <p>
                Si vous utilisez SQLite, le code suivant dans un fichier <IC>/db/db.js</IC> pourra créer la table utilisateur ci-dessus:
            </p>
            <CodeBlock language="js">{db}</CodeBlock>
        </section>

        <section>
            <h2>Requête de données</h2>
            <p>
                Pour fonctionner correctement, notre authentification aura besoin d'au moins 3 requêtes SQL différentes. Nous allons donc
                créer un fichier de modèle de données pour la table utilisateur qui contiendra ces requêtes. Ce fichier se nommera 
                <IC>/model/utilisateur.js</IC>.
            </p>
            <FileExplorer>
                <Folder name="db" />
                <Folder name="middleware" />
                <Folder name="model">
                    <File name="utilisateur.js" highlight />
                </Folder>
                <Folder name="public" />
                <Folder name="views" />
                <File name="..." />
            </FileExplorer>
            <p>
                Pour le bon fonctionnement de ce fichier, n'oubliez pas d'importer votre connecteur à la base de données. Vous devriez donc 
                avoir cette instruction en haut de votre fichier:
            </p>
            <CodeBlock language="js">{`import { db } from '../db/db.js'`}</CodeBlock>
            <p>
                Pour ce qui est des 3 requêtes à programmer, elles sont relativement simples. Nous devrons avoir:
            </p>
            <ol>
                <li>Une requête pour créer un utilisateur</li>
                <li>Une requête pour chercher un utilisateur par son identifiant</li>
                <li>Une requête pour chercher un utilisateur par son courriel</li>
            </ol>
        </section>

        <section>
            <h2>Requête pour créer un utilisateur</h2>
            <p>
                Cette requête nous permettra de créer un utilisateur, par exemple lorsqu'un compte est créé sur notre site web au travers 
                d'une page d'inscription.
            </p>
            <CodeBlock language="js">{addUser}</CodeBlock>
            <p>
                Voici quelques détails à noter à propos de cette requête:
            </p>
            <ul>
                <li>
                    Vous noterez ici l'utilisation de <IC>bcrypt</IC> pour encrypter le mot de passe dans la base de données. Assurez-vous 
                    donc d'importer la librairie de code dans votre fichier pour qu'il fonctionne correctement.
                    <CodeBlock language="js">{`import bcrypt from 'bcrypt'`}</CodeBlock>
                </li>
                <li>
                    On n'insère pas de valeur pour le champ <IC>niveau_acces</IC>. C'est parce que nous avons défini une valeur par défaut
                    de <IC>1</IC> lors de la création de la table. Bref, si on ne spécifie pas de valeur pour ce champ, SQLite va
                    automatiquement lui attribuer la valeur <IC>1</IC>.
                </li>
            </ul>
        </section>

        <section>
            <h2>Requête pour chercher un utilisateur par son identifiant</h2>
            <p>
                L'identifiant de l'utilisateur est sa clé primaire. Nous irons donc chercher l'utilisateur par son <IC>id_utilisateur</IC>. 
                Nous n'utiliserons pas directement cette requête, mais nous programmerons <IC>passport</IC> pour qu'il l'utilise lorsqu'il 
                veut chercher un utilisateur et qu'il connait déjà son identifiant.
            </p>
            <CodeBlock language="js">{getUser}</CodeBlock>
        </section>

        <section>
            <h2>Requête pour chercher un utilisateur par son courriel</h2>
            <p>
                Cette requête nous permettra de chercher un utilisateur par son courriel, ce qui sera utilisé lors de la connexion d'un 
                utilisateur. Lorsque l'utilisateur fournit son courriel et son mot de passe, nous devons d'abord chercher l'utilisateur par 
                son courriel pour ensuite vérifier si le mot de passe fourni correspond au mot de passe dans la base de données.
            </p>
            <CodeBlock language="js">{getUserEmail}</CodeBlock>
        </section>
    </>;
}
