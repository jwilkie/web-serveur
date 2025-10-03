import Image from 'next/image'

import clientRender from '@/public/img/client-render.png'
import serverRender from '@/public/img/server-render.png'

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Génération de HTML",
    description: "Présentation des différentes techniques de génération de HTML utilisé dans le web au fil du temps.",
    keywords: ["js", "node.js", "template", "ssr", "csr", "rendering", "rendu", "génération", "html", "client", "serveur", "mixte"],
    group: "notes"
}

export default function Page() {
    return <>
        <section>
            <h2>Génération par le client</h2>
            <p>
                La génération du HTML du coté client a été popularisé au début des années 2010 par plusieurs librairies de code 
                clientes dont le but était de réduire la charge de travail des serveurs web en générant le HTML des données 
                directement dans le navigateur web au lieu de sur le serveur comme il était généralement fait avant. En effet, dans 
                le début des années 2010, la majorité des ordinateurs se connectant à l'Internet étaient assez puissant pour 
                effectuer une partie du travail d'affichage et de génération, ce qui était un problème dans le passé.
            </p>
            <p>
                C'est la méthode que nous avons vu jusqu'à présent. Si nous voulons que notre page web affiche certaines données, 
                nous le faisons de la façon suivante:
            </p>
            <ol>
                <li>
                    Le client demande le fichier de la page HTML au serveur.
                </li>
                <li>
                    Le client demande les données au serveur.
                </li>
                <li>
                    Le serveur recherche les données dans la base de données.
                </li>
                <li>
                    Le serveur retourne les données au client.
                </li>
                <li>
                    Le client parcours les données pour les insérer dans son HTML.
                </li>
            </ol>
            <Image src={clientRender} alt="Schémas de rendu côté client" />
            <p>
                Bien que très performante, cette approche a tout de même plusieurs défaut, surtout d'un point de vu utilitaire. 
                En effet, les pages web initialement chargé sont presque toutes vides et sont remplis par la suite, ce qui donne 
                de sérieux mot de têtes aux engins de recherches et aux intelligences artificielles comme Google et ChatGPT qui 
                essayent de lire le contenu des pages pour avoir des recherches efficaces. Cette approche génère aussi beaucoup 
                plus d'appels HTTP sur le web.
            </p>
        </section>

        <section>
            <h2>Génération par le serveur</h2>
            <p>
                Historiquement, lorsque l'on voulait afficher des données dans le HTML, c'est le serveur qui s'occupait de générer 
                un fichier HTML contenant toutes les données et de le retourner au client. Ainsi, le client n'avait qu'à afficher 
                le HTML. Cette technique de génération du HTML sur le serveur a été popularisé par plusieurs technologies, dont le 
                langage PHP, la plateforme ASP.NET ainsi que les Java Server Pages (JSP) vers la fin des années 1990 et au début 
                des années 2000.
            </p>
            <p>
                Le traitement se faisait de la façon suivante:
            </p>
            <ol>
                <li>
                    Le client demande la page avec les données au serveur.
                </li>
                <li>
                    Le serveur va chercher les données dans la base de données.
                </li>
                <li>
                    Le serveur génère le HTML de la page avec les données de la base de données.
                </li>
                <li>
                    Le serveur retourne la page au client.
                </li>
                <li>
                    Le client affiche la page web.
                </li>
            </ol>
            <Image src={serverRender} alt="Schémas de rendu côté serveur" />
            <p>
                Cette approche était vraiment pratique dans ces années puisque les serveurs étaient très puissant, mais la majorité 
                des ordinateurs personnels ne l'était pas. Les sites web étaient aussi très simple. Avec l'approche des sites web 
                super complexe, des réseaux sociaux et des données massives, cette approche était problématique puisque les serveurs 
                devaient faire tout le travail de génération du HTML pour chaque utilisateur, ce qui demandait beaucoup de ressources.
            </p>
        </section>

        <section>
            <h2>Génération mixte</h2>
            <p>
                Depuis les années 2015 environ, il y a un certain retour du balancier et la communauté technologique du web s'entend 
                pour dire qu'une approche mixte est meilleure. Le mixte est très simple à faire. On demande au serveur de générer la 
                première page du site web et par la suite, c'est le client qui se charge de tous les autres changements qu'il 
                pourrait y avoir dans son HTML. Cette méthode a été popularisé plusieurs librairies mixtes client-serveur, tel que 
                React.js avec Next.js, Angular 2+ ainsi que Vue.js. Nous n'utiliserons pas ces librairies dans le cours, mais vous 
                les verrez dans un cours subséquant.
            </p>
            <p>
                Cette approche utilise le meilleur des 2 mondes. Elle bénéficie du côté utilitaire du rendu serveur de HTML avec les 
                performances du rendu client de HTML. Nous essayerons d'utiliser cette approche pour ce cours. Comme nous avons déjà vu comment 
                faire le rendu client de HTML, il ne nous reste qu'à voir comment faire la génération de HTML sur le serveur avec Node.js.
            </p>
        </section>
    </>;
}
