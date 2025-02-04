/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    unoptimized: true,
    domains: [
      "api.microlink.io", 
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        port: '',
        pathname: '/maryamHabibpourr/blogPost/main/images/**',
      },
    ],
  },
  typescript:{
    ignoreBuildErrors: true,
}

};

export default nextConfig;
