import Image from 'next/image'

import sse from '@/public/img/sse.svg'

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Server Sent Events (SSE)",
    description: "Présentation des Server Sent Events (SSE) pour permettre la communication bidirectionnelle entre le serveur et le client dans les applications web.",
    keywords: ["request", "response", "http", "sse", "server sent events", "bidirectionnel", "temps réel"],
    group: "notes"
}

export default function Page() {
    return <>
        <section>
            <h2>Introduction</h2>
            <p>
                Jusqu'à présent, lorsque nous avons des communications entre le client et le serveur, le serveur répond 
                uniquement aux requêtes du client. Le serveur ne peut pas envoyer d'informations à un client sans avoir reçu au 
                préalable une requête. C'est l'une des limites de base du protocole HTTP original et de l'architecture 
                client-serveur. Cette limite restreint les possibilités d'interaction entre le client et le serveur, en 
                particulier si nous voulons que le serveur puisse envoyer des mises à jour en temps réel au client. 
            </p>
            <p>
                Heureusement, depuis plusieurs années, le protocole HTTP offre une fonctionnalité appelée 
                les <strong>Server Sent Events (SSE)</strong> qui permet au serveur d'envoyer des données du serveur vers le
                client en temps réel, sans que le client ait nécessairement à faire une requête préalable.
            </p>
            <p>
                Voici leur fonctionnement:
            </p>
            <ol>
                <li>
                    Le client ouvre un canal de communication avec le serveur.
                </li>
                <li>
                    Tant que le canal de communication est ouvert, le serveur peut envoyer des évènements (des données) sur 
                    ce canal.
                </li>
                <li>
                    Le client peut réagir aux données qui arrive sur le canal en temps réel.
                </li>
                <li>
                    À n'importe quel moment, le client ou le serveur peut fermer le canal de communication.
                </li>
            </ol>
            <Image src={sse} alt="Schéma de fonctionnement des Server Sent Events (SSE)" />
        </section>

        <section>
            <h2>SEE et Express</h2>
            <p>
                Le standard SSE est particulier dans sa façon d'envoyer les données. Ces données doivent suivre un format 
                précis pour que le client puisse les interpréter correctement. Dans le cadre du cours, nous ne verrons pas en 
                détail ce format. Nous utiliserons plutôt un middleware Express qui nous permettra de facilement formatter et 
                envoyer des évènements SSE aux clients.
            </p>
        </section>
    </>;
}
