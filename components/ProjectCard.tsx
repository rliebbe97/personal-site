'use client'
import { useRef, useState, useCallback } from 'react'

interface Project {
  id: string
  title: string
  description: string
  tags: string[]
  year: string
  slug: string
}

interface Props {
  project: Project
  index: number
}

export default function ProjectCard({ project, index }: Props) {
  const cardRef = useRef<HTMLDivElement>(null)
  const rafRef = useRef<number | undefined>()
  const targetRot = useRef({ x: 0, y: 0 })
  const currentRot = useRef({ x: 0, y: 0 })
  const [mouseXY, setMouseXY] = useState({ x: 50, y: 50 })
  const [isHovered, setIsHovered] = useState(false)

  const startAnimation = useCallback(() => {
    if (rafRef.current) return
    const animate = () => {
      currentRot.current.x += (targetRot.current.x - currentRot.current.x) * 0.12
      currentRot.current.y += (targetRot.current.y - currentRot.current.y) * 0.12
      if (cardRef.current) {
        cardRef.current.style.transform = `perspective(900px) rotateX(${currentRot.current.x}deg) rotateY(${currentRot.current.y}deg)`
      }
      rafRef.current = requestAnimationFrame(animate)
    }
    rafRef.current = requestAnimationFrame(animate)
  }, [])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height
    targetRot.current = { x: -(y - 0.5) * 28, y: (x - 0.5) * 28 }
    setMouseXY({ x: x * 100, y: y * 100 })
    startAnimation()
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    targetRot.current = { x: 0, y: 0 }
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current)
      rafRef.current = undefined
    }
    const settle = () => {
      currentRot.current.x += (0 - currentRot.current.x) * 0.12
      currentRot.current.y += (0 - currentRot.current.y) * 0.12
      if (cardRef.current) {
        cardRef.current.style.transform = `perspective(900px) rotateX(${currentRot.current.x}deg) rotateY(${currentRot.current.y}deg)`
      }
      if (Math.abs(currentRot.current.x) > 0.05 || Math.abs(currentRot.current.y) > 0.05) {
        rafRef.current = requestAnimationFrame(settle)
      } else {
        rafRef.current = undefined
        if (cardRef.current) cardRef.current.style.transform = ''
      }
    }
    rafRef.current = requestAnimationFrame(settle)
  }

  const num = String(index + 1).padStart(3, '0')

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        position: 'relative',
        border: `1px solid ${isHovered ? '#3a3835' : '#1e1c1a'}`,
        padding: 32,
        willChange: 'transform',
        background: isHovered
          ? `radial-gradient(circle at ${mouseXY.x}% ${mouseXY.y}%, rgba(255,255,255,0.03) 0%, transparent 60%), #070707`
          : '#070707',
        transition: 'border-color 0.2s',
        transformStyle: 'preserve-3d',
        cursor: 'pointer',
        height: '100%',
        boxSizing: 'border-box',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 40 }}>
        <span
          style={{
            fontFamily: 'var(--font-space-mono)',
            fontSize: 9,
            letterSpacing: '0.22em',
            color: '#3a3835',
            textTransform: 'uppercase',
          }}
        >
          {num}
        </span>
        <span
          style={{
            fontFamily: 'var(--font-space-mono)',
            fontSize: 16,
            color: '#66625e',
            transform: isHovered ? 'translate(4px, -4px)' : 'none',
            transition: 'transform 0.2s',
            display: 'inline-block',
          }}
        >
          ↗
        </span>
      </div>

      <h3
        style={{
          fontFamily: 'var(--font-cormorant)',
          fontSize: 32,
          fontWeight: 400,
          color: '#ece8e1',
          lineHeight: 1.1,
          margin: '0 0 16px 0',
        }}
      >
        {project.title}
      </h3>

      <p
        style={{
          fontFamily: 'var(--font-space-mono)',
          fontSize: 11,
          lineHeight: 1.7,
          color: '#66625e',
          marginBottom: 32,
        }}
      >
        {project.description}
      </p>

      <div
        style={{
          fontFamily: 'var(--font-space-mono)',
          fontSize: 9,
          letterSpacing: '0.16em',
          textTransform: 'uppercase',
          color: '#3a3835',
        }}
      >
        {[...project.tags, project.year].join('  ·  ')}
      </div>
    </div>
  )
}
