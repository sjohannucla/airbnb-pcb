/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: [ 
      'avatars.githubusercontent.com',
      'res.cloudinary.com'
      // 'lh3.google.usercontent.com',
    ]
  }
}

module.exports = nextConfig
