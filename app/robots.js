import appConfig from "@/app.config"

export default function robots() {
    return {
        rules: {
            userAgent: '*',
            allow: '/'
        },
        sitemap: `${appConfig.domain}/sitemap.xml`
    }
}
