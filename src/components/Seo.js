import Head from "next/head";

const SITE_URL = "https://www.falconlexlegal.in";

export default function Seo({ title, description, path }) {
  const canonicalUrl = `${SITE_URL}${path}`;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Falcon Lex Legal" />
    </Head>
  );
}
