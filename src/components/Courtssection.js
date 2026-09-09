import {
  FaBuilding,
  FaLandmark,
  FaBalanceScale,
  FaGavel,
  FaBriefcase,
  FaUsers,
  FaShieldAlt,
  FaMapMarkerAlt,
  FaMoneyBillWave,
  FaLayerGroup,
} from "react-icons/fa";

/*
|--------------------------------------------------------------------------
| COURT LOCATIONS
|--------------------------------------------------------------------------
*/

const courtLocations = [
  {
    id: "bengaluru",
    city: "Bengaluru",
    left: "76%",
    top: "78%",
    type: "main",

    courts: [
      {
        name: "High Court of Karnataka",
        icon: FaBalanceScale,
      },
      {
        name: "K-RERA",
        icon: FaBuilding,
      },
      {
        name: "KREAT",
        icon: FaLandmark,
      },
      {
        name: "Debt Recovery Tribunal",
        icon: FaMoneyBillWave,
      },
      {
        name: "City Civil Courts",
        icon: FaGavel,
      },
      {
        name: "Commercial Courts",
        icon: FaBriefcase,
      },
      {
        name: "Family Courts",
        icon: FaUsers,
      },
      {
        name: "Magistrate Courts",
        icon: FaShieldAlt,
      },
    ],
  },

  {
    id: "devanahalli",
    city: "Devanahalli",
    left: "77%",
    top: "68%",
    type: "location",

    courts: [
      {
        name: "Devanahalli Courts",
        icon: FaMapMarkerAlt,
      },
    ],
  },

  {
    id: "nelamangala",
    city: "Nelamangala",
    left: "69%",
    top: "74%",
    type: "location",

    courts: [
      {
        name: "Nelamangala Courts",
        icon: FaMapMarkerAlt,
      },
    ],
  },

  {
    id: "anekal",
    city: "Anekal",
    left: "77%",
    top: "84%",
    type: "location",

    courts: [
      {
        name: "Anekal Courts",
        icon: FaMapMarkerAlt,
      },
    ],
  },

  {
    id: "hosakote",
    city: "Hosakote",
    left: "81%",
    top: "78%",
    type: "location",

    courts: [
      {
        name: "Courts at Hosakote",
        icon: FaMapMarkerAlt,
      },
    ],
  },

  {
    id: "karnataka",
    city: "Across Karnataka",
    left: "43%",
    top: "48%",
    type: "statewide",

    courts: [
      {
        name: "District & Sessions Courts",
        icon: FaGavel,
      },
      {
        name: "Other Trial Courts across Karnataka",
        icon: FaLayerGroup,
      },
    ],
  },
];

/*
|--------------------------------------------------------------------------
| MAP MARKER
|--------------------------------------------------------------------------
*/

function CourtMarker({ location }) {
  const isMain = location.type === "main";
  const isStatewide = location.type === "statewide";

  return (
    <div
      className="group absolute z-30"
      style={{
        left: location.left,
        top: location.top,
        transform: "translate(-50%, -50%)",
      }}
    >
      {/* Pulse */}

      <span
        className={` absolute left-1/2 top-1/2 h-7 w-7 -translate-x-1/2 -translate-y-1/2 animate-ping rounded-full

          ${
            isMain
              ? "bg-[#C5A45D]/25"
              : isStatewide
                ? "bg-[#8B6B32]/20"
                : "bg-[#C5A45D]/20"
          }
        `}
      />

      {/* Marker */}

      <button
        type="button"
        aria-label={location.city}
        className={`relative flex h-8 w-8 items-center justify-center rounded-full border-2 border-white shadow-[0_4px_14px_rgba(0,0,0,0.20)] transition-all duration-300 group-hover:scale-125
          ${
            isMain
              ? "bg-[#111111]"
              : isStatewide
                ? "bg-[#8B6B32]"
                : "bg-[#C5A45D]"
          }
        `}
      >
        <FaMapMarkerAlt
          size={14}
          className={isMain ? "text-[#C5A45D]" : "text-white"}
        />
      </button>

      {/* Location Name */}

      <div
        className="pointer-events-none absolute left-1/2 top-[calc(100%+6px)] -translate-x-1/2 whitespace-nowrap rounded-[2px] bg-white px-2n py-1 shadow-[0_3px_10px_rgba(0,0,0,0.08)]"
      >
        <span
          className="text-[8px] font-semibold uppercase tracking-[1.2px] text-[#111111]"
        >
          {location.city}
        </span>
      </div>

      {/* Tooltip */}

      <div
        className="pointer-events-none absolute bottom-[calc(100%+12px)] left-1/2 z-50 w-[235px] -translate-x-1/2 translate-y-2 rounded-[3px] bg-[#111111] px-4 py-4 opacity-0 shadow-[0_15px_35px_rgba(0,0,0,0.22)] transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
      >
        <div className="mb-3 h-[2px] w-7 bg-[#C5A45D]" />

        <div className="flex items-center gap-2">
          <FaMapMarkerAlt
            size={12}
            className="text-[#C5A45D]"
          />

          <h4 className="font-serif text-[16px] text-white">
            {location.city}
          </h4>
        </div>

        <div className="mt-3 space-y-2">
          {location.courts.map((court) => {
            const Icon = court.icon;

            return (
              <div
                key={court.name}
                className="flex items-center gap-2"
              >
                <Icon
                  size={11}
                  className="shrink-0 text-[#C5A45D]"
                />

                <span className="text-[10px] leading-4 text-white/75">
                  {court.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/*
|--------------------------------------------------------------------------
| COURTS SECTION
|--------------------------------------------------------------------------
*/

export default function CourtsSection() {
  return (
    <section
      id="courts"
      className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-7">
      <div
        className="relative mx-auto w-full px-6 sm:px-10 lg:px-14 xl:px-20"
      >
        {/* ======================================================
            HEADER
        ====================================================== */}

        <div>
          <h2
            className="mt-3 font-serif text-4xl leading-[1.1] tracking-[-0.5px] text-[#C5A45D] sm:text-5xl lg:text-[50px]"
          >
            Courts
          </h2>

          <div className="mt-5 h-[1px] w-[45px] bg-[#C5A45D]" />
          <p className="mt-4 text-sm leading-7 text-[#111111]/65 sm:text-[15px]">
  Representation before courts, tribunals and judicial forums across Karnataka,
  including the High Court, trial courts and specialised tribunals.
</p>
        </div>

        {/* ======================================================
            TWO PART LAYOUT
        ====================================================== */}

        <div
          className="mt-10 grid grid-cols-1 items-center gap-8 lg:grid-cols-[42%_58%] lg:gap-10 xl:grid-cols-[40%_60%]"
        >
          {/* ====================================================
              LEFT — SMALL MAP
          ==================================================== */}

          <div className="relative flex justify-center">
            <div
              className="relative w-full max-w-[380px] sm:max-w-[420px]"
            >
              <img
                src="/karnataka-map.png"
                alt="Karnataka map showing court locations"
                className="relative z-0 block h-auto w-[82%] mx-auto select-none object-contain"
              />

              {/* Markers */}

              {courtLocations.map((location) => (
                <CourtMarker
                  key={location.id}
                  location={location}
                />
              ))}
            </div>
          </div>

          {/* ====================================================
              RIGHT — COURT INFORMATION
          ==================================================== */}

          <div className="lg:pl-4 xl:pl-8">

            {/* Bengaluru */}

            <div className="border-b border-black/10 pb-6">
              <div className="flex items-center gap-3">

                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#111111]"
                >
                  <FaMapMarkerAlt
                    size={15}
                    className="text-[#C5A45D]"
                  />
                </div>

                <div>
                  <p
                    className="text-[9px] font-semibold uppercase tracking-[2px] text-[#C5A45D]"
                  >
                    Primary Location
                  </p>

                  <h3
                    className="mt-1 font-serif text-2xl text-[#111111]"
                  >
                    Bengaluru
                  </h3>
                </div>
              </div>

              <div
                className="mt-5 grid grid-cols-1 gap-x-6  gap-y-3 sm:grid-cols-4"
              >
                {courtLocations[0].courts.map((court) => {
                  const Icon = court.icon;

                  return (
                    <div
                      key={court.name}
                      className="flex items-center gap-2"
                    >
                      <Icon
                        size={12}
                        className="shrink-0 text-[#C5A45D]"
                      />

                      <span
                        className="text-[12px] leading-5 text-[#111111]/75"
                      >
                        {court.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Other Locations */}

            <div className="mt-7">
              <p
                className="text-[9px] font-semibold uppercase tracking-[2.5px] text-[#C5A45D]"
              >
                Court Locations
              </p>

              <div
                className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4"
              >
                {courtLocations
                  .filter(
                    (location) =>
                      location.id !== "bengaluru" &&
                      location.id !== "karnataka"
                  )
                  .map((location) => (
                    <div
                      key={location.id}
                      className="rounded-[3px] border border-black/10 bg-white px-4 py-4 transition-all duration-300 hover:border-[#C5A45D] hover:shadow-[0_8px_25px_rgba(0,0,0,0.06)]"
                    >
                      <FaMapMarkerAlt
                        size={13}
                        className="text-[#C5A45D]"
                      />

                      <p
                        className="mt-2 font-serif text-[15px] text-[#111111]"
                      >
                        {location.city}
                      </p>

                      <p
                        className="mt-1 text-[10px] leading-4 text-[#111111]/50"
                      >
                        {location.courts[0].name}
                      </p>
                    </div>
                  ))}
              </div>
            </div>

            {/* Karnataka Wide */}

            <div
              className="mt-6 border-l-2 border-[#C5A45D] bg-[#F7F1E5]/40 px-5 py-4"
            >
              <div className="flex items-start gap-3">

                <FaLayerGroup
                  size={16}
                  className="mt-0.5 shrink-0 text-[#C5A45D]"
                />

                <div>
                  <p
                    className="font-serif text-[17px] text-[#111111]"
                  >
                    Other Courts across Karnataka
                  </p>

                  <p
                    className="mt-1 text-[11px] leading-5 text-[#111111]/55"
                  >
                    District & Sessions Courts and other
                    Trial Courts across Karnataka.
                  </p>
                </div>

              </div>
            </div>

          </div>
          
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
