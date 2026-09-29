import Link from "next/link";
import Footer from "@/components/Footer";

export default function ReraLitigation() {
  const matters = [
    "RERA Complaints & Proceedings",
    "Builder & Developer Disputes",
    "Delay in Possession Matters",
    "Refund & Compensation Claims",
    "Defective Construction & Quality Disputes",
    "Agreement for Sale & Allotment Disputes",
    "Real Estate Project-Related Disputes",
    "RERA Appeals & Related Proceedings",
  ];

  const services = [
    {
      number: "01",
      title: "Case Assessment",
      text: "Review of facts, agreements, project documents and legal issues to understand the matter and identify the appropriate legal course of action.",
    },
    {
      number: "02",
      title: "Legal Research & Strategy",
      text: "Review of applicable RERA provisions and relevant legal issues to develop a structured approach suited to the circumstances of the matter.",
    },
    {
      number: "03",
      title: "Drafting & Documentation",
      text: "Preparation and review of complaints, applications, replies, representations and other legal documents required for the matter.",
    },
    {
      number: "04",
      title: "Representation in Proceedings",
      text: "Representation before the appropriate RERA authority, appellate forum and other relevant forums during hearings and related proceedings.",
    },
    {
      number: "05",
      title: "Hearings & Arguments",
      text: "Assistance with preparation for hearings, presentation of legal submissions and proceedings before the appropriate authority or forum.",
    },
    {
      number: "06",
      title: "Appeals & Further Proceedings",
      text: "Legal assistance in appropriate RERA appeals, revisions and other further proceedings arising from the matter.",
    },
  ];

  const faqs = [
    {
      question: "What matters are handled under RERA Litigation?",
      answer:
        "RERA litigation may involve disputes relating to delayed possession, builder and developer obligations, refund, compensation, defective construction, agreements for sale, allotment issues and other real estate regulatory matters.",
    },
    {
      question: "Who can approach the RERA Authority?",
      answer:
        "Depending on the applicable law and circumstances, homebuyers, allottees, promoters and other eligible persons may approach the appropriate RERA authority for remedies relating to covered real estate matters.",
    },
    {
      question: "Can I claim a refund for delayed possession?",
      answer:
        "Depending on the facts, contractual terms and applicable law, an eligible allottee may have remedies relating to refund, interest or compensation in cases involving delay or other defaults.",
    },
    {
      question: "Can a builder dispute be resolved without litigation?",
      answer:
        "Yes. Depending on the circumstances, negotiation, settlement or other appropriate dispute-resolution mechanisms may be explored before or during formal proceedings.",
    },
    {
      question: "What documents should I bring for a RERA consultation?",
      answer:
        "Relevant documents may include the agreement for sale, allotment letter, payment receipts, correspondence with the developer, possession-related communications, project details and any notices or previous legal documents.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#0A0A0A] text-[#F5F1E8]">
      {/* HERO */}
      <section className="relative min-h-[520px] overflow-hidden bg-[#0A0A0A]">
        <img
          src="/rera-litigation.jpg"
          alt="RERA Litigation"
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
              RERA Litigation
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#D0D6D9] sm:text-lg">
              Legal representation in real estate regulatory disputes,
              including builder delays, refund claims, possession matters,
              compensation and other RERA proceedings.
            </p>
          </div>
        </div>
      </section>

      {/* OVERVIEW + MATTERS */}
      <section className="bg-white py-20 sm:py-12">
        <div className="mx-auto px-6 sm:px-10 lg:px-12">
          <div className="grid gap-14 lg:grid-cols-2 lg:gap-24">
            {/* OVERVIEW */}
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[3px] text-[#C5A45D]">
                Overview
              </p>

              <h2 className="mt-4 font-serif text-4xl leading-tight text-[#0A0A0A] sm:text-5xl">
                RERA Litigation
              </h2>

              <div className="mt-7 h-px w-16 bg-[#C5A45D]" />

              <div className="mt-8">
                <p className="text-[15px] leading-8 text-[#444444]">
                  RERA litigation involves legal proceedings arising from
                  disputes between homebuyers, allottees, promoters and other
                  parties involved in covered real estate transactions.
                </p>

                <p className="mt-6 text-[15px] leading-8 text-[#444444]">
                  Falcon Lex Legal assists clients in understanding their
                  rights, assessing contractual and statutory remedies and
                  pursuing appropriate proceedings before the relevant
                  authority or appellate forum.
                </p>

                <p className="mt-6 text-[15px] leading-8 text-[#444444]">
                  Each matter is evaluated based on the project documents,
                  agreements, payment records, correspondence and the specific
                  circumstances of the dispute.
                </p>
              </div>
            </div>

            {/* MATTERS */}
            <div className="rounded-2xl bg-[#0A0A0A] p-8 sm:p-10 lg:p-5">
              <p className="text-[10px] font-semibold uppercase tracking-[3px] text-[#C5A45D]">
                Matters We Handle
              </p>

              <h2 className="mt-1 font-serif text-3xl leading-tight text-white sm:text-4xl">
                RERA Litigation Matters
              </h2>

              <div className="mt-7 h-px w-16 bg-[#C5A45D]" />

              <div className="mt-8 grid gap-x-10 gap-y-5 sm:grid-cols-2">
                {matters.map((matter) => (
                  <div
                    key={matter}
                    className="group flex items-start gap-3"
                  >
                    <span className="mt-[8px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#C5A45D]" />

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

      {/* OUR SERVICES */}
      <section className="bg-white py-20 sm:py-10">
        <div className="mx-auto px-6 sm:px-10 lg:px-12">
          <div className="mx-auto text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[3px] text-[#C5A45D]">
              Our Services
            </p>

            <h2 className="mt-4 font-serif text-3xl leading-tight text-[#0A0A0A] sm:text-4xl">
              RERA Legal Services & Representation
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#666666]">
              Legal assistance across the different stages of RERA
              proceedings, from initial assessment and documentation to
              hearings, representation and appeals.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.number}
                className="group border border-[#D8D4CB] px-5 py-5 transition-all duration-300 hover:border-[#C5A45D]"
              >
                <div className="grid grid-cols-[45px_1fr] gap-4">
                  <div>
                    <span className="text-[10px] font-semibold tracking-[2px] text-[#C5A45D]">
                      {service.number}
                    </span>
                  </div>

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

      {/* LITIGATION APPROACH */}
      <section className="bg-[#0A0A0A] py-10 sm:py-12">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-20">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[3px] text-[#C5A45D]">
                Litigation Approach
              </p>

              <h2 className="mt-4 font-serif text-3xl leading-tight text-[#F5F1E8] sm:text-4xl">
                Careful Review. Effective RERA Representation.
              </h2>
            </div>

            <div className="space-y-4 text-sm leading-7 text-[#AAB7BF]">
              <p>
                RERA disputes often involve agreements, payment records,
                project documents and specific statutory requirements. Careful
                review of the available material helps identify the relevant
                issues and potential remedies.
              </p>

              <p>
                Our approach focuses on understanding the client's objectives,
                assessing the relevant documents and preparing the matter for
                appropriate proceedings before the RERA authority or appellate
                forum.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20 sm:py-17">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr] lg:gap-24">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[3px] text-[#C5A45D]">
                FAQs
              </p>

              <h2 className="mt-4 font-serif text-4xl leading-tight text-[#0A0A0A] sm:text-5xl">
                RERA Litigation
                <br />
                FAQs
              </h2>

              <p className="mt-5 max-w-sm text-sm leading-7 text-[#666666]">
                Answers to common questions regarding RERA proceedings,
                builder disputes, possession matters and legal representation.
              </p>
            </div>

            <div className="divide-y divide-[#D8D4CB] border-y border-[#D8D4CB]">
              {faqs.map((faq) => (
                <details key={faq.question} className="group py-5">
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

      {/* CONTACT */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-8 sm:px-10 lg:px-12">
          <div className="flex flex-col gap-5 border-t border-[#D8D4CB] pt-7 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[3px] text-[#C5A45D]">
                Legal Consultation
              </p>

              <h2 className="mt-2 font-serif text-2xl text-[#0A0A0A] sm:text-3xl">
                Discuss Your RERA Matter
              </h2>

              <p className="mt-2 text-sm text-[#666666]">
                Consult with us by appointment or meet us at our office.
              </p>
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

      <Footer />
    </main>
  );
}