import Head from "next/head";

const SITE_URL = "https://www.falconlexlegal.in";
const DEFAULT_OG_IMAGE = `${SITE_URL}/falcon-lex-legal-hero.png`;

export default function Seo({ title, description, path, image = DEFAULT_OG_IMAGE }) {
  const normalizedPath = path === "/" ? "" : `/${path.replace(/^\/+|\/+$/g, "")}`;
  const canonicalUrl = `${SITE_URL}${normalizedPath}`;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      <meta name="robots" content="index,follow" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Falcon Lex Legal" />
      <meta property="og:locale" content="en_IN" />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content="Falcon Lex Legal, Bengaluru" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content="Falcon Lex Legal, Bengaluru" />
    </Head>
  );
}
