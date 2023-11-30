/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.js");

/** @type {import("next").NextConfig} */
const config = {
    eslint: {
        ignoreDuringBuilds: true,
      },
    typescript: {
        ignoreBuildErrors: true,
      },
    i18n: {
        locales: ["en"],
        defaultLocale: "en",
      },
      images: {
        dangerouslyAllowSVG: true,
        remotePatterns: [
          {
            protocol: "https",
            hostname: "uploadthing.com",
            port: "",
          },
          {
            protocol: "https",
            hostname: "utfs.io",
            port: "",
          },
          {
            protocol: "https",
            hostname: "tailwindui.com",
            port: "",
          },
        ],
    }
};

export default config;
