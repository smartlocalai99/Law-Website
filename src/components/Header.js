"use client";

import { useState } from "react";
import Link from "next/link";

const practiceAreas = [
  {
    title: "Civil Litigation",
    href: "/practice-areas/civil-litigation",
  },
  {
    title: "Criminal Litigation",
    href: "/practice-areas/criminal-litigation",
  },
  {
    title: "Real Estate & Property Law",
    href: "/practice-areas/real-estate-property-law",
  },
  {
    title: "RERA Litigation",
    href: "/practice-areas/rera-litigation",
  },
  {
    title: "Commercial Litigation",
    href: "/practice-areas/commercial-litigation",
  },
  {
    title: "Banking & SARFAESI",
    href: "/practice-areas/banking-sarfaesi",
  },
  {
    title: "Family & Matrimonial Law",
    href: "/practice-areas/family-matrimonial-law",
  },
  {
    title: "Contract Drafting",
    href: "/practice-areas/contract-drafting",
  },
  {
    title: "Arbitration & Mediation",
    href: "/practice-areas/arbitration-mediation",
  },
  {
    title: "Legal Advisory",
    href: "/practice-areas/legal-advisory",
  },
];

const navLinks = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Practice Areas", href: "/#practice-areas" },
  { title: "Courts", href: "/#courts" },
  { title: "Contact", href: "/#contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [practiceAreasOpen, setPracticeAreasOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full">
      <nav className="relative flex h-[72px] w-full items-center justify-between bg-black px-8 sm:px-10 lg:px-12">

        {/* ================= LOGO ================= */}

        <Link
          href="/"
          className="shrink-0 font-serif text-[17px] font-semibold uppercase tracking-[4px] text-[#F5F1E8] sm:text-[20px]"
        >
          FALCON{" "}
          <span className="text-[#C5A45D]">LEX</span>{" "}
          LEGAL
        </Link>

        {/* ================= NAVIGATION ================= */}

        <ul className="hidden items-center gap-8 lg:flex">

          {/* HOME */}

          <li>
            <Link
              href="/"
              className="text-[16px] font-medium text-[#C2CBD2] transition-colors duration-300 hover:text-[#C5A45D]"
            >
              Home
            </Link>
          </li>

          {/* ABOUT */}

          <li>
            <Link
              href="/about"
              className="text-[16px] font-medium text-[#C2CBD2] transition-colors duration-300 hover:text-[#C5A45D]"
            >
              About
            </Link>
          </li>

          {/* PRACTICE AREAS */}

          <li className="group relative">
            <Link
              href="/#practice-areas"
              className="flex items-center gap-1 text-[16px] font-medium text-[#C2CBD2] transition-colors duration-300 hover:text-[#C5A45D]"
            >
              Practice Areas
              <span className="text-[11px]">▾</span>
            </Link>

            {/* DROPDOWN */}

            <div className="invisible absolute left-1/2 top-full w-[340px] -translate-x-1/2 translate-y-3 pt-4 opacity-0 transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              <div className="max-h-[75vh] overflow-y-auto bg-[#0A0A0A] p-7 shadow-2xl">

                <p className="mb-5 text-[15px] font-semibold uppercase tracking-[2px] text-[#C5A45D]">
                  Practice Areas
                </p>

                <ul className="space-y-3">
                  {practiceAreas.map((area) => (
                    <li key={area.href}>
                      <Link
                        href={area.href}
                        className="block text-[15px] leading-6 text-[#C2CBD2] transition-colors duration-300 hover:text-white"
                      >
                        {area.title}
                      </Link>
                    </li>
                  ))}
                </ul>

              </div>
            </div>
          </li>

          {/* COURTS */}

          <li>
            <Link
              href="/#courts"
              className="text-[16px] font-medium text-[#C2CBD2] transition-colors duration-300 hover:text-[#C5A45D]"
            >
              Courts
            </Link>
          </li>

          {/* CONTACT */}

          <li>
            <Link
              href="/#contact"
              className="text-[16px] font-medium text-[#C2CBD2] transition-colors duration-300 hover:text-[#C5A45D]"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* ================= WHATSAPP & CALL BUTTONS ================= */}

        <div className="hidden shrink-0 items-center gap-2 sm:gap-3 lg:flex">

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
            href="tel:9901278154"
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

        <button
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-10 w-10 shrink-0 flex-col items-center justify-center gap-[5px] text-[#F5F1E8] lg:hidden"
        >
          <span className={`h-[2px] w-6 bg-current transition-transform ${menuOpen ? "translate-y-[7px] rotate-45" : ""}`} />
          <span className={`h-[2px] w-6 bg-current transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`h-[2px] w-6 bg-current transition-transform ${menuOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
        </button>

        {menuOpen && (
          <div className="absolute left-0 right-0 top-full max-h-[calc(100vh-72px)] overflow-y-auto border-t border-white/10 bg-[#0A0A0A] px-5 py-5 shadow-xl lg:hidden">
            <div className="grid grid-cols-2 gap-x-5 gap-y-4">
              {navLinks.filter((link) => link.title !== "Practice Areas").map((link) => (
                <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)} className="py-1 text-sm text-[#C2CBD2] hover:text-[#C5A45D]">
                  {link.title}
                </Link>
              ))}
            </div>
            <button
              type="button"
              aria-expanded={practiceAreasOpen}
              onClick={() => setPracticeAreasOpen(!practiceAreasOpen)}
              className="mt-4 flex w-full items-center justify-between border-t border-white/10 py-4 text-left text-sm font-medium text-[#C2CBD2] hover:text-[#C5A45D]"
            >
              Practice Areas
              <span aria-hidden="true" className={`text-xs transition-transform ${practiceAreasOpen ? "rotate-180" : ""}`}>▾</span>
            </button>
            {practiceAreasOpen && (
              <div className="max-h-[40vh] overflow-y-auto border-y border-white/10 py-3">
                <ul className="space-y-3">
                  {practiceAreas.map((area) => (
                    <li key={area.href}>
                      <Link href={area.href} onClick={() => setMenuOpen(false)} className="block py-1 text-sm leading-5 text-[#C2CBD2] hover:text-white">
                        {area.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div className="mt-5 flex flex-wrap gap-3 border-t border-white/10 pt-4">
              <a href="https://wa.me/918310790921" target="_blank" rel="noopener noreferrer" aria-label="Contact us on WhatsApp" className="rounded-full border border-[#25D366] px-4 py-2.5 text-sm font-semibold text-[#25D366]">WhatsApp</a>
              <a href="tel:9901278154" aria-label="Call Falcon Lex Legal" className="rounded-full bg-[#C5A45D] px-4 py-2.5 text-sm font-semibold text-[#102437]">Call</a>
            </div>
          </div>
        )}

      </nav>
    </header>
  );
}

