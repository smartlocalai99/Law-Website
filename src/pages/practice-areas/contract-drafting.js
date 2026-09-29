import Link from "next/link";
import Footer from "@/components/Footer";

const matters = [
  "Commercial agreements",
  "Service agreements",
  "Employment and consultancy agreements",
  "Non-disclosure agreements",
  "Lease and rental agreements",
  "Sale and purchase agreements",
  "Partnership and business agreements",
  "Legal notices and contractual documentation",
];

const services = [
  {
    number: "01",
    title: "Contract Drafting",
    description:
      "Preparation of clear and commercially practical agreements based on the requirements, interests and objectives of the client.",
  },
  {
    number: "02",
    title: "Contract Review",
    description:
      "Detailed review of contractual terms to identify legal risks, unclear provisions, obligations and areas requiring negotiation.",
  },
  {
    number: "03",
    title: "Commercial Agreements",
    description:
      "Drafting and review of agreements supporting business relationships, transactions, services, partnerships and commercial arrangements.",
  },
  {
    number: "04",
    title: "Employment & Consultancy",
    description:
      "Assistance with employment, consultancy, confidentiality and related agreements covering responsibilities, obligations and legal protections.",
  },
  {
    number: "05",
    title: "Contractual Risk Protection",
    description:
      "Assistance in structuring provisions relating to liability, confidentiality, termination, indemnity, dispute resolution and other legal protections.",
  },
  {
    number: "06",
    title: "Contractual Disputes & Remedies",
    description:
      "Legal assistance concerning contractual breaches, notices, enforcement issues, negotiations and appropriate legal remedies arising from agreements.",
  },
];

const faqs = [
  {
    question: "What types of contracts can you draft?",
    answer:
      "We assist with a range of agreements including commercial contracts, service agreements, employment and consultancy agreements, non-disclosure agreements, lease agreements, sale and purchase agreements and other legal documents.",
  },
  {
    question: "Why should I have a contract reviewed before signing?",
    answer:
      "A legal review can help identify unclear obligations, unfavorable terms, potential liabilities, termination provisions, dispute-resolution clauses and other risks before the agreement is signed.",
  },
  {
    question: "Can you modify an existing contract?",
    answer:
      "Yes. Existing agreements can be reviewed and revised to address specific legal, commercial or practical requirements.",
  },
  {
    question: "Can contracts include dispute-resolution clauses?",
    answer:
      "Yes. Depending on the nature of the agreement, appropriate provisions relating to negotiation, mediation, arbitration, jurisdiction and other dispute-resolution mechanisms can be considered.",
  },
  {
    question: "What information is needed to draft a contract?",
    answer:
      "The relevant parties, purpose of the agreement, commercial terms, responsibilities, payment terms, duration, termination requirements and other specific business or transaction details are generally required.",
  },
];

export default function ContractDrafting() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-[#F5F1E8]">
      {/* Hero */}
      <section className="relative min-h-[520px] overflow-hidden bg-[#0A0A0A]">
        <img
          src="/contract-drafting.jpg"
          alt="Contract Drafting and Legal Agreements"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/95 via-[#0A0A0A]/70 to-[#0A0A0A]/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent" />

        <div className="relative mx-auto flex min-h-[520px] max-w-7xl items-end px-6 pb-14 sm:px-10 lg:px-12 lg:pb-20 xl:px-16">
          <div className="max-w-3xl">
            <Link
              href="/#practice-areas"
              className="mb-8 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-[#AAB7BF] transition-colors duration-300 hover:text-[#C5A45D]"
            >
              ← All Practice Areas
            </Link>

            <p className="mb-3 text-[11px] uppercase tracking-[0.28em] text-[#C5A45D]">
              Practice Area
            </p>

            <h1 className="font-serif text-4xl leading-tight text-[#F5F1E8] sm:text-5xl lg:text-6xl">
              Contract Drafting
            </h1>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-[#D0D6D9] sm:text-base">
              Professional drafting and review of commercial, business,
              employment, property and other agreements with a focus on
              clarity, legal protection and practical requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="bg-white text-[#0A0A0A]">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 sm:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:px-12 lg:py-20 xl:px-16">
          <div>
            <p className="mb-4 text-[11px] uppercase tracking-[0.28em] text-[#B08D3C]">
              Overview
            </p>

            <h2 className="font-serif text-3xl leading-tight sm:text-4xl">
              Clear Contracts. Stronger Legal Protection.
            </h2>

            <div className="mt-6 space-y-4 text-sm leading-7 text-[#5F666B] sm:text-[15px]">
              <p>
                A well-drafted contract clearly defines the rights,
                responsibilities and obligations of the parties and can help
                reduce uncertainty in a business or personal transaction.
              </p>

              <p>
                We assist individuals, businesses and organisations with
                drafting, reviewing and revising agreements based on their
                specific legal and commercial requirements.
              </p>

              <p>
                Particular attention is given to important provisions such as
                payment obligations, timelines, confidentiality, liability,
                termination and dispute resolution.
              </p>
            </div>
          </div>

          <div className="rounded-2xl bg-[#0A0A0A] p-7 sm:p-9 lg:p-8">
            <p className="mb-6 text-[11px] uppercase tracking-[0.25em] text-[#C5A45D]">
              Matters Covered
            </p>

            <div className="space-y-4">
              {matters.map((matter) => (
                <div key={matter} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C5A45D]" />

                  <p className="text-sm leading-6 text-[#D0D6D9]">
                    {matter}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-white text-[#0A0A0A]">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-12 lg:py-20 xl:px-16">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-4 text-[11px] uppercase tracking-[0.28em] text-[#B08D3C]">
              Our Services
            </p>

            <h2 className="font-serif text-3xl leading-tight sm:text-4xl">
              Contract Legal Services
            </h2>

            <p className="mt-4 text-sm leading-7 text-[#5F666B] sm:text-[15px]">
              Practical legal assistance for drafting, reviewing and
              strengthening contractual arrangements.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.number}
                className="rounded-xl border border-[#D9D9D6] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#C5A45D]"
              >
                <p className="text-sm font-medium tracking-[0.12em] text-[#B08D3C]">
                  {service.number}
                </p>

                <h3 className="mt-5 font-serif text-xl text-[#0A0A0A]">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#62686C]">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="bg-[#0A0A0A]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 sm:px-10 lg:grid-cols-[0.8fr_1.2fr] lg:px-12 lg:py-16 xl:px-16">
          <div>
            <p className="text-[11px] uppercase tracking-[0.28em] text-[#C5A45D]">
              Contract Law Approach
            </p>

            <h2 className="mt-4 max-w-lg font-serif text-3xl leading-tight text-[#F5F1E8] sm:text-4xl">
              Careful Drafting. Practical Contractual Protection.
            </h2>
          </div>

          <div className="space-y-5 text-sm leading-7 text-[#AAB7BF] sm:text-[15px]">
            <p>
              Contracts should clearly reflect the parties&apos; intentions
              while addressing important legal and commercial considerations.
              Our approach begins with understanding the purpose of the
              agreement, the parties involved and the specific requirements of
              the transaction or relationship.
            </p>

            <p>
              We review relevant documents and contractual terms carefully,
              identify areas requiring clarification or protection and provide
              practical legal guidance. Where appropriate, agreements can be
              structured to address liability, confidentiality, termination,
              dispute resolution and other important contractual issues.
            </p>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-white text-[#0A0A0A]">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 sm:px-10 lg:grid-cols-[0.75fr_1.25fr] lg:px-12 lg:py-20 xl:px-16">
          <div>
            <p className="mb-4 text-[11px] uppercase tracking-[0.28em] text-[#B08D3C]">
              FAQs
            </p>

            <h2 className="font-serif text-3xl leading-tight sm:text-4xl">
              Frequently Asked Questions
            </h2>

            <p className="mt-5 max-w-md text-sm leading-7 text-[#62686C]">
              Answers to common questions about contract drafting, review and
              contractual legal assistance.
            </p>
          </div>

          <div className="divide-y divide-[#D9D9D6] border-y border-[#D9D9D6]">
            {faqs.map((faq) => (
              <details key={faq.question} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left">
                  <span className="font-serif text-lg text-[#0A0A0A]">
                    {faq.question}
                  </span>

                  <span className="relative flex h-6 w-6 shrink-0 items-center justify-center text-[#B08D3C]">
                    <span className="absolute h-px w-3 bg-current" />
                    <span className="absolute h-3 w-px bg-current transition-transform duration-300 group-open:rotate-90" />
                  </span>
                </summary>

                <p className="mt-4 pr-10 text-sm leading-7 text-[#62686C]">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[#C5A45D]/15 bg-white text-[#0A0A0A]">
        <div className="mx-auto max-w-5xl px-6 py-14 text-center sm:px-10 lg:py-16">
          <p className="text-[11px] uppercase tracking-[0.28em] text-[#B08D3C]">
            Legal Consultation
          </p>

          <h2 className="mt-3 font-serif text-3xl leading-tight sm:text-4xl">
            Discuss Your Contract Requirements
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#62686C]">
            Speak with our team about drafting, reviewing or revising your
            agreement. Consult with us by appointment or meet us at our
            office.
          </p>

          <Link
            href="/#contact"
            className="mt-7 inline-flex items-center justify-center rounded-full bg-[#C5A45D] px-7 py-3 text-[12px] uppercase tracking-[0.18em] text-[#0A0A0A] transition-colors duration-300 hover:bg-[#0A0A0A] hover:text-[#F5F1E8]"
          >
            Book a Consultation
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}