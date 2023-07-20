/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "sailors3bucket1.s3.ap-southeast-1.amazonaws.com",
          },
        ],
      },
}

module.exports = nextConfig
