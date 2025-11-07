import CodeBlock from '@/components/CodeBlock'
import IC from '@/components/InlineCode'
import Image from 'next/image'

import proxy from '@/public/img/reverse-proxy.png'
import ColoredBox from '@/components/ColoredBox'

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Utilisation de certificats HTTPS dans Express.js",
    description: "Démonstration de l'utilisation de certificats HTTPS pour sécuriser une application Express.js et des alternatives pour gérer les certificats.",
    keywords: ["node.js", "express", "https", "certificat", "clé publique", "clé privée"],
    group: "notes"
}

const importation = 
`import https from 'node:https';
import { readFile } from 'node:fs/promises';`;

const https = 
`console.log('Serveurs démarré:');
if (process.env.NODE_ENV === 'production') {
    app.listen(process.env.PORT);
    console.log('http://localhost:' + process.env.PORT);
}
else {
    const credentials = {
        key: await readFile('./security/localhost.key'),
        cert: await readFile('./security/localhost.cert')
    }

    https.createServer(credentials, app).listen(process.env.PORT);
    console.log('https://localhost:' + process.env.PORT);
}`;

export default function Page() {
    return <>
        <section>
            <h2>HTTPS et Express.js en développement</h2>
            <p>
                En général, nous n'utiliserons pas Express.js pour gérer directement les connexions HTTPS. Du moins, pas en production. Il 
                y a d'autres solutions plus adaptées pour cela. Toutefois, si nous voulons tester le HTTPS en développement local, nous 
                pouvons quand même le faire. Pour y arriver, nous avons besoin d'un certificat SSL et d'une clé privée que nous avons 
                générés dans les pages précédentes. Maintenant, il nous reste qu'à configurer notre application Express.js.
            </p>
            <p>
                La première étape consiste à importer les modules nécessaires. Nous aurons besoin du module natif <IC>https</IC> de Node.js
                ainsi que du module <IC>fs</IC> pour lire les fichiers de certificat et de clé privée. Vous pourrez ajouter ces importations 
                dans votre fichier principal <IC>server.js</IC>.
            </p>
            <CodeBlock language="js">{importation}</CodeBlock>
            <p>
                Par la suite, en bas du fichier <IC>server.js</IC>, nous allons modifier la ligne de démarrage du serveur. Au lieu de 
                simplement utiliser <IC>app.listen(process.env.PORT)</IC>, nous allons mettre le code suivant:
            </p>
            <CodeBlock language="js">{https}</CodeBlock>
            <p>
                Voici quelques explications sur ce code:
            </p>
            <ul>
                <li>
                    La variable d'environnement <IC>NODE_ENV</IC> est utilisée pour déterminer si nous sommes en mode production ou en mode
                    développement. Par défaut, cette variable est définie en <IC>development</IC> si elle n'est pas spécifiée dans le 
                    fichier <IC>.env</IC>.
                </li>
                <li>
                    Nous vérifions d'abord si nous sommes en mode production ou en mode développement. En mode production, nous laissons
                    le serveur démarrer normalement en HTTP avec <IC>app.listen()</IC> puisque nous utiliserons une autre technique pour 
                    gérer le HTTPS.
                </li>
                <li>
                    En mode développement, nous lisons les fichiers de certificat et de clé privée à l'aide de <IC>readFile()</IC>. Nous 
                    créons ensuite un serveur HTTPS avec <IC>https.createServer()</IC> en lui passant les informations d'identification
                    (certificat et clé) ainsi que notre serveur Express (<IC>app</IC>).
                </li>
            </ul>
        </section>

        <section>
            <h2>HTTPS et Express en production</h2>
            <p>
                En production, on utilisera rarement le HTTP directement dans notre application Express.js. En effet, il est plus courant
                d'utiliser un proxy inverse (reverse proxy) comme Nginx pour gérer les connexions HTTPS. Cette façon de faire est plus 
                facile à gérer, fonctionne très bien avec les services d'infonuagique (cloud) et permet de centraliser la gestion des
                certificats SSL/TLS.
            </p>
            <p>
                La configuration de ce genre d'outil dépasse largement le cadre de ce cours et tombe dans le domaine de l'administration 
                de systèmes informatiques plutôt que dans celui de la programmation. Voici tout de même un exemple de son fonctionnement:
            </p>
            <Image src={proxy} alt="Schémas d'utilisation d'un reverse proxy pour gérer le HTTPS avec un serveur web." />
            <ol>
                <li>
                    Le client (navigateur web) envoie une requête avec le protocole HTTPS au reverse proxy. Le reverse proxy
                    va gérer la connexion sécurisée avec le client. Il va ensuite déballer la requête HTTP de sa couche de 
                    sécurité et l'envoyer au serveur web en HTTP.
                </li>
                <li>
                    Lorsque le serveur web répond à la requête, il envoie la réponse au reverse proxy en HTTP. Le reverse proxy
                    va alors chiffrer la réponse avec HTTPS et l'envoyer au client de manière sécurisée.
                </li>
            </ol>
            <p>
                Le reverse proxy agit donc comme un intermédiaire entre le client et le serveur web, gérant toutes les connexions
                sécurisées.
            </p>
            <ColoredBox title="À noter:">
                Même si les communications entre le reverse proxy et le serveur web ne sont pas chiffrées, celà ne pose
                pas de problèmes s'ils se trouvent sur le même réseau local sécurisé. Le chiffrement est surtout nécessaire pour
                la transition des données sur Internet.
            </ColoredBox>
        </section>
    </>;
}
