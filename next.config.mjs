/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http', // Use 'https' if your backend uses HTTPS
        hostname: '143.244.132.118', // Add your backend hostname
        port: '', // Leave empty if using default ports (80 for HTTP, 443 for HTTPS)
        pathname: '/media/**', // Allow all files under the /media directory
      },
    ],
  },
  experimental: {
    optimizeCss: true,
    workerThreads: false,
  },
  webpack: (config, { isServer }) => {
    // Add fallbacks for node modules
    config.resolve.fallback = {
      ...config.resolve.fallback,
      canvas: false,
      fs: false,
      path: false,
      http: false,
      https: false,
      url: false,
      util: false,
      zlib: false,
      stream: false,
      crypto: false,
    };

    // Ignore canvas in server-side builds
    if (isServer) {
      config.externals = [...config.externals, 'canvas'];
    }

    return config;
  },
};

export default nextConfig;