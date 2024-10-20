module.exports = {
    siteUrl: 'https://insyncx.co/',
    exclude: ['/icon.svg', '/apple-icon.png', '/manifest.webmanifest', '/tags/*', 'next.svg', 'vercel.svg'],
    generateRobotsTxt: true,
    generateIndexSitemap: false,
    robotsTxtOptions: {
        policies: [
            {
                userAgent: '*',
                allow: '/',
            }
        ]
    }
}
