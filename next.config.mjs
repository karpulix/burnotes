/** @type {import('next').NextConfig} */
import createNextIntlPlugin from "next-intl/plugin";
import withPWA from "next-pwa";
import withPlugins from "next-compose-plugins";

const withNextIntl = createNextIntlPlugin();

const nextConfig = {
  reactStrictMode: false,
};

export default withPlugins(
  [
    [withNextIntl],
    [
      withPWA,
      {
        dest: "public",
      },
    ],
  ],
  nextConfig
);
