import vs from 'react-syntax-highlighter/dist/cjs/styles/prism/vs'
import vsdark from 'react-syntax-highlighter/dist/cjs/styles/prism/vsc-dark-plus'
import html from 'react-syntax-highlighter/dist/cjs/languages/prism/markup'
import css from 'react-syntax-highlighter/dist/cjs/languages/prism/css'
import js from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript'

const appConfig = {
    domain: 'https://jwilkie.github.io/web-client',
    title: 'Web client',
    sectionName: 'module',
    code: {
        languages: {
            'html': { tag: 'HTML', renderer: html },
            'css': { tag: 'CSS', renderer: css },
            'js': { tag: 'Javascript', renderer: js }
        },
        themes: {
            light: vs,
            dark: vsdark
        }
    }
}

export default appConfig;
