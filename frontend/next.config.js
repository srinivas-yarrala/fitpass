/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Allow unoptimized images for local imports
  },
  // Enable client-side only components for Three.js
  transpilePackages: ['three', '@react-three/fiber', '@react-three/drei'],
  // Exclude Three.js from server-side bundle
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.externals = config.externals || [];
      config.externals.push({
        '@react-three/fiber': 'commonjs @react-three/fiber',
        '@react-three/drei': 'commonjs @react-three/drei',
        'three': 'commonjs three',
      });
    }
    return config;
  },
}

module.exports = nextConfig

