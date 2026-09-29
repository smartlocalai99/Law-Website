import Link from "next/link";
import Footer from "@/components/Footer";

export default function CommercialLitigation() {
  const matters = [
    "Commercial Contract Disputes",
    "Business & Partnership Disputes",
    "Shareholder & Corporate Disputes",
    "Breach of Commercial Agreements",
    "Payment & Recovery Disputes",
    "Business-Related Injunction Matters",
    "Supplier & Service-Provider Disputes",
    "Commercial Appeals & Related Proceedings",
  ];

  const services = [
    {
      number: "01",
      title: "Case Assessment",
      text: "Review of the commercial relationship, agreements, transaction records and legal issues to understand the matter and identify the appropriate legal course of action.",
    },
    {
      number: "02",
      title: "Legal Research & Strategy",
      text: "Review of applicable law and relevant contractual and commercial issues to develop a structured approach suited to the circumstances of the dispute.",
    },
    {
      number: "03",
      title: "Drafting & Documentation",
      text: "Preparation and review of commercial agreements, notices, replies, pleadings and other legal documents connected with the matter.",
    },
    {
      number: "04",
      title: "Court Representation",
      text: "Representation before the appropriate court, tribunal or forum, including assistance during hearings and related commercial proceedings.",
    },
    {
      number: "05",
      title: "Interim & Protective Relief",
      text: "Assistance in seeking appropriate injunctions, protective orders and other interim remedies to safeguard commercial interests.",
    },
    {
      number: "06",
      title: "Appeals & Further Proceedings",
      text: "Legal assistance in appropriate commercial appeals, revisions and other further proceedings arising from the dispute.",
    },
  ];

  const faqs = [
    {
      question: "What matters are handled under Commercial Litigation?",
      answer:
        "Commercial Litigation may involve disputes relating to business contracts, partnerships, shareholders, payments, suppliers, service providers, commercial transactions and other business-related legal matters.",
    },
    {
      question: "Can a business dispute be settled without going to court?",
      answer:
        "Yes. Depending on the nature of the dispute and the interests of the parties, negotiation, mediation, arbitration or other settlement mechanisms may be considered.",
    },
    {
      question: "What documents are important in a commercial dispute?",
      answer:
        "Relevant documents may include contracts, invoices, purchase orders, payment records, correspondence, emails, notices, company records and other documents connected with the commercial relationship.",
    },
    {
      question: "Can I take legal action for breach of a commercial contract?",
      answer:
        "Depending on the terms of the contract, the nature of the breach and the applicable law, appropriate legal remedies may be available for a contractual default.",
    },
    {
      question: "How should I respond to a commercial legal notice?",
      answer:
        "A legal notice should be reviewed carefully before responding. The response should address the relevant facts, contractual obligations and legal position while protecting the client's commercial interests.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#0A0A0A] text-[#F5F1E8]">
      {/* HERO */}
      <section className="relative min-h-[520px] overflow-hidden bg-[#0A0A0A]">
        <img
          src="/commercial-litigation.jpg"
          alt="Commercial Litigation"
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
              Commercial Litigation
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#D0D6D9] sm:text-lg">
              Strategic legal representation in business disputes, commercial
              contracts, partnership matters, payment disputes and other
              corporate and commercial litigation.
            </p>
          </div>
        </div>
      </section>

      {/* OVERVIEW + MATTERS */}
      <section className="bg-white py-20 sm:py-12">
        <div className="mx-auto px-6 sm:px-10 lg:px-12">
          <div className="grid gap-14 lg:grid-cols-2 lg:gap-24">
            {/* Overview */}
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[3px] text-[#C5A45D]">
                Overview
              </p>

              <h2 className="mt-4 font-serif text-4xl leading-tight text-[#0A0A0A] sm:text-5xl">
                Resolving Complex Business Disputes
              </h2>

              <div className="mt-7 h-px w-16 bg-[#C5A45D]" />

              <div className="mt-8">
                <p className="text-[15px] leading-8 text-[#444444]">
                  Commercial Litigation covers disputes arising from business
                  relationships, commercial agreements, corporate transactions
                  and contractual obligations.
                </p>

                <p className="mt-6 text-[15px] leading-8 text-[#444444]">
                  We assist businesses, companies, entrepreneurs and other
                  commercial stakeholders in assessing disputes and pursuing
                  appropriate legal remedies while keeping their commercial
                  interests in focus.
                </p>

                <p className="mt-6 text-[15px] leading-8 text-[#444444]">
                  Each matter is assessed based on the relevant agreements,
                  transaction records, correspondence, financial documents and
                  circumstances of the dispute.
                </p>
              </div>
            </div>

            {/* Matters */}
            <div className="rounded-2xl bg-[#0A0A0A] p-8 sm:p-10 lg:p-5">
              <p className="text-[10px] font-semibold uppercase tracking-[3px] text-[#C5A45D]">
                Matters We Handle
              </p>

              <h2 className="mt-1 font-serif text-3xl leading-tight text-white sm:text-4xl">
                Commercial Litigation Matters
              </h2>

              <div className="mt-7 h-px w-16 bg-[#C5A45D]" />

              <div className="mt-8 grid gap-x-10 gap-y-5 sm:grid-cols-2">
                {matters.map((matter) => (
                  <div key={matter} className="group flex items-start gap-3">
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
              Commercial Legal Services
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#666666]">
              Legal assistance across the different stages of a commercial
              dispute, from initial assessment and documentation to
              representation, interim relief and appeals.
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
                Careful Review. Strategic Commercial Representation.
              </h2>
            </div>

            <div className="space-y-4 text-sm leading-7 text-[#AAB7BF]">
              <p>
                Commercial disputes can involve contracts, financial records,
                business relationships and significant commercial interests.
                Careful review of the available documents and circumstances
                helps identify the relevant issues and potential legal
                remedies.
              </p>

              <p>
                Our approach focuses on understanding the client's commercial
                objectives, assessing the relevant agreements and records and
                preparing the matter for appropriate legal proceedings while
                keeping the client informed throughout the process.
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
                Commercial Litigation
                <br />
                FAQs
              </h2>

              <p className="mt-5 max-w-sm text-sm leading-7 text-[#666666]">
                Answers to common questions regarding commercial disputes,
                business agreements, legal notices and representation.
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
                Discuss Your Commercial Matter
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

