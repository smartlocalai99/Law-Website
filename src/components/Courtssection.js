import {
  Building2,
  Landmark,
  Scale,
  Gavel,
  BriefcaseBusiness,
  Users,
  Shield,
  BadgeIndianRupee,
  MapPin,
  FileText,
  Banknote,
  Home,
  Layers3,
} from "lucide-react";

const courtAreas = [
  {
    title: "High Court of Karnataka",
    description:
      "Representation before the High Court of Karnataka in civil, criminal, commercial and other legal matters.",
    icon: Scale,
  },
  {
    title: "K-RERA",
    description:
      "Representation in matters before the Karnataka Real Estate Regulatory Authority.",
    icon: Building2,
  },
  {
    title: "KREAT",
    description:
      "Representation before the Karnataka Real Estate Appellate Tribunal in real estate and regulatory matters.",
    icon: Landmark,
  },
  {
    title: "Debt Recovery Tribunal",
    description:
      "Representation in debt recovery, banking and related financial proceedings before the DRT.",
    icon: Banknote,
  },
  {
    title: "City Civil Courts",
    description:
      "Representation in civil disputes and related proceedings before City Civil Courts.",
    icon: Gavel,
  },
  {
    title: "Commercial Courts",
    description:
      "Representation in commercial disputes, contractual matters and business-related litigation.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Family Courts",
    description:
      "Representation in matrimonial, family and related proceedings before Family Courts.",
    icon: Users,
  },
  {
    title: "Magistrate Courts",
    description:
      "Representation in criminal proceedings and other matters before Magistrate Courts.",
    icon: Shield,
  },
  {
    title: "District & Sessions Courts",
    description:
      "Representation in civil, criminal and other proceedings before District and Sessions Courts.",
    icon: Gavel,
  },
  {
    title: "Devanahalli Courts",
    description:
      "Representation in legal matters before the courts at Devanahalli.",
    icon: MapPin,
  },
  {
    title: "Anekal Courts",
    description:
      "Representation in legal matters before the courts at Anekal.",
    icon: MapPin,
  },
  {
    title: "Nelamangala Courts",
    description:
      "Representation in legal matters before the courts at Nelamangala.",
    icon: MapPin,
  },
  {
    title: "Other Trial Courts Across Karnataka",
    description:
      "Representation before other trial courts and judicial forums across Karnataka.",
    icon: Layers3,
  },
];

export default function CourtsSection() {
  return (
    <section
      id="courts"
      className="relative overflow-hidden bg-[#F8F7F3] py-20 sm:py-24 lg:py-28"
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-150px] top-[-150px] h-[400px] w-[400px] rounded-full bg-[#0B2030]/[0.025] blur-[120px]" />

        <div className="absolute bottom-[-150px] right-[-100px] h-[400px] w-[400px] rounded-full bg-[#C5A45D]/[0.05] blur-[120px]" />
      </div>

      <div className="relative px-8 sm:px-10 lg:px-12 xl:px-16">

        {/* =====================================================
            SECTION HEADER
        ===================================================== */}

        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[3px] text-[#C5A45D]">
            Courts & Tribunals
          </p>

          <h2 className="mt-4 max-w-[700px] font-serif text-4xl leading-[1.12] text-[#0B2030] sm:text-5xl lg:text-[52px]">
            Representation Across
            <br />
            Karnataka's Legal Forums
          </h2>

          <p className="mt-5 max-w-[650px] text-sm leading-7 text-[#596771] sm:text-base">
            Yashwanth Ovarsu appears before courts, tribunals and
            judicial and quasi-judicial forums across Karnataka,
            representing clients across a wide range of legal matters.
          </p>
        </div>


        {/* =====================================================
            COURT CARDS
        ===================================================== */}

        <div className="mt-12 grid grid-cols-1 border-l border-t border-[#0B2030]/10 sm:grid-cols-2 lg:grid-cols-3">

          {courtAreas.map((court) => {
            const Icon = court.icon;

            return (
              <article
                key={court.title}
                className="group relative flex min-h-[235px] flex-col border-b border-r border-[#0B2030]/10 bg-[#F8F7F3] p-6 transition-all duration-300 hover:bg-white"
              >

                {/* =================================================
                    ICON
                ================================================= */}

                <div className="flex h-10 w-10 items-center justify-center text-[#C5A45D]">
                  <Icon
                    size={22}
                    strokeWidth={1.4}
                  />
                </div>


                {/* =================================================
                    GOLD ACCENT
                ================================================= */}

                <div className="mt-5 h-[1px] w-[32px] bg-[#C5A45D] transition-all duration-300 group-hover:w-[48px]" />


                {/* =================================================
                    TITLE
                ================================================= */}

                <h3 className="mt-5 font-serif text-[21px] leading-[1.25] text-[#0B2030]">
                  {court.title}
                </h3>


                {/* =================================================
                    DESCRIPTION
                ================================================= */}

                <p className="mt-3 text-[12px] leading-5 text-[#68757E]">
                  {court.description}
                </p>


                {/* =================================================
                    BOTTOM LABEL
                ================================================= */}

                <div className="mt-auto pt-5">
                  <span className="text-[9px] font-semibold uppercase tracking-[1.5px] text-[#0B2030] transition-colors duration-300 group-hover:text-[#C5A45D]">
                    View Details
                  </span>
                </div>

              </article>
            );
          })}

        </div>

      </div>
    </section>
  );
}