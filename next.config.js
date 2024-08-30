/** 
 * @type {import('next').NextConfig} 
 */
const nextConfig = {
    reactStrictMode: true,
    output: 'export',
    trailingSlash: true,
    images: {
        unoptimized: true
    },
    basePath: '/web-client'
}

module.exports = nextConfig
