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

export default function YashwanthProfile() {
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
          Founding Advocate
        </p>

        {/* Name */}

        <h1 className="mt-3 max-w-xl font-serif text-5xl leading-[1] tracking-[-1.5px] text-[#111111] sm:text-6xl lg:text-7xl">
          Yashwanth
          <br />
          <span className="italic">
            Ovarsu
          </span>
        </h1>

        {/* Qualification */}

        <p className="mt-4 text-[9px] font-semibold uppercase tracking-[2px] text-[#555555]">
          B.A. LL.B. (Hons)
        </p>

        {/* Professional Title */}

        <p className="mt-4 max-w-lg text-sm font-medium leading-6 text-[#333333] sm:text-base">
          Founding Advocate | Litigation &amp; Dispute Resolution
        </p>

        {/* Introduction */}

        <p className="mt-6 max-w-lg text-sm leading-7 text-[#666666] sm:text-[15px]">
          Yashwanth Ovarsu is a Bengaluru based advocate and the
          founding advocate of Falcon Lex Legal, with a practice
          focused on litigation, dispute resolution and strategic
          legal representation.
        </p>

      </div>


      {/* =================================================
          PHOTO
      ================================================= */}

      <div className="relative min-h-[500px] overflow-hidden lg:min-h-[620px]">

        <img
          src="/yashwanth.png"
          alt="Yashwanth Ovarsu - Advocate"
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
          Litigation
        </h3>

        <p className="mt-1.5 text-[10px] leading-4 text-[#666666]">
          Strong experience in litigation and legal representation.
        </p>

      </div>


      {/* ACHIEVEMENT 2 */}

      <div className="border-r border-black/10 px-4 py-5 text-center sm:px-5">

        <div className="mx-auto mb-3 flex h-9 w-9 items-center justify-center border border-[#B08D57]/40 text-[#B08D57]">
          <FaUsers className="text-sm" />
        </div>

        <h3 className="font-serif text-base text-[#111111] sm:text-lg">
          Client Focus
        </h3>

        <p className="mt-1.5 text-[10px] leading-4 text-[#666666]">
          Focused on practical and strategic legal solutions.
        </p>

      </div>


      {/* ACHIEVEMENT 3 */}

      <div className="border-r border-black/10 px-4 py-5 text-center sm:px-5">

        <div className="mx-auto mb-3 flex h-9 w-9 items-center justify-center border border-[#B08D57]/40 text-[#B08D57]">
          <FaBalanceScale className="text-sm" />
        </div>

        <h3 className="font-serif text-base text-[#111111] sm:text-lg">
          Dispute Resolution
        </h3>

        <p className="mt-1.5 text-[10px] leading-4 text-[#666666]">
          Dedicated approach to resolving complex disputes.
        </p>

      </div>


      {/* ACHIEVEMENT 4 */}

      <div className="px-4 py-5 text-center sm:px-5">

        <div className="mx-auto mb-3 flex h-9 w-9 items-center justify-center border border-[#B08D57]/40 text-[#B08D57]">
          <FaHome className="text-sm" />
        </div>

        <h3 className="font-serif text-base text-[#111111] sm:text-lg">
          Strategic Counsel
        </h3>

        <p className="mt-1.5 text-[10px] leading-4 text-[#666666]">
          Strategic advice supporting clients through legal challenges.
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
                Focused legal representation across litigation,
                advisory, property, family and dispute resolution matters.
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
                  Strategic representation in civil disputes and related
                  proceedings.
                </p>

              </div>


              {/* CRIMINAL */}

              <div className="group bg-[#111111] p-7 transition-colors duration-300 hover:bg-[#181818]">

                <FaShieldAlt className="text-xl text-[#B08D57]" />

                <h3 className="mt-5 font-serif text-xl">
                  Criminal Litigation
                </h3>

                <p className="mt-3 text-xs leading-6 text-[#BDBDBD]">
                  Representation in criminal proceedings and defence
                  matters.
                </p>

              </div>


              {/* REAL ESTATE */}

              <div className="group bg-[#111111] p-7 transition-colors duration-300 hover:bg-[#181818]">

                <FaHome className="text-xl text-[#B08D57]" />

                <h3 className="mt-5 font-serif text-xl">
                  Real Estate & Property Law
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
                  RERA Litigation & Compliance
                </h3>

                <p className="mt-3 text-xs leading-6 text-[#BDBDBD]">
                  RERA litigation, regulatory matters and compliance
                  advisory.
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
                  Banking & SARFAESI
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
                  Family & Matrimonial Law
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
                  Title verification, property due diligence and
                  transaction support.
                </p>

              </div>


              {/* DISPUTE RESOLUTION */}

              <div className="group bg-[#111111] p-7 transition-colors duration-300 hover:bg-[#181818]">

                <FaHandshake className="text-xl text-[#B08D57]" />

                <h3 className="mt-5 font-serif text-xl">
                  Arbitration & Mediation
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
                  Philosophy
                </p>

                <h2 className="mt-3 max-w-md font-serif text-3xl leading-tight text-[#111111] sm:text-4xl">

                  Strategic.
                  <br />

                  Prepared.
                  <br />

                  Purposeful.

                </h2>

              </div>


              {/* RIGHT */}

              <div>

                <p className="text-sm leading-7 text-[#555555] sm:text-base">

                  Yashwanth believes that effective representation begins
                  long before a matter reaches the courtroom. It begins with
                  understanding the facts in their entirety, identifying the
                  issues that truly matter, examining the evidence and
                  developing a clear strategy around the client's objectives.

                </p>

                <p className="mt-6 text-sm leading-7 text-[#555555] sm:text-base">

                  His practice is defined by thorough preparation, rigorous
                  legal research, precise drafting and purposeful advocacy.
                  He believes that an advocate's responsibility is not merely
                  to argue a case, but to provide clarity, direction and
                  determined representation when the matter demands it.

                </p>

                <div className="mt-8 border-l-2 border-[#B08D57] pl-5">

                  <p className="font-serif text-lg italic text-[#222222]">
                    "Prepare thoroughly, think strategically and advocate
                    with purpose."
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
                  "Hindi",
                  "Telugu",
                  "Kannada",
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

  <div className="mx-auto px-6 py-12 sm:px-10">

    {/* HEADING */}

    <div className="mb-8 text-center">

      <div className="mx-auto mb-3 h-[2px] w-[30px] bg-[#B08D57]" />

      <p className="text-[8px] font-semibold uppercase tracking-[2.5px] text-[#777777]">
        Get In Touch
      </p>

      <h2 className="mt-2 font-serif text-2xl text-[#111111] sm:text-3xl">
        Contact Yashwanth Ovarsu
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
        href="tel:+919901278154"
        className="border border-black/10 bg-white p-5 transition-colors hover:border-[#B08D57]"
      >
        <FaPhoneAlt className="text-sm text-[#B08D57]" />

        <p className="mt-3 text-[8px] font-semibold uppercase tracking-[2px] text-[#777777]">
          Phone
        </p>

        <p className="mt-1.5 text-sm text-[#111111]">
          +91 9901278154
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
        href="mailto:ovarsuyaswanth@gmail.com"
        className="border border-black/10 bg-white p-5 transition-colors hover:border-[#B08D57]"
      >
        <FaEnvelope className="text-sm text-[#B08D57]" />

        <p className="mt-3 text-[8px] font-semibold uppercase tracking-[2px] text-[#777777]">
          Email
        </p>

        <p className="mt-1.5 break-all text-sm text-[#111111]">
          ovarsuyaswanth@gmail.com
        </p>
      </a>

    </div>


    {/* OFFICE EMAIL */}

    <div className="mt-5 text-center">

      <p className="text-[8px] font-semibold uppercase tracking-[2px] text-[#777777]">
        Office Email
      </p>

      <a
        href="mailto:Falconlexlegal@gmail.com"
        className="mt-1 inline-block text-xs text-[#111111] transition-colors hover:text-[#B08D57]"
      >
        Falconlexlegal@gmail.com
      </a>

    </div>

  </div>

</section>

      </main>

      <Footer />
    </>
  );
}