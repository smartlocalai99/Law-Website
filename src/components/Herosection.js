import { ArrowUpRight, Phone } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#0A0A0A] pt-[72px]"
    >
      {/* =====================================================
          BACKGROUND IMAGE
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0">

        <img
          src="/hero-law.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        {/* Dark cinematic overlay */}
        <div className="absolute inset-0 bg-black/70" />

        {/* Left side darker for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/65 to-black/45" />

        {/* Bottom darkness */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/40" />

      </div>


      <div className="relative px-8 sm:px-10 lg:px-12 xl:px-16">

        {/* =====================================================
            HERO CONTENT
        ===================================================== */}

        <div className="grid min-h-[calc(100vh-72px)] items-center gap-12 pb-[55px] pt-10 lg:grid-cols-2 lg:gap-16">

          {/* ==================================================
              LEFT CONTENT
          ================================================== */}

          <div className="relative z-10">

            {/* FIRM NAME */}

            <div className="mb-8">

              <p className="falcon-title text-[11px] font-semibold uppercase tracking-[4px] text-[#C5A45D]">
                Falcon Lex Legal
              </p>

            </div>


            {/* ==================================================
                MAIN HEADING
            ================================================== */}

            <h1 className="max-w-[720px] font-serif text-[48px] leading-[0.98] tracking-[-1.5px] text-[#F5F1E8] sm:text-[58px] lg:text-[64px] xl:text-[72px]">

              Strategic Legal
              <br />

              Representation
              <br />

              <span className="text-[#C5A45D]">
                With Purpose.
              </span>

            </h1>


            {/* ==================================================
                DESCRIPTION
            ================================================== */}

            <div className="mt-10 flex max-w-[820px]">

              <div className="mr-7 w-[1px] shrink-0 bg-[#C5A45D]" />

              <p className="max-w-[760px] text-[14px] leading-7 text-[#D0D0D0] sm:text-[15px]">

                Thoughtful legal counsel, rigorous preparation and focused
                representation across litigation, property, commercial and
                dispute-related matters.

              </p>

            </div>


            {/* ==================================================
                ADVOCATE NAMES
            ================================================== */}

            <div className="mt-10 flex items-center">

              {/* Yashwanth */}

              <div className="group pr-10">

                <p className="font-serif text-[22px] leading-none text-[#F5F1E8] transition-colors duration-300 group-hover:text-[#C5A45D]">
                  Yashwanth Ovarsu
                </p>

                <p className="mt-3 text-[9px] font-medium uppercase tracking-[2px] text-[#C5A45D]">
                  Founding Advocate
                </p>

              </div>


              {/* Divider */}

              <div className="h-[54px] w-px bg-white/20" />


              {/* Krishna */}

              <div className="group pl-10">

                <p className="font-serif text-[22px] leading-none text-[#F5F1E8] transition-colors duration-300 group-hover:text-[#C5A45D]">
                  Kishan Shetty S.R
                </p>

                <p className="mt-3 text-[9px] font-medium uppercase tracking-[2px] text-[#C5A45D]">
                  Advocate
                </p>

              </div>

            </div>


            {/* ==================================================
                CTA BUTTONS
            ================================================== */}

            <div className="mt-10 flex flex-wrap items-center gap-5">

              {/* Schedule Consultation */}

              <a
                href="#contact"
                className="group inline-flex h-[61px] items-center gap-7 bg-[#C5A45D] px-8 text-[10px] font-semibold uppercase tracking-[2px] text-[#0A0A0A] transition-all duration-300 hover:bg-[#D4B56B]"
              >

                <span>
                  Schedule a Consultation
                </span>

                <span className="flex h-7 w-7 items-center justify-center transition-transform duration-300 group-hover:translate-x-1">

                  <ArrowUpRight
                    size={18}
                    strokeWidth={1.7}
                  />

                </span>

              </a>


              {/* Call Us */}

              <a
                href="tel:+919XXXXXXXXX"
                className="group inline-flex h-[61px] items-center gap-4 border border-white/25 px-8 text-[10px] font-semibold uppercase tracking-[2px] text-[#F5F1E8] transition-all duration-300 hover:border-[#C5A45D] hover:text-[#C5A45D]"
              >

                <Phone
                  size={18}
                  strokeWidth={1.5}
                />

                <span>
                  Call Us
                </span>

              </a>

            </div>

          </div>


          <div className="relative hidden lg:block" />

        </div>


        {/* =====================================================
            BOTTOM TICKER
            KEPT EXACTLY AS PROVIDED
        ===================================================== */}

        <div className="absolute bottom-0 left-0 h-[40px] w-full overflow-hidden border-t border-white/10 bg-[#111111]">

          <div className="ticker-wrapper">

            <div className="ticker-track">

              <span>CIVIL LITIGATION</span>
              <span className="divider">✦</span>

              <span>CRIMINAL LITIGATION</span>
              <span className="divider">✦</span>

              <span>REAL ESTATE & PROPERTY LAW</span>
              <span className="divider">✦</span>

              <span>RERA LITIGATION</span>
              <span className="divider">✦</span>

              <span>COMMERCIAL LITIGATION</span>
              <span className="divider">✦</span>

              <span>BANKING & SARFAESI</span>
              <span className="divider">✦</span>

              <span>FAMILY & MATRIMONIAL LAW</span>
              <span className="divider">✦</span>

              <span>ARBITRATION & MEDIATION</span>
              <span className="divider">✦</span>

              <span>LEGAL ADVISORY</span>
              <span className="divider">✦</span>

            </div>


            <div className="ticker-track">

              <span>CIVIL LITIGATION</span>
              <span className="divider">✦</span>

              <span>CRIMINAL LITIGATION</span>
              <span className="divider">✦</span>

              <span>REAL ESTATE & PROPERTY LAW</span>
              <span className="divider">✦</span>

              <span>RERA LITIGATION</span>
              <span className="divider">✦</span>

              <span>COMMERCIAL LITIGATION</span>
              <span className="divider">✦</span>

              <span>BANKING & SARFAESI</span>
              <span className="divider">✦</span>

              <span>FAMILY & MATRIMONIAL LAW</span>
              <span className="divider">✦</span>

              <span>ARBITRATION & MEDIATION</span>
              <span className="divider">✦</span>

              <span>LEGAL ADVISORY</span>
              <span className="divider">✦</span>

            </div>

          </div>

        </div>

      </div>


    </section>
  );
}