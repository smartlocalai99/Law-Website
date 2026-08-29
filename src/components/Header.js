const practiceAreas = [
  "Civil Litigation",
  "Criminal Litigation",
  "Real Estate & Property Law",
  "RERA Litigation & Regulatory Compliance",
  "Commercial Litigation",
  "Indian Banking Code & SARFAESI",
  "Family & Matrimonial Law",
  "Arbitration & Mediation",
  "Legal Advisory & Opinions",
];

const courts = [
  "High Court of Karnataka",
  "City Civil Courts",
  "Commercial Courts",
  "Family Courts",
  "Magistrate Courts",
  "District & Sessions Courts",
  "Karnataka Real Estate Regulatory Authority (K-RERA)",
  "Karnataka Real Estate Appellate Tribunal (KREAT)",
  "Debt Recovery Tribunal (DRT)",
  "Other Trial Courts across Karnataka",
];

const navLinks = [
  {
    title: "Home",
    href: "#home",
  },
  {
    title: "About",
    href: "#about",
  },
  {
    title: "Practice Areas",
    href: "#practice-areas",
  },
  {
    title: "Courts",
    href: "#courts",
  },
  {
    title: "Case Studies",
    href: "#case-studies",
  },
  {
    title: "Contact",
    href: "#contact",
  },
];

export default function Header() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full">

      <nav className="flex h-[72px] w-full items-center justify-between bg-[#192C40] px-8 sm:px-10 lg:px-12">

        {/* ================= LOGO ================= */}

        <a
          href="#home"
          className="shrink-0 font-serif text-[17px] font-semibold uppercase tracking-[4px] text-[#F5F1E8] sm:text-[20px]"
        >
          YASHWANTH{" "}
          <span className="text-[#C5A45D]">
            OVARSU
          </span>
          <span className="mt-1 block text-[9px] font-medium uppercase tracking-[2.5px] text-[#C2CBD2]">
    Advocate
  </span>
        </a>


        {/* ================= NAVIGATION ================= */}

        <ul className="hidden items-center gap-8 lg:flex">

          {/* HOME */}

          <li>
            <a
              href="#home"
              className="text-[11px] font-medium text-[#C2CBD2] transition-colors duration-300 hover:text-[#C5A45D]"
            >
              Home
            </a>
          </li>


          {/* ABOUT */}

          <li>
            <a
              href="#about"
              className="text-[11px] font-medium text-[#C2CBD2] transition-colors duration-300 hover:text-[#C5A45D]"
            >
              About
            </a>
          </li>


          {/* ================= PRACTICE AREAS ================= */}

          <li className="group relative">

            <a
              href="#practice-areas"
              className="flex items-center gap-1 text-[11px] font-medium text-[#C2CBD2] transition-colors duration-300 hover:text-[#C5A45D]"
            >
              Practice Areas

              <span className="text-[9px]">
                ▾
              </span>
            </a>


            {/* Practice Areas Dropdown */}

            <div className="invisible absolute left-1/2 top-full w-[320px] -translate-x-1/2 translate-y-3 pt-4 opacity-0 transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">

              <div className="bg-[#192C40] p-7 shadow-2xl">

                <p className="mb-5 text-[10px] font-semibold uppercase tracking-[2px] text-[#C5A45D]">
                  Practice Areas
                </p>


                <ul className="space-y-3">

                  {practiceAreas.map((area) => (
                    <li key={area}>

                      <a
                        href="#practice-areas"
                        className="block text-[11px] leading-5 text-[#C2CBD2] transition-colors duration-300 hover:text-white"
                      >
                        {area}
                      </a>

                    </li>
                  ))}

                </ul>

              </div>

            </div>

          </li>


          {/* ================= COURTS ================= */}

          <li className="group relative">

            <a
              href="#courts"
              className="flex items-center gap-1 text-[11px] font-medium text-[#C2CBD2] transition-colors duration-300 hover:text-[#C5A45D]"
            >
              Courts

              <span className="text-[9px]">
                ▾
              </span>
            </a>


            {/* Courts Dropdown */}

            <div className="invisible absolute right-0 top-full w-[350px] translate-y-3 pt-4 opacity-0 transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">

              <div className="bg-[#192C40] p-7 shadow-2xl">

                <p className="mb-5 text-[10px] font-semibold uppercase tracking-[2px] text-[#C5A45D]">
                  Courts & Forums
                </p>


                <ul className="space-y-3">

                  {courts.map((court) => (
                    <li key={court}>

                      <a
                        href="#courts"
                        className="block text-[10px] leading-5 text-[#C2CBD2] transition-colors duration-300 hover:text-white"
                      >
                        {court}
                      </a>

                    </li>
                  ))}

                </ul>

              </div>

            </div>

          </li>


          {/* ================= CASE STUDIES ================= */}

          <li>
            <a
              href="#case-studies"
              className="text-[11px] font-medium text-[#C2CBD2] transition-colors duration-300 hover:text-[#C5A45D]"
            >
              Case Studies
            </a>
          </li>


          {/* ================= CONTACT ================= */}

          <li>
            <a
              href="#contact"
              className="text-[11px] font-medium text-[#C2CBD2] transition-colors duration-300 hover:text-[#C5A45D]"
            >
              Contact
            </a>
          </li>

        </ul>


        {/* ================= CTA ================= */}

        <a
          href="#contact"
          className="flex h-[45px] items-center rounded-full bg-[#C5A45D] px-7 text-[11px] font-semibold text-[#102437] transition-colors duration-300 hover:bg-[#D5B66B]"
        >
          <span className="hidden sm:block">
            Schedule a Consultation
          </span>

          <span className="block sm:hidden">
            Consult
          </span>
        </a>

      </nav>

    </header>
  );
}