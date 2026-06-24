import { client } from './client'
import {
  PROJECTS_QUERY,
  POSTS_QUERY,
  POST_QUERY,
  POST_SLUGS_QUERY,
  PHOTOS_QUERY,
} from './queries'
import type { PortableTextBlock } from '@portabletext/types'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'

export interface SanityProject {
  id: string
  title: string
  description: string
  tags: string[]
  year: string
  slug: string
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
