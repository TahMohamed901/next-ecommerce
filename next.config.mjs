/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        NEXT_PUBLIC_API_URL: "http://localhost:8080",
    },
    images: {
        remotePatterns: [
          {
            protocol: 'http',
            hostname: 'localhost',
            port: '8080',
            pathname: '/files/images/**',
          },
        ],
    },
};

export default nextConfig;
