import IC from '@/components/InlineCode'
import { DownloadBlock, File } from '@/components/DownloadBlock'

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Laboratoire - La bibliothèque avec authentification",
    description: "Présentation du laboratoire de la bibliothèque où l'on mettra en place l'authentification des utilisateurs.",
    keywords: ["bibliothèque", "authentification", "session", "cookie", "passport"],
    group: "labs"
}

export default function Page() {
    return <>
        <section>
            <h2>Marche à suivre</h2>
            <p>
                Ce laboratoire est une extension du laboratoire de la <a href="/module-7/lab-book/">bibliothèque avec validation</a>. 
                Je vous suggère toutefois fortement d'utiliser le projet distribué ci-dessous comme projet de départ puisqu'il contient 
                déjà la structure de la base de données et quelques autres ajustements.
            </p>
            <ol>
                <li>
                    Prendre connaissance de la structure de la table des utilisateurs dans le fichier <IC>/db/db.js</IC>. Une entrée est déjà
                    ajoutée pour un utilisateur administrateur avec le courriel <IC>admin@admin.com</IC> et le mot de passe <IC>test1234</IC>.
                </li>
                <li>
                    Programmer les fonctions nécessaires pour créer un nouvel utilisateur, pour aller chercher un utilisateur par son 
                    courriel et pour aller chercher un utilisateur par son identifiant numérique.
                </li>
                <li>
                    Ajouter les librairies nécessaires et les configurer dans le projet pour permettre l'authentification des utilisateurs
                    avec des sessions et passport. 
                </li>
                <li>
                    Programmer les routes nécessaires pour permettre aux utilisateurs de s'inscrire, de se connecter et de se déconnecter.
                    Assurez-vous de bien valider les informations fournies par le client à l'aide de middlewares. Des middlewares existent 
                    déjà dans le projet pour valider les informations d'inscription et de connexion.
                </li>
                <li>
                    Créer une page de connexion et une page d'inscription pour permettre aux utilisateurs de se connecter et de s'inscrire.
                    Assurez-vous que leurs routes correspondent à celles définies dans les liens du menu de navigation.
                </li>
                <li>
                    Programmer les fichiers Javascript côté client nécessaires pour gérer l'inscription, la connexion et la déconnexion des
                    utilisateurs.
                </li>
                <li>
                    Si un utilisateur n'est pas connecté, il aura uniquement accès à la page d'inscription et à la page de connexion. Il n'a 
                    donc pas accès à la page d'accueil. Protéger donc les routes concernées en conséquence avec un middleware.
                </li>
                <li>
                    Si un utilisateur est connecté, il ne pourra pas accéder aux pages d'inscription et de connexion. De plus, il ne peut pas 
                    ajouter, modifier ou supprimer des livres dans la bibliothèque. Protéger donc les routes concernées en conséquence avec un
                    middleware. 
                </li>
                <li>
                    Seul un utilisateur administrateur peut ajouter, modifier ou supprimer des livres dans la bibliothèque. Assurez-vous donc de 
                    protéger les routes concernées avec un middleware. Vous devez aussi modifier l'interface utilisateur pour cacher les boutons
                    si l'utilisateur n'est pas administrateur. De façon similaire, les différents champs du formulaire (sauf la liste déroulante) 
                    doivent être en <IC>readonly</IC> si l'utilisateur n'est pas administrateur.
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
                <File fileName="distribué.zip" path="/labs/auth-book-distribué.zip">distribué.zip</File>
                <File fileName="solution.zip" path="/labs/auth-book-solution.zip">solution.zip</File>
            </DownloadBlock>
        </section>
    </>
}
