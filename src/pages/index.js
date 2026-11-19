import JsonLd from "../components/JsonLd";
import { legalServiceSchema, websiteSchema } from "../lib/schema";
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
        title="Falcon Lex Legal | RERA & Divorce Lawyers in Bangalore"
        description="Falcon Lex Legal is a Bengaluru law firm for RERA complaints, builder disputes, divorce and matrimonial cases, and civil and criminal litigation across Karnataka."
        path="/"
      />

      <JsonLd data={[legalServiceSchema(), websiteSchema()]} />

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
