
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaScaleBalanced,
  FaLocationDot,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa6";

import { FiArrowUpRight } from "react-icons/fi";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-white">
      {/* =====================================================
          MAIN FOOTER
      ===================================================== */}

      <div className="mx-auto max-w-[1280px] px-6 py-12 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-[1.4fr_0.8fr_1.2fr_1fr]">

          {/* ==================================================
              BRAND
          ================================================== */}

          <div>
            <div className="flex items-center gap-2">
              <FaScaleBalanced
                size={22}
                className="text-[#C5A45D]"
              />

              <span className="font-serif text-[20px] tracking-[-0.3px] text-[#F5F1E8]">
                Falcon Lex Legal
              </span>
            </div>

            <p className="mt-5 max-w-[280px] text-[13px] leading-6 text-[#999999]">
              Strategic legal counsel and focused representation across
              litigation, dispute resolution, property, commercial and
              family matters.
            </p>

            {/* Social Buttons */}

            <div className="mt-6 flex items-center gap-2">
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-8 w-8 items-center justify-center border border-white/10 bg-[#181818] text-[#C5A45D] transition-colors duration-300 hover:border-[#C5A45D] hover:bg-[#C5A45D] hover:text-[#111111]"
              >
                <FaFacebookF size={12} />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="flex h-8 w-8 items-center justify-center border border-white/10 bg-[#181818] text-[#C5A45D] transition-colors duration-300 hover:border-[#C5A45D] hover:bg-[#C5A45D] hover:text-[#111111]"
              >
                <FaInstagram size={13} />
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-8 w-8 items-center justify-center border border-white/10 bg-[#181818] text-[#C5A45D] transition-colors duration-300 hover:border-[#C5A45D] hover:bg-[#C5A45D] hover:text-[#111111]"
              >
                <FaLinkedinIn size={12} />
              </a>
            </div>
          </div>

          {/* ==================================================
              QUICK LINKS
          ================================================== */}

          <div>
            <h3 className="text-[16px] font-semibold text-[#F5F1E8]">
              Quick Links
            </h3>

            <div className="mt-5 flex flex-col gap-3">
              <Link
                href="/about"
                className="w-fit text-[13px] text-[#999999] transition-colors duration-300 hover:text-[#C5A45D]"
              >
                About Us
              </Link>

              <Link
                href="/#practice-areas"
                className="w-fit text-[13px] text-[#999999] transition-colors duration-300 hover:text-[#C5A45D]"
              >
                Practice Areas
              </Link>

              <Link
                href="/#advocates"
                className="w-fit text-[13px] text-[#999999] transition-colors duration-300 hover:text-[#C5A45D]"
              >
                Our Advocates
              </Link>

              <Link
                href="/#courts"
                className="w-fit text-[13px] text-[#999999] transition-colors duration-300 hover:text-[#C5A45D]"
              >
                Courts
              </Link>

              <Link
                href="/#faqs"
                className="w-fit text-[13px] text-[#999999] transition-colors duration-300 hover:text-[#C5A45D]"
              >
                FAQs
              </Link>
            </div>
          </div>

          {/* ==================================================
              CONTACT
          ================================================== */}

          <div>
            <h3 className="text-[16px] font-semibold text-[#F5F1E8]">
              Contact
            </h3>

            <div className="mt-5 space-y-4">

              {/* Address */}

              <div className="flex items-start gap-3">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center border border-[#C5A45D]/40">
                  <FaLocationDot
                    size={13}
                    className="text-[#C5A45D]"
                  />
                </div>

                <p className="text-[13px] leading-5 text-[#999999]">
                  #135-136, 1st Floor, Plazzo Retail Mall,
                  Commercial Street, Bengaluru - 560001
                </p>
              </div>

              {/* Phone */}

              <div className="flex items-center gap-3">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center border border-[#C5A45D]/40">
                  <FaPhone
                    size={13}
                    className="text-[#C5A45D]"
                  />
                </div>

                <a
                  href="tel:+919901278154"
                  className="text-[13px] text-[#999999] transition-colors duration-300 hover:text-[#C5A45D]"
                >
                  99012 78154
                </a>
              </div>

              {/* Email */}

              <div className="flex items-center gap-3">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center border border-[#C5A45D]/40">
                  <FaEnvelope
                    size={13}
                    className="text-[#C5A45D]"
                  />
                </div>

                <a
                  href="mailto:Falconlexlegal@gmail.com"
                  className="break-all text-[13px] text-[#999999] transition-colors duration-300 hover:text-[#C5A45D]"
                >
                  Falconlexlegal@gmail.com
                </a>
              </div>

            </div>
          </div>

          {/* ==================================================
              CONSULTATION
          ================================================== */}

          <div>
            <h3 className="text-[16px] font-semibold text-[#F5F1E8]">
              Consultation
            </h3>

            <p className="mt-5 max-w-[220px] text-[13px] leading-6 text-[#999999]">
              E-consultation by prior appointment.
              Consultations are available from 10 AM to 8 PM.
            </p>

            <Link
              href="/#contact"
              className="group mt-5 inline-flex items-center gap-3 border border-[#C5A45D] px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[1px] text-[#C5A45D] transition-all duration-300 hover:bg-[#C5A45D] hover:text-[#111111]"
            >
              <span>
                Schedule a Consultation
              </span>

              <FiArrowUpRight
                size={14}
                className="shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>

            {/* WhatsApp */}

            <a
              href="https://wa.me/918310790921"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 block text-[12px] text-[#999999] transition-colors duration-300 hover:text-[#C5A45D]"
            >
              WhatsApp for enquiries →
            </a>
          </div>

        </div>
      </div>

      {/* =====================================================
          BOTTOM BAR
      ===================================================== */}

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1280px] flex-col items-center justify-between gap-3 px-6 py-4 sm:px-8 md:flex-row lg:px-10">
          <p className="text-[11px] text-[#777777]">
            © {new Date().getFullYear()} Falcon Lex Legal. All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            <a
              href="#"
              className="text-[11px] text-[#777777] transition-colors duration-300 hover:text-[#C5A45D]"
            >
              Privacy Policy
            </a>

            <span className="text-[10px] text-[#444444]">
              |
            </span>

            <a
              href="#"
              className="text-[11px] text-[#777777] transition-colors duration-300 hover:text-[#C5A45D]"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
