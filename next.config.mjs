/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    experimental: {
        optimizeCss: true,
    },
    images: {
        formats: ['image/avif', 'image/webp'],
    },
    output: 'standalone',
};

export default nextConfig;
