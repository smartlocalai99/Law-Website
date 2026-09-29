import Link from "next/link";
import {
  ArrowRight,
  Building2,
  BriefcaseBusiness,
  FileText,
  Handshake,
  Home,
  Landmark,
  Scale,
  Shield,
  Users,
} from "lucide-react";

const practiceAreas = [
  {
    title: "Civil Litigation",
    description:
      "Representation in civil disputes, recovery matters and related court proceedings.",
    icon: Scale,
    image: "civil-litigation.jpg",
    slug: "civil-litigation",
  },
  {
    title: "Criminal Litigation",
    description:
      "Legal representation in criminal matters, defence proceedings and related cases.",
    icon: Shield,
    image: "criminal-litigation.jpg",
    slug: "criminal-litigation",
  },
  {
    title: "Real Estate & Property Law",
    description:
      "Legal assistance relating to property transactions, ownership, disputes and documentation.",
    icon: Home,
    image: "real-estate.jpg",
    slug: "real-estate-property-law",
  },
  {
    title: "RERA Litigation",
    description:
      "Representation in disputes and proceedings arising under RERA.",
    icon: Building2,
    image: "rera-litigation.jpg",
    slug: "rera-litigation",
  },
  {
    title: "Commercial Litigation",
    description:
      "Legal representation in business, commercial and contractual disputes.",
    icon: BriefcaseBusiness,
    image: "commercial-litigation.jpg",
    slug: "commercial-litigation",
  },
  {
    title: "Banking & SARFAESI",
    description:
      "Representation in banking disputes, recovery matters and SARFAESI-related proceedings.",
    icon: Landmark,
    image: "banking-sarfaesi.jpg",
    slug: "banking-sarfaesi",
  },
  {
    title: "Family & Matrimonial Law",
    description:
      "Legal assistance in matrimonial, family and related disputes.",
    icon: Users,
    image: "family-matrimonial.jpg",
    slug: "family-matrimonial-law",
  },
  {
    title: "Contract Drafting",
    description:
      "Preparation and review of contracts, agreements and legal documents.",
    icon: FileText,
    image: "contract-drafting.jpg",
    slug: "contract-drafting",
  },
  {
    title: "Arbitration & Mediation",
    description:
      "Representation and assistance in alternative dispute resolution matters.",
    icon: Handshake,
    image: "arbitration-mediation.jpg",
    slug: "arbitration-mediation",
  },
  {
    title: "Legal Advisory",
    description:
      "Strategic legal advice tailored to individual and business requirements.",
    icon: BriefcaseBusiness,
    image: "legal-advisory.jpg",
    slug: "legal-advisory",
  },
];

export default function Practiceareas() {
  return (
    <section
      id="practice-areas"
      className="relative overflow-hidden bg-[#080808] py-16 sm:py-20 lg:py-13"
    >
      <div className="mx-auto max-w-[1400px] px-5 sm:px-10 lg:px-12 xl:px-16">
        {/* HEADER */}
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[3px] text-[#C5A45D]">
              Legal Services
            </p>

            <h2 className="mt-3 font-serif text-4xl leading-tight text-[#F5F1E8] sm:text-5xl lg:text-6xl">
              Practice Areas
            </h2>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-[#AAB7BF] sm:text-base">
              Legal representation and advisory services across a range of
              civil, criminal, property, commercial and family matters.
            </p>
          </div>

          {/* VIEW ALL BUTTON */}
          <Link
            href="/practice-areas"
            className="group mb-2 hidden shrink-0 items-center gap-3 rounded-full border border-[#C5A45D]/40 px-5 py-3 text-[10px] font-semibold uppercase tracking-[2px] text-[#C5A45D] transition-all duration-300 hover:border-[#C5A45D] hover:bg-[#C5A45D]/10 hover:text-[#F5F1E8] sm:inline-flex"
          >
            View All Practice Areas
            <ArrowRight
              size={16}
              strokeWidth={1.5}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>

        {/* MOBILE VIEW ALL */}
        <div className="mt-5 sm:hidden">
          <Link
            href="/practice-areas"
            className="group inline-flex items-center gap-3 rounded-full border border-[#C5A45D]/40 px-4 py-2.5 text-[9px] font-semibold uppercase tracking-[2px] text-[#C5A45D] transition-all duration-300 hover:border-[#C5A45D] hover:bg-[#C5A45D]/10 hover:text-[#F5F1E8]"
          >
            View All Practice Areas
            <ArrowRight
              size={15}
              strokeWidth={1.5}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>

        {/* CARDS */}
        <div className="mt-8 -mx-5 overflow-x-auto px-5 pb-5 sm:-mx-10 sm:px-10 lg:-mx-12 lg:px-12 xl:-mx-16 xl:px-16 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex w-max gap-4">
            {practiceAreas.map((area) => {
              const Icon = area.icon;

              return (
                <Link
                  key={area.title}
                  href={`/practice-areas/${area.slug}`}
                  className="block shrink-0"
                >
                  <article className="group relative flex h-[320px] w-[280px] flex-col overflow-hidden rounded-[14px] border border-[#C5A45D]/25 bg-[#0A0A0A] transition-all duration-300 hover:-translate-y-1 hover:border-[#C5A45D]/70">
                    {/* IMAGE */}
                    <div className="relative h-[155px] w-full shrink-0 overflow-hidden">
                      <img
                        src={area.image}
                        alt={area.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/90 via-[#0A0A0A]/20 to-transparent" />
                    </div>

                    {/* ICON */}
                    <div className="absolute left-6 top-[128px] z-10 flex h-11 w-11 items-center justify-center rounded-full border border-[#C5A45D]/40 bg-[#0A0A0A]">
                      <Icon
                        size={20}
                        strokeWidth={1.5}
                        className="text-[#C5A45D]"
                      />
                    </div>

                    {/* CONTENT */}
                    <div className="relative flex flex-1 flex-col justify-between px-6 pb-5 pt-6">
                      <div>
                        <h3 className="font-serif text-[22px] leading-tight text-[#F5F1E8]">
                          {area.title}
                        </h3>

                        <p className="mt-4 max-w-[220px] text-[12px] leading-5 text-[#AAB7BF]">
                          {area.description}
                        </p>
                      </div>

                    
                      
                    </div>
                  </article>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}