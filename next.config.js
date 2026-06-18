/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return {
      beforeFiles: [
        // Route /imposter to the impostergame build
        {
          source: "/imposter",
          destination: "/impostergame/index.html",
        },
        {
          source: "/imposter/:path*",
          destination: "/impostergame/:path*",
        },
      ],
    };
  },
};

module.exports = nextConfig;
