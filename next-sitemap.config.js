/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://launchifydigital.org',
  generateRobotsTxt: true, // Auto-generates robots.txt
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: '*',
        disallow: ['/admin/', '/dashboard/', '/private/', '/.next/', '/api/', '/search', '/temp/'],
      },
    ],
    additionalSitemaps: [
      'https://launchifydigital.org/sitemap.xml',
    ],
  },
  exclude: ['/admin/**', '/dashboard/**', '/private/**', '/search/**', '/temp/**'],
  generateIndexSitemap: false,
  outDir: 'public',
} 