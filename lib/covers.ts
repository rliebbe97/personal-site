export type ShelfType = 'book' | 'film' | 'podcast'

interface CoverQuery {
  type: ShelfType
  title: string
  creator?: string
  searchHint?: string
}

const TMDB_API_KEY = process.env.TMDB_API_KEY || ''

// Cache cover lookups for a day; covers rarely change and this avoids
// re-hitting the APIs on every render.
const CACHE = { next: { revalidate: 86400 } } as const

/** Fetch JSON with a generous timeout that still allows Next to cache the result. */
async function fetchJson(url: string): Promise<any | null> {
  try {
    const res = (await Promise.race([
      fetch(url, CACHE),
      new Promise<never>((_, reject) => setTimeout(() => reject(new Error('timeout')), 9000)),
    ])) as Response
    if (!res.ok) return null
    return await res.json()
  } catch {
    return null
  }
}

function upscaleItunes(art?: string): string | null {
  return art ? art.replace(/\d+x\d+bb\.(jpg|png)$/, '600x600bb.$1') : null
}

async function fetchBookCover(title: string, creator?: string): Promise<string | null> {
  // An ISBN hint maps straight to a cover.
  const isbn = title.replace(/[-\s]/g, '')
  if (/^\d{10}(\d{3})?$/.test(isbn)) {
    return `https://covers.openlibrary.org/b/isbn/${isbn}-L.jpg`
  }
  const params = new URLSearchParams({ title, limit: '1', fields: 'cover_i' })
  if (creator) params.set('author', creator)
  const data = await fetchJson(`https://openlibrary.org/search.json?${params}`)
  const coverId = data?.docs?.[0]?.cover_i
  return coverId ? `https://covers.openlibrary.org/b/id/${coverId}-L.jpg` : null
}

async function fetchMovieCover(term: string): Promise<string | null> {
  // TMDB is reliable for films when a key is configured.
  if (TMDB_API_KEY) {
    const params = new URLSearchParams({ api_key: TMDB_API_KEY, query: term })
    const data = await fetchJson(`https://api.themoviedb.org/3/search/movie?${params}`)
    const poster = data?.results?.[0]?.poster_path
    if (poster) return `https://image.tmdb.org/t/p/w500${poster}`
  }
  // Keyless fallback: iTunes (unreliable for movies, but better than nothing).
  const params = new URLSearchParams({ term, country: 'US', limit: '25' })
  const data = await fetchJson(`https://itunes.apple.com/search?${params}`)
  const movie = (data?.results || []).find((r: { kind?: string }) => r.kind === 'feature-movie')
  return upscaleItunes(movie?.artworkUrl100)
}

async function fetchPodcastCover(term: string): Promise<string | null> {
  const params = new URLSearchParams({ term, entity: 'podcast', country: 'US', limit: '1' })
  const data = await fetchJson(`https://itunes.apple.com/search?${params}`)
  return upscaleItunes(data?.results?.[0]?.artworkUrl100)
}

/**
 * Accept a manually-entered cover URL only if it looks like a direct image link.
 * Guards against the common mistake of pasting a Google/Bing *image search* page
 * URL (e.g. google.com/imgres?...) instead of the image itself.
 */
export function sanitizeCoverUrl(url?: string | null): string | undefined {
  if (!url) return undefined
  const u = url.trim()
  if (!/^https?:\/\//i.test(u)) return undefined
  if (/google\.[a-z.]+\/(imgres|url|search)|bing\.com\/images|duckduckgo\.com/i.test(u)) {
    return undefined
  }
  return u
}

async function resolveOnce(q: CoverQuery): Promise<string | null> {
  const term = (q.searchHint || q.title).trim()
  if (!term) return null
  if (q.type === 'book') return fetchBookCover(term, q.creator)
  if (q.type === 'film') return fetchMovieCover(term)
  if (q.type === 'podcast') return fetchPodcastCover(term)
  return null
}

/**
 * Resolve a cover image URL for a shelf item from free APIs:
 *  - books    → Open Library (ISBN or title+author)
 *  - films    → TMDB (if TMDB_API_KEY is set), else iTunes
 *  - podcasts → iTunes
 * Retries once to ride out transient timeouts. Returns null on a real miss.
 */
export async function resolveCover(q: CoverQuery): Promise<string | null> {
  for (let attempt = 0; attempt < 2; attempt++) {
    const url = await resolveOnce(q)
    if (url) return url
  }
  return null
}
