import Head from "next/head";

// Renders one or more JSON-LD blocks in <head>. Outputs no visible markup.
export default function JsonLd({ data }) {
  const blocks = Array.isArray(data) ? data : [data];
  return (
    <Head>
      {blocks.map((block, i) => (
        <script
          key={`jsonld-${block["@type"]}-${i}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(block) }}
        />
      ))}
    </Head>
  );
}
