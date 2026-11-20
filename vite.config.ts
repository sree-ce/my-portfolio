import { existsSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { defineConfig, loadEnv, type HtmlTagDescriptor, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { projects } from './src/data/projects'
import { site } from './src/data/site'

const getPublicFilePath = (fileName: string) => fileURLToPath(new URL(`./public/${fileName}`, import.meta.url))

function resumePlugin(): Plugin {
  const resumeFilePath = getPublicFilePath('resume.pdf')
  return {
    name: 'portfolio:resume',
    config() {
      return { define: { __RESUME_AVAILABLE__: JSON.stringify(existsSync(resumeFilePath)) } }
    },
    configResolved(config) {
      if (!existsSync(resumeFilePath)) {
        config.logger.warn('\n[portfolio] public/resume.pdf not found: resume links are hidden.\n')
      }
    },
    configureServer(server) {
      server.watcher.add(resumeFilePath)
      const restartOnResumeChange = (changedFilePath: string) => {
        if (changedFilePath === resumeFilePath) void server.restart()
      }
      server.watcher.on('add', restartOnResumeChange)
      server.watcher.on('unlink', restartOnResumeChange)
    },
  }
}

function seoPlugin(siteUrl: string): Plugin {
  const hasOgImage = existsSync(getPublicFilePath('og-image.png'))
  return {
    name: 'portfolio:seo',
    transformIndexHtml() {
      const tags: HtmlTagDescriptor[] = []
      if (siteUrl) {
        tags.push(
          { tag: 'link', attrs: { rel: 'canonical', href: `${siteUrl}/` }, injectTo: 'head' },
          { tag: 'meta', attrs: { property: 'og:url', content: `${siteUrl}/` }, injectTo: 'head' },
        )
      }
      if (hasOgImage && siteUrl) {
        const ogImageUrl = `${siteUrl}/og-image.png`
        tags.push(
          { tag: 'meta', attrs: { property: 'og:image', content: ogImageUrl }, injectTo: 'head' },
          { tag: 'meta', attrs: { property: 'og:image:width', content: '1200' }, injectTo: 'head' },
          { tag: 'meta', attrs: { property: 'og:image:height', content: '630' }, injectTo: 'head' },
          { tag: 'meta', attrs: { property: 'og:image:alt', content: `${site.name}, ${site.jobTitle}` }, injectTo: 'head' },
          { tag: 'meta', attrs: { name: 'twitter:image', content: ogImageUrl }, injectTo: 'head' },
        )
      }
      const personJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: site.name,
        jobTitle: site.jobTitle,
        email: `mailto:${site.email}`,
        ...(siteUrl && { url: `${siteUrl}/` }),
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Kochi',
          addressRegion: 'Kerala',
          addressCountry: 'IN',
        },
        worksFor: { '@type': 'Organization', name: site.organization },
        alumniOf: { '@type': 'CollegeOrUniversity', name: 'Government Engineering College, Chelad, Kothamangalam' },
        knowsAbout: ['React', 'TypeScript', 'JavaScript', 'Node.js', 'NestJS', 'PostgreSQL', 'REST APIs'],
        sameAs: [site.linkedin, site.github],
      }
      tags.push({
        tag: 'script',
        attrs: { type: 'application/ld+json' },
        children: JSON.stringify(personJsonLd),
        injectTo: 'head',
      })
      return tags
    },
    generateBundle() {
      const robotsLines = ['User-agent: *', 'Allow: /', ...(siteUrl ? [`Sitemap: ${siteUrl}/sitemap.xml`] : [])]
      this.emitFile({ type: 'asset', fileName: 'robots.txt', source: `${robotsLines.join('\n')}\n` })

      if (!siteUrl) {
        this.warn('VITE_SITE_URL is not set: canonical URLs and sitemap.xml were skipped.')
        return
      }
      const pagePaths = ['/', ...projects.map((project) => `/projects/${project.slug}`)]
      const sitemapUrls = pagePaths.map((pagePath) => `  <url><loc>${siteUrl}${pagePath}</loc></url>`).join('\n')
      this.emitFile({
        type: 'asset',
        fileName: 'sitemap.xml',
        source: `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapUrls}\n</urlset>\n`,
      })
    },
  }
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), 'VITE_')
  const siteUrl = (env.VITE_SITE_URL ?? '').replace(/\/+$/, '')

  return {
    plugins: [react(), tailwindcss(), resumePlugin(), seoPlugin(siteUrl)],
  }
})
