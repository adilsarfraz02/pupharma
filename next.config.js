/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    output:"export",
    images: {
        domains: [
          "img.etimg.com",
          "assets.vogue.com",
          "m.media-amazon.com",
          "img.playbook.com",
        ],
    }
}

module.exports = nextConfig
