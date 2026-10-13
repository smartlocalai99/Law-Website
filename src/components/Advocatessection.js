
const advocates = [
  {
    name: "Yashwanth Ovarsu",
    designation: "Advocate",
    initials: "YO",
    image: "/yashwanth.png",
    description:
      "Advocate of Falcon Lex Legal, with a practice focused on litigation, dispute resolution and strategic legal representation.",
    href: "/advocates/yashwanth-ovarsu",
  },
  {
    name: "Kishan Shetty S.R",
    designation: "Advocate",
    initials: "KS",
    image: "/kishan-shetty.png",
    description:
      "Advocate at Falcon Lex Legal, contributing to the firm's legal representation and professional practice.",
    href: "/advocates/kishan-shetty",
  },
];

export default function AdvocatesSection() {
  return (
    <section
      id="advocates"
      className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-2"
    >
      <div className="relative px-8 sm:px-10 lg:px-12 xl:px-16">

        {/* SECTION HEADER */}
        <div className="mb-10">
          <div className="mb-4 h-[2px] w-[40px] bg-[#B08D57]" />

          <p className="text-[9px] font-semibold uppercase tracking-[3px] text-[#777777]">
            Our Advocates
          </p>

          <h2 className="mt-2 font-serif text-3xl leading-[1.1] text-[#111111] sm:text-4xl lg:text-5xl">
            Meet Our Advocates
          </h2>
        </div>

        {/* ADVOCATE CARDS */}
        <div className="grid gap-6 md:grid-cols-2">
          {advocates.map((advocate) => (
            <article
              key={advocate.name}
              className="group flex overflow-hidden border border-[#111111]/10 bg-[#F7F7F5] transition-all duration-300 hover:border-[#B08D57]/60"
            >

              {/* IMAGE PLACEHOLDER */}
              <div className="relative flex h-[230px] w-[38%] shrink-0 items-center justify-center overflow-hidden bg-[#191919] sm:h-[250px]">

                {/* Subtle charcoal gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#292823] via-[#191919] to-[#101010]" />

                {/* Decorative background frame */}
                <div className="absolute inset-3 border border-[#B08D57]/30" />

                {/* Large initials */}
                <div className="relative flex h-full w-full items-center justify-center">
                  <div className="absolute h-28 w-28 rounded-full border border-[#B08D57]/20 sm:h-32 sm:w-32" />

                  <div className="absolute h-24 w-24 rounded-full border border-[#B08D57]/35 sm:h-28 sm:w-28" />

                  <span className="relative font-serif text-5xl tracking-wider text-[#B08D57] sm:text-6xl">
                    {advocate.initials}
                  </span>
                </div>

                {/* Gold bottom accent */}
                <div className="absolute bottom-0 left-0 h-[3px] w-full bg-[#B08D57] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>

              {/* ORIGINAL DETAILS PANEL */}
              <div className="flex flex-1 flex-col justify-center bg-[#111111] px-5 py-5 sm:px-6">

                {/* Name */}
                <h3 className="font-serif text-xl leading-tight text-white sm:text-2xl">
                  {advocate.name}
                </h3>

                {/* Designation */}
                <p className="mt-1.5 text-[9px] font-medium uppercase tracking-[1.8px] text-[#B08D57]">
                  {advocate.designation}
                </p>

                {/* Divider */}
                <div className="mt-4 h-[1px] w-[35px] bg-[#B08D57]" />

                {/* Description */}
                <p className="mt-4 text-[12px] leading-5 text-[#BDBDBD] sm:text-[13px]">
                  {advocate.description}
                </p>

                {/* More About Me */}
                <a
                  href={advocate.href}
                  className="mt-5 inline-flex w-fit items-center border border-[#B08D57]/60 px-4 py-2.5 text-[9px] font-semibold uppercase tracking-[1.2px] text-[#B08D57] transition-all duration-300 hover:border-[#B08D57] hover:bg-[#B08D57] hover:text-[#111111]"
                >
                  More About Me
                </a>

              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
