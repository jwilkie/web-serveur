/** 
 * @type {import('next').NextConfig} 
 */
const nextConfig = {
    reactStrictMode: true,
    experimental: {
        appDir: true
    },
    env: {
        appTitle: 'Programmation Web Serveur',
        sectionName: 'Module'
    },
    images: {
        unoptimized: true
    }
}

export default nextConfig;
