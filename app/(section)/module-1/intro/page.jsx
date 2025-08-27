/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Introduction au web serveur",
    description: "Résumé court et simplifié des composants du web serveur et retour sur la matière vue dans le cours de web client.",
    keywords: ["serveur", "client", "intro"],
    group: "notes"
}

export default function Page() {
    return <>
        <section>
            <h2>Introduction au web serveur</h2>
            <p>
                Le web est beaucoup plus complexe qu'il n'y paraît. Pour fonctionner, il nécessite plusieurs composants qui 
                interagissent ensemble en permanence. Outre une quantité phénoménale de matériel informatique qui servent à déplacer 
                les données, comme les câbles, les routeurs ou les switchs, on va y retrouver deux composantes principales: le 
                serveur et le client. Le client est l'ordinateur que vous utilisez, avec un navigateur, pour vous promener sur le web.
                Lorsqu'on parle de programmation web client, on parle de la programmation qui se fait pour le client, donc de 
                l'interface graphique, de son style et de son comportement. Le serveur, quant à lui, est un ordinateur qui héberge
                des services web et qui répond aux requêtes des clients. Sans lui, le web n'existerait pas puisqu'il est celui qui 
                fournit les données des sites web aux clients.
            </p>
            <p>
                Durant ce cours, nous nous concentrerons sur la programmation du serveur web. Vous verrez que le serveur peut faire 
                beaucoup plus de choses que simplement fournir des pages web. Il peut également gérer des bases de données, effectuer des
                traitements en arrière-plan et interagir avec d'autres services web pour fournir des fonctionnalités avancées, comme 
                l'authentification, le commerce en ligne ou encore le streaming de contenu multimédia.
            </p>
        </section>

        <section>
            <h2>Retour sur le web client</h2>
            <p>
                Pour ce cours, nous supposons que vous connaisez les bases de la programmation web client, c'est à dire que vous êtes 
                capable de construire des interfaces graphiques, de les styler et de programmer certains comportements de base dans 
                celles-ci. L'important n'est pas de connaître par coeur comment tout programmer, mais plutôt de savoir en général 
                comment développer vos applications et comment trouver rapidement et efficacement l'information nécessaire pour 
                votre développement.
            </p>
            <p>
                Si vous n'êtes pas totalement à l'aise avec ce contenu, n'hésitez pas à visiter le site web du cours précédant pour 
                relire la matière et de faire les exercices avec lesquels vous avez de la difficulté. Vous pouvez trouver le site web 
                du cours précédant ici:
            </p>
            <p>
                <a href="https://jwilkie.github.io/web-client/">Web Client</a>
            </p>
        </section>
    </>
}