import CodeBlock from '@/components/CodeBlock';
import ColoredBox from '@/components/ColoredBox';
import IC from '@/components/InlineCode'

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Certificat et autorité de certification",
    description: "Présentation des certificats numériques et des autorités de certification avec une démonstration de création de certificat auto-signé avec OpenSSL.",
    keywords: ["certificat", "autorité", "openssl", "cryptographie", "git"],
    group: "notes"
}

const openssl = 
`C:\\"Program Files"\\Git\\usr\\bin\\openssl.exe req -x509 -nodes -sha256 -days 3650 -subj "/CN=localhost" -addext "subjectAltName = DNS:localhost" -newkey rsa:2048 -keyout "./security/localhost.key" -out "./security/localhost.cert"`;

export default function Page() {
    return <>
        <section>
            <h2>Obtention d'un certificat SSL/TLS</h2>
            <p>
                Comme vu précédemment, pour qu'un serveur puisse utiliser le protocole HTTPS, il doit posséder un certificat SSL/TLS. 
                L'obtention de ce certificat se fait généralement par l'intermédiaire d'une autorité de certification. Ces autorités de
                certification sont essentiellement des notaires du web. Elles émettent des certificats numériques qui garantissent l'identité 
                d'un site web. Pour obtenir un certificat auprès d'une autorité de certification, le propriétaire du site web doit généralement
                prouver son identité et acheter le certificat. Ce processus coûte donc de l'argent, ce qui n'est pas très pratique lors du 
                développement. Si chaque programmeur d'une application web devait acheter un certificat, ça reviendrait très cher!
            </p>
            <p>
                Heureusement, il est possible de créer des certificats auto-signés pour le développement et les tests en local. Un certificat 
                auto-signé est un certificat qui n'est pas émis par une autorité de certification reconnue, mais qui remplit quand même son
                rôle de chiffrement des communications. Cependant, les navigateurs web n'accordent pas de confiance aux certificats
                auto-signés. On pourra donc les utiliser, mais on recevra des avertissements de sécurité par vos navigateurs.
            </p>
            <ColoredBox title="À noter:">
                Il n'est vraiment pas nécessaire d'utiliser un certificat SSL/TLS pour le développement local. Vous pouvez très bien 
                développer et tester vos applications web en HTTP. L'utilisation de HTTPS en développement local est surtout utile si 
                vous voulez tester des fonctionnalités spécifiques qui nécessitent absolument le HTTPS, ce qui est rare. En effet, de 
                nombreuses fonctionnalités nécessitant le HTTPS ont des exceptions pour fonctionner correctement en HTTP lors du développement
                local. 
            </ColoredBox>
            <ColoredBox title="À noter:">
                Il est rare de contacter une autorité de certification directement. En général, lors de l'achat d'un nom de domaine ou lors 
                de la location d'un hébergement web, le fournisseur propose souvent des certificats SSL/TLS avec ses services.
            </ColoredBox>
        </section>

        <section>
            <h2>Création d'un certificat auto-signé avec OpenSSL</h2>
            <p>
                OpenSSL est une suite cryptographique à code source ouvert qui fournit des outils pour la gestion des certificats SSL/TLS, 
                la génération de clés de chiffrement, et bien plus encore. On l'utilise souvent pour créer des certificats auto-signés, ce 
                que nous allons voir ici.
            </p>
            <p>
                L'installation d'OpenSSL peut être un peu problématique selon votre système d'exploitation. Sur Linux et macOS, OpenSSL est
                généralement déjà installé. Toutefois, sur Windows, il faut souvent l'installer manuellement. Il existe de nombreuses fausses
                versions d'OpenSSL pour Windows en ligne, donc trouver une version fiable peut être compliqué. Pour éviter ces problèmes, je
                vous recommande donc d'utiliser la version de OpenSSL qui est intégrée à Git pour Windows. Vous devriez tous avoir Git 
                d'installé sur votre ordinateur à ce point-ci de votre apprentissage. Si ce n'est pas le cas, vous vous devez de l'installer
                immédiatement.
            </p>
            <p>
                <a href="https://git-scm.com/install/windows" target="_blank">Install Git</a>
            </p>
            <p>
                Une fois installé, vous pouvez trouver l'exécutable de OpenSSL dans le dossier suivant:
            </p>
            <CodeBlock language="terminal">C:\"Program Files"\Git\usr\bin\openssl.exe</CodeBlock>
            <p>
                Pour générer un certificat auto-signé avec OpenSSL, ouvrez votre projet dans votre éditeur de code et suivez les étapes
                suivantes:
            </p>
            <ol>
                <li>
                    Créer un dossier nommé <IC>security</IC> à la racine de votre projet.
                </li>
                <li>
                    Dans un terminal dans votre projet, exécuter la commande ci-dessous pour générer votre certificat. Sur Mac OS et Linux, 
                    vous pouvez simplement remplacer le <IC>C:\"Program Files"\Git\usr\bin\openssl.exe</IC> par <IC>openssl</IC>.
                </li>
                <CodeBlock language="terminal">{openssl}</CodeBlock>
            </ol>
            <p>
                À la fin de ce processus, vous devriez avoir deux nouveaux fichiers dans le dossier <IC>security</IC>: un fichier de clé
                privée nommé <IC>localhost.key</IC> et un fichier de certificat contenant la clé publique nommé <IC>localhost.cert</IC>.
                Nous pourrons utiliser ces fichiers pour configurer un serveur HTTPS localement avec Node.js et Express.js.
            </p>
        </section>

        <section>
            <h2>Sécurité de la clé privée</h2>
            <p>
                Pour le bon fonctionnement du protocole HTTPS, il est crucial de garder la clé privée secrète. Si quelqu'un
                parvient à accéder à votre clé privée, il pourrait potentiellement intercepter et déchiffrer les 
                communications. Dans le pire des cas, un attaquant pourrait même usurper l'identité de votre serveur, ce qui 
                compromettrait gravement la sécurité de vos utilisateurs.
            </p>
            <p>
                Vous devez donc faire très attention au fichier de clé privée (<IC>localhost.key</IC> dans notre cas). Ne le 
                partagez jamais publiquement, ne le commitez pas dans un dépôt Git public, et assurez-vous qu'il est stocké 
                dans un endroit sûr.
            </p>
            <p>
                Pour vous assurez de ne pas commiter accidentellement votre clé privée dans un dépôt Git, vous pouvez ajouter
                une ligne dans votre fichier <IC>.gitignore</IC> à la racine de votre projet:
            </p>
            <CodeBlock language=".gitignore">/security</CodeBlock>
        </section>
    </>;
}
