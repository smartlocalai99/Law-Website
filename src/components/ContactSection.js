import {
  Phone,
  Mail,
  MapPin,
  Clock3,
  MessageCircle,
  ArrowUpRight,
} from "lucide-react";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="bg-white py-8 sm:py-10 lg:py-12"
    >
      <div className="px-8 sm:px-10 lg:px-12 xl:px-16">

        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="mb-5">
          <p className="text-[8px] font-semibold uppercase tracking-[2.5px] text-[#C5A45D]">
            Contact
          </p>

          <div className="mt-1.5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="font-serif text-[25px] leading-[1.1] text-[#111111] sm:text-[29px]">
              Schedule a Consultation
            </h2>

            <p className="max-w-[320px] text-[9px] leading-4 text-[#111111]/60">
              Connect with Falcon Lex Legal to discuss your legal requirement
              and arrange a consultation.
            </p>
          </div>

          <div className="mt-3 h-[2px] w-[35px] bg-[#C5A45D]" />
        </div>


        {/* =====================================================
            CONTACT GRID
        ===================================================== */}

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-[0.8fr_1.2fr]">

          {/* ==================================================
              LEFT — CONTACT DETAILS
          ================================================== */}

          <div className="bg-[#111111] px-5 py-5 sm:px-6">

            <p className="text-[7px] font-semibold uppercase tracking-[2px] text-[#C5A45D]">
              Falcon Lex Legal
            </p>

            <h3 className="mt-1 font-serif text-[20px] leading-tight text-white">
              Get in touch.
            </h3>

            <div className="mt-3 h-px w-7 bg-[#C5A45D]" />


            {/* PHONE */}

            <a
              href="tel:8310790921"
              className="mt-4 flex items-start gap-3"
            >
              <Phone
                size={13}
                strokeWidth={1.5}
                className="mt-0.5 shrink-0 text-[#C5A45D]"
              />

              <div>
                <p className="text-[7px] uppercase tracking-[1.3px] text-white/45">
                  Call
                </p>

                <p className="mt-0.5 text-[10px] text-white">
                  8310790921
                </p>
              </div>
            </a>


            {/* WHATSAPP */}

            <a
              href="https://wa.me/918310790921"
              target="_blank"
              rel="noreferrer"
              className="mt-3 flex items-start gap-3"
            >
              <MessageCircle
                size={13}
                strokeWidth={1.5}
                className="mt-0.5 shrink-0 text-[#C5A45D]"
              />

              <div>
                <p className="text-[7px] uppercase tracking-[1.3px] text-white/45">
                  WhatsApp
                </p>

                <p className="mt-0.5 text-[10px] text-white">
                  Chat with us
                </p>
              </div>
            </a>


            {/* EMAIL */}

            <a
              href="mailto:Falconlexlegal@gmail.com"
              className="mt-3 flex items-start gap-3"
            >
              <Mail
                size={13}
                strokeWidth={1.5}
                className="mt-0.5 shrink-0 text-[#C5A45D]"
              />

              <div className="min-w-0">
                <p className="text-[7px] uppercase tracking-[1.3px] text-white/45">
                  Email
                </p>

                <p className="mt-0.5 truncate text-[10px] text-white">
                  Falconlexlegal@gmail.com
                </p>
              </div>
            </a>


            {/* ADDRESS */}

            <div className="mt-3 flex items-start gap-3">
              <MapPin
                size={13}
                strokeWidth={1.5}
                className="mt-0.5 shrink-0 text-[#C5A45D]"
              />

              <div>
                <p className="text-[7px] uppercase tracking-[1.3px] text-white/45">
                  Office
                </p>

                <p className="mt-0.5 text-[9px] leading-4 text-white">
                  #135-136, 1st Floor, Plazzo Retail Mall,
                  Commercial Street, Bengaluru - 560001
                </p>
              </div>
            </div>


            {/* TIMING */}

            <div className="mt-3 flex items-start gap-3">
              <Clock3
                size={13}
                strokeWidth={1.5}
                className="mt-0.5 shrink-0 text-[#C5A45D]"
              />

              <div>
                <p className="text-[7px] uppercase tracking-[1.3px] text-white/45">
                  Office Hours
                </p>

                <p className="mt-0.5 text-[10px] text-white">
                  10:00 AM – 8:00 PM
                </p>
              </div>
            </div>


            {/* E-CONSULTATION */}

            <div className="mt-4 border-t border-white/10 pt-3">
              <p className="text-[7px] uppercase tracking-[1.2px] text-[#C5A45D]">
                E-Consultation
              </p>

              <p className="mt-1 text-[9px] text-white/55">
                Available by prior appointment.
              </p>
            </div>

          </div>


          {/* ==================================================
              RIGHT — FORM
          ================================================== */}

          <div className="border border-[#111111]/15 bg-white px-5 py-5 sm:px-6">

            <p className="text-[8px] font-semibold uppercase tracking-[2px] text-[#C5A45D]">
              Legal Enquiry
            </p>

            <h3 className="mt-1 font-serif text-[20px] leading-tight text-[#111111]">
              Tell us about your requirement.
            </h3>


            {/* FORM */}

            <form className="mt-4">

              {/* NAME + PHONE */}

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">

                <div>
                  <label
                    htmlFor="name"
                    className="text-[7px] font-semibold uppercase tracking-[1.3px] text-[#111111]"
                  >
                    Full Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    required
                    className="mt-1 h-8 w-full border-b border-[#111111]/20 bg-transparent text-[10px] text-[#111111] outline-none placeholder:text-[#111111]/35 focus:border-[#C5A45D]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="text-[7px] font-semibold uppercase tracking-[1.3px] text-[#111111]"
                  >
                    Phone
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Phone number"
                    required
                    className="mt-1 h-8 w-full border-b border-[#111111]/20 bg-transparent text-[10px] text-[#111111] outline-none placeholder:text-[#111111]/35 focus:border-[#C5A45D]"
                  />
                </div>

              </div>


              {/* EMAIL */}

              <div className="mt-3">
                <label
                  htmlFor="email"
                  className="text-[7px] font-semibold uppercase tracking-[1.3px] text-[#111111]"
                >
                  Email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email address"
                  required
                  className="mt-1 h-8 w-full border-b border-[#111111]/20 bg-transparent text-[10px] text-[#111111] outline-none placeholder:text-[#111111]/35 focus:border-[#C5A45D]"
                />
              </div>


              {/* MATTER */}

              <div className="mt-3">
                <label
                  htmlFor="matter"
                  className="text-[7px] font-semibold uppercase tracking-[1.3px] text-[#111111]"
                >
                  Nature of Matter
                </label>

                <select
                  id="matter"
                  name="matter"
                  defaultValue=""
                  className="mt-1 h-8 w-full border-b border-[#111111]/20 bg-white text-[10px] text-[#111111] outline-none focus:border-[#C5A45D]"
                >
                  <option value="" disabled>
                    Select a matter
                  </option>

                  <option value="civil">
                    Civil Litigation
                  </option>

                  <option value="criminal">
                    Criminal Litigation
                  </option>

                  <option value="property">
                    Property & Real Estate
                  </option>

                  <option value="commercial">
                    Commercial Litigation
                  </option>

                  <option value="rera">
                    RERA
                  </option>

                  <option value="family">
                    Family & Matrimonial
                  </option>

                  <option value="banking">
                    Banking & Recovery
                  </option>

                  <option value="other">
                    Other
                  </option>
                </select>
              </div>


              {/* MESSAGE */}

              <div className="mt-3">
                <label
                  htmlFor="message"
                  className="text-[7px] font-semibold uppercase tracking-[1.3px] text-[#111111]"
                >
                  Brief Description
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={2}
                  placeholder="Briefly describe your requirement"
                  className="mt-1 w-full resize-none border-b border-[#111111]/20 bg-transparent px-0 py-1.5 text-[10px] leading-4 text-[#111111] outline-none placeholder:text-[#111111]/35 focus:border-[#C5A45D]"
                />
              </div>


              {/* BUTTON */}

              <div className="mt-4 flex items-center justify-between gap-3">

                <p className="max-w-[220px] text-[7px] leading-3.5 text-[#111111]/50">
                  E-consultation available by prior appointment.
                </p>

                <button
                  type="submit"
                  className="group inline-flex h-8 shrink-0 items-center gap-2 bg-[#111111] px-4 text-[8px] font-semibold uppercase tracking-[1.2px] text-white transition-colors duration-300 hover:bg-[#C5A45D] hover:text-[#111111]"
                >
                  Send Enquiry

                  <ArrowUpRight
                    size={11}
                    strokeWidth={1.5}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </button>

              </div>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}