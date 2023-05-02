/*import withContentPage from '../../../components/ContentPage';
import { generateSectionStaticPaths, generateStaticProps } from '../../../ssr/contentPageFunction';*/

export const metadata = {
    "title": "Laboratoire 1",
    "description": "Laboratoire sur l'utilisation des composants de base de ce gabarit.",
    "group": "labs",
    "tags": ["gabarit", "apprentissage"]
}

export default function Page() {
    return <>
        <section>
            <h2>Liste</h2>
            <ol>
                <li>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. In repellat reprehenderit obcaecati repellendus, quam incidunt nam molestias cum rerum, modi accusamus numquam cumque odio rem nesciunt illo. Cum, quod temporibus?
                </li>
                <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex doloribus quos eius! Vero tempore maiores amet ducimus expedita officia aut dolorum deleniti sint error! Dignissimos accusantium nesciunt sint assumenda eos.
                    <ol>
                        <li>
                            Test 2.1
                            <ul>
                                <li>Allo</li>
                                <li>Bonjour</li>
                                <li>Salut</li>
                            </ul>
                        </li>
                        <li>Test 2.2</li>
                        <li>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur porro rem officiis adipisci aut pariatur, quas quae animi, culpa possimus consequuntur, a non eos error perferendis nobis voluptas modi atque.
                        </li>
                    </ol>
                </li>
                <li>Test 3</li>
                <li>Test 4</li>
            </ol>
        </section>

        <section>
            <h2>Tableau</h2>
            <div className="overflow-protection">
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic deserunt, impedit aperiam ipsam delectus adipisci voluptate maxime velit, alias eum a rerum harum dolore quae animi doloribus quas libero nostrum?
                </p>
                <table>
                    <thead>
                        <tr>
                            <th>Nom</th><th>Prenom</th><th>Date</th><th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Wilkie</td>
                            <td>Jonathan</td>
                            <td>2005-12-05</td>
                            <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis labore, voluptatibus tenetur atque ut eligendi vel architecto quo, nihil rem obcaecati. Incidunt eveniet vero exercitationem laboriosam illo error? Est, excepturi.</td>
                        </tr>
                        <tr>
                            <td>Wilkie</td>
                            <td>UnTresGrandNomPourForcerUnOverflow</td>
                            <td>2022-06-01</td>
                            <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum tempore, hic ullam impedit culpa dicta aliquid saepe ipsam, quos ratione, eius optio dolorem nostrum excepturi similique molestiae. Eligendi, autem fugit.</td>
                        </tr>
                        <tr>
                            <td>Wilkie</td>
                            <td>Jonathan</td>
                            <td>2024-01-01</td>
                            <td>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum aliquam ea voluptate eius quo doloribus earum veniam doloremque quisquam dolorum enim quidem tempora, ex minima sit aspernatur quis ducimus harum.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    </>;
}

/*export default withContentPage(Page, metadata);
export const getStaticPaths = generateSectionStaticPaths(__filename);
export const getStaticProps = generateStaticProps(__filename);*/
