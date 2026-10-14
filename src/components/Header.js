
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

const navLinks = [
  { title: "Home", href: "/" },
  { title: "About", href: "/#about" },
  { title: "Practice Areas", href: "/#practice-areas" },
  { title: "Courts", href: "/#courts" },
  { title: "Case Studies", href: "/#case-studies" },
  { title: "Contact", href: "/#contact" },
];

export default function Header() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full">
      <nav className="flex h-[72px] w-full items-center justify-between bg-black px-8 sm:px-10 lg:px-12">

        {/* ================= LOGO ================= */}

        <a
          href="/"
          className="shrink-0 font-serif text-[17px] font-semibold uppercase tracking-[4px] text-[#F5F1E8] sm:text-[20px]"
        >
          FALCON{" "}
          <span className="text-[#C5A45D]">LEX</span>{" "}
          LEGAL
        </a>

        {/* ================= NAVIGATION ================= */}

        <ul className="hidden items-center gap-8 lg:flex">

          {/* HOME */}

          <li>
            <a
              href="/"
              className="text-[16px] font-medium text-[#C2CBD2] transition-colors duration-300 hover:text-[#C5A45D]"
            >
              Home
            </a>
          </li>

          {/* ABOUT */}

          <li>
            <a
              href="/#about"
              className="text-[16px] font-medium text-[#C2CBD2] transition-colors duration-300 hover:text-[#C5A45D]"
            >
              About
            </a>
          </li>

          {/* PRACTICE AREAS */}

          <li className="group relative">
            <a
              href="/#practice-areas"
              className="flex items-center gap-1 text-[16px] font-medium text-[#C2CBD2] transition-colors duration-300 hover:text-[#C5A45D]"
            >
              Practice Areas
              <span className="text-[11px]">▾</span>
            </a>

            {/* Dropdown */}

            <div className="invisible absolute left-1/2 top-full w-[340px] -translate-x-1/2 translate-y-3 pt-4 opacity-0 transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              <div className="bg-[#0A0A0A] p-7 shadow-2xl">

                <p className="mb-5 text-[15px] font-semibold uppercase tracking-[2px] text-[#C5A45D]">
                  Practice Areas
                </p>

                <ul className="space-y-3">
                  {practiceAreas.map((area) => (
                    <li key={area}>
                      <a
                        href="/#practice-areas"
                        className="block text-[15px] leading-6 text-[#C2CBD2] transition-colors duration-300 hover:text-white"
                      >
                        {area}
                      </a>
                    </li>
                  ))}
                </ul>

              </div>
            </div>
          </li>

          {/* COURTS */}

          <li>
            <a
              href="/#courts"
              className="text-[16px] font-medium text-[#C2CBD2] transition-colors duration-300 hover:text-[#C5A45D]"
            >
              Courts
            </a>
          </li>

          {/* CONTACT */}

          <li>
            <a
              href="/#contact"
              className="text-[16px] font-medium text-[#C2CBD2] transition-colors duration-300 hover:text-[#C5A45D]"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* ================= WHATSAPP & CALL BUTTONS ================= */}

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">

          {/* WHATSAPP */}

          <a
            href="https://wa.me/918310790921"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contact us on WhatsApp"
            className="flex h-[42px] items-center justify-center gap-2 rounded-full border border-[#25D366] px-3 text-[13px] font-semibold text-[#25D366] transition-colors duration-300 hover:bg-[#25D366] hover:text-white sm:h-[45px] sm:px-5 sm:text-[14px]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M20.52 3.48A11.87 11.87 0 0 0 12.08 0C5.48 0 .11 5.36.11 11.96c0 2.11.55 4.17 1.59 5.99L0 24l6.22-1.63a11.96 11.96 0 0 0 5.86 1.49h.01c6.6 0 11.97-5.36 11.97-11.96a11.9 11.9 0 0 0-3.54-8.42ZM12.09 21.8a9.91 9.91 0 0 1-5.05-1.38l-.36-.21-3.69.97.99-3.59-.23-.37a9.88 9.88 0 0 1-1.52-5.26c0-5.46 4.45-9.9 9.91-9.9a9.84 9.84 0 0 1 7.01 2.9 9.85 9.85 0 0 1 2.9 7.02c0 5.46-4.45 9.9-9.96 9.9Zm5.44-7.42c-.3-.15-1.77-.87-2.05-.97-.28-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.79-1.47-1.77-1.64-2.07-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.48-.5-.67-.51l-.57-.01c-.2 0-.52.07-.8.37-.28.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.21 5.09 4.5.71.31 1.27.49 1.71.62.72.23 1.37.2 1.89.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35Z" />
            </svg>

            <span>WhatsApp</span>
          </a>

          {/* CALL */}

          <a
            href="tel:8310790921"
            aria-label="Call Falcon Lex Legal"
            className="flex h-[42px] items-center justify-center gap-2 rounded-full bg-[#C5A45D] px-3 text-[13px] font-semibold text-[#102437] transition-colors duration-300 hover:bg-[#D5B66B] sm:h-[45px] sm:px-5 sm:text-[14px]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="17"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.56 3.57.56.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.61 21 3 13.39 3 4c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.24.19 2.45.56 3.57a1 1 0 0 1-.25 1.02l-2.19 2.2Z" />
            </svg>

            <span>Call</span>
          </a>

        </div>

      </nav>
    </header>
  );
}
