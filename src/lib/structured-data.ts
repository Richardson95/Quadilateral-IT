import { faqs, leadership, services, site, tracks } from "@/lib/site";

/**
 * JSON-LD graph: organisation, the services we offer, the academy courses and
 * the FAQ — so search engines can render rich results rather than a blue link.
 */
export function structuredData(siteUrl: string) {
  const organization = {
    "@type": "ProfessionalService",
    "@id": `${siteUrl}#organization`,
    name: site.name,
    legalName: site.legalName,
    url: siteUrl,
    email: site.email,
    telephone: site.phone,
    description: site.description,
    foundingDate: site.founded,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lagos",
      addressCountry: "NG",
    },
    areaServed: "Worldwide",
    founder: leadership.map((leader) => ({ "@id": `${siteUrl}#${leader.slug}` })),
    sameAs: Object.values(site.socials),
    knowsAbout: services.map((service) => service.title),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Consultancy services",
      itemListElement: services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.blurb,
        },
      })),
    },
  };

  const people = leadership.map((leader) => ({
    "@type": "Person",
    "@id": `${siteUrl}#${leader.slug}`,
    name: leader.name,
    ...(leader.credential ? { honorificSuffix: leader.credential } : {}),
    jobTitle: leader.role,
    description: leader.bio[0],
    image: `${siteUrl}${leader.photo}`,
    knowsAbout: leader.focus,
    homeLocation: { "@type": "Place", name: leader.location },
    worksFor: { "@id": `${siteUrl}#organization` },
  }));

  const courses = tracks.map((track) => ({
    "@type": "Course",
    name: `${track.title} — ${site.shortName} Academy`,
    description: track.blurb,
    provider: { "@id": `${siteUrl}#organization` },
    timeRequired: track.duration,
  }));

  const faqPage = {
    "@type": "FAQPage",
    "@id": `${siteUrl}#faq`,
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  const website = {
    "@type": "WebSite",
    "@id": `${siteUrl}#website`,
    url: siteUrl,
    name: site.name,
    publisher: { "@id": `${siteUrl}#organization` },
    inLanguage: "en",
  };

  return {
    "@context": "https://schema.org",
    "@graph": [organization, ...people, website, faqPage, ...courses],
  };
}
