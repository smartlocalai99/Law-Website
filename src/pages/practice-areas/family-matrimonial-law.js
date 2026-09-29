import Link from "next/link";
import Footer from "@/components/Footer";

const matters = [
  "Divorce and matrimonial disputes",
  "Mutual consent divorce matters",
  "Child custody and visitation matters",
  "Maintenance and financial support",
  "Domestic violence-related legal matters",
  "Alimony and matrimonial financial disputes",
  "Property disputes between family members",
  "Family settlements and related proceedings",
];

const services = [
  {
    number: "01",
    title: "Matrimonial Legal Consultation",
    text: "Confidential assessment of the circumstances, documents and legal issues to understand the available options and appropriate course of action.",
  },
  {
    number: "02",
    title: "Petitions & Documentation",
    text: "Preparation and review of petitions, applications, replies, affidavits, settlement documents and other family-law documentation.",
  },
  {
    number: "03",
    title: "Court Representation",
    text: "Representation and assistance in matrimonial and family court proceedings, hearings, applications and legal arguments.",
  },
  {
    number: "04",
    title: "Custody & Financial Relief",
    text: "Legal assistance in appropriate matters involving child custody, maintenance, alimony and other protective or financial remedies.",
  },
  {
    number: "05",
    title: "Settlement & Mediation",
    text: "Assistance with negotiation, mediation and family settlements where an appropriate resolution may be achieved without prolonged litigation.",
  },
  {
    number: "06",
    title: "Appeals & Further Remedies",
    text: "Legal assistance in appropriate matrimonial appeals, revisions and other proceedings arising from family-law matters.",
  },
];

const faqs = [
  {
    question: "What matters are handled under Family & Matrimonial Law?",
    answer:
      "Family and matrimonial matters may include divorce, maintenance, child custody, visitation, domestic violence-related proceedings, alimony, family settlements and other disputes arising from family relationships.",
  },
  {
    question: "Can a divorce be obtained by mutual consent?",
    answer:
      "Depending on the circumstances and applicable law, spouses may proceed through mutual consent where the required legal conditions are satisfied.",
  },
  {
    question: "How are child custody matters decided?",
    answer:
      "Custody matters are considered based on the facts of each case, with the welfare and best interests of the child being an important consideration.",
  },
  {
    question: "Can maintenance be claimed during matrimonial proceedings?",
    answer:
      "Depending on the applicable law and circumstances, a spouse or eligible family member may have remedies relating to maintenance or financial support.",
  },
  {
    question: "Can family disputes be settled without going to court?",
    answer:
      "Yes. Depending on the circumstances, negotiation, mediation and family settlement may provide alternatives to prolonged litigation.",
  },
];

export default function FamilyMatrimonialLaw() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-[#F5F1E8]">

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative min-h-[520px] overflow-hidden">

        <img
          src="/family-matrimonial.jpg"
          alt="Family & Matrimonial Law"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/60 to-[#0A0A0A]/20" />

        <div className="relative z-10 mx-auto flex min-h-[520px] max-w-7xl flex-col justify-end px-6 pb-12 pt-10 sm:px-10 lg:px-12 lg:pb-16">

          <Link
            href="/#practice-areas"
            className="absolute left-6 top-10 inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[2px] text-[#D0D6D9] transition hover:text-[#C5A45D] sm:left-10 lg:left-12"
          >
            ← All Practice Areas
          </Link>

          <div className="max-w-3xl">

            <p className="text-[10px] font-semibold uppercase tracking-[3px] text-[#C5A45D]">
              Practice Area
            </p>

            <h1 className="mt-3 font-serif text-4xl leading-tight text-[#F5F1E8] sm:text-5xl lg:text-6xl">
              Family &amp; Matrimonial Law
            </h1>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-[#D0D6D9] sm:text-base">
              Sensitive and practical legal assistance in matrimonial
              disputes, divorce, child custody, maintenance and other family
              law matters.
            </p>

          </div>
        </div>
      </section>


      {/* =========================================================
          OVERVIEW + MATTERS
      ========================================================= */}
      <section className="bg-white text-[#0A0A0A]">

        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 sm:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:px-12 lg:py-16">

          {/* OVERVIEW */}
          <div>

            <p className="text-[10px] font-semibold uppercase tracking-[3px] text-[#C5A45D]">
              Overview
            </p>

            <h2 className="mt-3 max-w-xl font-serif text-3xl leading-tight text-[#0A0A0A] sm:text-4xl">
              Practical Legal Support for Family Matters
            </h2>

            <div className="mt-5 max-w-2xl space-y-4 text-sm leading-7 text-[#666666]">

              <p>
                Family and matrimonial disputes can involve sensitive
                personal, financial and legal issues that require careful
                handling and clear legal advice.
              </p>

              <p>
                We assist clients in understanding their legal rights and
                available remedies in matters involving marriage, separation,
                divorce, children, maintenance and family relationships.
              </p>

              <p>
                Every matter is approached with attention to the individual
                circumstances, relevant documents and the long-term interests
                of the client and family.
              </p>

            </div>

          </div>


          {/* MATTERS COVERED */}
          <div className="rounded-2xl bg-[#0A0A0A] p-7 sm:p-8">

            <p className="text-[10px] font-semibold uppercase tracking-[3px] text-[#C5A45D]">
              Matters Covered
            </p>

            <h3 className="mt-3 font-serif text-2xl text-[#F5F1E8]">
              Family &amp; Matrimonial Matters
            </h3>

            <div className="my-6 h-px w-16 bg-[#C5A45D]" />

            <div className="grid gap-x-8 gap-y-4 sm:grid-cols-2">

              {matters.map((matter) => (
                <div
                  key={matter}
                  className="group flex items-start gap-3"
                >

                  <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#C5A45D]" />

                  <p className="text-sm leading-6 text-[#D0D6D9] transition-colors duration-200 group-hover:text-[#C5A45D]">
                    {matter}
                  </p>

                </div>
              ))}

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          OUR SERVICES
      ========================================================= */}
      <section className="bg-white text-[#0A0A0A]">

        <div className="mx-auto max-w-7xl px-6 py-12 sm:px-10 lg:px-12 lg:py-16">

          <div className="text-center">

            <p className="text-[10px] font-semibold uppercase tracking-[3px] text-[#C5A45D]">
              Our Services
            </p>

            <h2 className="mt-3 font-serif text-3xl leading-tight text-[#0A0A0A] sm:text-4xl">
              Family &amp; Matrimonial Legal Services
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#666666]">
              Confidential legal assistance focused on protecting rights,
              addressing family disputes and pursuing appropriate legal
              remedies.
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

                <h3 className="mt-5 font-serif text-xl leading-tight text-[#0A0A0A] transition-colors duration-300 group-hover:text-[#C5A45D]">
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


      {/* =========================================================
          LEGAL APPROACH
      ========================================================= */}
      <section className="bg-[#0A0A0A] py-10 sm:py-12">

        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">

          <div className="grid gap-8 lg:grid-cols-2 lg:gap-20">

            <div>

              <p className="text-[10px] font-semibold uppercase tracking-[3px] text-[#C5A45D]">
                Family Law Approach
              </p>

              <h2 className="mt-4 font-serif text-3xl leading-tight text-[#F5F1E8] sm:text-4xl">
                Careful Guidance. Practical Family Law Representation.
              </h2>

            </div>


            <div className="space-y-4 text-sm leading-7 text-[#AAB7BF]">

              <p>
                Family and matrimonial matters often involve personal,
                emotional and financial considerations alongside legal
                requirements. A careful assessment helps identify the relevant
                issues, available remedies and appropriate course of action.
              </p>

              <p>
                Our approach focuses on understanding the client's
                circumstances, reviewing relevant documents and providing
                clear legal guidance while preparing the matter for
                appropriate negotiation, mediation or court proceedings.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          FAQ
      ========================================================= */}
      <section className="bg-white text-[#0A0A0A]">

        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 sm:px-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-12 lg:py-16">

          {/* LEFT */}
          <div>

            <p className="text-[10px] font-semibold uppercase tracking-[3px] text-[#C5A45D]">
              FAQs
            </p>

            <h2 className="mt-3 font-serif text-3xl leading-tight text-[#0A0A0A] sm:text-4xl">
              Family &amp; Matrimonial
              <br />
              FAQs
            </h2>

            <p className="mt-4 max-w-md text-sm leading-7 text-[#666666]">
              Answers to common questions about divorce, custody, maintenance
              and other family law matters.
            </p>

          </div>


          {/* RIGHT */}
          <div className="divide-y divide-[#D8D4CB] border-y border-[#D8D4CB]">

            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group py-5"
              >

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


      {/* =========================================================
          CONTACT
      ========================================================= */}
      <section className="bg-white text-[#0A0A0A]">

        <div className="mx-auto max-w-7xl px-6 py-8 sm:px-10 lg:px-12">

          <div className="flex flex-col gap-5 border-t border-[#D8D4CB] pt-7 sm:flex-row sm:items-center sm:justify-between">

            <div>

              <p className="text-[10px] font-semibold uppercase tracking-[3px] text-[#C5A45D]">
                Legal Consultation
              </p>

              <h2 className="mt-2 font-serif text-2xl text-[#0A0A0A] sm:text-3xl">
                Discuss Your Family Matter
              </h2>

              <p className="mt-2 text-sm text-[#666666]">
                Speak with our team by appointment or meet us at our office.
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


      {/* =========================================================
          FOOTER
      ========================================================= */}
      <Footer />

    </main>
  );
}

