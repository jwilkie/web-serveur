/*import withContentPage from '../../components/ContentPage';
import { generateSectionStaticPaths, generateStaticProps } from '../../ssr/contentPageFunction';*/

export const metadata = {
    "title": "Test",
    "description": "Une page pour tester le gabarit.",
    "group": "notes",
    "tags": ["gabarit", "test", "lorem ipsum"]
}

export default function Page() {
    return <>
        <section>
            <h2>Titre 1</h2>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt dolorum aliquid ducimus, vitae quidem commodi perspiciatis eaque numquam quo praesentium quia esse, in voluptatem possimus ad itaque neque! Neque, labore!
        </section>
        <section>
            <h2>Titre 2</h2>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt dolorum aliquid ducimus, vitae quidem commodi perspiciatis eaque numquam quo praesentium quia esse, in voluptatem possimus ad itaque neque! Neque, labore!
        </section>
        <section>
            <h2>Titre 3</h2>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt dolorum aliquid ducimus, vitae quidem commodi perspiciatis eaque numquam quo praesentium quia esse, in voluptatem possimus ad itaque neque! Neque, labore!
        </section>
        <section>
            <h2>Titre 4</h2>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt dolorum aliquid ducimus, vitae quidem commodi perspiciatis eaque numquam quo praesentium quia esse, in voluptatem possimus ad itaque neque! Neque, labore!
        </section>
        <section>
            <h2>Titre 5</h2>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt dolorum aliquid ducimus, vitae quidem commodi perspiciatis eaque numquam quo praesentium quia esse, in voluptatem possimus ad itaque neque! Neque, labore!
        </section>
        <section>
            <h2>Titre 6</h2>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt dolorum aliquid ducimus, vitae quidem commodi perspiciatis eaque numquam quo praesentium quia esse, in voluptatem possimus ad itaque neque! Neque, labore!
        </section>
        <section>
            <h2>Titre 7</h2>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt dolorum aliquid ducimus, vitae quidem commodi perspiciatis eaque numquam quo praesentium quia esse, in voluptatem possimus ad itaque neque! Neque, labore!
        </section>
        <section>
            <h2>Titre 8</h2>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt dolorum aliquid ducimus, vitae quidem commodi perspiciatis eaque numquam quo praesentium quia esse, in voluptatem possimus ad itaque neque! Neque, labore!
        </section>
        <section>
            <h2>Titre 9</h2>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt dolorum aliquid ducimus, vitae quidem commodi perspiciatis eaque numquam quo praesentium quia esse, in voluptatem possimus ad itaque neque! Neque, labore!
        </section>
    </>;
}

/*export default withContentPage(Page, metadata);
export const getStaticPaths = generateSectionStaticPaths(__filename);
export const getStaticProps = generateStaticProps(__filename);*/
