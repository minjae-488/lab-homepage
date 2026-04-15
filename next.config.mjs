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
                // /studio 경로는 sanity.io에서 iframe으로 로드될 수 있도록 허용
                source: "/studio(.*)",
                headers: [
                    { key: "Content-Security-Policy", value: "frame-ancestors 'self' https://www.sanity.io https://*.sanity.io https://lab-homepage-beryl.vercel.app https://*.vercel.app http://localhost:3000 http://localhost:3333" }
                ]
            },
            {
                // 나머지 페이지는 기존 보안 설정 유지
                source: "/((?!studio).*)",
                headers: [
                    { key: "X-Frame-Options", value: "SAMEORIGIN" },
                    { key: "Content-Security-Policy", value: "frame-ancestors 'self' https://lab-homepage-beryl.vercel.app https://*.vercel.app http://localhost:3000" }
                ]
            }
        ]
    },
};

export default nextConfig;
