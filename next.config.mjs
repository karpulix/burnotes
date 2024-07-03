// /** @type {import('next').NextConfig} */
// import { i18n } from "./next-i18next.config.mjs";

// const nextConfig = {
//   reactStrictMode: true,
//   ...i18n,
// };
// console.log(nextConfig);
// export default nextConfig;

/** @type {import('next').NextConfig} */
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig = {
  reactStrictMode: false,
};

export default withNextIntl(nextConfig);
