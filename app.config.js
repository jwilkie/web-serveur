import vs from 'react-syntax-highlighter/dist/cjs/styles/prism/vs'
import vsdark from 'react-syntax-highlighter/dist/cjs/styles/prism/vsc-dark-plus'

const appConfig = {
    domain: 'https://jwilkie.github.io/website-template',
    title: 'Programmation Web Serveur',
    sectionName: 'module',
    code: {
        languages: {
            'html': 'HTML', 
            'css': 'CSS', 
            'js': 'Javascript'
        },
        themes: {
            light: vs,
            dark: vsdark
        }
    }
}

export default appConfig;
