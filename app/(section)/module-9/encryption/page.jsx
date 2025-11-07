/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Type de chiffrement",
    description: "Présentation des 2 grandes catégories de chiffrement, soit le chiffrement symétrique et asymétrique.",
    keywords: ["chiffrement", "encryption", "symmetrique", "asymmetrique", "cle publique", "cle privee", "cryptographie"],
    group: "notes"
}

export default function Page() {
    return <>
        <section>
            <h2>Introduction</h2>
            <p>
                Le chiffrement est une technique qui permet de sécuriser les données en les rendant illisibles pour toute personne non 
                autorisée à y accéder. Il consiste à transformer les données originales, que l'on appelle le <strong>texte en clair</strong>,
                en un format codé, appelé <strong>texte chiffré</strong>. Pour ce faire, on utilise des algorithmes de chiffrement qui 
                reposent sur des clés de chiffrement. Ces clés sont des séquences de caractères qui servent à chiffrer et déchiffrer les 
                données.
            </p>
            <p>
                Il existe deux grandes catégories de chiffrement:
            </p>
            <ul>
                <li>
                    Le chiffrement symétrique
                </li>
                <li>
                    Le chiffrement asymétrique
                </li>
            </ul>
            <p>
                Dans cette page, nous allons explorer ces deux types de chiffrement, en mettant en évidence leurs différences, leurs avantages
                ainsi que leurs inconvénients.
            </p>
        </section>

        <section>
            <h2>Chiffrement symétrique</h2>
            <p>
                Le chiffrement est un type d'algorithme qui utilise une même clé pour chiffrer et déchiffrer les données. Cela signifie que
                la même clé doit être partagée entre la personne qui envoie les données et celle qui les reçoit. Les algorithmes de chiffrement
                symétrique sont généralement très rapides et efficaces. Ils sont donc souvent utilisés pour chiffrer de grandes quantités de
                données.
            </p>
            <p>
                Avantages:
            </p>
            <ul>
                <li>
                    Il est très rapide
                </li>
                <li>
                    Il est efficace pour chiffrer de grandes quantités de données
                </li>
            </ul>
            <p>
                Inconvénient:
            </p>
            <ul>
                <li>
                    La clé doit être partagée entre l'expéditeur et le destinataire, ce qui peut poser des problèmes de sécurité si la clé 
                    est interceptée par un tiers malveillant.
                </li>
            </ul>
        </section>

        <section>
            <h2>Chiffrement asymétrique</h2>
            <p>
                Le chiffrement asymétrique, utilise une paire de clés distinctes pour fonctionner. Les deux clés sont appelées 
                la <strong>clé publique</strong> et la <strong>clé privée</strong>. Les 2 clés sont différentes et pourront être utilisées 
                pour chiffrer ou déchiffrer les données. Si on encrypte les données avec l'une des clés, nous devons utiliser l'autre clé pour
                les décrypter. C'est pourquoi nous allons partager l'une des clés (la clé publique) et nous allons garder l'autre clé (la clé
                privée) secrète. Le chiffrement asymétrique est complexe et plus lent que le chiffrement symétrique. Il est donc moins 
                pratique pour chiffrer de grandes quantités de données. Il offre cependant une meilleure sécurité pour l'échange de clés.
            </p>
            <p>
                Avantages:
            </p>
            <ul>
                <li>
                    La clé publique peut être partagée librement, ce qui facilite l'échange sécurisé de données.
                </li>
            </ul>
            <p>
                Inconvénients:
            </p>
            <ul>
                <li>
                    Il est plus lent.
                </li>
                <li>
                    Il n'est pas adapté pour chiffrer de grandes quantités de données.
                </li>
                <li>
                    Les algorithmes de chiffrement asymétrique sont plus complexes à mettre en œuvre.
                </li>
            </ul>
        </section>
    </>;
}
