import { ArrowUpRight } from "lucide-react";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28"
    >

      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0">

        <div className="absolute left-[-180px] top-[-150px] h-[380px] w-[380px] rounded-full bg-black/[0.025] blur-[120px]" />

        <div className="absolute bottom-[-150px] right-[-120px] h-[380px] w-[380px] rounded-full bg-[#C5A45D]/[0.06] blur-[120px]" />

      </div>


      <div className="relative px-8 sm:px-10 lg:px-12 xl:px-16">

        {/* =====================================================
            MAIN ABOUT CONTENT
        ===================================================== */}

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">


          {/* ==================================================
              LEFT — IMAGE
          ================================================== */}

          <div className="relative flex justify-center lg:justify-start">

            {/* Gold Offset Frame */}

            <div
              className="absolute bottom-[-12px] right-[4%] h-full w-[88%] border border-[#C5A45D] sm:right-[7%] lg:right-[8%]"
            />

            {/* Image */}

            <div
              className="relative z-10 overflow-hidden bg-white"
            >

              <img
                src="/falcon-lex-legal.png"
                alt="Falcon Lex Legal"
                className="block h-[280px] w-[88%] object-cover object-center sm:h-[330px] lg:h-[360px]"
              />

            </div>

          </div>


          {/* ==================================================
              RIGHT — CONTENT
          ================================================== */}

          <div className="lg:-mt-6">

            {/* Section Label */}

            <p
              className="text-[10px] font-semibold uppercase tracking-[3px] text-[#C5A45D]"
            >
              About Falcon Lex Legal
            </p>


            {/* Main Heading */}

            <h2
              className="mt-4 font-serif text-4xl leading-[1.08] tracking-[-0.5px] text-[#111111] sm:text-5xl"
            >
              A considered approach
              <br />
              to legal practice.
            </h2>


            {/* Gold Accent */}

            <div className="mt-5 h-[2px] w-[45px] bg-[#C5A45D]" />


            {/* Main Description */}

            <p
             className="mt-6 text-sm leading-7 text-[#111111] sm:text-[15px]"
            >
              Falcon Lex Legal is a Bengaluru-based law firm focused on
              thoughtful legal counsel, strategic representation and
              effective advocacy.
            </p>


            {/* Supporting Description */}

            <p
              className="mt-4 text-sm leading-7 text-[#111111] sm:text-[15px]"
            >
              The firm approaches each matter with careful preparation,
              sound legal analysis and a clear understanding of the
              client's objectives.
            </p>


            {/* ==================================================
                MORE ABOUT BUTTON
            ================================================== */}

            <a
              href="#more-about-falcon-lex-legal"
              className="group mt-7 inline-flex items-center gap-3 border border-[#111111] bg-[#111111] px-5 py-3 text-[10px] font-semibold uppercase tracking-[1.5px] text-white transition-all duration-300 hover:bg-white hover:text-[#111111]"
            >

              <span>
                More About Us
              </span>


              {/* Lucide Symbol Icon */}

              <ArrowUpRight
                size={16}
                strokeWidth={1.6}
                className="text-[#C5A45D] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />

            </a>

          </div>

        </div>

      </div>

    </section>
  );
}