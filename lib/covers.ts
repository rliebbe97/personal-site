export type ShelfType = 'book' | 'film' | 'podcast'

interface CoverQuery {
  type: ShelfType
  title: string
  creator?: string
  searchHint?: string
}

// Covers change rarely; cache lookups for a day.
const FETCH_OPTS = { next: { revalidate: 86400 }, signal: AbortSignal.timeout(6000) }

async function fetchOpenLibraryCover(title: string, creator?: string): Promise<string | null> {
  // ISBN hint → cover directly
  const isbn = title.replace(/[-\s]/g, '')
  if (/^\d{10}(\d{3})?$/.test(isbn)) {
    return `https://covers.openlibrary.org/b/isbn/${isbn}-L.jpg`
  }
  const params = new URLSearchParams({ title, limit: '1', fields: 'cover_i' })
  if (creator) params.set('author', creator)
  const res = await fetch(`https://openlibrary.org/search.json?${params}`, FETCH_OPTS)
  if (!res.ok) return null
  const data = await res.json()
  const coverId = data?.docs?.[0]?.cover_i
  return coverId ? `https://covers.openlibrary.org/b/id/${coverId}-L.jpg` : null
}

function upscale(art?: string): string | null {
  // Upscale Apple's 100px thumbnail to a crisp 600px version.
  return art ? art.replace(/\d+x\d+bb\.(jpg|png)$/, '600x600bb.$1') : null
}

async function fetchMovieCover(term: string): Promise<string | null> {
  // The iTunes `media=movie` filter is unreliable (often returns 0), so we
  // search broadly and pick the first actual feature film.
  const params = new URLSearchParams({ term, country: 'US', limit: '15' })
  const res = await fetch(`https://itunes.apple.com/search?${params}`, FETCH_OPTS)
  if (!res.ok) return null
  const data = await res.json()
  const movie = (data?.results || []).find(
    (r: { kind?: string }) => r.kind === 'feature-movie'
  )
  return upscale(movie?.artworkUrl100)
}

async function fetchPodcastCover(term: string): Promise<string | null> {
  const params = new URLSearchParams({ term, entity: 'podcast', country: 'US', limit: '1' })
  const res = await fetch(`https://itunes.apple.com/search?${params}`, FETCH_OPTS)
  if (!res.ok) return null
  const data = await res.json()
  return upscale(data?.results?.[0]?.artworkUrl100)
}

/**
 * Resolve a cover image URL for a shelf item from a free, keyless API:
 *  - books    → Open Library (by ISBN if the hint looks like one, else title+author)
 *  - films    → iTunes Search (movie)
 *  - podcasts → iTunes Search (podcast)
 * Returns null on any miss/error so callers can fall back gracefully.
 */
export async function resolveCover(q: CoverQuery): Promise<string | null> {
  const term = (q.searchHint || q.title).trim()
  if (!term) return null
  try {
    if (q.type === 'book') return await fetchOpenLibraryCover(term, q.creator)
    if (q.type === 'film') return await fetchMovieCover(term)
    if (q.type === 'podcast') return await fetchPodcastCover(term)
    return null
  } catch {
    return null
  }
}
