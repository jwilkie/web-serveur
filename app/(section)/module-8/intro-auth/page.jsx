import Image from 'next/image';

import authentication from '@/public/img/authentication.png';

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Introduction à l'authentification",
    description: "Présentation du concept d'authentification dans les applications web pour prouver l'identité d'un utilisateur.",
    keywords: ["node.js", "express", "session", "http", "cookies", "authentification", "login", "mot de passe", "sécurité"],
    group: "notes"
}

export default function Page() {
    return <>
        <section>
            <h2>Définition</h2>
            <p>
                L'authentification est un mécanisme par lequel un utilisteur est capable de prouver son identité. Dans un site web, on 
                la voit souvent utilisé avec une adresse courriel et un mot de passe. Toutefois, il existe de nombreuses autres façon de 
                prouver son identité. Par exemple, nos téléphones intelligents aujourd'hui peuvent prouver notre identité à l'aide 
                d'empreintes digitale ou par la morphologie de notre visage. Il existe aussi des méthodes de partage de secret et pleins 
                d'autres techniques ingénieuses pour prouver qu'un utilisteur est bien celui qu'il prétend être. Dans notre cas, nous irons 
                pour l'utilisation du mot de passe. C'est une technique simple à implémenter et bien qu'elle soit moins sécuritaire que 
                d'autres méthodes, elle est encore très répandue.
            </p>
            <p>
                Dans une architecture client-serveur, ce n'est pas le client qui veut savoir si l'utilisateur est le bon, mais le serveur. 
                Comme ça, le serveur pourra contrôler ce que les utilisateurs peuvent ou ne peuvent pas faire. Bref, le serveur veut savoir 
                qui est l'utilisateur qui a fait chaque requête pour contrôler les accès. Il ne serait toutefois vraiment pas pratique que 
                l'utilisateur ait besoin d'envoyer son nom d'utilisateur et mot de passe à chaque requête qu'il fait au serveur. C'est 
                pourquoi nous utiliserons les sessions.
            </p>
        </section>

        <section>
            <h2>Fonctionnement</h2>
            <p>
                Pour ne pas avoir à demander à chaque fois son nom d'utilisateur et mot de passe, un serveur utilisera les sessions. De 
                cette façon, quand l'utilisateur se connectera au site web avec son mot de passe, le serveur ira mettre les informations 
                de l'utilisateur dans sa session. Ainsi, à chaque requête faite par le client, le serveur pourra voir dans sa session 
                s'il est connecté ou non. Il pourra même voir si l'utilisateur a des accès spéciaux ou tout autre droit supplémentaire.
            </p>
            <Image src={authentication} alt="Fonctionnement de l'authentification avec les sessions" />
        </section>

        <section>
            <h2>Sécurité</h2>
            <p>
                Un des problèmes important de l'authentification sur le web est la protection des données confidentielles, comme le mot 
                de passe, lors de l'authentification avec le serveur. La protection du mot de passe se fera de 2 façons différentes:
            </p>
            <ol>
                <li>
                    En utilisant le protocole HTTPS
                    <div>
                        L'utilisation du protocole HTTPS permettra d'encrypter le mot de passe avant de l'envoyer au serveur. Nous ferons 
                        cette étape dans un autre module dans le cours.
                    </div>
                </li>
                <li>
                    En encodant le mot de passe dans la base de données
                    <div>
                        Si la base de données se fait pirater, les mots de passe seront encodé, donc il n'est pas possible de retrouver 
                        leur valeur originale. Nous ferons cette étape un peu plus loin dans ce module.
                    </div>
                </li>
            </ol>
        </section>
    </>;
}
