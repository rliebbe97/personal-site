import { groq } from 'next-sanity'

// --- Projects (Work) ---
export const PROJECTS_QUERY = groq`
  *[_type == "project"] | order(coalesce(orderRank, year) desc, year desc) {
    "id": _id,
    title,
    description,
    tags,
    year,
    "slug": slug.current
  }
`

// --- Posts (Words) ---
export const POSTS_QUERY = groq`
  *[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
    title,
    "date": coalesce(string(publishedAt), ""),
    "tag": coalesce(tag, "Essay"),
    "slug": slug.current
  }
`

export const POST_QUERY = groq`
  *[_type == "post" && slug.current == $slug][0] {
    title,
    "date": coalesce(string(publishedAt), ""),
    "tag": coalesce(tag, "Essay"),
    "slug": slug.current,
    excerpt,
    body
  }
`

export const POST_SLUGS_QUERY = groq`
  *[_type == "post" && defined(slug.current)]{ "slug": slug.current }
`

// --- Photos ---
export const PHOTOS_QUERY = groq`
  *[_type == "photo"] | order(coalesce(orderRank, _createdAt) desc) {
    "id": _id,
    location,
    wide,
    image
  }
`
