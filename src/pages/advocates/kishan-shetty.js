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
  const languages = [
    "English",
    "Kannada",
    "Hindi",
    "Telugu",
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

          <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">

            <div className="h-[1px] w-full bg-white/10" />

            <div className="grid min-h-[620px] lg:grid-cols-[48%_52%]">

              {/* =================================================
                  LEFT — PROFILE DETAILS
              ================================================= */}

              <div className="flex flex-col justify-center py-16 lg:py-20">

                <p className="text-[10px] font-semibold uppercase tracking-[2.5px] text-[#B08D57]">
                  Advocate
                </p>

                <h1 className="mt-3 max-w-xl font-serif text-5xl leading-[1] tracking-[-1.5px] text-white sm:text-6xl lg:text-7xl">
                  Kishan
                  <br />
                  <span className="italic text-[#D6D6D6]">
                    Shetty S.R.
                  </span>
                </h1>

                <p className="mt-5 text-[9px] font-semibold uppercase tracking-[2px] text-[#B08D57]">
                  B.A., LL.B.
                </p>

                <p className="mt-4 max-w-lg text-sm font-medium leading-6 text-[#E5E5E5] sm:text-base">
                  Advocate | Real Estate &amp; Dispute Resolution Counsel
                </p>

                <p className="mt-6 max-w-lg text-sm leading-7 text-[#BDBDBD] sm:text-[15px]">
                  Advocate Kishan Shetty S.R. is a litigation and real estate
                  lawyer based in Bengaluru with experience representing
                  individuals, corporates, developers, financial institutions
                  and businesses across Karnataka.
                </p>

                <div className="mt-8 h-[2px] w-[42px] bg-[#B08D57]" />

              </div>


              {/* =================================================
                  RIGHT — IMAGE
              ================================================= */}

              <div className="relative min-h-[500px] overflow-hidden lg:min-h-[620px]">

                <img
                  src="/kishan-shetty.png"
                  alt="Kishan Shetty S.R. - Advocate"
                  className="absolute inset-0 h-full w-full object-cover object-top"
                />

                <div className="absolute inset-0 bg-gradient-to-r from-[#111111]/35 via-transparent to-transparent" />

                <div className="absolute bottom-0 left-0 h-[3px] w-full bg-[#B08D57]" />

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            ACHIEVEMENTS + LANGUAGES
        ===================================================== */}

        <section className="border-b border-black/10 bg-white">

          <div className="mx-auto max-w-7xl px-6 py-14 sm:px-10 lg:px-16">

            <div className="grid items-start gap-14 lg:grid-cols-[60%_40%]">

              {/* =================================================
                  LEFT — ACHIEVEMENTS
              ================================================= */}

              <div>

                <div className="mb-6">

                  <div className="mb-3 h-[2px] w-[30px] bg-[#B08D57]" />

                  <p className="text-[8px] font-semibold uppercase tracking-[2.5px] text-[#777777]">
                    Achievements
                  </p>

                  <h2 className="mt-1 font-serif text-2xl leading-tight text-[#111111] sm:text-3xl">
                    Professional Achievements
                  </h2>

                </div>


                {/* Achievement Strips */}

                <div className="space-y-1">

                  {/* Favourable Orders */}

                  <div className="group flex items-center gap-4 px-1 py-3.5 transition-colors duration-200 hover:bg-[#fafafa]">

                    <div className="flex h-9 w-9 shrink-0 items-center justify-center border border-[#B08D57]/40 text-[#B08D57]">
                      <FaBalanceScale className="text-xs" />
                    </div>

                    <div>

                      <h3 className="font-serif text-[15px] leading-tight text-[#111111] sm:text-base">
                        Favourable Orders
                      </h3>

                      <p className="mt-1 text-[10px] leading-4 text-[#666666] sm:text-[11px]">
                        Secured favourable judgments, interim orders, stays,
                        injunctions and bail orders.
                      </p>

                    </div>

                  </div>


                  {/* Real Estate */}

                  <div className="group flex items-center gap-4 px-1 py-3.5 transition-colors duration-200 hover:bg-[#fafafa]">

                    <div className="flex h-9 w-9 shrink-0 items-center justify-center border border-[#B08D57]/40 text-[#B08D57]">
                      <FaBuilding className="text-xs" />
                    </div>

                    <div>

                      <h3 className="font-serif text-[15px] leading-tight text-[#111111] sm:text-base">
                        Real Estate
                      </h3>

                      <p className="mt-1 text-[10px] leading-4 text-[#666666] sm:text-[11px]">
                        Represented leading real estate developers and
                        corporate clients in complex matters.
                      </p>

                    </div>

                  </div>


                  {/* Property Expertise */}

                  <div className="group flex items-center gap-4 px-1 py-3.5 transition-colors duration-200 hover:bg-[#fafafa]">

                    <div className="flex h-9 w-9 shrink-0 items-center justify-center border border-[#B08D57]/40 text-[#B08D57]">
                      <FaHome className="text-xs" />
                    </div>

                    <div>

                      <h3 className="font-serif text-[15px] leading-tight text-[#111111] sm:text-base">
                        Property Expertise
                      </h3>

                      <p className="mt-1 text-[10px] leading-4 text-[#666666] sm:text-[11px]">
                        Experience in high-value real estate transactions,
                        title due diligence and RERA compliance.
                      </p>

                    </div>

                  </div>


                  {/* Multi-Forum Practice */}

                  <div className="group flex items-center gap-4 px-1 py-3.5 transition-colors duration-200 hover:bg-[#fafafa]">

                    <div className="flex h-9 w-9 shrink-0 items-center justify-center border border-[#B08D57]/40 text-[#B08D57]">
                      <FaGavel className="text-xs" />
                    </div>

                    <div>

                      <h3 className="font-serif text-[15px] leading-tight text-[#111111] sm:text-base">
                        Multi-Forum Practice
                      </h3>

                      <p className="mt-1 text-[10px] leading-4 text-[#666666] sm:text-[11px]">
                        Handles civil, criminal, commercial, family, banking
                        and real estate disputes.
                      </p>

                    </div>

                  </div>

                </div>

              </div>


              {/* =================================================
                  RIGHT — COMMUNICATION / LANGUAGES
              ================================================= */}

              <div>

                <div className="mb-6">

                  <div className="mb-3 h-[2px] w-[30px] bg-[#B08D57]" />

                  <p className="text-[8px] font-semibold uppercase tracking-[2.5px] text-[#777777]">
                    Communication
                  </p>

                  <h2 className="mt-1 font-serif text-2xl leading-tight text-[#111111] sm:text-3xl">
                    Languages
                  </h2>

                </div>


                <p className="max-w-md text-sm leading-6 text-[#666666] sm:text-[15px]">
                  Professional communication with clients and stakeholders
                  across multiple languages.
                </p>


                <div className="mt-6 flex flex-wrap gap-2">

                  {languages.map((language) => (
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

          <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-16 lg:py-20">

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


            <div className="mt-12 grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-3">

              {/* Civil Litigation */}

              <div className="group bg-[#111111] p-7 transition-colors duration-300 hover:bg-[#181818]">

                <FaBalanceScale className="text-xl text-[#B08D57]" />

                <h3 className="mt-5 font-serif text-xl">
                  Civil Litigation
                </h3>

                <p className="mt-3 text-xs leading-6 text-[#BDBDBD]">
                  Representation in civil disputes and related proceedings.
                </p>

              </div>


              {/* Criminal Litigation */}

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


              {/* Real Estate */}

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


              {/* Commercial */}

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


              {/* Banking */}

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


              {/* Family */}

              <div className="group bg-[#111111] p-7 transition-colors duration-300 hover:bg-[#181818]">

                <FaUsers className="text-xl text-[#B08D57]" />

                <h3 className="mt-5 font-serif text-xl">
                  Family &amp; Matrimonial Law
                </h3>

                <p className="mt-3 text-xs leading-6 text-[#BDBDBD]">
                  Representation in matrimonial and family law proceedings
                  and settlements.
                </p>

              </div>


              {/* Property Due Diligence */}

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


              {/* Arbitration */}

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
                Contact Kishan Shetty S.R.
              </h2>

            </div>


            {/* Description */}

            <p className="mx-auto mb-8 max-w-2xl text-center text-xs leading-6 text-[#666666]">
              For professional enquiries and legal consultations, clients
              may contact Kishan by phone, WhatsApp, email or prior appointment.
            </p>


            {/* Contact Details */}

            <div className="grid gap-4 sm:grid-cols-3">

              {/* Phone */}

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

