import withPWAInit from "@ducanh2912/next-pwa";
/** @type {import('next').NextConfig} */


const withPWA = withPWAInit({
  dest: "public",
  cacheOnFrontEndNav: true, 
  aggressiveFrontEndNavCaching: true,
  reloadOnOnline: true,
  disable: process.env.NODE_ENV === "development",     
  // disable: false,
  workboxOptions: {
    disableDevLogs: true,
  },

});



const nextConfig: import("next").NextConfig = {
  output: "standalone",
  // swcMinify: true, 
  images: {
    unoptimized: true,
    domains: ["api.microlink.io"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        port: "",
        pathname: "/maryamHabibpourr/blogPost/main/images/**",
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default withPWA(nextConfig);
