/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    IMG_KEY: '16a3cc0341c64b0f802243641da72f9b'
  },
  reactStrictMode: true,
  images: {
    domains: [
      'artscimedia.case.edu',
      'i.ibb.co',
      'image.shutterstock.com',
      'ychef.files.bbci.co.uk',
    ],
  }
}

module.exports = nextConfig
