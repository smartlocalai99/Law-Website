import Head from "next/head";
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
      <Head>
        <title>Falcon Lex Legal </title>
        <meta
          name="description"
          content="Bengaluru law firm handling civil, criminal, property, RERA, commercial, banking and family matters. Consultations by prior appointment."
        />
        <link rel="canonical" href="https://www.falconlexlegal.in" />
      </Head>

      <Head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LegalService",
          "name": "Falcon Lex Legal",
          "url": "https://www.falconlexlegal.in",
          "telephone": "+91 99012 78154",
          "email": "Falconlexlegal@gmail.com",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "#135-136, 1st Floor, Plazzo Retail Mall, Commercial Street",
            "addressLocality": "Bengaluru",
            "postalCode": "560001",
            "addressCountry": "IN"
          },
          "openingHours": "Mo-Sa 10:00-20:00"
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