import {
  ArrowRight,
  Building2,
  BriefcaseBusiness,
  FileCheck2,
  FileText,
  Gavel,
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
  },
  {
    title: "Criminal Litigation",
    description:
      "Legal representation in criminal matters, defence proceedings and related cases.",
    icon: Shield,
  },
  {
    title: "Real Estate & Property Law",
    description:
      "Legal assistance relating to property transactions, disputes and documentation.",
    icon: Home,
  },
  {
    title: "RERA Litigation",
    description:
      "Representation in disputes and proceedings arising under RERA.",
    icon: Building2,
  },
  {
    title: "Commercial Litigation",
    description:
      "Legal representation in business, commercial and contractual disputes.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Banking & SARFAESI",
    description:
      "Representation in banking disputes and SARFAESI-related proceedings.",
    icon: Landmark,
  },
  {
    title: "Family & Matrimonial Law",
    description:
      "Legal assistance in matrimonial, family and related disputes.",
    icon: Users,
  },
  {
    title: "Property Due Diligence",
    description:
      "Legal examination of property records, documents and potential issues.",
    icon: FileCheck2,
  },
  {
    title: "Title Verification",
    description:
      "Review and verification of property title and ownership documents.",
    icon: FileText,
  },
  {
    title: "Conveyancing",
    description:
      "Legal assistance with property documentation and conveyancing matters.",
    icon: Home,
  },
  {
    title: "Contract Drafting",
    description:
      "Preparation and review of contracts, agreements and legal documents.",
    icon: FileText,
  },
  {
    title: "Arbitration & Mediation",
    description:
      "Representation and assistance in alternative dispute resolution matters.",
    icon: Handshake,
  },
  {
    title: "Recovery Proceedings",
    description:
      "Legal representation in recovery claims and related proceedings.",
    icon: Gavel,
  },
  {
    title: "Legal Advisory",
    description:
      "Strategic legal advice tailored to individual and business requirements.",
    icon: BriefcaseBusiness,
  },
];

export default function PracticeAreasSection() {
  return (
    <section
      id="practice-areas"
      className="relative overflow-hidden bg-[#0A0A0A] py-20 sm:py-24 lg:py-14npm"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-180px] top-[-150px] h-[450px] w-[450px] rounded-full bg-[#17384D]/30 blur-[140px]" />

        <div className="absolute bottom-[-180px] right-[-120px] h-[450px] w-[450px] rounded-full bg-[#C5A45D]/[0.05] blur-[140px]" />
      </div>

      <div className="relative px-8 sm:px-10 lg:px-12 xl:px-10">

        {/* =====================================================
            SECTION HEADER
        ===================================================== */}

        <div className="flex items-end justify-between gap-6 -mt-10">

          <div>

            <p className="text-[10px] font-semibold uppercase tracking-[3px] text-[#C5A45D]">
              Legal Services
            </p>

            <h2 className="mt-3 font-serif text-4xl leading-tight text-[#F5F1E8] sm:text-5xl lg:text-6xl">
              Practice Areas
            </h2>

            <p className="mt-5 text-sm leading-7 text-[#AEBBC3] sm:text-base">
              Legal representation and advisory services across a range of
              civil, criminal, property, commercial and family matters.
            </p>
          </div>

        </div>


        {/* =====================================================
            HORIZONTAL PRACTICE AREA CARDS
        ===================================================== */}

        <div className="mt-6 pt-6 -mx-5 overflow-x-auto px-8 pb-5 sm:-mx-10 sm:px-10 lg:-mx-12 lg:px-12 xl:-mx-16 xl:px-16 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">

          <div className="flex w-max gap-4">

            {practiceAreas.map((area) => {
              const Icon = area.icon;

              return (
                <article
                  key={area.title}
                  className="group relative z-0 flex h-[235px] w-[280px] shrink-0 flex-col justify-between overflow-hidden rounded-[14px] border border-[#C5A45D]/20 bg-[#0A0A0A] p-6 transition-all duration-300 hover:z-40 hover:-translate-y-1 hover:border-[#C5A45D]/60 hover:bg-[#132F42]"
                >

                  {/* Subtle Glow */}
                  <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[#C5A45D]/[0.04] blur-2xl transition-all duration-500 group-hover:bg-[#C5A45D]/[0.09]" />

                  {/* Icon */}
                  <div className="relative flex h-11 w-11 items-center justify-center rounded-full border border-[#C5A45D]/30 bg-[black]">
                    <Icon
                      size={20}
                      strokeWidth={1.5}
                      className="text-[#C5A45D]"
                    />
                  </div>


                  {/* Content */}
                  <div className="relative">

                    <h3 className="font-serif text-[22px] leading-tight text-[#F5F1E8]">
                      {area.title}
                    </h3>

                    <p className="mt-3 text-[12px] leading-5 text-[#AAB7BF]">
                      {area.description}
                    </p>

                  </div>


                  {/* Arrow */}
                  <a
  href="#contact"
  aria-label={`Learn more about ${area.title}`}
  className="absolute bottom-5 right-5 flex items-center justify-center text-[#C5A45D] transition-transform duration-300 group-hover:translate-x-1"
>
  <ArrowRight
    size={20}
    strokeWidth={1.6}
  />
</a>
                </article>
              );
            })}

          </div>

        </div>

      </div>
    </section>
  );
}