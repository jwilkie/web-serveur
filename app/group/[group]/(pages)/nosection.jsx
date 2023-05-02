//import { generateGroupStaticPaths, generateStaticProps } from "../../../ssr/contentPageFunction";

export const metadata = {
    "title": "No section",
    "description": "Une page de test qui n'est dans aucune section.",
    "group": "random",
    "tags": ["test", "lorem", "ipsum"]
}

export default function NoSection() {
    return <>
        <h2>Une page qui n&apos;est pas dans une section</h2>
        <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque magni dolorum non recusandae odit, aliquid deleniti inventore aperiam fuga ea distinctio modi autem, placeat error, numquam perferendis temporibus dolores eligendi.
        </p>
    </>;
}

/*export const getStaticPaths = generateGroupStaticPaths(metadata);
export const getStaticProps = generateStaticProps(__filename);*/