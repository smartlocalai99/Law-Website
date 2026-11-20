import Link from "next/link";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";
import JsonLd from "@/components/JsonLd";
import { practiceAreaSchemas } from "@/lib/schema";

export default function ReraLitigation() {
  const matters = [
    "RERA Complaints Before K-RERA",
    "Builder & Developer Disputes",
    "Delayed Possession Claims",
    "RERA Refund Claims with Interest",
    "RERA Compensation Claims",
    "Interest for the Delay Period",
    "Defective Construction & Quality Disputes",
    "Agreement for Sale & Allotment Disputes",
    "RERA Appeals Before KREAT",
    "Execution & Recovery of RERA Orders",
  ];

  const services = [
    {
      number: "01",
      title: "RERA Legal Consultation",
      text: "Review of facts, the agreement for sale, project documents and payment records to understand the matter and identify the appropriate legal course of action.",
    },
    {
      number: "02",
      title: "Legal Research & Strategy",
      text: "Review of the applicable provisions of the RERA Act, the Karnataka rules and relevant legal issues to develop a structured approach suited to the matter.",
    },
    {
      number: "03",
      title: "RERA Complaint Drafting",
      text: "Preparation and review of RERA complaints, applications, replies, representations and other legal documents required for the matter.",
    },
    {
      number: "04",
      title: "Representation Before K-RERA",
      text: "Representation before the Karnataka Real Estate Regulatory Authority, its adjudicating officer and other relevant forums during hearings and related proceedings.",
    },
    {
      number: "05",
      title: "Hearings & Arguments",
      text: "Assistance with preparation for hearings, presentation of legal submissions and proceedings before the appropriate authority or forum.",
    },
    {
      number: "06",
      title: "RERA Appeals & Execution",
      text: "Legal assistance in RERA appeals before KREAT and the High Court, and in execution and recovery proceedings where a RERA order has not been complied with.",
    },
  ];

  const faqs = [
    {
      question: "What matters do RERA lawyers handle?",
      answer:
        "Lawyers who deal with RERA matters typically handle disputes relating to delayed possession, builder and developer obligations, refund, compensation, interest for delay, defective construction, agreements for sale, allotment issues, appeals and execution of RERA orders.",
    },
    {
      question: "Who can approach the RERA Authority?",
      answer:
        "Depending on the applicable law and circumstances, homebuyers, allottees, promoters and other eligible persons may approach the appropriate RERA authority for remedies relating to covered real estate matters.",
    },
    {
      question: "How do I file a RERA complaint in Karnataka?",
      answer:
        "A complaint under Section 31 of the Real Estate (Regulation and Development) Act, 2016 is filed with the Karnataka Real Estate Regulatory Authority (K-RERA) or its adjudicating officer, depending on the relief sought. The complaint is supported by the agreement for sale, payment records and correspondence with the builder. The requirements depend on the project and the facts of the matter.",
    },
    {
      question: "Can I claim a refund for delayed possession?",
      answer:
        "Under Section 18 of the RERA Act, where a promoter fails to complete the project or hand over possession as agreed, an allottee who chooses to withdraw may seek a refund of the amount paid with interest, along with compensation where applicable. Eligibility depends on the facts, the agreement and the applicable law.",
    },
    {
      question: "What is interest for the delay period under RERA?",
      answer:
        "Where an allottee does not wish to withdraw from the project, Section 18 of the RERA Act provides for interest for every month of delay until possession is handed over, at the rate prescribed under the applicable rules. In Karnataka, the RERA rules set this rate at the State Bank of India's highest marginal cost of lending rate (MCLR) plus two percent, and the same rate is generally applied to interest on refunds. Whether delay period interest is payable depends on the agreement and the circumstances of the delay.",
    },
    {
      question: "Who decides RERA compensation claims?",
      answer:
        "Under Sections 71 and 72 of the RERA Act, compensation claims are adjudged by the adjudicating officer, who considers factors such as the extent of loss and any unfair advantage gained by the promoter. The appropriate forum for a particular relief depends on the nature of the claim.",
    },
    {
      question: "Can a RERA order be appealed?",
      answer:
        "Yes. An order of K-RERA or its adjudicating officer may be appealed before the Karnataka Real Estate Appellate Tribunal (KREAT) within the period prescribed under the Act, generally sixty days. A further appeal from the Tribunal may lie before the High Court of Karnataka on the grounds permitted by law. Where a promoter files an appeal, the Act requires a pre-deposit before the appeal is heard.",
    },
    {
      question: "What if the builder does not comply with a RERA order?",
      answer:
        "Where interest, penalty or compensation ordered under the RERA Act remains unpaid, Section 40 of the Act provides for its recovery as arrears of land revenue. In practice, recovery is pursued through the revenue authorities and can take time, so regular follow-up of the execution proceedings is often needed. Execution and recovery steps depend on the terms of the order and the stage of the matter.",
    },
    {
      question: "Does RERA apply to my housing project?",
      answer:
        "Most real estate projects must be registered under Section 3 of the RERA Act. The Act exempts projects where the land to be developed does not exceed 500 square metres or the number of apartments does not exceed eight, including all phases, although authorities have differed on how this exemption is read. You can check whether a project is registered on the K-RERA website, and the position for a particular project depends on its facts.",
    },
    {
      question: "What if I notice structural defects after taking possession?",
      answer:
        "Under Section 14(3) of the RERA Act, if a structural defect or a defect in workmanship, quality or services is brought to the builder's notice within five years from the date of handing over possession, the builder is required to rectify it within thirty days without further charge. If the builder does not do so, the allottee may seek appropriate compensation. Whether a particular defect is covered depends on its nature and cause.",
    },
    {
      question: "Can I approach the consumer commission instead of RERA?",
      answer:
        "Yes. In Imperia Structures Ltd. v. Anil Patni (2020), the Supreme Court held that the RERA Act does not bar remedies under consumer protection law, so a homebuyer may choose between a consumer commission and the RERA authority. The more suitable forum depends on the relief sought and the facts, and pursuing the same claim in two forums at once should generally be avoided.",
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
    {
      question: "Do you handle RERA complaints in Karnataka?",
      answer:
        "Yes. Falcon Lex Legal is based in Bengaluru and assists clients with RERA complaints and related proceedings before the appropriate authority and appellate forum in Karnataka. Eligibility and remedies depend on the project and the applicable law.",
    },
    {
      question: "Where is your office for RERA consultations in Bangalore?",
      answer:
        "Our office is at Plazzo Retail Mall, Commercial Street, Bengaluru 560001, in central Bangalore. RERA consultations are available by appointment at the office, and e-consultation can also be arranged.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#0A0A0A] text-[#F5F1E8]">
      <Seo title="RERA Advocates & Lawyers in Bangalore | Falcon Lex Legal" description="Karnataka RERA lawyers in Bengaluru for RERA complaints, builder disputes, delayed possession and refund claims before K-RERA and KREAT. Book a consultation." path="/practice-areas/rera-litigation" />
      <JsonLd data={practiceAreaSchemas({ name: "RERA Litigation", path: "/practice-areas/rera-litigation", description: "Karnataka RERA lawyers in Bengaluru for RERA complaints, builder disputes, delayed possession and refund claims before K-RERA and KREAT. Book a consultation.", faqs })} />
      {/* HERO */}
      <section className="relative min-h-[520px] overflow-hidden bg-[#0A0A0A]">
        <img
          src="/rera-litigation.jpg"
          alt="Lawyer signing property documents beside a gavel, with apartment buildings in the background"
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
              RERA Advocates &amp; Lawyers in Bangalore
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#D0D6D9] sm:text-lg">
              Legal representation for homebuyers and allottees in builder
              disputes, delayed possession, refund and compensation claims,
              RERA complaints, appeals and execution proceedings in Karnataka.
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
                Karnataka RERA Lawyers for Complaints and Builder Disputes
              </h2>

              <div className="mt-7 h-px w-16 bg-[#C5A45D]" />

              <div className="mt-8">
                <p className="text-[15px] leading-8 text-[#444444]">
                  RERA litigation involves legal proceedings under the Real
                  Estate (Regulation and Development) Act, 2016 arising from
                  disputes between homebuyers, allottees, promoters and other
                  parties involved in registered real estate projects. In
                  Karnataka, these matters are heard by the Karnataka Real
                  Estate Regulatory Authority (K-RERA), its adjudicating
                  officer and, on appeal, the Karnataka Real Estate Appellate
                  Tribunal (KREAT). Both K-RERA and KREAT are located in
                  Bengaluru and deal with registered real estate projects
                  across Karnataka.
                </p>

                <p className="mt-6 text-[15px] leading-8 text-[#444444]">
                  As RERA advocates in Bangalore, Falcon Lex Legal assists
                  clients in understanding their rights, assessing contractual
                  and statutory remedies and pursuing RERA complaints against
                  builders and developers before the relevant authority or
                  appellate forum. Homebuyers looking for lawyers who deal with
                  RERA often approach us about delayed possession, refunds,
                  compensation, defective construction and changes to the
                  agreed project.
                </p>

                <p className="mt-6 text-[15px] leading-8 text-[#444444]">
                  Each matter is evaluated based on the project documents,
                  agreements, payment records, correspondence and the specific
                  circumstances of the dispute. Our office is on Commercial
                  Street in central Bengaluru, and RERA consultations are
                  available by appointment.
                </p>

                <p className="mt-6 text-[15px] leading-8 text-[#444444]">
                  Advocates <Link href="/advocates/kishan-shetty">Kishan Shetty S.R.</Link> and <Link href="/advocates/yashwanth-ovarsu">Yashwanth Ovarsu</Link> both include RERA matters in their
                  practice. For property disputes outside RERA, such as title,
                  partition or injunction suits, see our
                  <Link href="/practice-areas/real-estate-property-law">real estate litigation</Link> practice.
                </p>
              </div>
            </div>

            {/* MATTERS */}
            <div className="rounded-2xl bg-[#0A0A0A] p-8 sm:p-10 lg:p-5">
              <p className="text-[10px] font-semibold uppercase tracking-[3px] text-[#C5A45D]">
                Matters We Handle
              </p>

              <h2 className="mt-1 font-serif text-3xl leading-tight text-white sm:text-4xl">
                Builder Disputes &amp; RERA Claims
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
              RERA Legal Services in Bengaluru
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#666666]">
              Legal assistance across the different stages of RERA
              proceedings, from the first consultation and complaint drafting
              to hearings before K-RERA, appeals and execution of orders.
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
                Delayed Possession, Refund and Compensation Under RERA
              </h2>
            </div>

            <div className="space-y-4 text-sm leading-7 text-[#AAB7BF]">
              <p>
                Where a builder fails to hand over possession as agreed,
                Section 18 of the RERA Act gives the allottee a choice. An
                allottee who withdraws from the project may claim a refund of
                the amount paid with interest. An allottee who stays in the
                project may claim interest for the delay period, for every
                month of delay until possession is handed over.
              </p>

              <p>
                Compensation claims are decided by the adjudicating officer
                under Sections 71 and 72 of the Act. If an order is passed and
                not complied with, it may be enforced through execution and
                recovery proceedings, and an order may be challenged in appeal
                before KREAT.
              </p>

              <p>
                 Our approach focuses on understanding the client&apos;s objectives,
                assessing the agreement, payment records and possession
                timeline, and preparing the matter for appropriate proceedings
                before the RERA authority or appellate forum.
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
                RERA Lawyer
                <br />
                FAQs
              </h2>

              <p className="mt-5 max-w-sm text-sm leading-7 text-[#666666]">
                Answers to common questions about RERA complaints, builder
                disputes, refunds, compensation, appeals and legal
                representation in Karnataka.
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
                RERA Legal Consultation in Bangalore
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
