const StructuredData = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AccountingService",
    "name": "Biuro Rachunkowe Zduńska Wola",
    "alternateName": "Księgowa Zduńska Wola",
    "description": "Profesjonalne biuro rachunkowe w Zduńskiej Woli. Oferujemy kompleksową obsługę księgową, rozliczenia podatkowe, kadry i płace. Doświadczona księgowa w Zduńskiej Woli.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "ul. Stefana Żeromskiego 7/9",
      "addressLocality": "Zduńska Wola",
      "addressRegion": "Łódzkie",
      "postalCode": "98-220",
      "addressCountry": "PL"
    },
    "telephone": "+48501668545",
    "url": "https://rbiuro.pl",
    "openingHours": "Mo-Fr 08:00-16:00",
    "areaServed": {
      "@type": "City",
      "name": "Zduńska Wola"
    },
    "priceRange": "$$"
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}

export default StructuredData

