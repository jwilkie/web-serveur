/** 
 * @type {import('next').NextConfig} 
 */
const nextConfig = {
    reactStrictMode: true,
    experimental: {
        appDir: true,
    },
    output: 'export',
    basePath: '/website-template',
    images: {
        unoptimized: true
    }
}

module.exports = nextConfig
