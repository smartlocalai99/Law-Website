export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#0B2030] pt-[72px]"
    >
      {/* ================= BACKGROUND ================= */}

      <div className="absolute inset-0">
        <div className="absolute -left-52 top-0 h-[700px] w-[700px] rounded-full bg-[#17384D]/30 blur-[160px]" />

        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-[#C5A45D]/5 blur-[140px]" />
      </div>


      <div className="relative mx-auto px-8 sm:px-10 lg:px-12 xl:px-16">

        {/* =====================================================
            HERO CONTENT
        ===================================================== */}

        <div className="grid min-h-[calc(100vh-72px)] items-center gap-12 pb-[65px] pt-12 lg:grid-cols-2 lg:gap-16">


          {/* ==================================================
              LEFT CONTENT
          ================================================== */}

          <div className="relative z-10">

            {/* Gold Accent */}

            <div className="mb-5 h-[2px] w-[60px] bg-[#C5A45D]" />


            {/* ================= IDENTIFICATION ================= */}

            <div className="flex items-center gap-3">

              <span className="text-[10px] font-semibold uppercase tracking-[3px] text-[#C5A45D] sm:text-[11px]">
                Yashwanth Ovarsu
              </span>

              <span className="text-[#C5A45D]">
                ✦
              </span>

              <span className="text-[10px] font-medium uppercase tracking-[2.5px] text-[#B5C0C8] sm:text-[11px]">
                Founding Advocate
              </span>

            </div>


            {/* ==================================================
                MAIN HEADING
            ================================================== */}

            <h1 className="mt-7 font-serif text-[30px] leading-[1.03] tracking-[-1px] text-[#F5F1E8] sm:text-[58px] lg:text-[60px] xl:text-[50px]">

              Strategic
              <br />

              Counsel.
              <br />

              Strong
              <br />

              Representation.

            </h1>


            {/* ==================================================
                PROFESSIONAL TITLE
            ================================================== */}

            <p className="mt-7 text-[10px] font-semibold uppercase tracking-[2px] text-[#C5A45D] sm:text-[11px]">

              Criminal, Matrimonial & Real Estate Counsel

            </p>


            {/* ==================================================
                SHORT INTRODUCTION
            ================================================== */}

            <p className="mt-6 text-[15px] leading-8 text-[#B8C2C9] sm:text-[16px]">

              Yashwanth Ovarsu is the founding advocate of
              Falcon Lex Legal, providing strategic legal
              counsel, litigation and dispute resolution services.

            </p>


            {/* ==================================================
                CTA
            ================================================== */}

            <div className="mt-8">

              <a
                href="#contact"
                className="inline-flex h-12 items-center rounded-full bg-[#C5A45D] px-7 text-[10px] font-semibold uppercase tracking-[1.5px] text-[#102437] transition-all duration-300 hover:bg-[#D4B56B]"
              >
                Schedule a Consultation
              </a>

            </div>


            {/* ==================================================
                LOCATION
            ================================================== */}

            <div className="mt-8 flex items-center gap-3 text-[10px] uppercase tracking-[1.8px] text-[#8E9EA8]">

              <span className="text-[#C5A45D]">
                ●
              </span>

              <span>
                Bengaluru, Karnataka
              </span>

            </div>

          </div>


          {/* ==================================================
              RIGHT SIDE IMAGE
          ================================================== */}

          <div className="relative flex items-center justify-center lg:justify-end">

            {/* Decorative Corner */}

            <div className="absolute right-0 top-[-25px] hidden h-[85px] w-[85px] border-r border-t border-[#C5A45D] lg:block" />


            {/* Image Container */}

            <div className="relative w-full">

              {/* Offset Gold Border */}

              <div className="absolute inset-0 translate-x-5 translate-y-5 border border-[#C5A45D]/40" />


              {/* Main Image */}

              <div className="relative overflow-hidden">

                <img
                  src="/yashwanth.png"
                  alt="Yashwanth Ovarsu - Founding Advocate"
                  className="relative z-10 block h-[300px] w-full object-cover object-top sm:h-[320px] lg:h-[400px] xl:h-[640px]"
                />


                {/* Image Overlay */}

                <div className="absolute inset-0 z-20 bg-gradient-to-t from-[#071722]/50 via-transparent to-transparent" />

              </div>


              {/* Lawyer Name Plate */}

              <div className="absolute bottom-0 left-0 z-30 bg-[#0B2030] px-6 py-4">

                <p className="text-[11px] font-semibold uppercase tracking-[2px] text-[#C5A45D]">
                  Yashwanth Ovarsu
                </p>

                <p className="mt-1 text-[9px] uppercase tracking-[1.5px] text-[#A6B3BC]">
                  Founding Advocate
                </p>

              </div>

            </div>

          </div>

        </div>


        {/* =====================================================
            BOTTOM MOVING STRIP
            DO NOT REMOVE
        ===================================================== */}

        <div className="absolute bottom-0 left-0 h-[40px] w-full overflow-hidden  bg-[#0B2030]">

          <div className="ticker-wrapper">

            {/* Track 1 */}

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


            {/* Track 2 */}

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