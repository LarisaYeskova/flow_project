/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};
module.exports = {
  images: {
    loader: "akamai",
    path: "./pages",
  },
};

module.exports = nextConfig;
