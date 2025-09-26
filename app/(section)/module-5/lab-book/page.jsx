import IC from '@/components/InlineCode'
import { DownloadBlock, File } from '@/components/DownloadBlock'
import Image from 'next/image'

import book from '@/public/img/book.drawio.png'

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Laboratoire - La bibliothèque avec base de données",
    description: "Présentation du laboratoire de la bibliothèque où l'on changera la gestion des données pour utiliser une base de données.",
    keywords: ["bibliothèque", "livres", "sqlite", "base de données", "db", "sql", "tables"],
    group: "labs"
}

export default function Page() {
    return <>
        <section>
            <h2>Marche à suivre</h2>
            <p>
                Ce laboratoire est une extension du laboratoire de la <a href="/module-4/lab-book/">bibliothèque avec interface</a>. 
                Je vous suggère toutefois fortement d'utiliser le projet distribué ci-dessous comme projet de départ puisqu'il contient
                déjà la structure de la base de données et quelques autres ajustements.
            </p>
            <ol>
                <li>
                    Prendre connaissance de la structure de la base de données dans le fichier <IC>/db/db.js</IC>. Vous pouvez aussi
                    voir le schémas de la base de données ci-dessous:
                    <Image src={book} alt="Schéma de la base de données de la bibliothèque" />
                </li>
                <li>
                    Dans le fichier <IC>/model/book.js</IC>, programmer la fonction <IC>getAllISBNAndTitle</IC> qui doit retourner
                    un tableau d'objets contenant seulement le <IC>isbn</IC> et le <IC>title</IC> de chaque livre dans la base de
                    données.
                </li>
                <li>
                    Dans le fichier <IC>/model/book.js</IC>, programmer la fonction <IC>deleteBook()</IC> qui doit supprimer un livre
                    de la base de données en fonction de son <IC>isbn</IC>. Vous devez aussi vous assurer que les entrées dans les 
                    tables de jointure <IC>book_author</IC> et <IC>book_category</IC> sont également supprimées.
                </li>
                <li>
                    Dans le fichier <IC>/model/author.js</IC>, programmer la fonction <IC>getAuthorByISBN()</IC>. Cette fonction doit
                    retourner un tableau de chaine de caractères contenant les noms des auteurs pour le ISBN d'un livre donné.
                    Attention à bien retourner les données dans le bon format.
                </li>
                <li>
                    Dans le fichier <IC>/model/author.js</IC>, programmer la fonction <IC>getOrAddAuthor()</IC>. Cette fonction doit 
                    regarder si le nom d'un auteur donné existe déjà dans la table <IC>author</IC>. Si c'est le cas, on retournera 
                    son <IC>id_author</IC>. Autrement, on ajoutera l'auteur dans la table et on retournera le 
                    nouvel <IC>id_author</IC> de l'auteur ajouté.
                </li>
                <li>
                    Dans le fichier <IC>/model/category.js</IC>, programmer la fonction <IC>getCategoriesByISBN()</IC>. Cette fonction 
                    doit retourner un tableau de chaine de caractères contenant les noms des catégories pour le ISBN d'un livre donné.
                    Attention à bien retourner les données dans le bon format. La fonction est très similaire à la 
                    fonction <IC>getAuthorByISBN()</IC> du fichier <IC>/model/author.js</IC>.
                </li>
                <li>
                    Dans le fichier <IC>/model/category.js</IC>, programmer la fonction <IC>getOrAddCategory()</IC>. Cette fonction doit 
                    regarder si le nom d'une catégorie donnée existe déjà dans la table <IC>category</IC>. Si c'est le cas, on retournera 
                    son <IC>id_category</IC>. Autrement, on ajoutera la catégorie dans la table et on retournera le 
                    nouvel <IC>id_category</IC> de la catégorie ajoutée. La fonction est très similaire à la 
                    fonction <IC>getOrAddAuthor()</IC> du fichier <IC>/model/author.js</IC>.
                </li>
                <li>
                    Dans le fichier <IC>/model/book.js</IC>, programmer la fonction <IC>addBook()</IC> qui doit ajouter un livre 
                    reçu en paramètre dans la base de données. Pour les données d'auteurs et de catégories, vous pouvez utiliser les
                    fonctions <IC>addAuthors()</IC> et <IC>addCategories()</IC> qui sont fonctionnelles si vous avez bien fait les 
                    fonctions <IC>getOrAddAuthor()</IC> et <IC>getOrAddCategory()</IC>.
                </li>
                <li>
                    Dans le fichier <IC>/model/book.js</IC>, programmer la fonction <IC>modifyBook()</IC> qui doit mettre à jour les
                    informations d'un livre dans la base de données. Je vous recommande de supprimer le livre et de le réajouter pour 
                    simplifier le travail. Vous pouvez utiliser les fonctions déjà présentes pour vous aider.
                </li>
            </ol>
        </section>
        
        <section>
            <h2>Distribué et solution</h2>
            <p>
                Avant de pouvoir lancer le projet distribué ou la solution, n'oubliez pas de faire un <IC>npm i</IC> sur le projet 
                au préalable pour qu'il télécharge les paquets nécessaires.
            </p>
            <DownloadBlock>
                <File fileName="distribué.zip" path="/labs/db-book-distribué.zip">distribué.zip</File>
                <File fileName="solution.zip" path="/labs/db-book-solution.zip">solution.zip</File>
            </DownloadBlock>
        </section>
    </>
}
