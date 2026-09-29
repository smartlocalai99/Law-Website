import Link from "next/link";
import Footer from "@/components/Footer";

const matters = [
  "General legal consultations",
  "Business and commercial legal advice",
  "Property and transaction-related advice",
  "Contract and agreement review",
  "Legal notices and responses",
  "Regulatory and compliance guidance",
  "Risk assessment and preventive legal advice",
  "Pre-litigation legal strategy",
];

const services = [
  {
    number: "01",
    title: "Legal Consultation",
    text: "Practical legal guidance based on the facts, documents and circumstances of your matter.",
  },
  {
    number: "02",
    title: "Document Review",
    text: "Review and legal assessment of contracts, agreements, notices and other important legal documents.",
  },
  {
    number: "03",
    title: "Business Legal Advisory",
    text: "Legal assistance relating to business transactions, commercial arrangements and ongoing legal requirements.",
  },
  {
    number: "04",
    title: "Risk Prevention",
    text: "Identification of potential legal risks and preventive guidance to help clients address issues before disputes arise.",
  },
];

const faqs = [
  {
    question: "What is legal advisory?",
    answer:
      "Legal advisory involves providing legal guidance and practical advice based on the facts, documents, transactions and circumstances of a particular matter.",
  },
  {
    question: "When should I seek legal advice?",
    answer:
      "Legal advice may be useful when entering into an agreement, dealing with a legal notice, considering a transaction, addressing a regulatory issue or before taking steps that may create legal consequences.",
  },
  {
    question: "Can you review contracts and agreements?",
    answer:
      "Yes. Legal assistance may include reviewing contracts and agreements, identifying important provisions, explaining potential legal concerns and suggesting appropriate changes where required.",
  },
  {
    question: "Can legal advice help prevent disputes?",
    answer:
      "Early legal advice can help identify potential risks, clarify contractual obligations and address issues before they develop into formal disputes or litigation.",
  },
  {
    question: "What documents should I provide for a legal consultation?",
    answer:
      "Relevant documents may include contracts, agreements, correspondence, legal notices, transaction documents, invoices, previous communications and any other records connected with the matter.",
  },
];

export default function LegalAdvisory() {
  return (
    <main className="min-h-screen bg-white text-[#0A0A0A]">

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative min-h-[500px] overflow-hidden bg-[#0A0A0A]">

        <img
          src="/legal-advisory.jpg"
          alt="Legal Advisory"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/95 via-[#0A0A0A]/75 to-[#0A0A0A]/30" />

        <div className="relative z-10 mx-auto flex min-h-[500px]  items-center px-6 py-16 sm:px-10 lg:px-12">

          <div className="max-auto">

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
              Legal Advisory
            </h1>

            <p className="mt-5  text-sm leading-7 text-[#D0D6D9] sm:text-base">
              Practical legal advice and strategic guidance for individuals,
              businesses and organisations across a range of legal,
              contractual and commercial matters.
            </p>

          </div>

        </div>

      </section>


      {/* =========================================================
          OVERVIEW + MATTERS WE HANDLE
      ========================================================= */}
      <section className="bg-white py-16 sm:py-10">

        <div className="mx-auto  px-6 sm:px-10 lg:px-12">

          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">

            {/* LEFT — OVERVIEW */}
            <div>

              <p className="text-[10px] font-semibold uppercase tracking-[3px] text-[#C5A45D]">
                Overview
              </p>

              <h2 className="mt-3 font-serif text-3xl leading-tight text-[#0A0A0A] sm:text-4xl">
                Practical Legal Advice &amp; Strategic Guidance
              </h2>

              <div className="mt-6 h-px w-14 bg-[#C5A45D]" />

              <div className="mt-7">

                <p className="text-[14px] leading-7 text-[#444444]">
                  Legal advisory services provide clients with practical
                  guidance to understand their legal position, obligations,
                  rights and available options.
                </p>

                <p className="mt-5 text-[14px] leading-7 text-[#444444]">
                  We assist clients in evaluating legal issues, reviewing
                  documents and understanding potential risks before taking
                  important legal or commercial decisions.
                </p>

                <p className="mt-5 text-[14px] leading-7 text-[#444444]">
                  Each matter is assessed based on the relevant facts,
                  documents, agreements and applicable legal framework to
                  provide focused and practical legal guidance.
                </p>

              </div>

            </div>


            {/* RIGHT — MATTERS */}
            <div className="rounded-2xl bg-[#0A0A0A] p-7 sm:p-4">

              <p className="text-[10px] font-semibold uppercase tracking-[3px] text-[#C5A45D]">
                Matters We Handle
              </p>

              <h2 className="mt-2 font-serif text-2xl leading-tight text-white sm:text-3xl">
                Legal Advisory Matters
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

        <div className="mx-auto  px-6 sm:px-10 lg:px-12">

          <div className="text-center">

            <p className="text-[10px] font-semibold uppercase tracking-[3px] text-[#C5A45D]">
              Our Services
            </p>

            <h2 className="mt-3 font-serif text-3xl leading-tight text-[#0A0A0A] sm:text-4xl">
              Legal Advisory Services
            </h2>

            <p className="mx-auto mt-4  text-[13px] leading-7 text-[#666666]">
              Practical legal assistance covering consultations, document
              review, business advisory and preventive legal guidance.
            </p>

          </div>


          {/* SERVICES — 4 COLUMN */}
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
      <section className="bg-[#0A0A0A] py-12 sm:py-10">

        <div className="mx-auto px-6 sm:px-10 lg:px-12">

          <div className="grid gap-8 lg:grid-cols-2 lg:gap-20">

            <div>

              <p className="text-[10px] font-semibold uppercase tracking-[3px] text-[#C5A45D]">
                Legal Advisory Approach
              </p>

              <h2 className="mt-3 font-serif text-3xl leading-tight text-[#F5F1E8] sm:text-4xl">
                Clear Legal Guidance With a Practical Approach
              </h2>

            </div>

            <div className="space-y-4 text-[13px] leading-7 text-[#AAB7BF]">

              <p>
                Effective legal advisory requires a clear understanding of
                the facts, documents, contractual obligations and objectives
                involved in a matter. A structured review helps identify
                relevant legal issues and potential risks.
              </p>

              <p>
                Our approach focuses on understanding the client's
                circumstances, reviewing the relevant documents and providing
                practical legal guidance that helps clients make informed
                decisions and address potential issues at an early stage.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          FAQ
      ========================================================= */}
      <section className="bg-white py-16 sm:py-20">

        <div className="mx-auto px-6 sm:px-10 lg:px-12">

          <div className="grid gap-10 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">

            {/* LEFT */}
            <div>

              <p className="text-[10px] font-semibold uppercase tracking-[3px] text-[#C5A45D]">
                FAQs
              </p>

              <h2 className="mt-3 font-serif text-3xl leading-tight text-[#0A0A0A] sm:text-4xl">
                Legal Advisory
                <br />
                FAQs
              </h2>

              <p className="mt-4 max-w-sm text-[13px] leading-7 text-[#666666]">
                Answers to common questions about legal consultations,
                document review, business advisory and preventive legal advice.
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

                  <p className="mt-3 text-[13px] leading-7 text-[#666666]">
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

        <div className="mx-auto  px-6 py-8 sm:px-10 lg:px-12">

          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

            <div>

              <p className="text-[10px] font-semibold uppercase tracking-[3px] text-[#C5A45D]">
                Legal Consultation
              </p>

              <h2 className="mt-2 font-serif text-xl text-[#0A0A0A] sm:text-2xl">
                Need Professional Legal Advice?
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