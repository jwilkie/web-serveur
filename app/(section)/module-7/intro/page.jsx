import IC from '@/components/InlineCode'

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Introduction à la validation",
    description: "Présentation et explication de la validation des données et de leur nécessité pour la sécurité des applications.",
    keywords: ["js", "node.js", "validation", "server", "client"],
    group: "notes"
}

export default function Page() {
    return <>
        <section>
            <h2>Validation de données</h2>
            <p>
                La validation de données est le processus de vérification que les données fournies par un utilisateur ou un système sont
                correctes, complètes et conformes aux attentes avant de les traiter ou de les stocker. La validation est essentielle pour
                garantir les performances, la sécurité, l'intégrité et la fiabilité des applications. Elle permet de prévenir les erreurs, 
                les attaques malveillantes et les comportements inattendus.
            </p>
            <p>
                Au niveau du web, la validation des données sera effectuée 2 fois: une du côté client et une autre du côté serveur. Bien
                que cela semble redondant, chaque type de validation a son importance et il sera primordial de les implémenter toutes les
                deux.
            </p>
        </section>

        <section>
            <h2>Validation serveur</h2>
            <p>
                La validation serveur est probablement la plus importante. Elle permet de s'assurer que toutes les données reçues par le
                serveur sont valides avant de les traiter. Cela empêchera des utilisateurs malveillants ou innatentifs d'envoyer des
                données incorrectes ou corrompues qui pourraient causer des erreurs ou ouvrir des failles de sécurité dans l'application.
            </p>
            <p>
                Une bonne partie de la validation serveur sera effectuée dans le fichier <IC>server.js</IC>, mais nous programmerons 
                certaines fonctions de validation dans d'autres fichiers.
            </p>
        </section>

        <section>
            <h2>Validation cliente</h2>
            <p>
                La validation cliente est effectuée dans le navigateur avant que les données ne soient envoyées au serveur. Elle permet
                d'améliorer l'expérience d'utilisation de notre application en fournissant des messages d'erreur immédiats aux 
                utilisateurs lorsqu'ils saisissent des données incorrectes. Cela réduit également la charge sur le serveur en empêchant
                l'envoi de requêtes inutiles, augmentant ainsi les performances globales de l'application.
            </p>
            <p>
                La validation cliente sera effectuée dans les fichiers JavaScript du côté client, comme <IC>/public/js/page.js</IC>, mais 
                nous programmerons certaines fonctions de validation dans d'autres fichiers.
            </p>
        </section>
    </>;
}
