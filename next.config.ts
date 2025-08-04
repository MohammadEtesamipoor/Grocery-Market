import type {NextConfig} from "next";

const nextConfig: NextConfig = {
    /* config options here */
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'nest.navaxcollege.com',
            },
            {
                protocol: 'https',
                hostname: 'i.postimg.cc',
                pathname: '/**',
            }
        ],
    },
};

export default nextConfig;
