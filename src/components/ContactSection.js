import {
  FaPhoneAlt,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="bg-white py-16 sm:py-20 lg:py-24"
    >
      <div className="px-6 sm:px-10 lg:px-16">
        {/* Heading */}
        <div className="text-center">
          <p className="text-[10px] font-semibold uppercase tracking-[3px] text-[#8B6B32]">
            Get in Touch
          </p>

          <h2 className="mt-3 font-serif text-4xl font-medium tracking-tight text-[#111111] sm:text-5xl">
            Contact
          </h2>

          <div className="mx-auto mt-5 h-[1px] w-[45px] bg-[#C5A45D]" />
        </div>

        {/* Contact Details */}
        <div className="mx-auto mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {/* Phone */}
          <a
            href="tel:+919901278154"
            className="group flex flex-col items-center text-center"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#C5A45D] text-[#8B6B32] transition-all duration-300 group-hover:bg-[#111111] group-hover:text-[#C5A45D]">
              <FaPhoneAlt size={15} />
            </div>

            <h3 className="mt-4 text-[11px] font-semibold uppercase tracking-[1.5px] text-[#111111]">
              Phone
            </h3>

            <p className="mt-2 text-sm text-[#666666] transition-colors duration-300 group-hover:text-[#8B6B32]">
              +91 99012 78154
            </p>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/918310790921"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center text-center"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#C5A45D] text-[#8B6B32] transition-all duration-300 group-hover:bg-[#111111] group-hover:text-[#C5A45D]">
              <FaWhatsapp size={17} />
            </div>

            <h3 className="mt-4 text-[11px] font-semibold uppercase tracking-[1.5px] text-[#111111]">
              WhatsApp
            </h3>

            <p className="mt-2 text-sm text-[#666666] transition-colors duration-300 group-hover:text-[#8B6B32]">
              +91 83107 90921
            </p>
          </a>

          {/* Email */}
          <a
            href="mailto:Falconlexlegal@gmail.com"
            className="group flex flex-col items-center text-center"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#C5A45D] text-[#8B6B32] transition-all duration-300 group-hover:bg-[#111111] group-hover:text-[#C5A45D]">
              <FaEnvelope size={15} />
            </div>

            <h3 className="mt-4 text-[11px] font-semibold uppercase tracking-[1.5px] text-[#111111]">
              Email
            </h3>

            <p className="mt-2 break-all text-sm text-[#666666] transition-colors duration-300 group-hover:text-[#8B6B32]">
              Falconlexlegal@gmail.com
            </p>
          </a>

          {/* Office - Google Maps Directions */}
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=Plazzo+Retail+Mall%2C+Commercial+Street%2C+Bengaluru+560001"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center text-center"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#C5A45D] text-[#8B6B32] transition-all duration-300 group-hover:bg-[#111111] group-hover:text-[#C5A45D]">
              <FaMapMarkerAlt size={16} />
            </div>

            <h3 className="mt-4 text-[11px] font-semibold uppercase tracking-[1.5px] text-[#111111]">
              Office
            </h3>

            <p className="mt-2 text-sm leading-6 text-[#666666] transition-colors duration-300 group-hover:text-[#8B6B32]">
              #135-136, 1st Floor,
              <br />
              Plazzo Retail Mall,
              <br />
              Commercial Street,
              <br />
              Bengaluru – 560001
            </p>

            <span className="mt-2 text-[9px] font-semibold uppercase tracking-[1px] text-[#C5A45D]">
              Get Directions →
            </span>
          </a>

        </div>

        {/* Office Hours */}
        <div className="mt-12 flex items-center justify-center gap-3 border-t border-[#E8E3D8] pt-8">
          <FaClock
            className="text-[#8B6B32]"
            size={14}
          />

          <p className="text-xs tracking-wide text-[#666666]">
            Monday – Saturday&nbsp;&nbsp; | &nbsp;&nbsp;10:00 AM – 8:00 PM
            &nbsp;&nbsp; | &nbsp;&nbsp;Consultations by prior appointment
          </p>
        </div>
      </div>
    </section>
  );
}