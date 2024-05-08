// next.config.mjs

const nextConfig = {
    experimental: {
      serverComponentsExternalPackages: ['mongoose']
    },
    images: {
      // Define remotePatterns as an array of objects with "hostname" property
      remotePatterns: [
        {
          // Match any image URL with "m.media-amazon.com" hostname
          hostname: 'm.media-amazon.com',
          // Optionally, you can specify other patterns here
          // path: '/path/to/images/**',
          // protocol: 'https',
        }
      ]
    }
}

export default nextConfig;
