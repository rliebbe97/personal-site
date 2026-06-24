'use client'
import { useState } from 'react'
import Link from 'next/link'
import { urlFor } from '@/sanity/lib/image'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'

interface Photo {
  id: string
  location?: string
  wide?: boolean
  image: SanityImageSource
}

function PhotoItem({ photo }: { photo: Photo }) {
  const [hovered, setHovered] = useState(false)
  const src = urlFor(photo.image)
    .width(photo.wide ? 1600 : 900)
    .fit('max')
    .auto('format')
    .url()

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        gridColumn: photo.wide ? 'span 2' : undefined,
        aspectRatio: photo.wide ? '2/1' : '1/1',
        background: '#0d0d0d',
        position: 'relative',
        overflow: 'hidden',
        cursor: 'pointer',
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={photo.location || ''}
        loading="lazy"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          transform: hovered ? 'scale(1.04)' : 'scale(1)',
          transition: 'transform 0.6s ease',
        }}
      />
      {photo.location && (
        <div
          style={{
            position: 'absolute',
            bottom: 14,
            left: 16,
            fontFamily: 'var(--font-space-mono)',
            fontSize: 9,
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            color: '#ece8e1',
            textShadow: '0 1px 6px rgba(0,0,0,0.6)',
            opacity: hovered ? 1 : 0,
            transition: 'opacity 0.3s',
            zIndex: 1,
          }}
        >
          {photo.location}
        </div>
      )}
    </div>
  )
}

export default function PhotoGrid({
  photos,
  showViewAll = false,
}: {
  photos: Photo[]
  showViewAll?: boolean
}) {
  return (
    <div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 4,
          marginBottom: 20,
        }}
      >
        {photos.map((photo) => (
          <PhotoItem key={photo.id} photo={photo} />
        ))}
      </div>
      {showViewAll && (
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Link
            href="/photos"
            style={{
              fontFamily: 'var(--font-space-mono)',
              fontSize: 9,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: '#66625e',
              textDecoration: 'none',
            }}
          >
            View all rolls →
          </Link>
        </div>
      )}
    </div>
  )
}
