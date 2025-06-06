/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://www.launchifydigital.org',
  generateRobotsTxt: true, // Will generate a robots.txt file
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
      { userAgent: '*', disallow: '/admin' },
      { userAgent: '*', disallow: '/private' },
    ],
    additionalSitemaps: [
      `https://www.launchifydigital.org/sitemap.xml`,
    ],
  },
  exclude: ['/admin', '/private'], // Paths to exclude from the sitemap
  generateIndexSitemap: false, // Set to true if you have a lot of pages
  // Optional:
  // Add policies for different crawlers
  // Change frequency and priority for different routes
  // alternateRefs: [
  //   {
  //     href: 'https://www.launchifydigital.org/es',
  //     hreflang: 'es',
  //   },
  // ],
}; 