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