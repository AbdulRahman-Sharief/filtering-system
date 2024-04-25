/** @type {import('next').NextConfig} */
const nextConfig = {
    crossOrigin:['https://filtering-system-one.vercel.app/'],
    // images:['https://filtering-system-one.vercel.app/']
    images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "**",
          },
        ],
      },
};

export default nextConfig;
