import { ChevronRight } from "lucide-react";
export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#F8F7F3] py-20 sm:py-24 lg:py-16"
    >
      {/* Background */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-0 h-[400px] w-[400px] rounded-full bg-[#0B2030]/[0.03] blur-[120px]" />

        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-[#C5A45D]/[0.06] blur-[120px]" />
      </div>


      <div className="relative px-8 sm:px-10 lg:px-12 xl:px-16">

        {/* =====================================================
            TOP CONTENT
        ===================================================== */}

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-24">

          {/* LEFT */}

          <div>

            <p className="text-base leading-8 text-[#53616B] sm:text-lg">
              Effective representation begins long before a matter reaches
              the courtroom. It begins with understanding the facts,
              identifying the issues that truly matter, examining the
              evidence and developing a clear strategy around the client's
              objectives.
            </p>


            {/* Know More */}

             <a
              href="#know-more"
              className="mt-7 inline-flex items-center gap-5 rounded-full bg-[#0B2030] py-2.5 pl-6 pr-2.5 text-[10px] font-semibold uppercase tracking-[1.5px] text-[#F5F1E8] transition-all duration-300 hover:bg-[#17384D]"
            >
              <span>
                More About Me
              </span>

              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#C5A45D] text-[#0B2030]">
    <ChevronRight size={16} strokeWidth={2} />
  </span>
            </a>

          </div>


          {/* RIGHT */}

          <div>

            <p className="text-sm font-medium text-[#0B2030] sm:text-base">
              His approach is built on:
            </p>


            <div className="mt-5 space-y-3">

              <div className="flex items-center gap-3">

                <span className="text-xs text-[#C5A45D]">
                  ◆
                </span>

                <span className="text-sm text-[#596771]">
                  Thorough preparation
                </span>

              </div>


              <div className="flex items-center gap-3">

                <span className="text-xs text-[#C5A45D]">
                  ◆
                </span>

                <span className="text-sm text-[#596771]">
                  Rigorous legal research
                </span>

              </div>


              <div className="flex items-center gap-3">

                <span className="text-xs text-[#C5A45D]">
                  ◆
                </span>

                <span className="text-sm text-[#596771]">
                  Precise drafting
                </span>

              </div>


              <div className="flex items-center gap-3">

                <span className="text-xs text-[#C5A45D]">
                  ◆
                </span>

                <span className="text-sm text-[#596771]">
                  Purposeful advocacy
                </span>

              </div>

            </div>

          </div>

        </div>


        {/* =====================================================
            WHY ME
        ===================================================== */}

        <div className="relative mt-20 sm:mt-24 lg:mt-20">

          {/* Heading */}

          <div className="text-center">

            <p className="text-[10px] font-semibold uppercase tracking-[3px] text-[#C5A45D]">
              About The Advocate
            </p>

            <h2 className="mt-3 font-serif text-4xl text-[#0B2030] sm:text-5xl">
              Why Me
            </h2>

          </div>


          {/* ==================================================
              CENTER AREA
          ================================================== */}

          <div className="relative mx-auto mt-12 flex min-h-[450px] items-center justify-center sm:min-h-[500px]">


            {/* ==================================================
                TOP LEFT — ACHIEVEMENTS
            ================================================== */}

            <div className="absolute left-0 top-0 w-[160px] border border-[#0B2030]/10 bg-white p-5 shadow-sm sm:left-[5%] sm:w-[190px] lg:left-[8%]">

              <p className="text-[9px] font-semibold uppercase tracking-[2px] text-[#C5A45D]">
                01
              </p>

              <h3 className="mt-4 font-serif text-xl text-[#0B2030]">
                Professional Credentials
              </h3>

              <p className="mt-3 text-xs leading-5 text-[#68757E]">
                B.A. LL.B. (Hons.) and Advocate enrolled with the
                Karnataka State Bar Council.
              </p>

            </div>


            {/* ==================================================
                TOP RIGHT — COURTS & TRIBUNALS
            ================================================== */}

            <div className="absolute right-0 top-0 w-[160px] border border-[#0B2030]/10 bg-white p-5 shadow-sm sm:right-[5%] sm:w-[190px] lg:right-[8%]">

              <p className="text-[9px] font-semibold uppercase tracking-[2px] text-[#C5A45D]">
                02
              </p>

              <h3 className="mt-4 font-serif text-xl text-[#0B2030]">
                Court & Tribunal Practice
              </h3>

              <p className="mt-3 text-xs leading-5 text-[#68757E]">
                Practices before the High Court of Karnataka, courts,
                tribunals and regulatory forums across Karnataka.
              </p>

            </div>


            {/* ==================================================
                BOTTOM LEFT — CLIENT REPRESENTATION
            ================================================== */}

            <div className="absolute bottom-0 left-[5%] w-[160px] border border-[#0B2030]/10 bg-white p-5 shadow-sm sm:left-[15%] sm:w-[190px] lg:left-[17%]">

              <p className="text-[9px] font-semibold uppercase tracking-[2px] text-[#C5A45D]">
                03
              </p>

              <h3 className="mt-4 font-serif text-xl text-[#0B2030]">
                Client Representation
              </h3>

              <p className="mt-3 text-xs leading-5 text-[#68757E]">
                Represents individuals, businesses, corporates, developers,
                financial institutions and organisations.
              </p>

            </div>


            {/* ==================================================
                BOTTOM RIGHT — PROFESSIONAL CREDENTIALS
            ================================================== */}

            <div className="absolute bottom-0 right-[5%] w-[160px] border border-[#0B2030]/10 bg-white p-5 shadow-sm sm:right-[15%] sm:w-[190px] lg:right-[17%]">

              <p className="text-[9px] font-semibold uppercase tracking-[2px] text-[#C5A45D]">
                04
              </p>

              <h3 className="mt-4 font-serif text-xl text-[#0B2030]">
                Achievements
              </h3>

              <p className="mt-3 text-xs leading-5 text-[#68757E]">
                Secured favourable judgments, interim orders, stays,
                injunctions and bail orders in various matters.
              </p>

            </div>


            {/* ==================================================
                CENTER IMAGE
            ================================================== */}

            <div className="relative z-10 flex h-[380px] w-[270px] items-end justify-center sm:h-[450px] sm:w-[320px]">

              {/* Gold Circle */}

              <div className="absolute bottom-0 h-[270px] w-[270px] rounded-full bg-[#C5A45D]/10" />


              {/* Image */}

              <img
                src="/yashwanth.png"
                alt="Yashwanth Ovarsu - Advocate"
                className="relative z-10 h-full w-full object-contain object-bottom"
              />

            </div>

          </div>

        </div>


      </div>
    </section>
  );
}