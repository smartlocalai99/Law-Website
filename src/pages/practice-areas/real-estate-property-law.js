import Link from "next/link";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";
import JsonLd from "@/components/JsonLd";
import { practiceAreaSchemas } from "@/lib/schema";

export default function RealEstatePropertyLaw() {
  const matters = [
    "Property Ownership & Title Disputes",
    "Sale, Purchase & Transfer of Property",
    "Property Due Diligence & Title Verification",
    "Landlord & Tenant Disputes",
    "Possession & Eviction Matters",
    "Partition & Inheritance-Related Property Disputes",
    "Declaration & Injunction Proceedings",
    "Property Documentation & Conveyancing",
  ];

  const services = [
    {
      number: "01",
      title: "Property Due Diligence",
      text: "Review of available property records and documents to identify title, ownership and transaction-related legal issues.",
    },
    {
      number: "02",
      title: "Documentation & Conveyancing",
      text: "Drafting and review of sale agreements, sale deeds, lease documents, conveyance documents and other property-related instruments.",
    },
    {
      number: "03",
      title: "Property Dispute Resolution",
      text: "Legal assistance in ownership, possession, partition, inheritance, tenancy and other property-related disputes.",
    },
    {
      number: "04",
      title: "Title & Legal Advisory",
      text: "Legal assessment of property transactions, title concerns and documentation to help clients make informed decisions.",
    },
    {
      number: "05",
      title: "Court Representation",
      text: "Representation before appropriate courts and forums in property disputes, injunction proceedings and related matters.",
    },
    {
      number: "06",
      title: "Property Litigation",
      text: "Legal assistance in appropriate property-related suits, appeals, revisions and other court proceedings.",
    },
  ];

  const faqs = [
    {
      question: "What matters are handled under Real Estate & Property Law?",
      answer:
        "We assist with property transactions, title and ownership issues, due diligence, sale and purchase matters, possession disputes, landlord and tenant matters, partition, inheritance-related property disputes and other real estate matters.",
    },
    {
      question: "Why is property due diligence important?",
      answer:
        "Property due diligence helps identify potential issues relating to ownership, title, existing claims, encumbrances and documentation before proceeding with a transaction.",
    },
    {
      question: "Can you review property documents before I purchase a property?",
      answer:
        "Yes. Relevant property documents can be reviewed to assess the available title records, transaction documents and other legal aspects of the proposed purchase.",
    },
    {
      question: "Do you handle property disputes between family members?",
      answer:
        "Yes. Depending on the circumstances, we assist with partition, inheritance, ownership, possession and other disputes involving jointly held or inherited property.",
    },
    {
      question: "Can a property dispute be resolved without going to court?",
      answer:
        "Depending on the facts and the willingness of the parties, negotiation, mediation or other settlement mechanisms may be explored before or during litigation.",
    },
    {
      question: "What does a real estate litigation lawyer handle?",
      answer:
        "A real estate litigation lawyer handles court proceedings over property, such as title and ownership disputes, injunction suits, partition suits, specific performance of sale agreements, possession and eviction matters, and related appeals. Builder disputes over registered projects are generally pursued before K-RERA under the RERA Act.",
    },
    {
      question: "Can I file a civil suit against a builder instead of going to RERA?",
      answer:
        "Section 79 of the RERA Act bars civil courts from hearing matters that the RERA authority or its adjudicating officer is empowered to decide, such as refund, interest and compensation claims for a registered project. Reliefs that RERA cannot grant, such as declarations of title or certain injunctions, may still be sought before a civil court. The correct forum depends on the relief sought.",
    },
    {
      question: "What documents are checked in property due diligence in Bangalore?",
      answer:
        "Due diligence usually involves reviewing the title deeds and the chain of previous ownership, encumbrance certificates, the khata and property tax records from the local municipal authority, approved building plans, and any sale agreement or power of attorney involved. For apartments, the project's RERA registration and approvals are also reviewed. The exact documents depend on the type of property and the transaction.",
    },
    {
      question: "Do you handle property matters in Bengaluru?",
      answer:
        "Yes. Falcon Lex Legal is based in Bengaluru and assists clients with property transactions, title review and property disputes. Documents can be reviewed by appointment at our office. The suitable court depends on the nature of the dispute and where the property is situated.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#0A0A0A] text-[#F5F1E8]">
      <Seo title="Real Estate Litigation Lawyers Bangalore | Falcon Lex Legal" description="Real estate litigation lawyers in Bengaluru for title and ownership disputes, possession, partition, injunctions and property due diligence in Karnataka." path="/practice-areas/real-estate-property-law" />
      <JsonLd data={practiceAreaSchemas({ name: "Real Estate & Property Law", path: "/practice-areas/real-estate-property-law", description: "Real estate litigation lawyers in Bengaluru for title and ownership disputes, possession, partition, injunctions and property due diligence in Karnataka.", faqs })} />
      {/* HERO */}
      <section className="relative min-h-[520px] overflow-hidden bg-[#0A0A0A]">
        <img
          src="/real-estate.jpg"
          alt="Model house and judge's gavel in front of law books, representing real estate litigation"
          loading="eager"
          fetchPriority="high"
          decoding="async"
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
              Real Estate Litigation Lawyers in Bangalore
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#D0D6D9] sm:text-lg">
              Legal assistance in property disputes, title and ownership
              matters, possession, partition, injunction suits, due diligence,
              documentation and other real estate-related matters.
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
                Real Estate Litigation and Property Disputes in Bengaluru
              </h2>

              <div className="mt-7 h-px w-16 bg-[#C5A45D]" />

              <div className="mt-8">
                <p className="text-[15px] leading-8 text-[#444444]">
                  Real estate transactions and property disputes often involve
                  substantial financial interests, title records and complex
                  documentation. Careful legal review can help identify
                  potential issues before they become difficult to resolve.
                </p>

                <p className="mt-6 text-[15px] leading-8 text-[#444444]">
                  Falcon Lex Legal assists clients with property transactions,
                  title assessment, due diligence, documentation, ownership,
                  possession, tenancy and property-related disputes. The firm
                  is based in Bengaluru and assists buyers, sellers, landlords,
                  tenants and families with property matters before the
                  appropriate courts and forums.
                </p>

                <p className="mt-6 text-[15px] leading-8 text-[#444444]">
                  Our approach combines transaction-focused legal review with
                  dispute resolution and litigation support, depending on the
                  requirements of each matter.
                </p>

                <p className="mt-6 text-[15px] leading-8 text-[#444444]">
                  Real estate litigation in Bangalore commonly involves suits
                  for declaration of title, <Link href="/practice-areas/civil-litigation">injunction suits</Link> to protect
                  possession, partition suits, specific performance of sale
                  agreements and recovery of possession. Such suits are
                  generally filed in the court where the property is situated,
                  such as the City Civil Courts in Bengaluru or the courts at
                  Devanahalli, Nelamangala, Anekal and Hosakote. Disputes with builders
                  over registered projects, such as delayed possession or
                  refunds, are generally addressed under the RERA Act before
                  K-RERA, which is covered by our <Link href="/practice-areas/rera-litigation">RERA litigation practice</Link>.
                  Advocates <Link href="/advocates/kishan-shetty">Kishan Shetty S.R.</Link> and <Link href="/advocates/yashwanth-ovarsu">Yashwanth Ovarsu</Link> both include real estate and property
                  law in their practice.
                </p>
              </div>
            </div>

            {/* MATTERS */}
            <div className="rounded-2xl bg-[#0A0A0A] p-8 sm:p-10 lg:p-5">
              <p className="text-[10px] font-semibold uppercase tracking-[3px] text-[#C5A45D]">
                Matters We Handle
              </p>

              <h2 className="mt-1 font-serif text-3xl leading-tight text-white sm:text-4xl">
                Property Disputes &amp; Transactions
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
              Property Legal Services in Bengaluru
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#666666]">
              Legal support across property transactions, documentation,
              advisory matters, disputes and related court proceedings.
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

      {/* LEGAL APPROACH */}
      <section className="bg-[#0A0A0A] py-10 sm:py-12">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-20">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[3px] text-[#C5A45D]">
                Legal Approach
              </p>

              <h2 className="mt-4 font-serif text-3xl leading-tight text-[#F5F1E8] sm:text-4xl">
                Careful Review in Property Litigation and Transactions
              </h2>
            </div>

            <div className="space-y-4 text-sm leading-7 text-[#AAB7BF]">
              <p>
                Property transactions and disputes can involve significant
                financial interests, title records and legal documentation.
                Careful review of the available documents and circumstances
                helps identify potential legal issues at an early stage.
              </p>

              <p>
                 Our approach focuses on understanding the client&apos;s objectives,
                assessing the relevant property documents and providing clear
                legal guidance suited to the transaction or dispute.
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
                Real Estate & Property
                <br />
                Law FAQs
              </h2>

              <p className="mt-5 max-w-sm text-sm leading-7 text-[#666666]">
                Answers to common questions regarding property transactions,
                title matters, disputes and legal representation.
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
          Discuss Your Property Matter
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
