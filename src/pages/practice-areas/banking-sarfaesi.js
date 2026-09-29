import Link from "next/link";
import Footer from "@/components/Footer";

const matters = [
  "SARFAESI proceedings",
  "Banking and financial disputes",
  "Loan and recovery matters",
  "Debt recovery proceedings",
  "Possession and enforcement matters",
  "DRT and related proceedings",
  "Challenges to recovery actions",
  "Banking-related appeals and remedies",
];

const services = [
  {
    number: "01",
    title: "Banking Legal Consultation",
    text: "Assessment of loan documents, notices, recovery actions and related records to understand the legal position and available remedies.",
  },
  {
    number: "02",
    title: "Legal Documentation",
    text: "Preparation and review of replies, objections, applications, representations and other documents relating to banking and recovery proceedings.",
  },
  {
    number: "03",
    title: "DRT & SARFAESI Representation",
    text: "Representation and assistance in proceedings before the appropriate forums in relation to recovery and enforcement actions.",
  },
  {
    number: "04",
    title: "Recovery Action Challenges",
    text: "Legal assistance in examining and challenging appropriate recovery or enforcement measures and seeking available protective remedies.",
  },
  {
    number: "05",
    title: "Possession & Enforcement Matters",
    text: "Assistance in matters concerning possession, enforcement measures and disputes relating to secured assets.",
  },
  {
    number: "06",
    title: "Banking Appeals & Remedies",
    text: "Legal assistance in appropriate appeals, further proceedings and other remedies arising from banking and recovery matters.",
  },
];

const faqs = [
  {
    question: "What matters are handled under Banking & SARFAESI?",
    answer:
      "Banking & SARFAESI matters may include loan disputes, recovery proceedings, enforcement actions, possession matters, DRT proceedings and other disputes arising from banking and secured lending transactions.",
  },
  {
    question: "What is SARFAESI?",
    answer:
      "SARFAESI refers to the legal framework governing enforcement of security interests by secured creditors, subject to the requirements and remedies provided under the applicable law.",
  },
  {
    question: "What should I do after receiving a recovery notice from a bank?",
    answer:
      "The notice and underlying loan documents should be reviewed promptly to understand the allegations, outstanding amounts, security involved, procedural requirements and available legal remedies.",
  },
  {
    question: "Can SARFAESI proceedings be challenged?",
    answer:
      "Depending on the facts, applicable law and stage of proceedings, certain recovery or enforcement measures may be challenged through appropriate legal proceedings before the competent forum.",
  },
  {
    question: "What documents are needed for a banking dispute?",
    answer:
      "Relevant documents may include loan agreements, sanction letters, account statements, repayment records, security documents, notices issued by the lender, correspondence and previous legal or court documents.",
  },
];

export default function BankingSarfaesi() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-[#F5F1E8]">
      {/* HERO */}
      <section className="relative min-h-[520px] overflow-hidden">
        <img
          src="/banking-sarfaesi.jpg"
          alt="Banking & SARFAESI"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/60 to-[#0A0A0A]/20" />

        <div className="relative mx-auto flex min-h-[520px] max-w-7xl flex-col justify-end px-6 pb-12 pt-10 sm:px-10 lg:px-12 lg:pb-16">
          <Link
            href="/#practice-areas"
            className="absolute left-6 top-10 inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[2px] text-[#D0D6D9] transition hover:text-[#C5A45D] sm:left-10 lg:left-12"
          >
            <span>←</span>
            All Practice Areas
          </Link>

          <div className="max-w-3xl">
            <p className="text-[10px] font-semibold uppercase tracking-[3px] text-[#C5A45D]">
              Practice Area
            </p>

            <h1 className="mt-3 font-serif text-4xl leading-tight text-[#F5F1E8] sm:text-5xl lg:text-6xl">
              Banking &amp; SARFAESI
            </h1>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-[#D0D6D9] sm:text-base">
              Legal assistance in banking disputes, loan recovery, SARFAESI
              proceedings, DRT matters and enforcement-related disputes.
            </p>
          </div>
        </div>
      </section>

      {/* OVERVIEW + MATTERS */}
      <section className="bg-white text-[#0A0A0A]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 sm:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:px-12 lg:py-16">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[3px] text-[#C5A45D]">
              Overview
            </p>

            <h2 className="mt-3 max-w-xl font-serif text-3xl leading-tight text-[#0A0A0A] sm:text-4xl">
              Legal Assistance in Banking &amp; Recovery Matters
            </h2>

            <div className="mt-5 max-w-2xl space-y-4 text-sm leading-7 text-[#666666]">
              <p>
                Banking and SARFAESI matters often involve complex loan
                documentation, secured assets, recovery proceedings and
                statutory requirements.
              </p>

              <p>
                We assist borrowers, property owners and other affected
                parties in understanding notices, recovery actions and
                available legal remedies under the applicable framework.
              </p>

              <p>
                Each matter is assessed on the basis of the loan documents,
                account records, security documents, notices, correspondence
                and the specific circumstances involved.
              </p>
            </div>
          </div>

          <div className="rounded-2xl bg-[#0A0A0A] p-7 sm:p-8">
            <p className="text-[10px] font-semibold uppercase tracking-[3px] text-[#C5A45D]">
              Matters Covered
            </p>

            <h3 className="mt-3 font-serif text-2xl text-[#F5F1E8]">
              Banking &amp; Recovery Matters
            </h3>

            <div className="my-6 h-px bg-[#C5A45D]/30" />

            <div className="grid gap-x-8 gap-y-4 sm:grid-cols-2">
              {matters.map((matter) => (
                <div
                  key={matter}
                  className="group flex items-start gap-3"
                >
                  <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#C5A45D]" />

                  <p className="text-sm leading-6 text-[#B8BEC2] transition group-hover:text-[#C5A45D]">
                    {matter}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-white text-[#0A0A0A]">
        <div className="mx-auto max-w-7xl px-6 py-12 sm:px-10 lg:px-12 lg:py-16">
          <div className="text-center">
            <p className="text-[10px] font-semibold uppercase tracking-[3px] text-[#C5A45D]">
              Our Services
            </p>

            <h2 className="mt-3 font-serif text-3xl leading-tight text-[#0A0A0A] sm:text-4xl">
              Banking &amp; SARFAESI Legal Services
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#666666]">
              Legal assistance for banking disputes, recovery actions and
              proceedings concerning secured assets.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.number}
                className="group border border-[#D8D4CB] p-6 transition duration-300 hover:border-[#C5A45D]"
              >
                <span className="text-sm font-semibold tracking-[2px] text-[#C5A45D]">
                  {service.number}
                </span>

                <h3 className="mt-5 font-serif text-xl text-[#0A0A0A]">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#666666]">
                  {service.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section className="bg-[#0A0A0A] py-10 sm:py-12">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-20">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[3px] text-[#C5A45D]">
                Banking &amp; SARFAESI Approach
              </p>

              <h2 className="mt-4 font-serif text-3xl leading-tight text-[#F5F1E8] sm:text-4xl">
                Careful Review. Strategic Recovery Representation.
              </h2>
            </div>

            <div className="space-y-4 text-sm leading-7 text-[#AAB7BF]">
              <p>
                Banking and recovery proceedings can involve detailed loan
                records, security documents, notices and procedural
                requirements. A careful review of the available documents
                helps identify the relevant issues and available remedies.
              </p>

              <p>
                Our approach focuses on understanding the client's
                circumstances, examining the underlying records and preparing
                the matter for the appropriate legal proceedings while keeping
                the client informed throughout the process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white text-[#0A0A0A]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 sm:px-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-12 lg:py-16">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[3px] text-[#C5A45D]">
              FAQs
            </p>

            <h2 className="mt-3 font-serif text-3xl leading-tight text-[#0A0A0A] sm:text-4xl">
              Frequently Asked Questions
            </h2>

            <p className="mt-4 max-w-md text-sm leading-7 text-[#666666]">
              Answers to common questions about banking disputes, recovery
              proceedings and SARFAESI matters.
            </p>
          </div>

          <div className="divide-y divide-[#D8D4CB] border-y border-[#D8D4CB]">
            {faqs.map((faq) => (
              <details key={faq.question} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6">
                  <span className="font-serif text-lg text-[#0A0A0A]">
                    {faq.question}
                  </span>

                  <span className="relative flex h-6 w-6 shrink-0 items-center justify-center text-[#C5A45D]">
                    <span className="absolute h-px w-3 bg-current" />
                    <span className="absolute h-3 w-px bg-current transition-transform duration-300 group-open:rotate-90" />
                  </span>
                </summary>

                <p className="mt-4 pr-10 text-sm leading-7 text-[#666666]">
                  {faq.answer}
                </p>
              </details>
            ))}
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
                Discuss Your Banking Matter
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