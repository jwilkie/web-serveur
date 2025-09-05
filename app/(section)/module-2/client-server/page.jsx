import Image from 'next/image'

import clientServer from '@/public/img/client-server.svg'

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Architecture client-serveur",
    description: "Présentation du modèle de fonctionnement de l'Internet à travers l'architecture client-serveur.",
    keywords: ["client", "serveur", "backend", "frontend", "internet", "navigateur"],
    group: "notes"
}

export default function Page() {
    return <>
        <section>
            <h2>Modèle</h2>
            <p>
                Le modèle client-serveur est une architecture d'application où les serveurs offrent des ressources ou services et 
                répondent à des requêtes provenant de clients. Ce modèle est la principale architecture utilisée sur l'Internet 
                navigable.
            </p>
            <Image src={clientServer} alt="Schémas de l'architecture client-serveur simplifié" />
            <p>
                Sur Internet, les clients sont généralement des navigateurs Web. Chrome, Firefox, Safari et Edge sont donc tous des 
                clients qui vont envoyer des requêtes à des serveurs pour accéder à:
            </p>
            <ul>
                <li>
                    des ressources (fichiers HTML, CSS, Javascript, images, vidéos, etc.)
                </li>
                <li>
                    des services (bases de données, jeux vidéos, applications, etc.)
                </li>
            </ul>
        </section>

        <section>
            <h2>Fonctionnement</h2>
            <p>
                Dans une architecture client-serveur, le principe du serveur est d'être toujours à l'écoute, mais de ne faire presque 
                rien tant qu'il ne reçoit pas de requête. Il est donc toujours prêt à recevoir une requête et à l'exécuter.
            </p>
            <p>
                Le client, quant à lui, est généralement une application qui a besoin d'aller chercher de l'information ou d'envoyer 
                des données qui pourront potentiellement être partagées par d'autres application. Le client enverra donc des requêtes 
                au serveur.
            </p>
            <p>
                La communication se fait donc uniquement dans un sens: le client envoie des requêtes au serveur. Le serveur n'enverra 
                jamais d'information aux clients si ceux-ci ne l'ont pas demandé par une requête.
            </p>
        </section>

        <section>
            <h2>Site web</h2>
            <p>
                Dans votre premier cours de programmation web, vous avez programmé des ressources qui peuvent être utilisé par les 
                clients (navigateur web) pour afficher des pages web. Dans un cas réel, les fichiers HTML, CSS et Javascript que 
                vous avez programmé sont en fait hébergés sur un serveur. Dès qu'un navigateur en fait la requête, ces fichiers lui 
                sont renvoyés par le serveur pour qu'il puisse afficher le site web. On voit donc ici un principe très typique 
                client-serveur. Le client demande de l'information (fichiers) au serveur et celui-ci lui retourne les données 
                demandées. Les fichiers sont mis sur un serveur pour qu'ils puissent être facilement partagés. Dans ce cas-ci, on 
                veut que notre site web soit disponible sur l'Internet, donc partagé.
            </p>
            <p>
                La création de fichier HTML, CSS et Javascript est appelé la programmation web client puisque, même si les fichiers 
                sont envoyé par un serveur, ils sont en fait exécuté dans le navigateur web, donc sur le client. La seule chose que 
                le serveur fait ici, c'est envoyer les fichiers au client.
            </p>
            <p>
                Dans ce cours de programmation web, nous nous concentrerons sur la partie serveur du schémas ci-dessus. Les serveurs 
                web de base servent uniquement à retourner des fichiers, mais nous en ferons des beaucoup plus complexes qui pourront 
                partager des données, vérifier des droits d'accès ou se connecter à des services externes. Nous utiliserons Node.js 
                avec la librairie de code Express.js pour créer ces serveurs.
            </p>
            <p>
                À la fin de ce cours, vous serez donc en mesure de créer une application web complète, du client jusqu'au serveur.
            </p>
        </section>
    </>
}