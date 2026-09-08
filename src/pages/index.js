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