import Head from "next/head";
import Seo from "../components/Seo";
import Header from "../components/Header";
import Herosection from "../components/Herosection";
import Aboutsection from "../components/Aboutsection";
import Practiceareas from "../components/Practiceareas";
import CourtsSection from "../components/Courtssection.js";
import Advocatessection from "../components/Advocatessection";
import FaqSection from "../components/FaqSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Seo
        title="Falcon Lex Legal | Law Firm & Advocates in Bengaluru"
        description="Falcon Lex Legal is a Bengaluru-based legal practice for civil and criminal litigation, property and RERA matters, commercial disputes, banking, family law and dispute resolution."
        path="/"
      />

      <Head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LegalService",
          "name": "Falcon Lex Legal",
          "url": "https://www.falconlexlegal.in",
          "@id": "https://www.falconlexlegal.in/#legalservice",
          "image": "https://www.falconlexlegal.in/falcon-lex-legal-hero.png",
          "telephone": "+91 99012 78154",
          "email": "Falconlexlegal@gmail.com",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "#135-136, 1st Floor, Plazzo Retail Mall, Commercial Street",
            "addressLocality": "Bengaluru",
            "postalCode": "560001",
            "addressCountry": "IN"
          },
          "openingHours": "Mo-Sa 10:00-20:00",
          "areaServed": [
            { "@type": "City", "name": "Bengaluru" },
            { "@type": "AdministrativeArea", "name": "Karnataka" }
          ]
        }) }} />
      </Head>

      <Header />
      <Herosection />
      <Aboutsection />
      <Advocatessection />
      <Practiceareas />
      <CourtsSection />
      <FaqSection />
      <ContactSection />
      <Footer/>

    </>
  );
}
