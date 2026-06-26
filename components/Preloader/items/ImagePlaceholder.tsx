'use client'
import { ImagePlaceholderConfig } from '../types'

export default function ImagePlaceholder({ config }: { config: ImagePlaceholderConfig }) {
  return (
    <div
      style={{
        width: config.width,
        height: config.height,
        background: '#1a1714',
        border: '1px solid #2a2622',
        transform: `rotate(${config.rotate}deg)`,
        userSelect: 'none',
        flexShrink: 0,
        overflow: 'hidden',
      }}
    >
      {config.src && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={config.src}
          alt=""
          draggable={false}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
      )}
    </div>
  )
}
