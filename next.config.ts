import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pub-ff9f7a3b41f6479b9fc302869046191a.r2.dev',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

export default nextConfig
