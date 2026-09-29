import Link from "next/link";
import Footer from "@/components/Footer";

export default function CivilLitigation() {
  
  const services = [
    {
      number: "01",
      title: "Case Assessment",
      text: "Review of facts, documents and legal issues to understand the nature of the dispute and available remedies.",
    },
    {
      number: "02",
      title: "Pleadings & Drafting",
      text: "Preparation and review of plaints, written statements, applications, affidavits and related documents.",
    },
    {
      number: "03",
      title: "Court Representation",
      text: "Representation before appropriate courts and forums in civil suits, applications and related proceedings.",
    },
    {
      number: "04",
      title: "Interim Relief",
      text: "Assistance with injunctions, stay applications and other interim reliefs during civil proceedings.",
    },
    {
      number: "05",
      title: "Evidence & Arguments",
      text: "Assistance during evidence, hearings, cross-examination and legal arguments in appropriate matters.",
    },
    {
      number: "06",
      title: "Appeals & Revisions",
      text: "Legal assistance in appropriate civil appeals, revisions and further proceedings.",
    },
  ];

  const faqs = [
    {
      question: "What is civil litigation?",
      answer:
        "Civil litigation generally refers to legal proceedings concerning disputes between parties involving civil rights, obligations, property, contracts, recovery claims and other non-criminal matters.",
    },
    {
      question: "What types of civil matters do you handle?",
      answer:
        "Matters may include civil suits and appeals, recovery claims, injunctions, declaratory suits, specific performance, partition, property disputes, possession matters, execution proceedings and related applications.",
    },
    {
      question: "Can I seek legal advice before filing a civil case?",
      answer:
        "Yes. A matter can be reviewed before proceedings are initiated to understand the facts, documents, potential remedies and appropriate legal course of action.",
    },
    {
      question: "Do you assist with civil appeals and revisions?",
      answer:
        "Assistance may be available for appropriate civil appeals, revisions and related proceedings depending on the nature and stage of the matter.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#0A0A0A] text-[#F5F1E8]">

      {/* =========================================================
          HERO — KEEP AS IT IS
      ========================================================= */}
      <section className="relative min-h-[520px] overflow-hidden bg-[#0A0A0A]">

        <img
          src="/civil-litigation.jpg"
          alt="Civil Litigation"
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
              Civil Litigation
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#D0D6D9] sm:text-lg">
              Representation in civil disputes, recovery matters and related
              court proceedings with a structured and practical legal approach.
            </p>

          </div>
        </div>
      </section>


      {/* =========================================================
    OVERVIEW + MATTERS WE HANDLE — COMBINED
========================================================= */}
<section className="bg-white py-20 sm:py-12">
  <div className="mx-auto  px-6 sm:px-10 lg:px-12">

    <div className="grid gap-14 lg:grid-cols-2 lg:gap-24">

      {/* =====================================================
          LEFT — OVERVIEW
      ===================================================== */}
      <div>

        <p className="text-[10px] font-semibold uppercase tracking-[3px] text-[#C5A45D]">
          Overview
        </p>

        <h2 className="mt-4 font-serif text-4xl leading-tight text-[#0A0A0A] sm:text-5xl">
          Civil Litigation
        </h2>

        <div className="mt-7 h-px w-16 bg-[#C5A45D]" />

        <div className="mt-8 ">

          <p className="text-[15px] leading-8 text-[#444444]">
            Civil litigation concerns disputes involving legal rights,
            obligations, property, contracts, recovery claims and other
            civil matters. Effective representation requires careful
            assessment of the facts, documents, applicable law and
            procedural requirements.
          </p>

          <p className="mt-6 text-[15px] leading-8 text-[#444444]">
            Falcon Lex Legal provides legal assistance and representation
            in civil disputes from initial case assessment and drafting
            through court proceedings, interim applications and
            appropriate appellate proceedings.
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
    Civil Litigation Matters
  </h2>

  {/* Gold divider */}
  <div className="mt-7 h-px w-16 bg-[#C5A45D]" />

  {/* Matters List */}
  <div className="mt-8 grid gap-x-10 gap-y-5 sm:grid-cols-2">

    {[
      "Civil Suits & Appeals",
      "Recovery Suits & Money Claims",
      "Injunction Suits",
      "Declaratory Suits",
      "Specific Performance Suits",
      "Partition Suits",
      "Property & Ownership Disputes",
      "Possession & Eviction Matters",
      "Boundary & Easement Disputes",
      "Contractual Disputes",
      "Execution Petitions",
      "Interim Applications",
      "Civil Appeals & Revisions",
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
    OUR SERVICES — WHITE / 2 COLUMN GRID
========================================================= */}
<section className="bg-white py-20 sm:py-10">
  <div className="mx-auto  px-6 sm:px-10 lg:px-12">

    {/* CENTER HEADING */}
    <div className="mx-auto text-center">
      <p className="text-[11px] font-semibold uppercase tracking-[3px] text-[#C5A45D]">
        Our Services
      </p>

      <h2 className="mt-4 font-serif text-3xl leading-tight text-[#0A0A0A] sm:text-4xl">
        Legal Assistance & Representation
      </h2>

      <p className="mx-auto mt-5 text-sm leading-7 text-[#666666]">
        Support across the different stages of civil litigation, from initial
        assessment and drafting to court proceedings and appellate matters.
      </p>
    </div>


    {/* =====================================================
        SERVICES — 2 COLUMN GRID
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
          APPROACH — BLACK / SMALLER
      ========================================================= */}
      <section className="bg-[#0A0A0A] py-10 sm:py-12">
  <div className="mx-auto px-6 sm:px-10 lg:px-12">
    <div className="grid gap-8 lg:grid-cols-2 lg:gap-20">
      <div>
        <p className="text-[10px] font-semibold uppercase tracking-[3px] text-[#C5A45D]">
          Litigation Approach
        </p>

        <h2 className="mt-4 font-serif text-3xl leading-tight text-[#F5F1E8] sm:text-4xl">
          Careful Preparation. Clear Representation.
        </h2>
      </div>

      <div className="space-y-4 text-sm leading-7 text-[#AAB7BF]">
        <p>
          Civil disputes can involve substantial documentation,
          procedural requirements and competing legal claims. A careful
          review helps identify the relevant issues and available
          remedies.
        </p>

        <p>
          Our approach focuses on understanding the client's objectives,
          reviewing available documents and preparing the matter for the
          appropriate legal proceedings.
        </p>
      </div>
    </div>
  </div>
</section>

      {/* =========================================================
          FAQ — LEFT / RIGHT
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
                Civil Litigation
                <br />
                FAQs
              </h2>

              <p className="mt-5 max-w-sm text-sm leading-7 text-[#666666]">
                Answers to some common questions regarding civil litigation
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
          CONTACT — SMALL STRIP
      ========================================================= */}
      <section className="bg-[#0A0A0A]">
        <div className="mx-auto max-w-7xl px-6 py-8 sm:px-10 lg:px-12">

          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">

            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[3px] text-[#C5A45D]">
                Legal Consultation
              </p>

              <h2 className="mt-2 font-serif text-2xl text-[#F5F1E8] sm:text-3xl">
                Discuss Your Civil Litigation Matter
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