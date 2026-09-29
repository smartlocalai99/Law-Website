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
  const languages = [
    "English",
    "Hindi",
    "Telugu",
    "Kannada",
    "Tamil",
  ];

  return (
    <>
      <Header />

      <main className="min-h-screen bg-white text-[#111111]">

        {/* =====================================================
            HERO
        ===================================================== */}

        <section className="relative overflow-hidden bg-[#111111] text-white">

          <div className="mx-auto  px-6 sm:px-10 lg:px-16">

            <div className="h-[1px] w-full bg-white/10" />

            <div className="grid min-h-[620px] lg:grid-cols-[48%_52%]">

              {/* =================================================
                  LEFT — PROFILE DETAILS
              ================================================= */}

              <div className="flex flex-col justify-center py-16 lg:py-20">

                <p className="text-[10px] font-semibold uppercase tracking-[2.5px] text-[#B08D57]">
                   Advocate
                </p>

                <h1 className="mt-3  font-serif text-5xl leading-[1] tracking-[-1.5px] text-white sm:text-6xl lg:text-7xl">
                  Yashwanth
                  <br />
                  <span className="italic text-[#D6D6D6]">
                    Ovarsu
                  </span>
                </h1>

                <p className="mt-5 text-[9px] font-semibold uppercase tracking-[2px] text-[#B08D57]">
                  B.A. LL.B. (Hons)
                </p>

                <p className="mt-4  text-sm font-medium leading-6 text-[#E5E5E5] sm:text-base">
                  Advocate | Litigation &amp; Dispute Resolution
                </p>

                <p className="mt-6  text-sm leading-7 text-[#BDBDBD] sm:text-[15px]">
                  Yashwanth Ovarsu is a Bengaluru based advocate and the
                  advocate of Falcon Lex Legal, with a practice focused on
                  litigation, dispute resolution and strategic legal
                  representation.
                </p>

                {/* Gold divider */}

                <div className="mt-8 h-[2px] w-[42px] bg-[#B08D57]" />

              </div>


              {/* =================================================
                  RIGHT — IMAGE
              ================================================= */}

              <div className="relative min-h-[500px] overflow-hidden lg:min-h-[620px]">

                <img
                  src="/yashwanth.png"
                  alt="Yashwanth Ovarsu - Advocate"
                  className="absolute inset-0 h-full w-full object-cover object-top"
                />

                {/* Subtle dark blend */}

                <div className="absolute inset-0 bg-gradient-to-r from-[#111111]/35 via-transparent to-transparent" />

                {/* Bottom gold accent */}

                <div className="absolute bottom-0 left-0 h-[3px] w-full bg-[#B08D57]" />

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
    ACHIEVEMENTS + LANGUAGES
===================================================== */}

<section className="border-b border-black/10 bg-white">

  <div className="mx-auto  px-6 py-14 sm:px-10 lg:px-16">

    <div className="grid items-start gap-14 lg:grid-cols-[60%_40%]">

      {/* =================================================
          LEFT — ACHIEVEMENTS
      ================================================= */}

      <div>

        {/* Heading */}

        <div className="mb-6">

          <div className="mb-3 h-[2px] w-[30px] bg-[#B08D57]" />

          <p className="text-[8px] font-semibold uppercase tracking-[2.5px] text-[#777777]">
            Achievements
          </p>

          <h2 className="mt-1 font-serif text-2xl leading-tight text-[#111111] sm:text-3xl">
            Professional Achievements
          </h2>

        </div>


        {/* Achievement Items */}

        <div className="space-y-1">

          {/* 01 */}

          <div className="group flex items-center gap-4 px-1 py-3.5 transition-colors duration-200 hover:bg-[#fafafa]">

            <div className="flex h-9 w-9 shrink-0 items-center justify-center border border-[#B08D57]/40 text-[#B08D57]">
              <FaBalanceScale className="text-xs" />
            </div>

            <div>

              <h3 className="font-serif text-[15px] leading-tight text-[#111111] sm:text-base">
                Litigation
              </h3>

              <p className="mt-1 text-[10px] leading-4 text-[#666666] sm:text-[11px]">
                Strong experience in litigation and legal representation.
              </p>

            </div>

          </div>


          {/* 02 */}

          <div className="group flex items-center gap-4 px-1 py-3.5 transition-colors duration-200 hover:bg-[#fafafa]">

            <div className="flex h-9 w-9 shrink-0 items-center justify-center border border-[#B08D57]/40 text-[#B08D57]">
              <FaUsers className="text-xs" />
            </div>

            <div>

              <h3 className="font-serif text-[15px] leading-tight text-[#111111] sm:text-base">
                Client Focus
              </h3>

              <p className="mt-1 text-[10px] leading-4 text-[#666666] sm:text-[11px]">
                Focused on practical and strategic legal solutions.
              </p>

            </div>

          </div>


          {/* 03 */}

          <div className="group flex items-center gap-4 px-1 py-3.5 transition-colors duration-200 hover:bg-[#fafafa]">

            <div className="flex h-9 w-9 shrink-0 items-center justify-center border border-[#B08D57]/40 text-[#B08D57]">
              <FaBalanceScale className="text-xs" />
            </div>

            <div>

              <h3 className="font-serif text-[15px] leading-tight text-[#111111] sm:text-base">
                Dispute Resolution
              </h3>

              <p className="mt-1 text-[10px] leading-4 text-[#666666] sm:text-[11px]">
                Dedicated approach to resolving complex disputes.
              </p>

            </div>

          </div>


          {/* 04 */}

          <div className="group flex items-center gap-4 px-1 py-3.5 transition-colors duration-200 hover:bg-[#fafafa]">

            <div className="flex h-9 w-9 shrink-0 items-center justify-center border border-[#B08D57]/40 text-[#B08D57]">
              <FaHome className="text-xs" />
            </div>

            <div>

              <h3 className="font-serif text-[15px] leading-tight text-[#111111] sm:text-base">
                Strategic Counsel
              </h3>

              <p className="mt-1 text-[10px] leading-4 text-[#666666] sm:text-[11px]">
                Strategic advice supporting clients through legal challenges.
              </p>

            </div>

          </div>

        </div>

      </div>


      {/* =================================================
          RIGHT — COMMUNICATION / LANGUAGES
      ================================================= */}

      <div>

        {/* Heading — EXACT SAME STRUCTURE */}

        <div className="mb-6">

          <div className="mb-3 h-[2px] w-[30px] bg-[#B08D57]" />

          <p className="text-[8px] font-semibold uppercase tracking-[2.5px] text-[#777777]">
            Communication
          </p>

          <h2 className="mt-1 font-serif text-2xl leading-tight text-[#111111] sm:text-3xl">
            Languages
          </h2>

        </div>


        {/* Description */}

        <p className="max-w-md text-sm leading-6 text-[#666666] sm:text-[15px]">
          Professional communication with clients and stakeholders
          across multiple languages.
        </p>


        {/* Languages */}

        <div className="mt-6 flex flex-wrap gap-2">

          {[
            "English",
            "Hindi",
            "Telugu",
            "Kannada",
            "Tamil",
          ].map((language) => (
            <span
              key={language}
              className="border border-black/10 px-4 py-2 text-[10px] uppercase tracking-[1px] text-[#555555] transition-colors duration-200 hover:border-[#B08D57] hover:text-[#B08D57]"
            >
              {language}
            </span>
          ))}

        </div>

      </div>

    </div>

  </div>

</section>
        {/* =====================================================
    PRACTICE AREAS
===================================================== */}

<section className="bg-[#111111] text-white">

  <div className="mx-auto max-w-7xl px-6 py-12 sm:px-10 lg:px-16 lg:py-14">

    {/* SECTION INTRO */}

    <div className="max-w-xl">

      <div className="mb-4 h-[2px] w-[32px] bg-[#B08D57]" />

      <p className="text-[8px] font-semibold uppercase tracking-[2.5px] text-[#B08D57]">
        Practice Areas
      </p>

      <h2 className="mt-2 font-serif text-2xl leading-tight sm:text-3xl">
        Areas of Legal Practice
      </h2>

      <p className="mt-3 text-xs leading-6 text-[#BDBDBD] sm:text-sm">
        Focused legal services across key areas of litigation,
        advisory and dispute resolution.
      </p>

    </div>


    {/* PRACTICE AREAS */}

    <div className="mt-9 grid gap-x-10 gap-y-7 sm:grid-cols-2 lg:grid-cols-3">

      {/* Civil Litigation */}

      <div className="group">

        <FaBalanceScale className="text-base text-[#B08D57]" />

        <h3 className="mt-3 font-serif text-lg text-white">
          Civil Litigation
        </h3>

        <p className="mt-1.5 text-[11px] leading-5 text-[#AFAFAF]">
          Representation in civil disputes, property matters
          and related court proceedings.
        </p>

      </div>


      {/* Criminal Litigation */}

      <div className="group">

        <FaShieldAlt className="text-base text-[#B08D57]" />

        <h3 className="mt-3 font-serif text-lg text-white">
          Criminal Litigation
        </h3>

        <p className="mt-1.5 text-[11px] leading-5 text-[#AFAFAF]">
          Legal representation in criminal proceedings,
          defence matters and related remedies.
        </p>

      </div>


      {/* Real Estate */}

      <div className="group">

        <FaHome className="text-base text-[#B08D57]" />

        <h3 className="mt-3 font-serif text-lg text-white">
          Real Estate &amp; Property Law
        </h3>

        <p className="mt-1.5 text-[11px] leading-5 text-[#AFAFAF]">
          Property transactions, title verification,
          documentation and property disputes.
        </p>

      </div>


      {/* RERA */}

      <div className="group">

        <FaBuilding className="text-base text-[#B08D57]" />

        <h3 className="mt-3 font-serif text-lg text-white">
          RERA Matters
        </h3>

        <p className="mt-1.5 text-[11px] leading-5 text-[#AFAFAF]">
          Assistance with RERA disputes, compliance,
          registration and related proceedings.
        </p>

      </div>


      {/* Commercial */}

      <div className="group">

        <FaFileContract className="text-base text-[#B08D57]" />

        <h3 className="mt-3 font-serif text-lg text-white">
          Commercial Litigation
        </h3>

        <p className="mt-1.5 text-[11px] leading-5 text-[#AFAFAF]">
          Commercial disputes, contracts, legal advice
          and strategic representation.
        </p>

      </div>


      {/* Banking */}

      <div className="group">

        <FaGavel className="text-base text-[#B08D57]" />

        <h3 className="mt-3 font-serif text-lg text-white">
          Banking &amp; Financial Matters
        </h3>

        <p className="mt-1.5 text-[11px] leading-5 text-[#AFAFAF]">
          Representation in banking disputes, recovery
          proceedings and related legal matters.
        </p>

      </div>


      {/* Family */}

      <div className="group">

        <FaUsers className="text-base text-[#B08D57]" />

        <h3 className="mt-3 font-serif text-lg text-white">
          Family &amp; Matrimonial Law
        </h3>

        <p className="mt-1.5 text-[11px] leading-5 text-[#AFAFAF]">
          Assistance in matrimonial, family disputes,
          settlements and related proceedings.
        </p>

      </div>


      {/* Property Due Diligence */}

      <div className="group">

        <FaFileContract className="text-base text-[#B08D57]" />

        <h3 className="mt-3 font-serif text-lg text-white">
          Property Due Diligence
        </h3>

        <p className="mt-1.5 text-[11px] leading-5 text-[#AFAFAF]">
          Title verification, document review and
          transaction-related legal support.
        </p>

      </div>


      {/* Arbitration */}

      <div className="group">

        <FaHandshake className="text-base text-[#B08D57]" />

        <h3 className="mt-3 font-serif text-lg text-white">
          Arbitration &amp; Mediation
        </h3>

        <p className="mt-1.5 text-[11px] leading-5 text-[#AFAFAF]">
          Assistance with negotiation, arbitration,
          mediation and dispute resolution.
        </p>

      </div>

    </div>

  </div>

</section>

        {/* =====================================================
            PROFESSIONAL PHILOSOPHY
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
            GET IN TOUCH
        ===================================================== */}

        <section className="border-t border-black/10 bg-white">

          <div className="mx-auto max-w-7xl px-6 py-14 sm:px-10 lg:px-16">

            {/* Heading */}

            <div className="mb-8 text-center">

              <div className="mx-auto mb-3 h-[2px] w-[30px] bg-[#B08D57]" />

              <p className="text-[8px] font-semibold uppercase tracking-[2.5px] text-[#777777]">
                Get In Touch
              </p>

              <h2 className="mt-2 font-serif text-2xl text-[#111111] sm:text-3xl">
                Contact Yashwanth Ovarsu
              </h2>

            </div>


            {/* Description */}

            <p className="mx-auto mb-8 max-w-2xl text-center text-xs leading-6 text-[#666666]">
              For professional enquiries and legal consultations, clients
              may contact Yashwanth by phone, WhatsApp, email or prior
              appointment.
            </p>


            {/* Contact Details */}

            <div className="grid gap-4 sm:grid-cols-3">


              {/* Phone */}

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


              {/* WhatsApp */}

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


              {/* Email */}

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

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}