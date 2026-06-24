import Parser from 'rss-parser'

export interface SubstackPost {
  title: string
  date: string // ISO 8601, e.g. 2025-06-10T... (year-first so list slicing works)
  tag: string
  slug: string
  link: string
  external: true
}

/** Publication base URL, e.g. https://name.substack.com or a custom domain. */
const SUBSTACK_URL = (process.env.NEXT_PUBLIC_SUBSTACK_URL || '').replace(/\/$/, '')

const parser = new Parser({ timeout: 8000 })

function slugFromLink(link: string): string {
  try {
    const parts = new URL(link).pathname.split('/').filter(Boolean)
    return parts[parts.length - 1] || link
  } catch {
    return link
  }
}

/**
 * Fetch posts from the configured Substack publication's RSS feed.
 * Returns [] when no URL is set or the feed can't be reached, so the site
 * always builds and renders a graceful empty state.
 */
export async function getSubstackPosts(): Promise<SubstackPost[]> {
  if (!SUBSTACK_URL) return []
  try {
    const feed = await parser.parseURL(`${SUBSTACK_URL}/feed`)
    return (feed.items || []).map((item) => ({
      title: item.title || 'Untitled',
      date: item.isoDate || item.pubDate || '',
      tag: item.categories?.[0] || 'Essay',
      slug: slugFromLink(item.link || ''),
      link: item.link || SUBSTACK_URL,
      external: true as const,
    }))
  } catch (err) {
    console.error('Failed to fetch Substack feed:', err)
    return []
  }
}
