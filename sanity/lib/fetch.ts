import { client } from './client'
import {
  PROJECTS_QUERY,
  PROJECT_QUERY,
  PROJECT_SLUGS_QUERY,
  POSTS_QUERY,
  POST_QUERY,
  POST_SLUGS_QUERY,
  PHOTOS_QUERY,
  SHELF_QUERY,
} from './queries'
import type { PortableTextBlock } from '@portabletext/types'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'
import { resolveCover, sanitizeCoverUrl, type ShelfType } from '@/lib/covers'
import { shelf as shelfSeed } from '@/lib/shelf'

export interface SanityProject {
  id: string
  title: string
  description: string
  tags: string[]
  year: string
  slug: string
  externalUrl?: string
}

export interface SanityProjectDetail extends SanityProject {
  liveUrl?: string
  repoUrl?: string
  coverImage?: SanityImageSource
  body?: PortableTextBlock[]
}

export interface SanityPostMeta {
  title: string
  date: string
  tag: string
  slug: string
}

export interface SanityPost extends SanityPostMeta {
  excerpt?: string
  body?: PortableTextBlock[]
}

export interface SanityPhoto {
  id: string
  location?: string
  wide?: boolean
  image: SanityImageSource
}

// All helpers return empty data when Sanity isn't configured yet, so the site
// builds and renders graceful empty states until a project is connected.

export async function getProjects(): Promise<SanityProject[]> {
  if (!client) return []
  return client.fetch(PROJECTS_QUERY, {}, { next: { revalidate: 60 } })
}

export async function getProject(slug: string): Promise<SanityProjectDetail | null> {
  if (!client) return null
  return client.fetch(PROJECT_QUERY, { slug }, { next: { revalidate: 60 } })
}

export async function getProjectSlugs(): Promise<{ slug: string }[]> {
  if (!client) return []
  return client.fetch(PROJECT_SLUGS_QUERY)
}

export async function getPosts(): Promise<SanityPostMeta[]> {
  if (!client) return []
  return client.fetch(POSTS_QUERY, {}, { next: { revalidate: 60 } })
}

export async function getPost(slug: string): Promise<SanityPost | null> {
  if (!client) return null
  return client.fetch(POST_QUERY, { slug }, { next: { revalidate: 60 } })
}

export async function getPostSlugs(): Promise<{ slug: string }[]> {
  if (!client) return []
  return client.fetch(POST_SLUGS_QUERY)
}

export async function getPhotos(): Promise<SanityPhoto[]> {
  if (!client) return []
  return client.fetch(PHOTOS_QUERY, {}, { next: { revalidate: 60 } })
}

export interface ShelfEntry {
  id: string
  title: string
  creator?: string
  type: ShelfType
  note?: string
  coverImage: string | null
  coverColor: string
}

interface RawShelf {
  id: string
  title: string
  creator?: string
  type: ShelfType
  note?: string
  coverUrl?: string
  searchHint?: string
  uploadedCover?: string
}

const FALLBACK_COLOR = '#100f0f'

/**
 * Shelf items, sourced from Sanity. Falls back to the curated lib/shelf seed
 * when Sanity has none yet, so the section is never empty. For every item the
 * cover art is resolved in this order: uploaded image → manual URL →
 * auto-fetched (Open Library / iTunes). Falls back to a flat color box on miss.
 */
export async function getShelf(): Promise<ShelfEntry[]> {
  const raw: RawShelf[] = client
    ? await client.fetch(SHELF_QUERY, {}, { next: { revalidate: 300 } })
    : []

  const items: RawShelf[] =
    raw.length > 0
      ? raw
      : shelfSeed.map((s, i) => ({
          id: `seed-${i}`,
          title: s.title,
          creator: s.creator,
          type: s.type,
          note: s.note,
        }))

  return Promise.all(
    items.map(async (item) => {
      const coverImage =
        item.uploadedCover ||
        sanitizeCoverUrl(item.coverUrl) ||
        (await resolveCover({
          type: item.type,
          title: item.title,
          creator: item.creator,
          searchHint: item.searchHint,
        }))

      return {
        id: item.id,
        title: item.title,
        creator: item.creator,
        type: item.type,
        note: item.note,
        coverImage: coverImage ?? null,
        coverColor: FALLBACK_COLOR,
      }
    })
  )
}
