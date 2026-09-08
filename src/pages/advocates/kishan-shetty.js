import Header from "../../components/Header";
import Footer from "../../components/Footer";

import {
  FaPhoneAlt,
  FaWhatsapp,
  FaEnvelope,
  FaBalanceScale,
  FaBuilding,
  FaShieldAlt,
  FaGavel,
  FaHome,
  FaFileContract,
  FaUsers,
  FaHandshake,
} from "react-icons/fa";

export default function KishanProfile() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-white text-[#111111]">

        {/* =====================================================
            HERO
        ===================================================== */}

        <section className="relative overflow-hidden bg-white">

          <div className="mx-auto max-w-7xl px-6 pt-6 sm:px-10 lg:px-16">

            {/* Top Line */}

            <div className="h-[1px] w-full bg-black/10" />

            <div className="grid min-h-[620px] lg:grid-cols-[48%_52%]">

              {/* =================================================
                  LEFT CONTENT
              ================================================= */}

              <div className="flex flex-col justify-center py-14 lg:py-20">

                <p className="text-[10px] font-semibold uppercase tracking-[2.5px] text-[#777777]">
                  Advocate
                </p>

                {/* Name */}

                <h1 className="mt-3 max-w-xl font-serif text-5xl leading-[1] tracking-[-1.5px] text-[#111111] sm:text-6xl lg:text-7xl">
                  Kishan
                  <br />
                  <span className="italic">
                    Shetty S.R.
                  </span>
                </h1>

                {/* Qualification */}

                <p className="mt-4 text-[9px] font-semibold uppercase tracking-[2px] text-[#555555]">
                  B.A., LL.B.
                </p>

                {/* Professional Title */}

                <p className="mt-4 max-w-lg text-sm font-medium leading-6 text-[#333333] sm:text-base">
                  Advocate | Real Estate &amp; Dispute Resolution Counsel
                </p>

                {/* Introduction */}

                <p className="mt-6 max-w-lg text-sm leading-7 text-[#666666] sm:text-[15px]">
                  Advocate Kishan Shetty S.R. is a litigation and real estate
                  lawyer based in Bengaluru with experience representing
                  individuals, corporates, developers, financial institutions
                  and businesses across Karnataka.
                </p>

              </div>


              {/* =================================================
                  PHOTO
              ================================================= */}

              <div className="relative min-h-[500px] overflow-hidden lg:min-h-[620px]">

                <img
                  src="/kishan-shetty.png"
                  alt="Kishan Shetty S.R. - Advocate"
                  className="absolute inset-0 h-full w-full object-cover object-top"
                />

                {/* Very subtle overlay */}

                <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-transparent" />

                {/* Small Gold Accent */}

                <div className="absolute bottom-0 left-0 h-[3px] w-full bg-[#B08D57]" />

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            ACHIEVEMENTS
        ===================================================== */}

        <section className="border-y border-black/10 bg-white">

          <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:px-12">

            {/* Section Heading */}

            <div className="mb-7">

              <div className="mb-3 h-[2px] w-[30px] bg-[#B08D57]" />

              <p className="text-[8px] font-semibold uppercase tracking-[2.5px] text-[#777777]">
                Achievements
              </p>

              <h2 className="mt-1 font-serif text-2xl text-[#111111] sm:text-3xl">
                Professional Achievements
              </h2>

            </div>


            {/* =================================================
                FOUR ACHIEVEMENTS — SINGLE ROW
            ================================================= */}

            <div className="grid grid-cols-4 border border-black/10">

              {/* ACHIEVEMENT 1 */}

              <div className="border-r border-black/10 px-4 py-5 text-center sm:px-5">

                <div className="mx-auto mb-3 flex h-9 w-9 items-center justify-center border border-[#B08D57]/40 text-[#B08D57]">
                  <FaBalanceScale className="text-sm" />
                </div>

                <h3 className="font-serif text-base text-[#111111] sm:text-lg">
                  Favourable Orders
                </h3>

                <p className="mt-1.5 text-[10px] leading-4 text-[#666666]">
                  Secured favourable judgments, interim orders, stays,
                  injunctions and bail orders.
                </p>

              </div>


              {/* ACHIEVEMENT 2 */}

              <div className="border-r border-black/10 px-4 py-5 text-center sm:px-5">

                <div className="mx-auto mb-3 flex h-9 w-9 items-center justify-center border border-[#B08D57]/40 text-[#B08D57]">
                  <FaBuilding className="text-sm" />
                </div>

                <h3 className="font-serif text-base text-[#111111] sm:text-lg">
                  Real Estate
                </h3>

                <p className="mt-1.5 text-[10px] leading-4 text-[#666666]">
                  Represented leading real estate developers and corporate
                  clients in complex matters.
                </p>

              </div>


              {/* ACHIEVEMENT 3 */}

              <div className="border-r border-black/10 px-4 py-5 text-center sm:px-5">

                <div className="mx-auto mb-3 flex h-9 w-9 items-center justify-center border border-[#B08D57]/40 text-[#B08D57]">
                  <FaHome className="text-sm" />
                </div>

                <h3 className="font-serif text-base text-[#111111] sm:text-lg">
                  Property Expertise
                </h3>

                <p className="mt-1.5 text-[10px] leading-4 text-[#666666]">
                  Experience in high-value real estate transactions,
                  title due diligence and RERA compliance.
                </p>

              </div>


              {/* ACHIEVEMENT 4 */}

              <div className="px-4 py-5 text-center sm:px-5">

                <div className="mx-auto mb-3 flex h-9 w-9 items-center justify-center border border-[#B08D57]/40 text-[#B08D57]">
                  <FaGavel className="text-sm" />
                </div>

                <h3 className="font-serif text-base text-[#111111] sm:text-lg">
                  Multi-Forum Practice
                </h3>

                <p className="mt-1.5 text-[10px] leading-4 text-[#666666]">
                  Handles civil, criminal, commercial, family, banking and
                  real estate disputes.
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            MAIN PRACTICE AREAS
        ===================================================== */}

        <section className="bg-[#111111] text-white">

          <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-16 lg:py-20">

            {/* HEADER */}

            <div className="max-w-xl">

              <div className="mb-5 h-[2px] w-[38px] bg-[#B08D57]" />

              <p className="text-[9px] font-semibold uppercase tracking-[3px] text-[#B08D57]">
                Practice Areas
              </p>

              <h2 className="mt-3 font-serif text-3xl sm:text-4xl">
                Areas of Legal Practice
              </h2>

              <p className="mt-5 text-sm leading-7 text-[#BDBDBD]">
                Focused legal representation across litigation, real estate,
                banking, family and dispute resolution matters.
              </p>

            </div>


            {/* PRACTICE AREA GRID */}

            <div className="mt-12 grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-3">

              {/* CIVIL */}

              <div className="group bg-[#111111] p-7 transition-colors duration-300 hover:bg-[#181818]">

                <FaBalanceScale className="text-xl text-[#B08D57]" />

                <h3 className="mt-5 font-serif text-xl">
                  Civil Litigation
                </h3>

                <p className="mt-3 text-xs leading-6 text-[#BDBDBD]">
                  Representation in civil disputes and related proceedings.
                </p>

              </div>


              {/* CRIMINAL */}

              <div className="group bg-[#111111] p-7 transition-colors duration-300 hover:bg-[#181818]">

                <FaShieldAlt className="text-xl text-[#B08D57]" />

                <h3 className="mt-5 font-serif text-xl">
                  Criminal Litigation
                </h3>

                <p className="mt-3 text-xs leading-6 text-[#BDBDBD]">
                  Representation in criminal proceedings, defence matters
                  and related remedies.
                </p>

              </div>


              {/* REAL ESTATE */}

              <div className="group bg-[#111111] p-7 transition-colors duration-300 hover:bg-[#181818]">

                <FaHome className="text-xl text-[#B08D57]" />

                <h3 className="mt-5 font-serif text-xl">
                  Real Estate &amp; Property Law
                </h3>

                <p className="mt-3 text-xs leading-6 text-[#BDBDBD]">
                  Property transactions, disputes, due diligence and
                  documentation.
                </p>

              </div>


              {/* RERA */}

              <div className="group bg-[#111111] p-7 transition-colors duration-300 hover:bg-[#181818]">

                <FaBuilding className="text-xl text-[#B08D57]" />

                <h3 className="mt-5 font-serif text-xl">
                  RERA Litigation &amp; Compliance
                </h3>

                <p className="mt-3 text-xs leading-6 text-[#BDBDBD]">
                  RERA litigation, registration, regulatory matters and
                  compliance.
                </p>

              </div>


              {/* COMMERCIAL */}

              <div className="group bg-[#111111] p-7 transition-colors duration-300 hover:bg-[#181818]">

                <FaFileContract className="text-xl text-[#B08D57]" />

                <h3 className="mt-5 font-serif text-xl">
                  Commercial Litigation
                </h3>

                <p className="mt-3 text-xs leading-6 text-[#BDBDBD]">
                  Commercial disputes, contracts, advisory and strategic
                  representation.
                </p>

              </div>


              {/* BANKING */}

              <div className="group bg-[#111111] p-7 transition-colors duration-300 hover:bg-[#181818]">

                <FaGavel className="text-xl text-[#B08D57]" />

                <h3 className="mt-5 font-serif text-xl">
                  Banking &amp; SARFAESI
                </h3>

                <p className="mt-3 text-xs leading-6 text-[#BDBDBD]">
                  Banking disputes, recovery proceedings and SARFAESI
                  related matters.
                </p>

              </div>


              {/* FAMILY */}

              <div className="group bg-[#111111] p-7 transition-colors duration-300 hover:bg-[#181818] sm:col-span-2 lg:col-span-1">

                <FaUsers className="text-xl text-[#B08D57]" />

                <h3 className="mt-5 font-serif text-xl">
                  Family &amp; Matrimonial Law
                </h3>

                <p className="mt-3 text-xs leading-6 text-[#BDBDBD]">
                  Representation in matrimonial and family law proceedings
                  and settlements.
                </p>

              </div>


              {/* PROPERTY DUE DILIGENCE */}

              <div className="group bg-[#111111] p-7 transition-colors duration-300 hover:bg-[#181818]">

                <FaFileContract className="text-xl text-[#B08D57]" />

                <h3 className="mt-5 font-serif text-xl">
                  Property Due Diligence
                </h3>

                <p className="mt-3 text-xs leading-6 text-[#BDBDBD]">
                  Title verification, property due diligence and transaction
                  support.
                </p>

              </div>


              {/* DISPUTE RESOLUTION */}

              <div className="group bg-[#111111] p-7 transition-colors duration-300 hover:bg-[#181818]">

                <FaHandshake className="text-xl text-[#B08D57]" />

                <h3 className="mt-5 font-serif text-xl">
                  Arbitration &amp; Mediation
                </h3>

                <p className="mt-3 text-xs leading-6 text-[#BDBDBD]">
                  Strategic negotiation, settlement, arbitration and
                  mediation assistance.
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            PROFESSIONAL APPROACH
        ===================================================== */}

        <section className="bg-white">

          <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-16 lg:py-20">

            <div className="grid gap-12 lg:grid-cols-[40%_60%]">

              {/* LEFT */}

              <div>

                <div className="mb-5 h-[2px] w-[38px] bg-[#B08D57]" />

                <p className="text-[9px] font-semibold uppercase tracking-[3px] text-[#777777]">
                  Professional Approach
                </p>

                <h2 className="mt-3 max-w-md font-serif text-3xl leading-tight text-[#111111] sm:text-4xl">
                  Strategic.
                  <br />
                  Meticulous.
                  <br />
                  Result-Oriented.
                </h2>

              </div>


              {/* RIGHT */}

              <div>

                <p className="text-sm leading-7 text-[#555555] sm:text-base">
                  Kishan Shetty S.R. is known for meticulous legal research,
                  a strategic litigation approach, practical legal advice and
                  commitment to protecting his clients' interests through
                  efficient, ethical and result-oriented legal representation.
                </p>

                <p className="mt-6 text-sm leading-7 text-[#555555] sm:text-base">
                  His practice combines litigation and real estate experience
                  with work involving property due diligence, title
                  verification, conveyancing, RERA registration and compliance,
                  contract drafting, legal opinions and dispute resolution.
                </p>

                <div className="mt-8 border-l-2 border-[#B08D57] pl-5">

                  <p className="font-serif text-lg italic text-[#222222]">
                    "Practical advice, strategic representation and focused
                    legal solutions."
                  </p>

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            LANGUAGES
        ===================================================== */}

        <section className="border-t border-black/10 bg-white">

          <div className="mx-auto max-w-7xl px-6 py-12 sm:px-10 lg:px-16">

            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

              <div>

                <p className="text-[9px] font-semibold uppercase tracking-[3px] text-[#777777]">
                  Communication
                </p>

                <h2 className="mt-2 font-serif text-2xl text-[#111111]">
                  Languages
                </h2>

              </div>


              <div className="flex flex-wrap gap-2">

                {[
                  "English",
                  "Kannada",
                  "Hindi",
                  "Telugu",
                  "Tamil",
                ].map((language) => (
                  <span
                    key={language}
                    className="border border-black/10 px-4 py-2 text-[10px] uppercase tracking-[1px] text-[#555555]"
                  >
                    {language}
                  </span>
                ))}

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            FINAL CONTACT
        ===================================================== */}

        <section className="border-t border-black/10 bg-white">

          <div className="mx-auto max-w-7xl px-6 py-12 sm:px-10 lg:px-16">

            {/* HEADING */}

            <div className="mb-8 text-center">

              <div className="mx-auto mb-3 h-[2px] w-[30px] bg-[#B08D57]" />

              <p className="text-[8px] font-semibold uppercase tracking-[2.5px] text-[#777777]">
                Get In Touch
              </p>

              <h2 className="mt-2 font-serif text-2xl text-[#111111] sm:text-3xl">
                Contact Kishan Shetty S.R.
              </h2>

            </div>


            {/* DESCRIPTION */}

            <p className="mx-auto mb-8 max-w-2xl text-center text-xs leading-6 text-[#666666]">
              For professional enquiries and legal consultations, clients may
              contact the office by phone, WhatsApp, email or prior appointment.
            </p>


            {/* CONTACT DETAILS */}

            <div className="grid gap-4 sm:grid-cols-3">

              {/* PHONE */}

              <a
                href="tel:+918310790921"
                className="border border-black/10 bg-white p-5 transition-colors hover:border-[#B08D57]"
              >

                <FaPhoneAlt className="text-sm text-[#B08D57]" />

                <p className="mt-3 text-[8px] font-semibold uppercase tracking-[2px] text-[#777777]">
                  Phone
                </p>

                <p className="mt-1.5 text-sm text-[#111111]">
                  +91 83107 90921
                </p>

              </a>


              {/* WHATSAPP */}

              <a
                href="https://wa.me/918310790921"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-black/10 bg-white p-5 transition-colors hover:border-[#B08D57]"
              >

                <FaWhatsapp className="text-sm text-[#B08D57]" />

                <p className="mt-3 text-[8px] font-semibold uppercase tracking-[2px] text-[#777777]">
                  WhatsApp
                </p>

                <p className="mt-1.5 text-sm text-[#111111]">
                  +91 83107 90921
                </p>

              </a>


              {/* EMAIL */}

              <a
                href="mailto:kishanshetty24@gmail.com"
                className="border border-black/10 bg-white p-5 transition-colors hover:border-[#B08D57]"
              >

                <FaEnvelope className="text-sm text-[#B08D57]" />

                <p className="mt-3 text-[8px] font-semibold uppercase tracking-[2px] text-[#777777]">
                  Email
                </p>

                <p className="mt-1.5 break-all text-sm text-[#111111]">
                  kishanshetty24@gmail.com
                </p>

              </a>

            </div>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}