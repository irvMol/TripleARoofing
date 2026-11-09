const business = require('./business.json');
const site = require('./site.json');
module.exports = {
  '@context': 'https://schema.org',
  '@type': 'RoofingContractor',
  '@id': `${site.siteUrl}/#business`,
  name: business.name,
  url: `${site.siteUrl}/`,
  logo: `${site.siteUrl}${site.logo}`,
  image: `${site.siteUrl}${site.ogImage}`,
  description: site.description,
  telephone: `+1-${business.phone.replace(/\D/g, '').replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3')}`,
  email: business.email,
  openingHours: business.openingHours
    ? business.openingHours.split(',').map((s) => s.trim())
    : undefined,
  address: {
    '@type': 'PostalAddress',
    ...(business.city && { addressLocality: business.city }),
    ...(business.address && { streetAddress: business.address }),
    addressRegion: 'TX',
    addressCountry: 'US',
  },
  areaServed: business.areaServed
    ? business.areaServed.map((name) => ({
        '@type': 'City',
        name: `${name}, TX`,
      }))
    : {
        '@type': 'AdministrativeArea',
        name: 'Dallas-Fort Worth Metroplex, TX',
      },
  sameAs: [business.facebook, business.instagram].filter(Boolean),
};
