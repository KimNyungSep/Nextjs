module.exports = {
  async rewrites() {
    return [
      {
        source: '/favicon.ico',
        destination: '/_next/static/favicon.ico',
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/_next/static/favicon.ico',
        destination: '/favicon.ico',
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/favicon.ico',
        headers: [
          {
            key: 'Content-Type',
            value: 'image/x-icon',
          },
        ],
      },
    ];
  },
};
