import IC from '@/components/InlineCode'
import { DownloadBlock, File } from '@/components/DownloadBlock'

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Laboratoire - La liste de tâches avec authentification",
    description: "Présentation du laboratoire de la liste de tâches où l'on mettra en place l'authentification des utilisateurs.",
    keywords: ["liste", "tâches", "authentification", "session", "cookie", "passport"],
    group: "labs"
}

export default function Page() {
    return <>
        <section>
            <h2>Marche à suivre</h2>
            <p>
                Ce laboratoire est une extension du laboratoire de la <a href="/module-7/lab-todo/">liste de tâches avec validation</a>. 
                Vous pouvez utiliser votre solution de ce laboratoire ou le projet distribué ci-dessous comme projet de départ.
            </p>
            <ol>
                <li>
                    Ajouter une table de données pour les utilisateurs dans la base de données SQLite. Cette table devra contenir
                    au moins un identifiant unique pour chaque utilisateur (courriel ou nom d'utilisateur) et un mot de passe haché.
                    Assurez-vous aussi d'y ajouter un identifiant numérique auto-incrémenté comme clé primaire.
                </li>
                <li>
                    Programmer les fonctions nécessaires pour créer un nouvel utilisateur, pour aller chercher un utilisateur par son 
                    identifiant unique (courriel ou nom d'utilisateur) et pour aller chercher un utilisateur par son identifiant numérique.
                </li>
                <li>
                    Ajouter les librairies nécessaires et les configurer dans le projet pour permettre l'authentification des utilisateurs
                    avec des sessions et passport. 
                </li>
                <li>
                    Programmer les routes nécessaires pour permettre aux utilisateurs de s'inscrire, de se connecter et de se déconnecter.
                    Assurez-vous de bien valider les informations fournies par le client à l'aide de middlewares.
                </li>
                <li>
                    Créer une page de connexion et une page d'inscription pour permettre aux utilisateurs de se connecter et de s'inscrire.
                    Ajouter aussi un menu de navigation pour permettre aux utilisateurs de naviguer entre les différentes pages du site et
                    de se déconnecter.
                </li>
                <li>
                    Programmer les fichiers Javascript côté client nécessaires pour gérer l'inscription, la connexion et la déconnexion des
                    utilisateurs.
                </li>
                <li>
                    On veut que seuls les utilisateurs connectés puissent ajouter des tâches dans la liste de tâches. Assurez-vous de 
                    protéger la route d'ajout de tâche avec un middleware qui vérifie si l'utilisateur est bien authentifié. Vous pouvez
                    aussi utiliser ce middleware pour la déconnexion.
                </li>
                <li>
                    On veut que les puissent accéder à la connexion et à l'inscription seulement s'ils ne sont pas déjà connectés. 
                    Assurez-vous de protéger les routes de connexion et d'inscription avec un middleware qui vérifie si l'utilisateur
                    n'est pas déjà authentifié. De façon similaire, protéger les routes des pages de connexion et d'inscription avec un  
                    middleware qui redirige les utilisateurs connectés vers la page principale de la liste de tâches.
                </li>
                <li>
                    À l'aide de Handlebars, cacher les liens de connexion et d'inscription dans le menu de navigation si l'utilisateur
                    est déjà connecté. Cacher aussi le lien de déconnexion si l'utilisateur n'est pas connecté. Vous devez aussi désactiver
                    le formulaire d'ajout de tâche si l'utilisateur n'est pas connecté. Assurez-vous que ces modifications ne causent pas 
                    d'erreurs dans la console du navigateur.
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
                <File fileName="distribué.zip" path="/labs/auth-todo-distribué.zip">distribué.zip</File>
                <File fileName="solution.zip" path="/labs/auth-todo-solution.zip">solution.zip</File>
            </DownloadBlock>
        </section>
    </>
}
