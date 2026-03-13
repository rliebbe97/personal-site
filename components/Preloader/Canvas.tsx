'use client'
import { RefObject } from 'react'
import { AnyItemConfig } from './types'
import DraggableItem from './DraggableItem'
import WordCard from './items/WordCard'
import TagPill from './items/TagPill'
import ImagePlaceholder from './items/ImagePlaceholder'
import QuoteFragment from './items/QuoteFragment'
import YearStamp from './items/YearStamp'
import StatusDot from './items/StatusDot'

interface ExitTarget {
  x: number
  y: number
  rotate: number
}

interface Props {
  canvasRef: RefObject<HTMLDivElement>
  items: AnyItemConfig[]
  isExiting: boolean
  exitTargets: ExitTarget[]
}

function renderItemContent(config: AnyItemConfig) {
  switch (config.type) {
    case 'word-card':
      return <WordCard config={config} />
    case 'tag-pill':
      return <TagPill config={config} />
    case 'image-placeholder':
      return <ImagePlaceholder config={config} />
    case 'quote-fragment':
      return <QuoteFragment config={config} />
    case 'year-stamp':
      return <YearStamp config={config} />
    case 'status-dot':
      return <StatusDot config={config} />
  }
}

export default function Canvas({ canvasRef, items, isExiting, exitTargets }: Props) {
  return (
    <div
      ref={canvasRef}
      style={{
        position: 'fixed',
        inset: 0,
        background: '#070707',
        overflow: 'hidden',
        zIndex: 110,
      }}
    >
      {items.map((config, index) => (
        <DraggableItem
          key={config.id}
          config={config}
          index={index}
          isExiting={isExiting}
          exitTarget={exitTargets[index]}
          canvasRef={canvasRef}
        >
          {renderItemContent(config)}
        </DraggableItem>
      ))}
    </div>
  )
}
