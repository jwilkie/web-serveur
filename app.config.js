import vs from 'react-syntax-highlighter/dist/cjs/styles/prism/vs'
import vsdark from 'react-syntax-highlighter/dist/cjs/styles/prism/vsc-dark-plus'
import html from 'react-syntax-highlighter/dist/cjs/languages/prism/markup'
import css from 'react-syntax-highlighter/dist/cjs/languages/prism/css'
import js from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript'
import json from 'react-syntax-highlighter/dist/cjs/languages/prism/json'
import terminal from 'react-syntax-highlighter/dist/cjs/languages/prism/bash'
import handlebars from 'react-syntax-highlighter/dist/cjs/languages/prism/handlebars'
import env from 'react-syntax-highlighter/dist/cjs/languages/prism/properties'
import sql from 'react-syntax-highlighter/dist/cjs/languages/prism/sql'

const appConfig = {
    domain: 'https://jwilkie.github.io/web-serveur',
    title: 'Web serveur',
    description: 'Ce cours vous plonge dans l\'univers dynamique du développement côté serveur en utilisant Node.js, un environnement JavaScript puissant, et Express.js, une plateforme légère et flexible. À travers des projets concrets et des démonstrations pratiques, vous apprendrez à concevoir des API REST, gérer des routes, interagir avec des bases de données et sécuriser vos applications web. Une formation essentielle pour bâtir des services web robustes et évolutifs.',
    sectionName: 'module',
    code: {
        languages: {
            'html': { tag: 'HTML', renderer: html },
            'css': { tag: 'CSS', renderer: css },
            'js': { tag: 'Javascript', renderer: js },
            'json': { tag: 'JSON', renderer: json },
            'terminal': { tag: 'Terminal', renderer: terminal },
            'handlebars': { tag: 'Handlebars', renderer: handlebars },
            'env': { tag: 'Configuration', renderer: env },
            'sql': { tag: 'SQL', renderer: sql }
        },
        themes: {
            light: vs,
            dark: vsdark
        }
    }
}

export default appConfig;
