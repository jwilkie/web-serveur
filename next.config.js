/** 
 * @type {import('next').NextConfig} 
 */
const nextConfig = {
    reactStrictMode: true,
    // basePath: '/website-template',
    output: 'export',
    images: {
        unoptimized: true
    }
}

module.exports = nextConfig
