import Link from "next/link";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";
import JsonLd from "@/components/JsonLd";
import { practiceAreaSchemas } from "@/lib/schema";

const matters = [
  "Filing for divorce and contested divorce",
  "Mutual consent divorce",
  "Mutual divorce settlement terms",
  "Maintenance and alimony",
  "Child custody",
  "Child visitation rights",
  "Domestic violence cases",
  "Matrimonial FIRs and quashing petitions",
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
    title: "Filing Divorce & Petitions",
    text: "Preparation and filing of divorce petitions, mutual consent petitions, applications, replies, affidavits, settlement documents and other family-law documentation.",
  },
  {
    number: "03",
    title: "Family Court Representation",
    text: "Representation and assistance in divorce and matrimonial proceedings before the Family Courts in Bengaluru, including hearings, applications and legal arguments.",
  },
  {
    number: "04",
    title: "Custody, Maintenance & Alimony",
    text: "Legal assistance in matters involving child custody, visitation, maintenance, alimony and other protective or financial remedies.",
  },
  {
    number: "05",
    title: "Divorce Settlement & Mediation",
    text: "Assistance with negotiation, mediation and divorce settlements, including terms on alimony, custody and property, where a resolution may be achieved without prolonged litigation.",
  },
  {
    number: "06",
    title: "Appeals & Further Remedies",
    text: "Legal assistance in appropriate matrimonial appeals, revisions and other proceedings arising from family-law matters.",
  },
];

const faqs = [
  {
    question: "What matters do matrimonial lawyers handle?",
    answer:
      "Matrimonial lawyers and advocates handle divorce, mutual consent divorce, maintenance, alimony, child custody, visitation, domestic violence proceedings, family settlements and other disputes arising from marriage and family relationships.",
  },
  {
    question: "How do I file for divorce in Bangalore?",
    answer:
      "A divorce petition is filed before the Family Court with jurisdiction, generally where the marriage was solemnised, where the spouses last lived together or where the respondent resides, as the applicable law provides. A contested divorce is filed on the grounds recognised by the applicable personal law, such as Section 13 of the Hindu Marriage Act, 1955. A mutual consent divorce is filed jointly by both spouses. The right route depends on the facts and the personal law that applies.",
  },
  {
    question: "Can a divorce be obtained by mutual consent?",
    answer:
      "Yes, where the required legal conditions are satisfied. Under Section 13B of the Hindu Marriage Act, 1955, spouses who have lived separately for at least one year and have mutually agreed to end the marriage may file a joint petition. Similar provisions exist under other laws, such as Section 28 of the Special Marriage Act, 1954.",
  },
  {
    question: "How long does a mutual consent divorce take?",
    answer:
      "Under Section 13B, the second motion is ordinarily taken up after six months and within eighteen months of filing the joint petition. The Supreme Court has held that the six-month period may be waived by the court in appropriate cases. The overall time depends on the court, the settlement terms and the facts of the matter.",
  },
  {
    question: "Can a mutual divorce be filed with or without alimony?",
    answer:
      "Yes. In a mutual divorce settlement, the spouses may agree on a one-time alimony amount, periodic payments, or that no alimony will be claimed. The court considers whether the settlement terms, including alimony, are agreed freely before granting the divorce.",
  },
  {
    question: "How is child custody decided in a mutual divorce?",
    answer:
      "In a mutual divorce with child custody terms, the spouses usually agree on custody, visitation and child support as part of the settlement. The court may examine these terms, as the welfare of the child remains the primary consideration.",
  },
  {
    question: "How are child custody and visitation matters decided?",
    answer:
      "Custody matters are considered based on the facts of each case, with the welfare and best interests of the child being the primary consideration. Where one parent has custody, the court may grant visitation rights to the other parent. Relevant provisions include Section 26 of the Hindu Marriage Act, 1955 and the Guardians and Wards Act, 1890.",
  },
  {
    question: "Can maintenance and alimony be claimed?",
    answer:
      "Depending on the applicable law and circumstances, a spouse may claim interim maintenance during proceedings and permanent alimony at the time of or after the divorce, for example under Sections 24 and 25 of the Hindu Marriage Act, 1955. Maintenance may also be claimed under Section 144 of the Bharatiya Nagarik Suraksha Sanhita, 2023 (formerly Section 125 CrPC).",
  },
  {
    question: "What legal remedies are available for domestic violence?",
    answer:
      "The Protection of Women from Domestic Violence Act, 2005 provides for protection orders, residence orders, monetary relief and custody orders. Cruelty by a husband or his relatives may also be an offence under the Bharatiya Nyaya Sanhita, 2023 (formerly Section 498A IPC). Where a matrimonial FIR is filed, a petition to quash it may, in appropriate cases, be filed before the High Court of Karnataka.",
  },
  {
    question: "What happens at the first and second motion in a mutual divorce?",
    answer:
      "At the first motion, both spouses file a joint petition for divorce by mutual consent and the court records their statements. The second motion is ordinarily made not earlier than six months and not later than eighteen months after the petition is filed, when both spouses confirm that they still consent. If the court is satisfied, it passes a decree of divorce.",
  },
  {
    question: "Can a spouse withdraw consent in a mutual divorce?",
    answer:
      "Yes. In Sureshta Devi v. Om Prakash (1991), the Supreme Court held that mutual consent must continue until the decree is passed, so either spouse may withdraw consent before the final decree. If consent is withdrawn, the mutual consent petition cannot proceed, although other remedies under the applicable law may remain available.",
  },
  {
    question: "Can a husband claim maintenance or alimony?",
    answer:
      "Sections 24 and 25 of the Hindu Marriage Act, 1955 allow either spouse to seek interim maintenance and permanent alimony, and High Courts have described these provisions as gender-neutral. Maintenance under Section 144 of the Bharatiya Nagarik Suraksha Sanhita, 2023 is available to a wife, children and parents. Any claim depends on the income, means and circumstances of both spouses.",
  },
  {
    question: "Who usually gets custody of a young child?",
    answer:
      "For Hindus, the proviso to Section 6(a) of the Hindu Minority and Guardianship Act, 1956 provides that custody of a child below five years of age shall ordinarily be with the mother. This is not absolute, because the welfare of the child is the paramount consideration. Different laws may apply depending on the religion of the parties.",
  },
  {
    question: "What documents are needed for a mutual consent divorce?",
    answer:
      "Documents commonly include proof of marriage, such as the marriage certificate, invitation or photographs, identity and address proof of both spouses, details showing the period of separation, income and asset details, and the agreed settlement terms on alimony, child custody and property. Requirements can vary between courts, so the exact list is confirmed during the consultation.",
  },
  {
    question: "What are the grounds for a contested divorce?",
    answer:
      "Under Section 13(1) of the Hindu Marriage Act, 1955, grounds include adultery, cruelty, desertion for a continuous period of at least two years, conversion to another religion, certain forms of mental disorder, communicable venereal disease, renunciation of the world, and not being heard of as alive for seven years. A wife has certain additional grounds under Section 13(2). Other personal laws have their own grounds, and each case depends on its facts and evidence.",
  },
  {
    question: "Can a mutual divorce be filed if one spouse lives abroad?",
    answer:
      "Yes, a mutual consent petition can be filed even if one spouse lives outside India, provided the court has jurisdiction. In Amardeep Singh v. Harveen Kaur (2017), the Supreme Court recognised that video conferencing may be used in mutual consent divorce proceedings. Whether a court permits appearance by video conferencing depends on the court and the facts of the case.",
  },
  {
    question: "How are fees for a mutual divorce discussed?",
    answer:
      "Fees are discussed at the consultation and depend on the nature of the matter, such as whether the divorce is by mutual consent or contested and whether settlement terms still need to be negotiated. A mutual consent divorce generally involves fewer hearings than a contested divorce.",
  },
  {
    question: "Can family disputes be settled without going to court?",
    answer:
      "Yes. Depending on the circumstances, negotiation, mediation and family settlement may provide alternatives to prolonged litigation.",
  },
    {
      question: "Do you handle divorce and family matters in Bengaluru?",
      answer:
        "Yes. Falcon Lex Legal is based in Bengaluru and assists clients with divorce, mutual consent divorce, custody, maintenance and other family matters before the Family Courts in Bengaluru. Consultations are by appointment.",
    },
  {
    question: "Where is your office for divorce consultations?",
    answer:
      "Our office is at Plazzo Retail Mall, Commercial Street, Bengaluru 560001, in central Bangalore. Divorce and matrimonial consultations are confidential and available by appointment, and e-consultation can also be arranged.",
  },
];

export default function FamilyMatrimonialLaw() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-[#F5F1E8]">
      <Seo title="Matrimonial Lawyers & Advocates Bangalore | Falcon Lex Legal" description="Matrimonial lawyers in Bengaluru for divorce, mutual consent divorce, maintenance and alimony, child custody and domestic violence cases. Book a consultation." path="/practice-areas/family-matrimonial-law" />
      <JsonLd data={practiceAreaSchemas({ name: "Family & Matrimonial Law", path: "/practice-areas/family-matrimonial-law", description: "Matrimonial lawyers in Bengaluru for divorce, mutual consent divorce, maintenance and alimony, child custody and domestic violence cases. Book a consultation.", faqs })} />

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative min-h-[520px] overflow-hidden">

        <img
          src="/family-matrimonial.jpg"
          alt="Wooden family figures, model house and wedding rings beside law books, representing divorce and matrimonial law"
          loading="eager"
          fetchPriority="high"
          decoding="async"
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
              Matrimonial Lawyers &amp; Advocates in Bangalore
            </h1>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-[#D0D6D9] sm:text-base">
              Sensitive and practical legal assistance in divorce, mutual
              consent divorce, child custody, maintenance, alimony, domestic
              violence and other family law matters.
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
              Divorce Lawyers and Advocates in Bengaluru
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
                Falcon Lex Legal is a Bengaluru law firm assisting individuals
                and families with matrimonial and family matters before the
                Family Courts in Bengaluru and other appropriate courts and
                forums, including the courts at Devanahalli, Nelamangala,
                Anekal and Hosakote where they have jurisdiction.
              </p>

              <p>
                As divorce lawyers and advocates, we assist with filing for
                divorce, whether as a contested petition on the grounds
                recognised by law or as a mutual consent divorce filed jointly
                by both spouses. We also advise on the related questions that
                usually come with a divorce, such as maintenance, alimony,
                child custody and the division of jointly held property.
              </p>

              <p>
                Every matter is approached with attention to the individual
                circumstances, relevant documents and the long-term interests
                of the client and family. Our office is on Commercial Street
                in central Bengaluru, and consultations are by appointment.
              </p>

              <p>
                Advocates <Link href="/advocates/kishan-shetty">Kishan Shetty S.R.</Link> and <Link href="/advocates/yashwanth-ovarsu">Yashwanth Ovarsu</Link> both include family and matrimonial
                law in their practice. Where a criminal complaint arises from
                a matrimonial dispute, our <Link href="/practice-areas/criminal-litigation">criminal litigation</Link> practice
                assists with bail and FIR quashing petitions, and disputes
                over jointly held property may also involve
                <Link href="/practice-areas/real-estate-property-law">property litigation</Link>.
              </p>

            </div>

          </div>


          {/* MATTERS COVERED */}
          <div className="rounded-2xl bg-[#0A0A0A] p-7 sm:p-8">

            <p className="text-[10px] font-semibold uppercase tracking-[3px] text-[#C5A45D]">
              Matters Covered
            </p>

            <h2 className="mt-3 font-serif text-2xl text-[#F5F1E8]">
              Divorce &amp; Matrimonial Matters
            </h2>

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
              Matrimonial Legal Services in Bengaluru
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#666666]">
              Confidential legal assistance focused on protecting rights,
              filing for divorce, resolving family disputes and pursuing
              appropriate legal remedies.
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
                Mutual Consent Divorce and Divorce Settlements in Bangalore
              </h2>

            </div>


            <div className="space-y-4 text-sm leading-7 text-[#AAB7BF]">

              <p>
                A mutual consent divorce is filed jointly by both spouses
                after they have lived separately and agreed to end the
                marriage, for example under Section 13B of the Hindu Marriage
                Act, 1955. A mutual divorce settlement usually records the
                agreed terms on alimony, child custody and visitation, and
                jointly held property.
              </p>

              <p>
                Depending on what the spouses agree, a mutual divorce may be
                filed with alimony, as a one-time or periodic payment, or
                without alimony. Where there are children, custody and
                visitation terms are set out in the settlement, and the court
                keeps the welfare of the child in view.
              </p>

              <p>
                 Our approach focuses on understanding the client&apos;s
                circumstances, reviewing relevant documents and providing
                clear legal guidance while preparing the matter for
                appropriate negotiation, mediation or Family Court
                proceedings.
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
              Divorce &amp; Matrimonial
              <br />
              FAQs
            </h2>

            <p className="mt-4 max-w-md text-sm leading-7 text-[#666666]">
              Answers to common questions about filing for divorce, mutual
              consent divorce, custody, maintenance, alimony and other family
              law matters.
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
                Discuss Your Divorce or Matrimonial Matter
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

