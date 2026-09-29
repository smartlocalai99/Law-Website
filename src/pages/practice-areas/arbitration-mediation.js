import Link from "next/link";
import Footer from "@/components/Footer";

const matters = [
  "Commercial arbitration",
  "Contractual disputes",
  "Arbitration agreement and clause disputes",
  "Appointment of arbitrators",
  "Arbitration proceedings and hearings",
  "Interim relief in arbitration matters",
  "Mediation and negotiated settlements",
  "Enforcement and challenge of arbitral awards",
];

const services = [
  {
    number: "01",
    title: "Mediation & Settlement",
    text: "Assistance in negotiations and mediation with a focus on practical, commercially viable and mutually acceptable resolutions.",
  },
  {
    number: "02",
    title: "Arbitration Documentation",
    text: "Preparation and review of notices, claims, statements, replies, applications and other documents required during arbitration.",
  },
  {
    number: "03",
    title: "Arbitration Representation",
    text: "Representation and assistance during arbitration proceedings, hearings, submissions and other procedural stages.",
  },
  {
    number: "04",
    title: "Interim & Award Remedies",
    text: "Legal assistance concerning appropriate interim measures, enforcement of awards and available remedies for challenging awards.",
  },
];

const faqs = [
  {
    question: "What is arbitration?",
    answer:
      "Arbitration is a form of dispute resolution where parties agree to have their dispute determined by an arbitrator or arbitral tribunal instead of pursuing the dispute entirely through ordinary court proceedings.",
  },
  {
    question: "What types of disputes can be referred to arbitration?",
    answer:
      "Depending on the applicable law and the agreement between the parties, many commercial and contractual disputes may be resolved through arbitration where a valid arbitration agreement exists.",
  },
  {
    question: "What is the difference between arbitration and mediation?",
    answer:
      "In arbitration, the arbitrator or tribunal determines the dispute and issues an award. Mediation is generally a facilitated settlement process where the parties work toward reaching their own agreement.",
  },
  {
    question: "Can a dispute be settled during arbitration?",
    answer:
      "Yes. Parties may explore settlement or mediation during the course of a dispute, subject to the circumstances of the matter and applicable procedural requirements.",
  },
  {
    question: "What documents are needed for an arbitration matter?",
    answer:
      "Relevant documents may include the underlying contract, arbitration clause, correspondence, invoices, notices, claims, payment records, supporting evidence and previous communications between the parties.",
  },
];

export default function ArbitrationMediation() {
  return (
    <main className="min-h-screen bg-white text-[#0A0A0A]">

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative min-h-[500px] overflow-hidden bg-[#0A0A0A]">

        <img
          src="/arbitration-mediation.jpg"
          alt="Arbitration & Mediation"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/95 via-[#0A0A0A]/75 to-[#0A0A0A]/30" />

        <div className="relative z-10 mx-auto flex min-h-[500px] max-w-7xl items-center px-6 py-16 sm:px-10 lg:px-12">
          <div className="max-w-3xl">

            <Link
              href="/#practice-areas"
              className="mb-7 inline-flex items-center text-[10px] font-medium uppercase tracking-[2px] text-[#C5A45D] transition hover:text-[#F5F1E8]"
            >
              ← All Practice Areas
            </Link>

            <p className="text-[10px] font-semibold uppercase tracking-[3px] text-[#C5A45D]">
              Legal Services
            </p>

            <h1 className="mt-3 font-serif text-4xl leading-tight text-[#F5F1E8] sm:text-5xl lg:text-6xl">
              Arbitration &amp; Mediation
            </h1>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-[#D0D6D9] sm:text-base">
              Alternative dispute resolution services focused on arbitration,
              mediation, negotiation and efficient resolution of commercial
              and contractual disputes.
            </p>

          </div>
        </div>
      </section>


      {/* =========================================================
          OVERVIEW + MATTERS WE HANDLE
      ========================================================= */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">

          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">

            {/* LEFT — OVERVIEW */}
            <div>

              <p className="text-[10px] font-semibold uppercase tracking-[3px] text-[#C5A45D]">
                Overview
              </p>

              <h2 className="mt-3 font-serif text-3xl leading-tight text-[#0A0A0A] sm:text-4xl">
                Effective Alternative Dispute Resolution
              </h2>

              <div className="mt-6 h-px w-14 bg-[#C5A45D]" />

              <div className="mt-7">

                <p className="text-[14px] leading-7 text-[#444444]">
                  Arbitration and mediation provide alternative approaches to
                  resolving disputes that may offer parties greater flexibility,
                  confidentiality and procedural efficiency.
                </p>

                <p className="mt-5 text-[14px] leading-7 text-[#444444]">
                  We assist clients in evaluating whether arbitration, mediation
                  or negotiated settlement may be appropriate for their dispute
                  and commercial objectives.
                </p>

                <p className="mt-5 text-[14px] leading-7 text-[#444444]">
                  Each matter is assessed based on the underlying agreement,
                  dispute-resolution clause, facts, documents and applicable
                  legal framework.
                </p>

              </div>

            </div>


            {/* RIGHT — MATTERS */}
            <div className="rounded-2xl bg-[#0A0A0A] p-7 sm:p-8">

              <p className="text-[10px] font-semibold uppercase tracking-[3px] text-[#C5A45D]">
                Matters We Handle
              </p>

              <h2 className="mt-2 font-serif text-2xl leading-tight text-white sm:text-3xl">
                Arbitration &amp; Mediation Matters
              </h2>

              <div className="mt-6 h-px w-14 bg-[#C5A45D]" />

              <div className="mt-7 grid gap-x-8 gap-y-4 sm:grid-cols-2">

                {matters.map((matter) => (
                  <div
                    key={matter}
                    className="group flex items-start gap-3"
                  >
                    <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#C5A45D]" />

                    <span className="text-[13px] leading-6 text-white/80 transition-colors duration-200 group-hover:text-[#C5A45D]">
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
          OUR SERVICES
      ========================================================= */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">

          <div className="text-center">

            <p className="text-[10px] font-semibold uppercase tracking-[3px] text-[#C5A45D]">
              Our Services
            </p>

            <h2 className="mt-3 font-serif text-3xl leading-tight text-[#0A0A0A] sm:text-4xl">
              Arbitration &amp; Mediation Legal Services
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-[13px] leading-7 text-[#666666]">
              Legal assistance in arbitration, mediation, negotiation and
              related dispute resolution proceedings.
            </p>

          </div>


          {/* SERVICES — 3 COLUMN */}
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">

            {services.map((service) => (
              <div
                key={service.number}
                className="group border border-[#D8D4CB] px-5 py-5 transition-all duration-300 hover:border-[#C5A45D]"
              >

                <div className="grid grid-cols-[40px_1fr] gap-3">

                  <div>
                    <span className="text-[10px] font-semibold tracking-[2px] text-[#C5A45D]">
                      {service.number}
                    </span>
                  </div>

                  <div>

                    <h3 className="font-serif text-lg leading-tight text-[#0A0A0A] transition-colors duration-300 group-hover:text-[#C5A45D]">
                      {service.title}
                    </h3>

                    <p className="mt-2 text-[12px] leading-6 text-[#666666]">
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
          APPROACH
      ========================================================= */}
      <section className="bg-[#0A0A0A] py-12 sm:py-14">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">

          <div className="grid gap-8 lg:grid-cols-2 lg:gap-20">

            <div>

              <p className="text-[10px] font-semibold uppercase tracking-[3px] text-[#C5A45D]">
                Dispute Resolution Approach
              </p>

              <h2 className="mt-3 font-serif text-3xl leading-tight text-[#F5F1E8] sm:text-4xl">
                Focused Resolution Through Arbitration &amp; Mediation
              </h2>

            </div>

            <div className="space-y-4 text-[13px] leading-7 text-[#AAB7BF]">

              <p>
                Dispute resolution requires careful consideration of the
                agreement, applicable procedure, evidence and objectives of
                the parties. A structured review helps identify the appropriate
                course of action.
              </p>

              <p>
                Our approach focuses on understanding the dispute, reviewing
                the relevant documents and assisting clients through
                negotiation, mediation or arbitration as appropriate to the
                circumstances of the matter.
              </p>

            </div>

          </div>

        </div>
      </section>


      {/* =========================================================
          FAQ
      ========================================================= */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">

          <div className="grid gap-10 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">

            {/* LEFT */}
            <div>

              <p className="text-[10px] font-semibold uppercase tracking-[3px] text-[#C5A45D]">
                FAQs
              </p>

              <h2 className="mt-3 font-serif text-3xl leading-tight text-[#0A0A0A] sm:text-4xl">
                Arbitration &amp;
                <br />
                Mediation FAQs
              </h2>

              <p className="mt-4 max-w-sm text-[13px] leading-7 text-[#666666]">
                Answers to common questions about arbitration, mediation and
                alternative dispute resolution.
              </p>

            </div>


            {/* RIGHT */}
            <div className="divide-y divide-[#D8D4CB] border-y border-[#D8D4CB]">

              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group py-4"
                >

                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-serif text-base text-[#0A0A0A]">

                    {faq.question}

                    <span className="shrink-0 text-xl font-light text-[#C5A45D] transition-transform duration-300 group-open:rotate-45">
                      +
                    </span>

                  </summary>

                  <p className="mt-3 max-w-3xl text-[13px] leading-7 text-[#666666]">
                    {faq.answer}
                  </p>

                </details>
              ))}

            </div>

          </div>

        </div>
      </section>


      {/* =========================================================
          SIMPLE CONTACT / CTA
      ========================================================= */}
      <section className="bg-[#F7F5F0]">
        <div className="mx-auto max-w-7xl px-6 py-8 sm:px-10 lg:px-12">

          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

            <div>

              <p className="text-[10px] font-semibold uppercase tracking-[3px] text-[#C5A45D]">
                Legal Consultation
              </p>

              <h2 className="mt-2 font-serif text-xl text-[#0A0A0A] sm:text-2xl">
                Discuss Your Dispute Resolution Matter
              </h2>

              <p className="mt-1 text-[12px] leading-6 text-[#666666]">
                Consult with our team by appointment or meet us at our office.
              </p>

            </div>

            <Link
              href="/#contact"
              className="inline-flex shrink-0 items-center justify-center border border-[#C5A45D] bg-[#C5A45D] px-6 py-3 text-[10px] font-semibold uppercase tracking-[2px] text-[#0A0A0A] transition hover:bg-transparent hover:text-[#0A0A0A]"
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