/** @type {import('next-sitemap').IConfig} */
const SITE_URL = "https://www.falconlexlegal.in";

module.exports = {
  siteUrl: SITE_URL,
  generateRobotsTxt: true,
  exclude: ["/api/*", "/404", "/500"],
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
