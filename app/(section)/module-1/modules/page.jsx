import IC from '@/components/InlineCode'
import CodeBlock from '@/components/CodeBlock';
import ColoredBox from '@/components/ColoredBox';

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Modules",
    description: "Présentation des modules EcmaScript en JavaScript et de leur fonctionnement avec les mot-clé import et export.",
    keywords: ["js", "import", "export", "es", "ecmascript", "module"],
    group: "notes"
}

const packageJson = 
`{
    "name": "mon-projet",
    "version": "1.0.0",
    "description": "Description du projet",
    "main": "server.js",
    "type": "module",
    ...
}`;

const moduleExport = 
`let variablePrivee = 'Je suis privée';

export const constantePublique = 42;

export let fonctionPublique = () => {
    return variablePrivee
};`;

const moduleExportDifferent = 
`let variablePrivee = 'Je suis privée';

const constantePublique = 42;

let fonctionPublique = () => {
    return variablePrivee
};

export { constantePublique, fonctionPublique }`;

const importModule = 
`import { constantePublique, fonctionPublique } from './module.js';
import { element } from './chemin/autre-module.js'`;

const importModuleDifferent = 
`import { nomDeLaPersonne as prenom } from './fichier.js';`;

const importModuleDefault = 
`import express from 'express';`

const moduleGetSet = 
`// Accesseurs
let nom = '';
let prenom = '';

// Mutateurs
function setNom(nouveauNom) {
    nom = nouveauNom;
}

function setPrenom(nouveauPrenom) {
    prenom = nouveauPrenom;
}

export { nom, prenom, setNom, setPrenom };`;

export default function Page() {
    return <>
        <section>
            <h2>Introduction et historique</h2>
            <p>
                Les modules Javascript sont un moyen d'organiser et de structurer le code en le divisant en dans plusieurs fichiers
                distincts. En Javascript on dira que chaque fichier est un module. Ils nous permettent d'encapsuler le code, de gérer 
                les dépendances et de réutiliser le code plus facilement. Dans ce cours, nous utiliserons les modules ES (EcmaScript),
                qui sont le standard moderne pour les modules en Javascript. Vous avez probablement déjà vu ces modules dans votre cours
                de web client. Ce sont les mêmes avec Node.js.
            </p>
            <p>
                Les modules ES en Javascript moderne, ceux que nous utiliserons dans ce cours, sont relativement récents. Bien que le standard 
                existe depuis 2015, il a fallu plusieurs années avant que Node.js l'implémente complètement dans son système, un peu après l'an 
                2020. Avant eux, il y avait d'autres systèmes de modules, comme CommonJS et les modules closures, qui étaient largement utilisés.
            </p>
            <ColoredBox title="Attention:">
                N'utilisez jamais les vieux modules, comme CommonJS ou closures, dans vos projets. Bien que fonctionnel, nous nous devons de 
                privilégier les standards modernes pour assurer la pérennité de notre code. Tout code utilisant les vieux systèmes de modules 
                sera hautement pénalisé.
            </ColoredBox>
        </section>

        <section>
            <h2>Fonctionnement</h2>        
            <p>
                Un module est un fichier Javascript où l'on peut contrôler ce que l'on partage avec les autres fichiers. Ils nous permettent 
                d'écrire du code privée et de n'exposer que ce qui est nécessaire. Cela nous permet de mieux organiser notre code et de le 
                rendre plus facile à maintenir.
            </p>
            <p>
                Créer un module est simple. Vous en utilisez déjà sans le savoir. Chaque fichier Javascript que vous créez dans un projet 
                Node.js est automatiquement un module. Il faut simplement indiquer à Node.js que vous désirez utiliser les modules ES, ce 
                que vous avez probablement déjà fait dans votre projet en ajoutant la ligne <IC>"type": "module"</IC> dans le 
                fichier <IC>package.json</IC>.
            </p>
            <CodeBlock language="json">{ packageJson }</CodeBlock>
        </section>

        <section>
            <h2>Exportation</h2>
            <p>
                Par défaut, toutes les variables, fonctions et classes déclarées dans un module sont privées et ne peuvent pas être 
                accédées depuis d'autres modules. Pour partager des éléments entre les modules, vous devez les exporter explicitement.
                Pour ce faire, nous utiliserons le mot-clé <IC>export</IC>.
            </p>
            <CodeBlock language="js">{ moduleExport }</CodeBlock>
            <p>
                Vous pouvez aussi regrouper les exportations à la fin du fichier de la façon suivante:
            </p>
            <CodeBlock language="js">{ moduleExportDifferent }</CodeBlock>
        </section>

        <section>
            <h2>Importation</h2>
            <p>
                Pour accéder à un élément partagé avec <IC>export</IC> d'un autre module, vous devez utiliser le mot-clé <IC>import</IC>.
                L'importation d'élément venant de nos propres fichiers se fait de façon similaire à celle des modules de Node.js ou de 
                librairie externe. Vous devez simplement indiquer le chemin relatif vers le fichier du module après le <IC>from</IC>.
            </p>
            <CodeBlock language="js">{ importModule }</CodeBlock>
            <p>
                Il peut arriver que 2 modules possèdes des éléments ayant le même nom. Pour éviter les conflits, vous pouvez importer un
                élément sous un nom différent en utilisant la syntaxe suivante:
            </p>
            <CodeBlock language="js">{ importModuleDifferent }</CodeBlock>
            <p>
                Dans certain cas, des librairies de code peuvent utiliser une exportation spéciale que l'on nomme l'exportation par défaut.
                Pour pouvoir importer ces éléments, on le fera sans les accolades, de la façon suivante:
            </p>
            <CodeBlock language="js">{ importModuleDefault }</CodeBlock>
        </section>

        <section>
            <h2>Conception de modules</h2>
            <p>
                Bien que les modules permettent d'exporter des variables, celle-ci ne peuvent généralement pas être modifiées à l'extérieur 
                du module. En effet, ces variables deviennent constantes à l'extérieur du fichier. Pour régler ce problème, nous utiliserons
                un concept de programmation orienté objet, soit les accesseurs et mutateurs (getters et setters). Voici un exemple:
            </p>
            <CodeBlock language="js">{ moduleGetSet }</CodeBlock>
            <p>
                Ce patron de module est très commun et nous l'utiliserons souvent dans ce cours.
            </p>
        </section>
    </>;
}
