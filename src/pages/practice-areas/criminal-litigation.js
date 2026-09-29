import Link from "next/link";
import Footer from "@/components/Footer";

export default function CriminalLitigation() {
  
  const services = [
  {
    number: "01",
    title: "Case Assessment",
    text: "Review of facts, documents and legal issues to understand the matter and identify the appropriate legal course of action.",
  },
  {
    number: "02",
    title: "Legal Research & Strategy",
    text: "Review of applicable law and relevant legal issues to develop a structured approach suited to the circumstances of the matter.",
  },
  {
    number: "03",
    title: "Drafting & Documentation",
    text: "Preparation and review of petitions, applications, complaints, affidavits and other legal documents as required.",
  },
  {
    number: "04",
    title: "Court Representation",
    text: "Representation before appropriate courts and forums, including assistance during hearings and related proceedings.",
  },
  {
    number: "05",
    title: "Hearings & Arguments",
    text: "Assistance with preparation for hearings, presentation of legal submissions and proceedings before the appropriate court or forum.",
  },
  {
    number: "06",
    title: "Appeals & Further Proceedings",
    text: "Legal assistance in appropriate appellate, revision and other further proceedings arising from the matter.",
  },
];

  const faqs = [
    {
      question: "What is criminal litigation?",
      answer:
        "Criminal litigation generally refers to legal proceedings arising from alleged offences and may involve investigation, complaints, bail proceedings, trials, appeals and other related criminal proceedings.",
    },
    {
      question: "What types of criminal matters do you handle?",
      answer:
        "Matters may include criminal complaints, FIR-related proceedings, bail applications, anticipatory bail, criminal trials, discharge applications, appeals, revisions, quashing proceedings and cheque bounce matters.",
    },
    {
      question: "Can I seek legal advice before filing a criminal complaint?",
      answer:
        "Yes. The facts and available documents can be reviewed before initiating proceedings to understand the legal position, available remedies and appropriate course of action.",
    },
    {
      question: "Do you assist with bail and anticipatory bail matters?",
      answer:
        "Assistance may be available for appropriate regular bail, anticipatory bail and related proceedings depending on the facts, stage and circumstances of the matter.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#0A0A0A] text-[#F5F1E8]">

      {/* =========================================================
          HERO — SAME AS CIVIL
      ========================================================= */}
      <section className="relative min-h-[520px] overflow-hidden bg-[#0A0A0A]">

        <img
          src="/criminal-litigation.jpg"
          alt="Criminal Litigation"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/95 via-[#0A0A0A]/75 to-[#0A0A0A]/30" />

        <div className="relative z-10 mx-auto flex min-h-[520px] max-w-7xl items-center px-6 py-20 sm:px-10 lg:px-12">
          <div className="max-w-3xl">

            <Link
              href="/#practice-areas"
              className="mb-8 inline-flex items-center text-xs font-medium uppercase tracking-[2px] text-[#C5A45D] transition hover:text-[#F5F1E8]"
            >
              ← All Practice Areas
            </Link>

            <p className="text-[11px] font-semibold uppercase tracking-[3px] text-[#C5A45D]">
              Legal Services
            </p>

            <h1 className="mt-4 font-serif text-5xl leading-tight text-[#F5F1E8] sm:text-6xl lg:text-7xl">
              Criminal Litigation
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#D0D6D9] sm:text-lg">
              Representation in criminal proceedings, bail matters, trials
              and related court proceedings with a structured and practical
              legal approach.
            </p>

          </div>
        </div>
      </section>


      {/* =========================================================
          OVERVIEW + MATTERS WE HANDLE — SAME AS CIVIL
      ========================================================= */}
      <section className="bg-white py-20 sm:py-12">
        <div className="mx-auto px-6 sm:px-10 lg:px-12">

          <div className="grid gap-14 lg:grid-cols-2 lg:gap-24">

            {/* =====================================================
                LEFT — OVERVIEW
            ===================================================== */}
            <div>

              <p className="text-[10px] font-semibold uppercase tracking-[3px] text-[#C5A45D]">
                Overview
              </p>

              <h2 className="mt-4 font-serif text-4xl leading-tight text-[#0A0A0A] sm:text-5xl">
                Criminal Litigation
              </h2>

              <div className="mt-7 h-px w-16 bg-[#C5A45D]" />

              <div className="mt-8">

                <p className="text-[15px] leading-8 text-[#444444]">
                  Criminal litigation concerns proceedings arising from
                  alleged offences and may involve complaints, investigation,
                  bail proceedings, trials, evidence, appeals and other
                  criminal matters. Effective representation requires careful
                  assessment of the facts, documents, applicable law and
                  procedural requirements.
                </p>

                <p className="mt-6 text-[15px] leading-8 text-[#444444]">
                  Falcon Lex Legal provides legal assistance and representation
                  in criminal matters from initial case assessment and drafting
                  through court proceedings, bail applications, trials and
                  appropriate appellate or revision proceedings.
                </p>

              </div>

            </div>


            {/* =====================================================
                RIGHT — MATTERS WE HANDLE
            ===================================================== */}
            <div className="rounded-2xl bg-[#0A0A0A] p-8 sm:p-10 lg:p-5">

              {/* Label */}
              <p className="text-[10px] font-semibold uppercase tracking-[3px] text-[#C5A45D]">
                Matters We Handle
              </p>

              {/* Heading */}
              <h2 className="mt-1 font-serif text-3xl leading-tight text-white sm:text-4xl">
                Criminal Litigation Matters
              </h2>

              {/* Gold divider */}
              <div className="mt-7 h-px w-16 bg-[#C5A45D]" />

              {/* Matters List */}
              <div className="mt-8 grid gap-x-10 gap-y-5 sm:grid-cols-2">

                {[
                  "Criminal Complaints",
                  "FIR & Criminal Proceedings",
                  "Bail Applications",
                  "Anticipatory Bail",
                  "Regular Bail",
                  "Quashing of FIRs",
                  "Criminal Trials",
                  "Discharge Applications",
                  "Acquittal Matters",
                  "Criminal Appeals",
                  "Criminal Revisions",
                  "Cheque Bounce Cases",
                  "White-Collar Crime Matters",
                ].map((matter) => (
                  <div
                    key={matter}
                    className="group flex items-start gap-3"
                  >
                    {/* Gold bullet */}
                    <span className="mt-[8px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#C5A45D]" />

                    {/* Matter text */}
                    <span className="text-[14px] leading-6 text-white/80 transition-colors duration-200 group-hover:text-[#C5A45D]">
                      {matter}
                    </span>
                  </div>
                ))}

              </div>

            </div>

          </div>
        </div>
      </section>


      {/* =========================================================
          OUR SERVICES — SAME AS CIVIL
      ========================================================= */}
      <section className="bg-white py-20 sm:py-10">
        <div className="mx-auto px-6 sm:px-10 lg:px-12">

          {/* CENTER HEADING */}
          <div className="mx-auto text-center">

            <p className="text-[11px] font-semibold uppercase tracking-[3px] text-[#C5A45D]">
              Our Services
            </p>

            <h2 className="mt-4 font-serif text-3xl leading-tight text-[#0A0A0A] sm:text-4xl">
              Legal Assistance & Representation
            </h2>

            <p className="mx-auto mt-5 text-sm leading-7 text-[#666666]">
              Support across the different stages of criminal litigation,
              from initial assessment and drafting to court proceedings,
              bail matters and appellate proceedings.
            </p>

          </div>


          {/* =====================================================
              SERVICES — 3 COLUMN GRID
          ===================================================== */}
          <div className="mt-8 grid gap-4 md:grid-cols-3">

            {services.map((service) => (
              <div
                key={service.number}
                className="group border border-[#D8D4CB] px-5 py-5 transition-all duration-300 hover:border-[#C5A45D]"
              >

                <div className="grid grid-cols-[45px_1fr] gap-4">

                  {/* NUMBER */}
                  <div>
                    <span className="text-[10px] font-semibold tracking-[2px] text-[#C5A45D]">
                      {service.number}
                    </span>
                  </div>


                  {/* CONTENT */}
                  <div>

                    <h3 className="font-serif text-xl leading-tight text-[#0A0A0A] transition-colors duration-300 group-hover:text-[#C5A45D]">
                      {service.title}
                    </h3>

                    <p className="mt-2 text-[13px] leading-6 text-[#666666]">
                      {service.text}
                    </p>

                  </div>

                </div>

              </div>
            ))}

          </div>

        </div>
      </section>


      {/* =========================================================
          APPROACH — BLACK / SAME AS CIVIL
      ========================================================= */}
     <section className="bg-[#0A0A0A] py-10 sm:py-12">
  <div className="mx-auto px-6 sm:px-10 lg:px-12">
    <div className="grid gap-8 lg:grid-cols-2 lg:gap-20">
      <div>
        <p className="text-[10px] font-semibold uppercase tracking-[3px] text-[#C5A45D]">
          Litigation Approach
        </p>

        <h2 className="mt-4 font-serif text-3xl leading-tight text-[#F5F1E8] sm:text-4xl">
          Strategic Defence and Effective Criminal Representation
        </h2>
      </div>

      <div className="space-y-4 text-sm leading-7 text-[#AAB7BF]">
        <p>
          Criminal proceedings can involve significant procedural
          requirements, documentation and legal issues. A careful review
          helps identify the relevant facts, issues and available legal
          remedies.
        </p>

        <p>
          Our approach focuses on understanding the client's objectives,
          reviewing available documents and preparing the matter for the
          appropriate legal proceedings while keeping the client informed
          throughout the process.
        </p>
      </div>
    </div>
  </div>
</section>
      {/* =========================================================
          FAQ — SAME AS CIVIL
      ========================================================= */}
      <section className="bg-white py-20 sm:py-17">

        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">

          <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr] lg:gap-24">

            {/* LEFT */}
            <div>

              <p className="text-[10px] font-semibold uppercase tracking-[3px] text-[#C5A45D]">
                FAQs
              </p>

              <h2 className="mt-4 font-serif text-4xl leading-tight text-[#0A0A0A] sm:text-5xl">
                Criminal Litigation
                <br />
                FAQs
              </h2>

              <p className="mt-5 max-w-sm text-sm leading-7 text-[#666666]">
                Answers to some common questions regarding criminal litigation
                matters and legal representation.
              </p>

            </div>


            {/* RIGHT */}
            <div className="divide-y divide-[#D8D4CB] border-y border-[#D8D4CB]">

              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group py-5"
                >

                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-serif text-lg text-[#0A0A0A]">

                    {faq.question}

                    <span className="shrink-0 text-xl font-light text-[#C5A45D] transition-transform duration-300 group-open:rotate-45">
                      +
                    </span>

                  </summary>

                  <p className="mt-4 max-w-3xl text-sm leading-7 text-[#666666]">
                    {faq.answer}
                  </p>

                </details>
              ))}

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          CONTACT — SAME AS CIVIL
      ========================================================= */}
      <section className="bg-[#0A0A0A]">

        <div className="mx-auto max-w-7xl px-6 py-8 sm:px-10 lg:px-12">

          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">

            <div>

              <p className="text-[10px] font-semibold uppercase tracking-[3px] text-[#C5A45D]">
                Legal Consultation
              </p>

              <h2 className="mt-2 font-serif text-2xl text-[#F5F1E8] sm:text-3xl">
                Discuss Your Criminal Litigation Matter
              </h2>

            </div>


            <Link
              href="/#contact"
              className="inline-flex shrink-0 items-center justify-center border border-[#C5A45D] bg-[#C5A45D] px-7 py-3 text-[11px] font-semibold uppercase tracking-[2px] text-[#0A0A0A] transition hover:bg-transparent hover:text-[#C5A45D]"
            >
              Book a Consultation
            </Link>

          </div>

        </div>

      </section>


      {/* =========================================================
          FOOTER
      ========================================================= */}
      <Footer />

    </main>
  );
}