import {
  EMAIL,
  LINKEDIN_URL,
  OG_IMAGE_PATH,
  PERSON_NAME,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
} from "@/lib/site";

const PERSON_ID = `${SITE_URL}/#person`;
const BUSINESS_ID = `${SITE_URL}/#business`;

const STRUCTURED_DATA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": PERSON_ID,
      name: PERSON_NAME,
      jobTitle: "MarTech Engineer",
      url: SITE_URL,
      email: `mailto:${EMAIL}`,
      sameAs: [LINKEDIN_URL],
      worksFor: { "@id": BUSINESS_ID },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Port Elizabeth",
        addressCountry: "ZA",
      },
      knowsAbout: [
        "Server-side Google Tag Manager",
        "Google Analytics 4",
        "Meta Conversions API",
        "Google Consent Mode v2",
        "OneTrust",
        "BigQuery",
        "Looker Studio",
        "n8n",
      ],
    },
    {
      "@type": "ProfessionalService",
      "@id": BUSINESS_ID,
      name: SITE_NAME,
      description: SITE_DESCRIPTION,
      url: SITE_URL,
      email: EMAIL,
      image: `${SITE_URL}${OG_IMAGE_PATH}`,
      founder: { "@id": PERSON_ID },
      sameAs: [LINKEDIN_URL],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Port Elizabeth",
        addressCountry: "ZA",
      },
    },
  ],
};

export default function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(STRUCTURED_DATA).replace(/</g, "\\u003c"),
      }}
    />
  );
}
