import {
  Building2,
  Landmark,
  Scale,
  Gavel,
  BriefcaseBusiness,
  Users,
  Shield,
  MapPin,
  Banknote,
  Layers3,
} from "lucide-react";

const courtAreas = [
  {
    number: "01",
    title: "High Court of Karnataka",
    description:
      "Representation before the High Court of Karnataka in civil, criminal, commercial and other legal matters.",
    icon: Scale,
  },
  {
    number: "02",
    title: "K-RERA",
    description:
      "Representation in matters before the Karnataka Real Estate Regulatory Authority.",
    icon: Building2,
  },
  {
    number: "03",
    title: "KREAT",
    description:
      "Representation before the Karnataka Real Estate Appellate Tribunal in real estate and regulatory matters.",
    icon: Landmark,
  },
  {
    number: "04",
    title: "Debt Recovery Tribunal",
    description:
      "Representation in debt recovery, banking and related financial proceedings before the DRT.",
    icon: Banknote,
  },
  {
    number: "05",
    title: "City Civil Courts",
    description:
      "Representation in civil disputes and related proceedings before City Civil Courts.",
    icon: Gavel,
  },
  {
    number: "06",
    title: "Commercial Courts",
    description:
      "Representation in commercial disputes, contractual matters and business-related litigation.",
    icon: BriefcaseBusiness,
  },
  {
    number: "07",
    title: "Family Courts",
    description:
      "Representation in matrimonial, family and related proceedings before Family Courts.",
    icon: Users,
  },
  {
    number: "08",
    title: "Magistrate Courts",
    description:
      "Representation in criminal proceedings and other matters before Magistrate Courts.",
    icon: Shield,
  },
  {
    number: "09",
    title: "District & Sessions Courts",
    description:
      "Representation in civil, criminal and other proceedings before District and Sessions Courts.",
    icon: Gavel,
  },
  {
    number: "10",
    title: "Devanahalli Courts",
    description:
      "Representation in legal matters before the courts at Devanahalli.",
    icon: MapPin,
  },
  {
    number: "11",
    title: "Anekal Courts",
    description:
      "Representation in legal matters before the courts at Anekal.",
    icon: MapPin,
  },
  {
    number: "12",
    title: "Nelamangala Courts",
    description:
      "Representation in legal matters before the courts at Nelamangala.",
    icon: MapPin,
  },
  {
    number: "13",
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
      className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-15"
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0">

        <div className="absolute left-[-160px] top-[-160px] h-[380px] w-[380px] rounded-full bg-black/[0.025] blur-[120px]" />

        <div className="absolute bottom-[-160px] right-[-120px] h-[380px] w-[380px] rounded-full bg-[#C5A45D]/[0.05] blur-[120px]" />

      </div>


      <div className="relative px-8 sm:px-10 lg:px-12 xl:px-16">

        {/* =====================================================
            SECTION HEADER
        ===================================================== */}

        <div>

          <p className="text-[10px] font-semibold uppercase tracking-[3px] text-[#C5A45D]">
            Courts & Tribunals
          </p>


          <h2 className="mt-4 font-serif text-4xl leading-[1.1] tracking-[-0.5px] text-[#111111] sm:text-5xl lg:text-[52px]">
            Representation Across
            <br />
            Karnataka's Legal Forums
          </h2>


          <div className="mt-5 h-[2px] w-[45px] bg-[#C5A45D]" />


          <p className="mt-5 text-sm leading-7 text-[#111111] sm:text-[15px]">
            Falcon Lex Legal represents clients before courts, tribunals
            and other judicial and quasi-judicial forums across Karnataka.
          </p>

        </div>


        {/* =====================================================
            COURT CARDS
        ===================================================== */}

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">

          {courtAreas.map((court) => {

            const Icon = court.icon;

            return (
              <article
                key={court.title}
                className="group relative flex min-h-[225px] flex-col overflow-hidden rounded-[3px] bg-white p-6 shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#111111]  hover:shadow-[0_15px_35px_rgba(0,0,0,0.12)]" 
              >

                {/* =================================================
                    TOP ROW
                ================================================= */}

                <div className="flex items-start justify-between">

                  <span
                    className="font-serif text-2xl leading-none text-[#C5A45D]"
                  >
                    {court.number}
                  </span>


                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-[#111111] transition-all duration-300 group-hover:bg-[#C5A45D] " 
                  >

                    <Icon
                      size={19}
                      strokeWidth={1.5}
                      className="text-white transition-colors duration-300 group-hover:text-[#111111]"
                    />

                  </div>

                </div>


                {/* =================================================
                    TITLE
                ================================================= */}

                <h3
                  className="mt-8 font-serif text-[21px] leading-[1.25] text-[#111111] transition-colors duration-300 group-hover:text-white "
                >
                  {court.title}
                </h3>


                {/* =================================================
                    DESCRIPTION
                ================================================= */}

                <p
                  className="mt-3 text-[12px] leading-5 text-[#111111] transition-colors duration-300 group-hover:text-white"
                >
                  {court.description}
                </p>


                {/* =================================================
                    GOLD CORNER ACCENT
                ================================================= */}

                <div
                  className="absolute bottom-0 right-0 h-[3px] w-[35px] bg-[#C5A45D] transition-all duration-300 group-hover:w-[65px] "
               />

              </article>
            );

          })}

        </div>


{/* =====================================================
    URGENT LEGAL GUIDANCE STRIP
===================================================== */}

<div className="mt-10 bg-[#111111] px-5 py-4 sm:px-6">
  <p className="text-center text-xs leading-6 text-white sm:text-sm">

    <span className="font-semibold text-[#C5A45D]">
      Need Urgent Legal Guidance?
    </span>

    <span className="mx-2 text-white/40">
      •
    </span>

    Call{" "}

    <a
      href="tel:8310790921"
      className="font-semibold text-white transition-colors duration-300 hover:text-[#C5A45D]"
    >
      8310790921
    </a>

    {" "}or visit the office at{" "}

    <span className="text-white">
      Bengaluru
    </span>

  </p>
</div>

      </div>
    </section>
  );
}