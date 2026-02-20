/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.sanity.io',
            },
        ],
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
    typescript: {
        ignoreBuildErrors: true,
    },
    async headers() {
        return [
            {
                source: "/(.*)",
                headers: [
                    { key: "X-Frame-Options", value: "SAMEORIGIN" }, // Allow iframe embedding on same origin
                    { key: "Content-Security-Policy", value: "frame-ancestors 'self' https://lab-homepage-beryl.vercel.app https://*.vercel.app http://localhost:3000" } // Allow embedding from self, production, vercel previews, and localhost
                ]
            }
        ]
    },
};

export default nextConfig;
