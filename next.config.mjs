/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/wa',
        destination: 'https://wa.me/918825384415',
        permanent: true,
      },
      {
        source: '/whatsapp',
        destination: 'https://wa.me/918825384415',
        permanent: true,
      },
      {
        source: '/ig',
        destination: 'https://www.instagram.com/deve.loperdev',
        permanent: true,
      },
      {
        source: '/instagram',
        destination: 'https://www.instagram.com/deve.loperdev',
        permanent: true,
      },
      {
        source: '/yt',
        destination: 'https://www.youtube.com/@devbuildsonly',
        permanent: true,
      },
      {
        source: '/youtube',
        destination: 'https://www.youtube.com/@devbuildsonly',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

