import Header from "../components/Header";
import Footer from "../components/Footer";

export default function About() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-white text-[#111111]">

        {/* =====================================================
            HERO
        ===================================================== */}

{/* HERO */}
<section className="relative min-h-[620px] overflow-hidden bg-[#111111] text-white">

  {/* Hero Image */}
  <img
    src="falcon-lex-legal-hero.png"
    alt="Falcon Lex Legal Bengaluru law firm"
    className="absolute inset-0 h-full w-full object-cover object-center"
  />

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/50" />

  {/* Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/40" />

  {/* Hero Content */}
  <div className="relative z-10 mx-auto flex min-h-[620px] max-w-7xl items-center px-8 py-20 sm:px-10 lg:px-16 lg:py-28">
    <div className="max-w-4xl">

      <p className="text-[9px] font-semibold uppercase tracking-[3px] text-[#C5A45D]">
        About Falcon Lex Legal · Bengaluru
      </p>

      <h1 className="mt-5 max-w-4xl font-serif text-5xl leading-[1.05] tracking-[-1px] sm:text-6xl lg:text-7xl">
        Legal knowledge.
        <br />
        Strategic representation.
      </h1>

      <div className="mt-7 h-[2px] w-[45px] bg-[#C5A45D]" />

      <p className="mt-7 max-w-2xl text-sm leading-7 text-[#D0D0D0] sm:text-base">
        Falcon Lex Legal is a Bengaluru-based law firm focused on
        litigation, real estate, dispute resolution and strategic legal
        representation across Karnataka.
      </p>

    </div>
  </div>
</section>


        {/* =====================================================
            ABOUT FALCON LEX LEGAL
        ===================================================== */}

        <section className="bg-white">

          <div className="mx-auto max-w-7xl px-8 py-16 sm:px-10 lg:px-16 lg:py-24">

            <div className="grid gap-12 lg:grid-cols-[38%_62%] lg:gap-20">

              {/* LEFT */}

              <div>

                <div className="h-[2px] w-[38px] bg-[#C5A45D]" />

                <p className="mt-4 text-[9px] font-semibold uppercase tracking-[3px] text-[#777777]">
                  The Firm
                </p>

                <h2 className="mt-3 max-w-md font-serif text-3xl leading-tight sm:text-4xl">
                  About Falcon Lex Legal
                </h2>

              </div>


              {/* RIGHT */}

              <div>

                <p className="text-sm leading-8 text-[#555555] sm:text-base">
                  Falcon Lex Legal is a Bengaluru-based law firm with a strong
                  focus on litigation, real estate, dispute resolution and
                  strategic legal representation. The firm represents
                  individuals, businesses, corporates, real estate developers,
                  financial institutions and other clients before courts,
                  tribunals and regulatory forums across Karnataka.
                </p>

                <p className="mt-6 text-sm leading-8 text-[#555555] sm:text-base">
                  At Falcon Lex Legal, we believe that law is not merely about
                  knowing the law; it is about knowing how to use it effectively.
                  Our practice is built around rigorous legal research,
                  meticulous preparation, practical legal advice and focused
                  advocacy.
                </p>

                <p className="mt-6 text-sm leading-8 text-[#555555] sm:text-base">
                  Every matter is approached with a clear understanding of the
                  client's circumstances, objectives and the legal issues that
                  truly matter. The firm focuses on developing practical and
                  strategic legal solutions suited to the particular demands
                  of each matter.
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            OUR APPROACH
        ===================================================== */}

        <section className="bg-[#111111] text-white">

          <div className="mx-auto max-w-7xl px-8 py-16 sm:px-10 lg:px-16 lg:py-24">

            <div className="grid gap-12 lg:grid-cols-[40%_60%] lg:gap-20">

              {/* LEFT */}

              <div>

                <div className="h-[2px] w-[38px] bg-[#C5A45D]" />

                <p className="mt-4 text-[9px] font-semibold uppercase tracking-[3px] text-[#C5A45D]">
                  Our Approach
                </p>

                <h2 className="mt-3 max-w-md font-serif text-3xl leading-tight sm:text-4xl">
                  Strategy over
                  <br />
                  routine representation.
                </h2>

              </div>


              {/* RIGHT */}

              <div>

                <p className="text-sm leading-8 text-[#BDBDBD] sm:text-base">
                  Falcon Lex Legal approaches every matter by understanding
                  the facts in depth, identifying the decisive legal issues,
                  anticipating the opposing case and developing a legal
                  strategy aligned with the client's objectives.
                </p>

                <p className="mt-6 text-sm leading-8 text-[#BDBDBD] sm:text-base">
                  Effective advocacy is viewed not simply as presenting
                  arguments before a Court, but as understanding which
                  arguments matter, when they must be raised and how they
                  should be presented.
                </p>

                <div className="mt-8 border-l-2 border-[#C5A45D] pl-5">

                  <p className="font-serif text-lg italic text-white">
                    "Prepare thoroughly. Think strategically. Advocate with
                    purpose."
                  </p>

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            WHAT DEFINES US
        ===================================================== */}

        <section className="bg-[#F8F7F4]">

          <div className="mx-auto max-w-7xl px-8 py-16 sm:px-10 lg:px-16 lg:py-24">

            <div className="grid gap-12 lg:grid-cols-[40%_60%] lg:gap-20">

              {/* LEFT */}

              <div>

                <div className="h-[2px] w-[38px] bg-[#C5A45D]" />

                <p className="mt-4 text-[9px] font-semibold uppercase tracking-[3px] text-[#777777]">
                  What Defines Us
                </p>

                <h2 className="mt-3 max-w-md font-serif text-3xl leading-tight sm:text-4xl">
                  Professional.
                  <br />
                  Practical.
                  <br />
                  Purposeful.
                </h2>

              </div>


              {/* RIGHT */}

              <div className="space-y-8">

                <div>
                  <h3 className="font-serif text-xl">
                    Professional Integrity
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-[#666666]">
                    A commitment to professionalism, confidentiality,
                    integrity and ethical legal practice.
                  </p>
                </div>


                <div>
                  <h3 className="font-serif text-xl">
                    Client-Focused Representation
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-[#666666]">
                    Legal representation built around understanding the
                    client's circumstances, interests and objectives.
                  </p>
                </div>


                <div>
                  <h3 className="font-serif text-xl">
                    Practical Legal Advice
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-[#666666]">
                    Clear and practical legal guidance designed to help
                    clients understand their position and available options.
                  </p>
                </div>


                <div>
                  <h3 className="font-serif text-xl">
                    Strategic Representation
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-[#666666]">
                    Careful preparation, legal research and strategic
                    thinking brought together for each matter.
                  </p>
                </div>

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            BENGALURU LEGAL FIRM
        ===================================================== */}

        <section className="bg-white">

          <div className="mx-auto max-w-4xl px-8 py-16 text-center sm:px-10 lg:py-20">

            <p className="text-[9px] font-semibold uppercase tracking-[3px] text-[#C5A45D]">
              Falcon Lex Legal · Bengaluru
            </p>

            <h2 className="mt-3 font-serif text-3xl sm:text-4xl">
              Professional Legal Counsel
            </h2>

            <p className="mt-6 text-sm leading-8 text-[#666666] sm:text-base">
              Falcon Lex Legal provides professional legal counsel and
              representation in Bengaluru and across Karnataka. The firm's
              approach combines legal knowledge, courtroom experience,
              strategic thinking, meticulous preparation and practical advice
              to address the particular requirements of each client and matter.
            </p>

          </div>

        </section>


        {/* =====================================================
            GET IN TOUCH
        ===================================================== */}

        <section className="bg-[#111111] text-white">

          <div className="mx-auto max-w-4xl px-8 py-16 text-center sm:px-10 lg:py-20">

            <p className="text-[9px] font-semibold uppercase tracking-[3px] text-[#C5A45D]">
              Falcon Lex Legal
            </p>

            <h2 className="mt-3 font-serif text-3xl sm:text-4xl">
              Discuss Your Legal Matter
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#BDBDBD]">
              For professional legal enquiries, consultations and
              representation, contact Falcon Lex Legal.
            </p>

            <a
              href="/#contact"
              className="mt-7 inline-flex border border-[#C5A45D] px-6 py-3 text-[10px] font-semibold uppercase tracking-[2px] text-[#C5A45D] transition-colors duration-300 hover:bg-[#C5A45D] hover:text-[#111111]"
            >
              Get In Touch
            </a>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}