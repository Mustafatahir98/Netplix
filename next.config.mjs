/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['occ-0-3933-116.1.nflxso.net'],
    },
    experimental: {
        serverComponentsExternalPackages: ['mongoose'],
    },
};

export default nextConfig;
