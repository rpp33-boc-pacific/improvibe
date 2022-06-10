/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'artscimedia.case.edu',
      'i.ibb.co',
      'image.shutterstock.com',
      'footdistrict.com',
      'images.unsplash.com',
      'ychef.files.bbci.co.uk',
    ],
  }
}

module.exports = nextConfig
