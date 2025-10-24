import Image from 'next/image';
import ColoredBox from '@/components/ColoredBox';

import session from '@/public/img/session.png'

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Introduction aux sessions",
    description: "Présentation des sessions avec le protocole HTTP et Express.js.",
    keywords: ["node.js", "express", "session", "http", "cookies"],
    group: "notes"
}

export default function Page() {
    return <>
        <section>
            <h2>Concept</h2>
            <p>
                Un des problèmes majeurs du protocole HTTP est qu'il ne garde aucune information entre les différentes
                requêtes et réponses. Chaque requête est indépendante et le serveur ne sait pas si elle provient d'un 
                client en particulier ou si elle est la première requête de ce client. Pour pallier à ce problème, on 
                utilise les sessions. 
            </p>
            <p>
                Une session est un moyen de sauvegarder des informations de façon temporaire pour chaque connexion 
                courante à notre application web. Essentiellement, chaque client qui communique à votre serveur a un 
                espace mémoire pour y stocker des données sur le serveur. Si le client n'intéragit pas avec le 
                serveur pendant un certain temps, ces données sont automatiquement supprimé pour faire de la place 
                sur le serveur.
            </p>
            <p>
                Cette pratique est donc très utile pour les services de connexion, pour les applications utilisant
                beaucoup de communication en temps réel, pour amasser de l'information sur des utilisateurs ou
                simplement pour enregistrer des données temporaires pour chaque utilisateur.
            </p>
        </section>

        <section>
            <h2>Fonctionnement</h2>
            <p>
                Pour que le serveur puisse identifier chaque client, il doit y avoir un moyen de faire le lien entre
                une requête et un client. Pour ce faire, on utilise un identifiant unique pour chaque client. Cet 
                identifiant pourra être généré par le serveur et transférer entre le client et le serveur à chaque
                requête et réponse HTTP.
            </p>
            <p>
                Il existe plusieurs façon de transférer l'identifiant du client dans les requêtes et les réponses HTTP. 
                L'approche que nous allons utiliser dans ce cours est d'utiliser un petit espace mémoire, que vous avez 
                assurément déjà entendu parler, que l'on appelle le <strong>cookie</strong>. Un cookie permettra au serveur de 
                sauvegarder des données qui seront copiées et envoyées automatiquement dans chaque requête et réponse HTTP. 
            </p>
            <p>
                Un des problèmes du cookie est qu'il n'est pas possible de sauvegarder beaucoup d'information à l'intérieur.
                C'est dû au fait que l'on ne veut pas que les requêtes et réponses HTTP deviennent trop volumineuses.
                Puisque nous n'avons pas beaucoup d'espace, le serveur sauvegardera typiquement uniquement l'identifiant du
                client dans le cookie.
            </p>
            <Image src={session} alt="Fonctionnement des sessions sur un serveur web" />
            <p>
                Puisque le serveur garde des informations sur chaque connexion, la base de données peut rapidement devenir 
                très volumineuse. Pour régler ce problème, au bout d'un certain temps, le serveur va vouloir supprimer les 
                données de connexion qui n'ont pas été utilisé depuis un certain temps, ce qu'il fera automatiquement.
            </p>
            <ColoredBox title="Attention:">
                <p>
                    L'utilisation de session avec des cookies est aujourd'hui régit par plusieurs lois strictes dans
                    plusieurs pays. En effet, il est aujourd'hui demandé aux sites web d'avoir l'accord de leurs
                    utilisateurs pour utiliser les cookies. Ces règles ont été créé après que de nombreuses entreprises,
                    comme Amazon et Facebook, commencent à utiliser les cookies pour amasser de l'information sur des
                    utilisateurs dans le but de la vendre à d'autres partie.
                </p>
                <p>
                    Bref, si vous voulez utiliser les sessions, vous utilisez des cookies. Vous devez donc ajouter une
                    façon d'avertir vos utilisateurs que vous utilisez des cookies. Si les cookies sont essentiels, vous 
                    pouvez généralement simplement les avertir que le site web utilise obligatoirement les cookies, mais
                    pour les sites web plus complexes, on peut demander aux utilisateurs de choisir les types de cookies
                    qu'ils souhaitent accepter.
                </p>
                <p>
                    Pour en apprendre d'avantage, voici la loi qui régit les cookies au Canada:
                </p>
                <p>
                    <a href="https://crtc.gc.ca/fra/internet/anti.htm" target="_blank"  rel="noopener noreferrer">
                        La Loi canadienne anti-pourriel
                    </a>
                </p>
            </ColoredBox>
        </section>
    </>;
}
