/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Introduction à SQLite",
    description: "Présentation de SQLite, une base de données relationnelle légère et intégrée dans les applications.",
    keywords: ["js", "node.js", "sqlite", "base de données", "db", "sql"],
    group: "notes"
}

export default function Page() {
    return <>
        <section>
            <h2>Base de données intégrée</h2>
            <p>
                SQLite est une base de données relationnelle légère très populaire et largement utilisée. Bien qu'elle soit une base de 
                données utilisant le langage SQL, comme MySQL, PostgreSQL, ou SQL Server, SQLite se distingue par son architecture intégrée.
                Essentiellement, au lieu de fonctionner comme un serveur de base de données distinct auquel les applications se connectent,
                SQLite est une librairie qui s'intègre directement dans l'application que nous développons. Cela amène plusieurs avantages,
                mais aussi quelques limitations:
            </p>
            <p>
                Avantages:
            </p>
            <ul>
                <li>
                    Ne nécessite aucune installation ou configuration complexe.
                </li>
                <li>
                    Très performant pour les bases de données de petite taille.
                </li>
                <li>
                    Utilise un seul fichier pour stocker toute la base de données, facilitant la portabilité.
                </li>
            </ul>
            <p>
                Limitations:
            </p>
            <ul>
                <li>
                    Moins adapaté aux applications nécessitant beaucoup d'accès simultanés.
                </li>
                <li>
                    Beaucoup moins performante pour les moyennes et grandes bases de données.
                </li>
                <li>
                    Ne supporte pas certaines fonctionnalités avancées présentes dans d'autres systèmes de gestion de bases de données.
                </li>
            </ul>
            <p>
                Dans ce cours, nous allons utiliser SQLite puisqu'il nous permet d'avoir une base de données fonctionnelle beaucoup 
                plus rapidement et facilement qu'avec un SGBD plus complexe. Il sera aussi plus simple de partager vos projets entre
                vous lorsque vous travaillerez en groupe. Puisque nous n'allons pas créer de très grandes bases de données ou une
                applications web très utilisée, SQLite sera largement suffisant pour nos besoins.
            </p>
            <p>
                Dans tous les cas, il est toujours intéressant de commencer un projet avec SQLite pour le prototyper rapidement,
                puis de migrer vers un SGBD plus robuste si nécessaire, ce qui est souvent le cas pour les applications web qui sont
                beaucoup utilisées.
            </p>
        </section>

        <section>
            <h2>SQL</h2>
            <p>
                SQLite utilise le langage SQL pour gérer et manipuler les données. Dans ce cours, nous supposons que vous avez déjà
                des connaissances de base en SQL. Si ce n'est pas le cas, vous pouvez consultez le matériel suivant pour vous remettre 
                à niveau:
            </p>
            <p>
                <a href="https://ord15990.gitlab.io/notes-de-cours/" target="_blank">
                    Base de données
                </a>
            </p>
            <p>
                Si ce matériel ne vous suffit pas, n'hésitez pas à chercher d'autres ressources en ligne. Il existe de nombreux tutoriels
                et cours gratuits qui couvrent les bases du SQL.
            </p>
        </section>
    </>;
}
