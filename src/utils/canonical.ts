// Canonical URL utility for consistent SEO
export function getCanonicalUrl(pathname: string, baseUrl: string = 'https://nai-salon.vercel.app'): string {
  // Remove trailing slash except for root
  const cleanPath = pathname === '/' ? '/' : pathname.replace(/\/$/, '');
  
  // Handle index pages (remove /index from URL)
  const canonicalPath = cleanPath.replace(/\/index$/, '') || '/';
  
  return `${baseUrl}${canonicalPath}`;
}

// Page-specific canonical URL overrides for special cases
export function getPageCanonicalUrl(pathname: string): string {
  const baseUrl = 'https://nai-salon.vercel.app';
  
  // Special canonical URL mappings for SEO optimization
  const canonicalMappings: Record<string, string> = {
    '/services': `${baseUrl}/services`,
    '/acrylic-nails': `${baseUrl}/acrylic-nails`,
    '/gel-nails': `${baseUrl}/gel-nails`,
    '/manicure-services': `${baseUrl}/manicure-services`,
    '/pedicure-services': `${baseUrl}/pedicure-services`,
    '/nail-art': `${baseUrl}/nail-art`,
    '/nail-extensions': `${baseUrl}/nail-extensions`,
    '/emergency-nail-services-canton': `${baseUrl}/emergency-nail-services-canton`,
    '/acrylic-nails-canton': `${baseUrl}/acrylic-nails-canton`,
    '/manicure-canton': `${baseUrl}/manicure-canton`,
    '/pedicure-canton': `${baseUrl}/pedicure-canton`,
    '/blog': `${baseUrl}/blog`,
    '/blog/gel-vs-acrylic': `${baseUrl}/blog/gel-vs-acrylic`,
    '/blog/prepare-for-appointment': `${baseUrl}/blog/prepare-for-appointment`,
    '/blog/brittle-nails-solutions': `${baseUrl}/blog/brittle-nails-solutions`,
    '/about': `${baseUrl}/about`,
    '/contact': `${baseUrl}/contact`,
    '/book': `${baseUrl}/book`,
    '/locations': `${baseUrl}/locations`,
  };
  
  // Return specific canonical URL if mapped, otherwise use default
  return canonicalMappings[pathname] || getCanonicalUrl(pathname, baseUrl);
}
