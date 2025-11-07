import Image from 'next/image';

import https from '@/public/img/https.png'

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Protocole HTTPS",
    description: "Présentation du fonctionnement du protocole HTTPS et de son importance pour la sécurité des communications sur le web.",
    keywords: ["https", "sécurité", "protocole", "communications", "certificat", "clé publique", "clé privée", "clé symétrique", "chiffrement", "autorité de certification"],
    group: "notes"
}

export default function Page() {
    return <>
        <section>
            <h2>Introduction</h2>
            <p>
                Le protocole HTTPS est la version sécurisé du protocole HTTP. Le principe du protocole HTTPS est exactement le même que celui 
                du protocole HTTP, à la différence qu'il utilise un chiffrement pour sécuriser les échanges entre le client et le serveur. Ce
                chiffrement est assuré par le protocole SSL/TLS (Secure Sockets Layer / Transport Layer Security) qui lui permet de créer un 
                tunnel sécurisé entre le client et le serveur. L'étude de ces protocoles dépasse grandement le cadre de ce cours, mais si le 
                sujet vous intéresse, je vous invite à faire vos propres recherches.
            </p>
        </section>

        <section>
            <h2>Fonctionnement</h2>
            <p>
                Le fonctionnement du protocole HTTPS est sommairement le suivant:
            </p>
            <ol>
                <li>
                    Le client contacte le serveur en lui fournissant les méthodes de chiffrement qu'il supporte. Typiquement, ces méthodes de 
                    chiffrement sont automatiquement intégrées dans votre navigateur.
                </li>
                <li>
                    Le serveur choisi une des méthode de chiffrement et répond au client en lui retournant un certificat garantissant qu'il 
                    est bien le véritable serveur auquel le client tente de se connecter. Ce certificat est donné par une autorité de 
                    certification de confiance. Un peu comme un notaire. Intégré au certificat, le serveur envoit aussi une clé d'encryption 
                    publique. Cette clé permet d'encrypter des données que seul le serveur peut décrypter avec une clé privée secrète.
                </li>
                <li>
                    Le client valide le certificat reçu auprès d'une autorité de certification. Il s'assure qu'il n'est pas périmé et que 
                    l'autorité de certification le certifie toujours.
                </li>
                <li>
                    Le client génère ensuite une clé aléatoire pour l'encryption symmétrique. Il encrypte cette clé avec la clé publique du 
                    serveur et l'envoie au serveur. Le serveur pourra la décrypter et l'utiliser pour chiffrer les communications suivantes.
                </li>
            </ol>
            <Image src={https} alt="Schéma du fonctionnement du protocole HTTPS" />
            <p>
                Le protocole HTTPS utilise donc à la fois le chiffrement asymétrique (clé publique/clé privée) et le chiffrement symétrique.
                Il utilise le chiffrement asymétrique pour échanger une clé symétrique de manière sécurisée, puis utilise cette clé symétrique
                pour chiffrer les communications entre le client et le serveur de façon rapide et efficace.
            </p>
            <p>
                Le plus intéressant dans tout ça, c'est que tout ce processus est transparent pour l'utilisateur final et même pour le
                développeur web. En effet, le navigateur s'occupe de tout automatiquement. La seule chose que le développeur doit faire,
                c'est de s'assurer que son serveur web est configuré pour utiliser le protocole HTTPS, ce qui implique généralement
                d'obtenir un certificat SSL/TLS auprès d'une autorité de certification reconnue.
            </p>
        </section>
    </>;
}
