/** @type {import('next-sitemap').IConfig} */
const SITE_URL = "https://www.falconlexlegal.in";

module.exports = {
  siteUrl: SITE_URL,
  generateRobotsTxt: true,
  autoLastmod: false,
  exclude: ["/api/*", "/404", "/500"],
  // Do not claim daily updates or stamp every page with the build date.
  transform: async (_config, path) => ({ loc: path }),
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
  },
};
