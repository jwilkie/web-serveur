import IC from '@/components/InlineCode';
import { WebExample, Code } from '@/components/WebExample';
import ColoredBox from '@/components/ColoredBox';
import OverflowContainer from '@/components/OverflowContainer';

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Medias",
    description: "Présentation des balises de media pour afficher des images, des videos ou utiliser des effets sonores ou musiques.",
    keywords: ["html", "audio", "img", "iframe", "image", "video", "musique", "sonore", "audio"],
    group: "notes"
}

const image = 
`<!-- Une image venant d'un site Web externe -->
<p> Un dinosaur </p>
<img src="https://freesvg.org/img/Dinosaur5.png" alt="Un dinosaur">

<!-- Une image venant de notre dossier /img -->
<p> Un weedle </p>
<img src="/web-client/img/weedle.webp" alt="Un Weedle">`;

const imageCSS = 
`body {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
}

img {
    height: 8rem;
}
    
img:first-of-type {
    grid-area: 2 / 1 / 3 / 2;
}`;

const video =
`<video width="640" height="360" controls>
    <source src="/web-client/assets/ink-video.mp4" type="video/mp4">
</video>`;

const audio =
`<audio controls>
    <source src="/web-client/assets/beat-audio.mp3" type="audio/mp3">
</audio>`;

const youtube = 
`<iframe 
    width="560" 
    height="315" 
    src="https://www.youtube-nocookie.com/embed/sdUUx5FdySs" 
    frameborder="0" 
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen>
</iframe>`;

export default function Page() {
    return <>
        <section>
            <h2>Images</h2>
            <p>
                Les images sont probablement l&apos;élément média le plus vieux et le plus simple que l&apos;on peut mettre dans une page Web.  
                Pour ajouter une image à une pages, nous utiliserons simplement la balise <IC>&lt;img&gt;</IC>. Cette balise est 
                l&apos;une des rares balise à ne pas avoir de balise fermante. Pour spécifier l&apos;image à afficher, nous devons spécifier un 
                attribut <IC>src</IC> qui correspondra à l&apos;URL de l&apos;image.
            </p>
            <p>
                Cet URL peut être un lien vers une image sur le web ou encore un lien relatif pour les images que vous ajouterez dans le 
                dossier <IC>/assets</IC> de votre projet.
            </p>
            <WebExample title="Affichage d'images">
                <Code language="html">{image}</Code>
                <Code language="css" display={false}>{imageCSS}</Code>
            </WebExample>
            <ColoredBox title="Attention: ">
                <p>
                    Vous pouvez constater que les images ont tous un attribut <IC>alt</IC>. Cet attribut indique simplement une description de 
                    ce que l&apos;image affiche. Il est surtout utilisé par les lecteurs de pages Web pour les personnes ayant un handicap visuel 
                    ou encore pour afficher du texte si l&apos;image n&apos;est pas en mesure de se charger.
                </p>
                <p>
                    Vous devez toujours mettre un attribut alt sur une balise <IC>&lt;img&gt;</IC>. Si vous ne le mettez pas, votre HTML sera 
                    invalide.
                </p>
            </ColoredBox>
        </section>

        <section>
            <h2>Video</h2>
            <p>
                La balise <IC>&lt;video&gt;</IC> nous permet d&apos;ajouter une video à notre site web. Elle est beaucoup plus récente que la 
                balise pour les images et, par conséquant, possède des attributs et complexités supplémentaire.
            </p>
            <p>
                Voici comment l&apos;utiliser:
            </p>
            <WebExample title="Affichage de videos">
                <Code language="html">{video}</Code>
            </WebExample>
            <p>
                Voici quelques explications pour son utilisation:
            </p>
            <dl>
                <dt><IC>width</IC></dt>
                <dd>
                    La largeur originale de la video. Si vous le mettez pas, votre page sera moins bien classé par les engins de recherche 
                    comme Google.
                </dd>

                <dt><IC>height</IC></dt>
                <dd>
                    La hauteur originale de la video. Si vous le mettez pas, votre page sera moins bien classé par les engins de recherche 
                    comme Google.
                </dd>
                
                <dt><IC>controls</IC></dt>
                <dd>
                    Indique au navigateur que l&apos;on veut afficher les boutons de contrôle de la vidéo, tel que les boutons pour démarrer et 
                    pauser la vidéo, le bouton pour ajuster le son et le bouton pour mettre en plein écran.
                </dd>
                
                <dt><IC>&lt;source&gt;</IC></dt>
                <dd>
                    Indique la source de la video. Son attribut <IC>src</IC> permet d&apos;indiquer un URL vers la vidéo, de la même façon que la 
                    l&apos;attribut <IC>src</IC> de la balise <IC>&lt;img&gt;</IC>. L&apos;attribut <IC>type</IC> indique le type de la video.
                </dd>
            </dl>
            <p>
                L&apos;élément <IC>&lt;video&gt;</IC> est très complexe à utiliser. Pour plus d&apos;information sur celui-ci, vous pouvez consulter 
                la page suivante:
            </p>
            <p>
                <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video" target="_blank">MDN - &lt;video&gt;: The Video Embed element</a>
            </p>
        </section>

        <section>
            <h2>Audio</h2>
            <p>
                La balise <IC>&lt;audio&gt;</IC> nous permet d&apos;ajouter une séquence audio à notre site web. Elle est sortie en même temps que 
                la balise <IC>&lt;video&gt;</IC> et possède, par conséquant, plusieurs similitude avec celle-ci.
            </p>
            <p>
                Voici comment l&apos;utiliser:
            </p>
            <WebExample title="Utilisation d'audio">
                <Code language="html">{audio}</Code>
            </WebExample>
            <p>
                Voici quelques explications pour son utilisation:
            </p>
            <dl>                
                <dt><IC>controls</IC></dt>
                <dd>
                    Indique au navigateur que l&apos;on veut afficher les boutons de contrôle de l&apos;audio, tel que les boutons pour démarrer et 
                    pauser l&apos;audio et le bouton pour ajuster le son.
                </dd>
                
                <dt><IC>&lt;source&gt;</IC></dt>
                <dd>
                    Indique la source de l&apos;audio. Son attribut <IC>src</IC> permet d&apos;indiquer un URL vers l&apos;audio, de la même façon que la 
                    l&apos;attribut <IC>src</IC> de la balise <IC>&lt;img&gt;</IC>. L&apos;attribut <IC>type</IC> indique le type de l&apos;audio.
                </dd>
            </dl>
            <p>
                L&apos;élément <IC>&lt;audio&gt;</IC> est très complexe à utiliser. Pour plus d&apos;information sur celui-ci, vous pouvez consulter 
                la page suivante:
            </p>
            <p>
                <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio" target="_blank">MDN - &lt;audio&gt;: The Embed Audio element</a>
            </p>
        </section>

        <section>
            <h2>Vidéo externe au site web</h2>
            <p>
                Une des façon les plus facile d&apos;intégrer des vidéos dans notre site Web est de simplement héberger notre vidéo sur un autre 
                site web tel que Youtube, Vimeo ou DailyMotion. Ensuite nous pouvons lier la vidéo à notre site web. Cette façon de faire 
                permet entres autres d&apos;économiser de la mémoire pour la taille de notre site web.
            </p>
            <p>
                Chaque site web d&apos;hébergement de vidéo utilise son propre code pour partager les vidéo. Il faut donc aller lire un peu sur le 
                sujet si vous désirez le faire. Dans le cas de Youtube, pour ajouter une vidéo à notre site web, nous n&apos;avons qu&apos;à nous rendre 
                sur la page de la vidéo, cliquer sur le bouton &quot;Partager&quot;, suivit de &quot;Intégrer&quot;. Vous n&apos;avez plus qu&apos;à 
                copier le code affiché dans votre site Web.
            </p>
            <WebExample title="Vidéo sur Youtube">
                <Code language="html">{youtube}</Code>
            </WebExample>
            <ColoredBox title="Attention: ">
                L&apos;exemple ci-dessus fonctionne pour une vidéo hébergé sur Youtube. Une vidéo hébergé sur un autre site web utilisera très 
                probablement un système différent.
            </ColoredBox>
        </section>

        <section>
            <h2>Type de fichiers</h2>
            <p>
                Voici une liste non exhaustives des types de fichiers multimédias généralement utilisé dans un site Web:
            </p>
            <OverflowContainer>
                <table>
                    <thead>
                        <tr>
                            <th>Fichier d&apos;image</th>
                            <th>Fichier audio</th>
                            <th>Fichier vidéo</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>.jpg</td>
                            <td>.midi</td>
                            <td>.mpeg</td>
                        </tr>
                        <tr>
                            <td>.png</td>
                            <td>.wma</td>
                            <td>.avi</td>
                        </tr>
                        <tr>
                            <td>.gif</td>
                            <td>.wav</td>
                            <td>.wmw</td>
                        </tr>
                        <tr>
                            <td>.webp</td>
                            <td>.ogg</td>
                            <td>.mov</td>
                        </tr>
                        <tr>
                            <td>.svg</td>
                            <td>.mp3</td>
                            <td>.ogg</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>.mp4</td>
                            <td>.webm</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>.mp4</td>
                        </tr>
                    </tbody>
                </table>
            </OverflowContainer>
        </section>
    </>
}