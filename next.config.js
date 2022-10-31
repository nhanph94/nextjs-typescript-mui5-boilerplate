/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ["en", "vi"],
    defaultLocale: "vi",
    localeDetection: false,
  },
  trailingSlash: true,
};

module.exports = nextConfig;
