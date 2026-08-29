import Header from "../components/Header";
import Herosection from "../components/Herosection";
import Aboutsection from "../components/Aboutsection";
import Practiceareas from "../components/Practiceareas";
import CourtsSection from "../components/Courtssection.js";


export default function Home() {
  return (
    <>
      <Header />
      <Herosection />
      <Aboutsection />
      <Practiceareas />
      <CourtsSection />
    </>
  );
}