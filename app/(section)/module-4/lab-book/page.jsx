import IC from '@/components/InlineCode'
import { DownloadBlock, File } from '@/components/DownloadBlock'

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Laboratoire - La bibliothèque avec interface",
    description: "Présentation du laboratoire de la bibliothèque où l'on doit créer une interface utilisateur connectée au serveur gérant les données de la bibliothèque.",
    keywords: ["bibliothèque", "livres", "interface", "html", "css", "javascript", "fetch", "api"],
    group: "labs"
}

export default function Page() {
    return <>
        <section>
            <h2>Marche à suivre</h2>
            <p>
                Ce laboratoire est une extension du laboratoire de la <a href="/module-3/lab-book/">bibliothèque</a>. Vous pouvez
                utiliser votre solution de ce laboratoire ou le projet distribué ci-dessous comme projet de départ.
            </p>
            <p>
                À partir du projet distribué ci-dessous, programmer les fonctions incomplètes du fichier <IC>/public/js/book.js</IC> pour 
                que toutes les fonctionnalités de l'interface graphique soient opérationnelles. Voici les fonctions à compléter:
            </p>
            <ol>
                <li>
                    <IC>getBooksServer()</IC>: Récupère la liste des ISBNs et titres de livres depuis le serveur et les ajoutent à la 
                    liste déroulante <IC>select</IC>. Vouc pouvez utiliser la fonction <IC>addBookClient()</IC> pour ajouter les
                    livres à la liste déroulante.
                </li>
                <li>
                    <IC>getBookServer()</IC>: Récupère les détails d'un livre par son ISBN depsuis le serveur et remplit les champs 
                    du formulaire avec les informations reçues. Vous pouvez trouver l'ISBN du livre sélectionné avec le code 
                    <IC>listBooks.value</IC>. Pour les champs du formulaire, vous pouvez y accéder 
                    avec <IC>formBooks.isbn</IC>, <IC>formBooks.title</IC>, <IC>formBooks.nbPages</IC>, etc.
                </li>
                <li>
                    <IC>addBookServer()</IC>: Envoie les informations du formulaire au serveur pour ajouter un nouveau livre. Vous
                    pouvez trouver les informations du formulaire avec le code <IC>formBooks.isbn.value</IC>, 
                    <IC>formBooks.title.value</IC>, <IC>formBooks.nbPages.value</IC>, etc. Après avoir ajouté le livre, vous
                    pouvez appeler <IC>addBookClient()</IC> pour mettre à jour la liste des livres.
                </li>
                <li>
                    <IC>updateBookServer()</IC>: Envoie les informations du formulaire au serveur pour mettre à jour un livre
                    existant. Vous pouvez trouver les informations du formulaire avec le code <IC>formBooks.isbn.value</IC>, 
                    <IC>formBooks.title.value</IC>, <IC>formBooks.nbPages.value</IC>, etc. Le ISBN original est <IC>listBooks.value</IC>. 
                    Après avoir mis à jour le livre, vous devrez mettre à jour le <IC>&lt;option&gt;</IC> correspondant dans la liste 
                    déroulante avec le nouveau titre et ISBN. 
                </li>
                <li>
                    <IC>deleteBookServer()</IC>: Envoie une requête au serveur pour supprimer le livre sélectionné. Vous pouvez
                    trouver le ISBN du livre sélectionné avec le code <IC>listBooks.value</IC>. Après avoir supprimé le livre, vous 
                    devez supprimer le <IC>&lt;option&gt;</IC> correspondant dans la liste déroulante et vider le formulaire.
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
                <File fileName="distribué.zip" path="/labs/interface-book-distribué.zip">distribué.zip</File>
                <File fileName="solution.zip" path="/labs/interface-book-solution.zip">solution.zip</File>
            </DownloadBlock>
        </section>
    </>
}
