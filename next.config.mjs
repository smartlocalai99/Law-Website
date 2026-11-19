/** @type {import('next').NextConfig} */

// These files in /public have an extension that does not match their real format.
// Serving the correct Content-Type keeps crawlers and social previews from misreading them.
// (Long-term fix: re-export or rename the files; see SEO notes.)
const contentTypeFixes = [
  { source: "/falcon-lex-legal-hero.png", type: "image/jpeg" },
  { source: "/rera-litigation.jpg", type: "image/webp" },
  { source: "/criminal-litigation.jpg", type: "image/webp" },
  { source: "/arbitration-mediation.jpg", type: "image/avif" },
];

const nextConfig = {
  /* config options here */
  reactCompiler: true,
  reactStrictMode: true,
  // Do not advertise the framework in response headers.
  poweredByHeader: false,

  async headers() {
    return [
      // Let browsers reuse images for a day and revalidate in the background for a week.
      {
        source: "/:file*.:ext(jpg|jpeg|png|webp|avif|svg|ico)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=86400, stale-while-revalidate=604800" },
        ],
      },
      ...contentTypeFixes.map(({ source, type }) => ({
        source,
        headers: [{ key: "Content-Type", value: type }],
      })),
    ];
  },
};

export default nextConfig;
