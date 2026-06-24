import { createClient } from 'next-sanity'
import { apiVersion, dataset, projectId, isSanityConfigured } from '../env'

/**
 * The Sanity client is only instantiated when a projectId is present, so the
 * site still builds before Sanity is connected. Fetch helpers in ./fetch.ts
 * guard on `isSanityConfigured` before using it.
 */
export const client = isSanityConfigured
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: true, // served from the edge CDN; published content only
    })
  : null
