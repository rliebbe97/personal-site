'use client'
import { useState } from 'react'
import Link from 'next/link'

interface Photo {
  id: number
  color: string
  location: string
  span?: boolean
}

const photos: Photo[] = [
  { id: 1, color: '#0d1014', location: 'New York, NY', span: true },
  { id: 2, color: '#0f100e', location: 'Yosemite, CA' },
  { id: 3, color: '#12100f', location: 'Tokyo, JP' },
  { id: 4, color: '#0e1012', location: 'Iceland' },
  { id: 5, color: '#100f10', location: 'Mexico City' },
]

function PhotoItem({ photo }: { photo: Photo }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        gridColumn: photo.span ? 'span 2' : undefined,
        aspectRatio: photo.span ? '2/1' : '1/1',
        background: photo.color,
        position: 'relative',
        overflow: 'hidden',
        cursor: 'pointer',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: photo.color,
          transform: hovered ? 'scale(1.04)' : 'scale(1)',
          transition: 'transform 0.6s ease',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: 14,
          left: 16,
          fontFamily: 'var(--font-space-mono)',
          fontSize: 9,
          letterSpacing: '0.16em',
          textTransform: 'uppercase',
          color: '#66625e',
          opacity: hovered ? 1 : 0,
          transition: 'opacity 0.3s',
          zIndex: 1,
        }}
      >
        {photo.location}
      </div>
    </div>
  )
}

export default function PhotoGrid() {
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
    </div>
  )
}
