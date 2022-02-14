/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: config => {
    config.plugins.push(require('unplugin-auto-import/webpack')({
      imports: ['react', 'react-router-dom'],
      // dts: true
    }))
    return config
  }
}

module.exports = nextConfig
