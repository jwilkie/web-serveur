import Image from 'next/image'

import internetCable from '@/public/img/internet-cable.png'
import clientServeur from '@/public/img/client-serveur.svg'

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Introduction au web client",
    description: "Présentation du fonctionnement générique du web et de la partie sur laquelle nous nous concentrons cette session, le web client.",
    keywords: ["serveur", "client", "html", "css", "js"],
    group: "notes"
}

export default function Page() {
    return <>
        <section>
            <h2>Introduction</h2>
            <p>
                Qui n&apos;as jamais touché au web de nos jours? C&apos;est une part importante de notre société moderne et de son 
                fonctionnement. Sans le web, nous ne pourrions pas payer avec nos cartes de crédit ou de banque, nous ne 
                pourrions pas facilement communiquer avec nos proches à l&apos;autre bout de la planète, nous serions toujours en 
                train d&apos;acheter des CD et des DVD et, bien entendu, nous ne pourrions pas naviguer sur les sites web.
            </p>
            <p>
                Plusieurs d&apos;entre vous ont toujours vécu avec l&apos;Internet. Cette technologie qui nous as été rendu disponible au 
                milieu des années 1990 est toutefois encore très jeune. Vous ne vous êtes peut-être jamais installé à essayer 
                de comprendre comment le tout fonctionne. Il n&apos;y a toutefois rien de magique.
            </p>
            <p>
                En tant que programmeur, vous vous devez de comprendre comment le web fonctionne. Très peu de logiciels 
                fonctionne aujourd&apos;hui sans aucun accès à l&apos;Internet et vous devrez assurément travailler avec dans votre 
                parcours professionnel. Comme un mécanicient automobile qui se doit de comprendre comment une voiture 
                fonctionne, vous devez faire l&apos;effort de comprendre les rouages et les particuliarités du web.
            </p>
        </section>

        <section>
            <h2>Fonctionnement du web</h2>
            <p>
                Le web fonctionne par une quantité impressionnante de cable qui traverse le globe de notre planète. C&apos;est 
                essentiellement un grand réseau qui rejoint l&apos;ensemble de nos continents et sur lequel on peut envoyer et recevoir 
                des messages.
            </p>
            <Image src={internetCable} alt="Carte des cables Internet du monde sous l'eau" />
            <p>
                Chaque message envoyé sur l&apos;Internet doit suivre un certain format. En effet, pour que la communication puisse 
                se faire adéquatement, celui qui envoie le message et celui qui reçoit le message doivent essentiellement 
                parler la même langue. Dans le cas de nos ordinateurs, ils n&apos;utilisent pas une langue à proprement parlé, mais 
                plutôt un <strong>protocole de communication</strong>. Vous avez peut-être déjà entendu parler de certains 
                d&apos;entre eux, comme le TCP, le UDP, le IP et, celui qui nous intéressera le plus pour le développement web, le 
                HTTP.
            </p>
            <p>
                Mais quant est-il des pages web? C&apos;est l&apos;élément qui nous intéresse pour ce cours et pour bien comprendre son 
                utilisation de l&apos;internet, il faut tout d&apos;abords comprendre ce qu&apos;elles sont. En fait, un site web est un 
                ensemble de fichier de code et médias qui sont exécuté sur votre navigateur pour afficher la page web. On 
                retrouvera donc des fichiers:
            </p>
            <ul>
                <li>
                    <strong>HTML: </strong>
                    Fichier de code pour définir la structure d&apos;une page web.</li>
                <li>
                    <strong>CSS: </strong>
                    Fichier de code pour styler et designer vos pages web.</li>
                <li>
                    <strong>JS: </strong> 
                    Fichier de code pour programmer des comportements à un site web, comme le clique d&apos;un bouton ou la 
                    recherche d&apos;autres information sur le web.
                </li>
                <li>
                    <strong>Images et vidéos: </strong> 
                    Fichier pour afficher des graphiques, des logos, des fonds d&apos;écran et plusieurs autres choses dans le site 
                    web.
                </li>
                <li>
                    <strong>Police de caractères: </strong> 
                    Fichier contenant les informations d&apos;une police de caractère pour être utilisé dans un site web.
                </li>
                <li>
                    Autres: Fichiers JSON, XML, TXT, WASM, etc.
                </li>
            </ul>
            <p>
                Un ensemble de ces fichiers constitue un site web. Ceci étant dit, lorsque vous allez sur un site web, vous 
                devez avoir ces fichiers sur votre ordinateur pour que votre navigateur puisse l&apos;afficher. Comme vous pouvez 
                bien l&apos;imaginer, vous n&apos;avez pas assez de place sur votre ordinateur pour avoir l&apos;ensemble des sites web qui se 
                retrouve sur l&apos;Internet. Nous allons donc chercher ces sites web sur l&apos;Internet en envoyant un message à un 
                serveur.
            </p>
            <Image src={clientServeur} alt="Intéraction entre un client et un serveur" />
            <p>
                Un serveur est généralement un ordinateur qui est propriétaire d&apos;un site web et qui le publie sur l&apos;Internet.
                Quand vous accéder à un site web, vous aller donc demander au serveur propriétaire du site de vous retourner 
                les fichiers du site web. Une fois les fichiers reçu, votre navigateur pourra les exécuter et afficher le site 
                web.
            </p>
        </section>
        <section>
            <h2>Web client</h2>
            <p>
                Dans le jargon du web, un <strong>serveur</strong> est un système qui offre des services, comme par exemple, 
                offrir l&apos;accès à un site web. Dans ce jargon, celui qui fait la demande à un service est appelé 
                un <strong>client</strong>. Bref, lorsque vous aller sur un site web avec votre navigateur, votre ordinateur 
                est le client et le propriétaire du site web est le serveur.
            </p>
            <p>
                Dans ce cours, nous nous concentrons uniquement sur la partie cliente du web, donc uniquement ce qui est 
                exécuté dans votre navigateur. Bref, nous verrons comment créer les différents fichiers d&apos;un site web pour que 
                le navigateur soit en mesure de l&apos;afficher correctement et d&apos;y programmer les bons comportements. Dans ce 
                cours, nous divisons le matériel en 3 sections, soit les 3 langages de programmation de base d&apos;un site web qui 
                sont exécuté par le navigateur:
            </p>
            <ul>
                <li>Le HTML.</li>
                <li>Le CSS.</li>
                <li>Le Javascript.</li>
            </ul>
            <p>
                Dans ce cours, nous ne travaillerons pas avec les serveurs. L&apos;intéraction entre le client et le serveur est 
                beaucoup plus complexe et vous le verrez seulement dans un cours subséquant.
            </p>
        </section>
    </>
}