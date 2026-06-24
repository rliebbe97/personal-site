import imageUrlBuilder from '@sanity/image-url'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'
import { dataset, projectId } from '../env'

// projectId falls back to a placeholder so the builder can be constructed before
// Sanity is connected. urlFor is only ever called with real image data (which
// only exists once configured), so the placeholder is never used in practice.
const builder = imageUrlBuilder({ projectId: projectId || 'placeholder', dataset })

/** Build a CDN URL for a Sanity image source, e.g. urlFor(img).width(1200).url() */
export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}
