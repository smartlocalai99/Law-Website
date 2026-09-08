import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "How can I schedule a consultation?",
    answer:
      "Consultations are available by prior appointment. You may contact Falcon Lex Legal by phone, WhatsApp or email to discuss your requirement and schedule a suitable time.",
  },
  {
    question: "What areas of law does Falcon Lex Legal handle?",
    answer:
      "Falcon Lex Legal provides legal representation and advisory services across civil and criminal litigation, real estate and property matters, commercial disputes, RERA matters, banking and recovery proceedings, family matters and related legal proceedings.",
  },
  {
    question: "Which courts and tribunals does the firm appear before?",
    answer:
      "The firm represents clients before the High Court of Karnataka, City Civil Courts, Commercial Courts, Family Courts, Magistrate Courts, District and Sessions Courts, K-RERA, KREAT, Debt Recovery Tribunals and other judicial forums across Karnataka.",
  },
  {
    question: "What documents should I bring for a consultation?",
    answer:
      "Please bring relevant notices, agreements, court documents, correspondence, title documents or other records connected with your matter. Relevant documents help facilitate a more informed consultation.",
  },
  {
    question: "Is e-consultation available?",
    answer:
      "Yes. E-consultation is available by prior appointment. The consultation format and suitable timing can be discussed when scheduling the appointment.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faqs"
      className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-2"
    >
      <div className="mx-auto max-w-[1180px] px-6 sm:px-8 lg:px-10">

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">

          {/* =========================
              LEFT SIDE
          ========================= */}

          <div className="flex flex-col">

            {/* LABEL */}

            <p className="text-[9px] font-medium uppercase tracking-[3px] text-[#C5A45D]">
              FAQs
            </p>

            {/* HEADING */}

            <h2 className="mt-3 max-w-[390px] font-serif text-[34px] font-normal leading-[1.08] tracking-[-0.5px] text-[#111111] sm:text-[40px]">
              Frequently asked
              <br />
              questions
            </h2>

            {/* DESCRIPTION */}

            <p className="mt-5 max-w-[350px] text-[11px] leading-[1.8] text-[#111111]/65 sm:text-[12px]">
              Find answers to the essential questions clients may have before
              beginning a consultation with Falcon Lex Legal.
            </p>

            {/* CONTACT BOX */}

            <div className="mt-10 flex max-w-[350px] items-center justify-between bg-[#F1F1ED] px-5 py-5 sm:px-6">

              <div>
                <p className="font-serif text-[13px] text-[#111111]">
                  Still have questions?
                </p>

                <p className="mt-1 text-[9px] leading-4 text-[#111111]/55">
                  We're here to help you.
                </p>
              </div>

              <a
                href="#contact"
                className="inline-flex items-center bg-[#111111] px-4 py-3 text-[8px] font-semibold uppercase tracking-[1px] text-white transition-all duration-300 hover:bg-[#C5A45D]"
              >
                Contact Us
              </a>

            </div>

          </div>


          {/* =========================
              RIGHT SIDE — FAQ LIST
          ========================= */}

          <div className="border-t border-[#111111]">

            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={faq.question}
                  className="border-b border-[#111111]/25"
                >

                  {/* QUESTION */}

                  <button
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={isOpen}
                    className="group flex w-full items-center justify-between gap-6 py-5 text-left sm:py-[18px]"
                  >

                    <div className="flex min-w-0 items-center gap-4">

                      {/* NUMBER */}

                      <span className="w-[22px] shrink-0 font-serif text-[9px] text-[#C5A45D]">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      {/* QUESTION */}

                      <span
                        className={`font-serif text-[13px] leading-5 transition-colors duration-300 sm:text-[14px] ${
                          isOpen
                            ? "text-[#C5A45D]"
                            : "text-[#111111] group-hover:text-[#C5A45D]"
                        }`}
                      >
                        {faq.question}
                      </span>

                    </div>

                    {/* PLUS / MINUS */}

                    <span className="flex h-5 w-5 shrink-0 items-center justify-center text-[#111111] transition-colors duration-300 group-hover:text-[#C5A45D]">

                      {isOpen ? (
                        <Minus
                          size={13}
                          strokeWidth={1.5}
                        />
                      ) : (
                        <Plus
                          size={13}
                          strokeWidth={1.5}
                        />
                      )}

                    </span>

                  </button>


                  {/* ANSWER */}

                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >

                    <div className="overflow-hidden">

                      <div className="pb-6 pl-[38px] pr-8">

                        <p className="max-w-[650px] text-[11px] leading-[1.8] text-[#111111]/65 sm:text-[12px]">
                          {faq.answer}
                        </p>

                      </div>

                    </div>

                  </div>

                </div>
              );
            })}

          </div>

        </div>

      </div>
    </section>
  );
}