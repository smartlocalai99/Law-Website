// Structured data (JSON-LD) builders for Falcon Lex Legal.
// Only facts that are published on the website are used here.

export const SITE_URL = "https://www.falconlexlegal.in";
export const ORG_ID = `${SITE_URL}/#legalservice`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

const abs = (path = "/") =>
  path === "/" ? SITE_URL : `${SITE_URL}/${path.replace(/^\/+|\/+$/g, "")}`;

// Short reference to the firm, used inside other entities.
export const ORG_REF = {
  "@type": "LegalService",
  "@id": ORG_ID,
  name: "Falcon Lex Legal",
  url: SITE_URL,
};

const AREA_SERVED = [
  { "@type": "City", name: "Bengaluru" },
  { "@type": "AdministrativeArea", name: "Karnataka" },
];

// Office address as published in the Contact section and Footer.
const OFFICE_ADDRESS = {
  "@type": "PostalAddress",
  streetAddress: "#135-136, 1st Floor, Plazzo Retail Mall, Commercial Street",
  addressLocality: "Bengaluru",
  addressRegion: "Karnataka",
  postalCode: "560001",
  addressCountry: "IN",
};

// Court locations listed in the website's Courts section (Bengaluru is the primary location).
const COURT_LOCATIONS = ["Devanahalli", "Nelamangala", "Anekal", "Hosakote"].map((name) => ({
  "@type": "Place",
  name,
  address: { "@type": "PostalAddress", addressLocality: name, addressRegion: "Karnataka", addressCountry: "IN" },
}));

const MAP_URL =
  "https://www.google.com/maps/search/?api=1&query=Plazzo+Retail+Mall%2C+Commercial+Street%2C+Bengaluru+560001";

// Advocate details as published on /advocates/* pages.
export const ADVOCATES = {
  yashwanth: {
    name: "Yashwanth Ovarsu",
    path: "/advocates/yashwanth-ovarsu",
    degree: "B.A. LL.B. (Hons)",
    telephone: "+91 99012 78154",
    email: "ovarsuyaswanth@gmail.com",
    languages: ["English", "Hindi", "Telugu", "Kannada", "Tamil"],
    knowsAbout: [
      "Civil Litigation",
      "Criminal Litigation",
      "Real Estate and Property Law",
      "RERA Matters",
      "Commercial Litigation",
      "Banking and Financial Matters",
      "Family and Matrimonial Law",
      "Property Due Diligence",
      "Arbitration and Mediation",
    ],
  },
  kishan: {
    name: "Kishan Shetty S.R.",
    path: "/advocates/kishan-shetty",
    degree: "B.A., LL.B.",
    telephone: "+91 83107 90921",
    email: "kishanshetty24@gmail.com",
    languages: ["English", "Kannada", "Hindi", "Telugu", "Tamil"],
    knowsAbout: [
      "Civil Litigation",
      "Criminal Litigation",
      "Real Estate and Property Law",
      "RERA Litigation and Compliance",
      "Commercial Litigation",
      "Banking and SARFAESI",
      "Family and Matrimonial Law",
      "Property Due Diligence",
      "Arbitration and Mediation",
    ],
  },
};

const personId = (a) => `${abs(a.path)}#person`;

const personRef = (a) => ({
  "@type": "Person",
  "@id": personId(a),
  name: a.name,
  url: abs(a.path),
});

export function personSchema(key) {
  const a = ADVOCATES[key];
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": personId(a),
    name: a.name,
    url: abs(a.path),
    jobTitle: "Advocate",
    worksFor: ORG_REF,
    workLocation: {
      "@type": "Place",
      name: "Falcon Lex Legal, Bengaluru",
      address: OFFICE_ADDRESS,
    },
    telephone: a.telephone,
    email: a.email,
    knowsLanguage: a.languages,
    knowsAbout: a.knowsAbout,
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "degree",
      name: a.degree,
    },
  };
}

export function legalServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "@id": ORG_ID,
    name: "Falcon Lex Legal",
    url: SITE_URL,
    image: `${SITE_URL}/falcon-lex-legal-hero.png`,
    telephone: "+91 99012 78154",
    email: "Falconlexlegal@gmail.com",
    address: OFFICE_ADDRESS,
    hasMap: MAP_URL,
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "10:00",
      closes: "20:00",
    },
    areaServed: [...AREA_SERVED, ...COURT_LOCATIONS],
    sameAs: ["https://www.instagram.com/falconlexlegal"],
    employee: [personRef(ADVOCATES.yashwanth), personRef(ADVOCATES.kishan)],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    name: "Falcon Lex Legal",
    url: SITE_URL,
    inLanguage: "en-IN",
    publisher: { "@id": ORG_ID },
  };
}

// items: [{ name, path }] — Home is added automatically as the first item.
export function breadcrumbSchema(items) {
  const list = [{ name: "Home", path: "/" }, ...items];
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: list.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: abs(item.path),
    })),
  };
}

// Built from the same FAQ array the page renders, so markup always matches visible content.
export function faqSchema(faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

export function serviceSchema({ name, path, description }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${abs(path)}#service`,
    name,
    serviceType: name,
    description,
    url: abs(path),
    provider: ORG_REF,
    areaServed: AREA_SERVED,
  };
}

// Standard set for a practice-area page: Service + BreadcrumbList + FAQPage.
export function practiceAreaSchemas({ name, path, description, faqs }) {
  return [
    serviceSchema({ name, path, description }),
    breadcrumbSchema([{ name, path }]),
    faqSchema(faqs),
  ];
}
