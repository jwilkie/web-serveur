import IC from '@/components/InlineCode';
import { WebExample, Code } from '@/components/WebExample';
import ColoredBox from '@/components/ColoredBox';

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Formulaire",
    description: "Présentation de la balise form qui englobe un formulaire et permet de le soumettre.",
    keywords: ["html", "form", "fieldset"],
    group: "notes"
}

const form = 
`<form>
    <p>Prénom:</p> 
    <input type="text"> 
    <p>Nom:</p> 
    <input type="text"> 
    <p>Courriel:</p> 
    <input type="email"> 
    <p>Commentaires:</p> 
    <textarea cols="40" rows="8"></textarea> 

    <p><input type="submit" value="Soumettre"></p>
</form>`;

const label =
`<form>
    <label> 
        Courriel: 
        <input type="email"> 
    </label>

    <p><label for="mot-de-passe">Mot de passe:</label></p>
    <input type="password" id="mot-de-passe"> 

    <p><input type="submit" value="Soumettre"></p>
</form>`;

const fieldset = 
`<form>
    <fieldset>
        <legend>Données personnelles</legend>
        <p><label for="prenom">Prénom:</label></p> 
        <input type="text" id="prenom"> 
        <p><label for="nom">Nom:</label></p> 
        <input type="text" id="nom"> 
    </fieldset>
    
    <fieldset>
        <legend>Contact</legend>
        <p><label for="courriel">Courriel:</label></p> 
        <input type="email" id="courriel"> 
        <p><label for="postal">Code postal:</label></p> 
        <input type="text" id="postal"> 
        <p><label for="adresse">Adresse:</label></p> 
        <input type="text" id="adresse"> 
    </fieldset>

    <p><input type="submit" value="Soumettre"></p>
</form>`;

export default function Page() {
    return <>
        <section>
            <h2>Balise de formulaire</h2>
            <p>
                En règle générale, si vous avez plus d&apos;un input dans une section de votre site web, c&apos;est que vous avez besoin d&apos;un 
                formulaire. Un formulaire se distingue généralement par quelques balises d&apos;entrées, tel que 
                des <IC>&lt;input&gt;</IC>, <IC>&lt;textarea&gt;</IC> ou <IC>&lt;select&gt;</IC>, suivie par un bouton de soumission 
                qui permet d&apos;envoyer les données. Pour des raisons de sémantique et de fonctionnalité de Javascript, on entourera 
                toujours un formulaire d&apos;une balise <IC>&lt;form&gt;</IC>
            </p>
            <p>
                On utilise la balise <IC>&lt;form&gt;</IC> de la façon suivante:
            </p>
            <WebExample title="Zone de texte">
                <Code language="html">{form}</Code>
            </WebExample>
            <ColoredBox title="À noter">
                Portez une attention particulière au dernier élément dans le formulaire, le bouton de soumission. Chaque formulaire doit
                obligatoirement avoir un bouton de soumission, à moins d&apos;avoir un mécanisme de soumission différent que l&apos;on programmera 
                en Javascript.
            </ColoredBox>
        </section>

        <section>
            <h2>Libellé</h2>
            <p>
                Il est bonne pratique en HTML de mettre le texte expliquant ce qu&apos;il doit y avoir dans un champ d&apos;entré dans une 
                balise <IC>&lt;label&gt;</IC>. La balise <IC>&lt;label&gt;</IC> permet de lier le texte et le champ d&apos;entrée, ce qui 
                le rend plus accessible pour les personnes utilisant un lecteur d&apos;écran ou pour les personnes ayant de la difficulté à 
                utiliser une souris d&apos;ordinateur.
            </p>
            <p>
                La balise <IC>&lt;label&gt;</IC> peut s&apos;utiliser de 2 façons différentes, soit en incorporant le champ à lier au texte 
                à l&apos;intérieur de la balise ou en utilisant l&apos;attribut <IC>for</IC> avec un <IC>id</IC> de champ. Voici une démonstration 
                de ces deux méthodes:
            </p>
            <WebExample title="Zone de texte">
                <Code language="html">{label}</Code>
            </WebExample>
            <ColoredBox title="Attention: ">
                Essayer de cliquer sur le texte qui se trouve dans le <IC>&lt;label&gt;</IC>. Si lors de votre clic, le champ qui est 
                lié au texte se met en surbrillance, vous avez bien fait la liaison. Assurez-vous toujours que votre texte est bien lié 
                au <IC>&lt;input&gt;</IC>, <IC>&lt;textarea&gt;</IC> ou <IC>&lt;select&gt;</IC>.
            </ColoredBox>
            <ColoredBox title="Attention">
                <p>
                    Vous noterez probablement que l&apos;on utilise une quantité phénoménale de balise <IC>&lt;p&gt;</IC> dans les formulaires 
                    en exemple dans ce module. Ce n&apos;est pas normal. Habituellement, il ne devrait pas y avoir de paragraphe autour 
                    des <IC>&lt;label&gt;</IC> ou autour des boutons de soumission. Nous le faisons ici pour forcer des retours de ligne.
                </p>
                <p>
                    Puisque nous n&apos;avons pas encore vu comment utiliser le CSS pour styler nos formulaires, nous devons nous résoudre
                    à utiliser des techniques moins optimales pour contrôler notre affichage pour le moment et éviter que les exemples 
                    deviennent illisible. Nous nous débarasserons complètement de ces paragraphes lorsque nous verrons comment contrôler 
                    le tout en CSS dans les prochains modules.
                </p>
            </ColoredBox>
        </section>
        
        <section>
            <h2>Groupe d&apos;inputs</h2>
            <p>
                Il est possible de regrouper des inputs ou des contrôles dans des sections du formulaire. C&apos;est une façon intéressante 
                d&apos;organiser vos éléments si le formulaire est plus gros. Pour se faire, nous utiliserons la 
                balise <IC>&lt;fieldset&gt;</IC> à l&apos;intérieur du formulaire pour spécifier un groupe et la 
                balise <IC>&lt;legend&gt;</IC> pour donner un nom au groupe à l&apos;intérieur de la balise <IC>&lt;fieldset&gt;</IC>. 
            </p>
            <p>
                Voici comment utiliser ces balises:
            </p>
            <WebExample title="Zone de texte">
                <Code language="html">{fieldset}</Code>
            </WebExample>
            <ColoredBox title="Attention: ">
                La balise <IC>&lt;legend&gt;</IC> doit impérativement être la première balise à l&apos;intérieur de la 
                balise <IC>&lt;fieldset&gt;</IC> pour que votre HTML soit valide.
            </ColoredBox>
        </section>
    </>
}