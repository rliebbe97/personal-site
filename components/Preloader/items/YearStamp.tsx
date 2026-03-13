'use client'
import { YearStampConfig } from '../types'

export default function YearStamp({ config }: { config: YearStampConfig }) {
  return (
    <div
      style={{
        fontFamily: 'var(--font-cormorant)',
        fontSize: 120,
        fontWeight: 300,
        color: '#ece8e1',
        opacity: 0.07,
        userSelect: 'none',
        pointerEvents: 'none',
        lineHeight: 1,
        whiteSpace: 'nowrap',
      }}
    >
      {config.text}
    </div>
  )
}
