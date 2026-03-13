'use client'
import { useRef, useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Canvas from './Canvas'
import { CANVAS_ITEMS } from './itemConfigs'

interface ExitTarget {
  x: number
  y: number
  rotate: number
}

function generateExitTargets(): ExitTarget[] {
  const vw = window.innerWidth
  const vh = window.innerHeight
  const margin = 200

  return CANVAS_ITEMS.map((_, index) => {
    const edge = index % 4
    const targets = [
      { x: -(vw / 2 + margin), y: (Math.random() - 0.5) * vh },
      { x: vw / 2 + margin, y: (Math.random() - 0.5) * vh },
      { x: (Math.random() - 0.5) * vw, y: -(vh / 2 + margin) },
      { x: (Math.random() - 0.5) * vw, y: vh / 2 + margin },
    ]
    return { ...targets[edge], rotate: (Math.random() - 0.5) * 90 }
  })
}

interface Props {
  onEnter: () => void
}

export default function PreloaderIndex({ onEnter }: Props) {
  const canvasRef = useRef<HTMLDivElement>(null!)
  const [isExiting, setIsExiting] = useState(false)
  const [canvasVisible, setCanvasVisible] = useState(true)
  const exitTargetsRef = useRef<ExitTarget[]>([])

  // Generate exit targets once on mount
  useEffect(() => {
    exitTargetsRef.current = generateExitTargets()
  }, [])

  const handleEnter = useCallback(() => {
    if (isExiting) return

    setIsExiting(true)
    setTimeout(() => {
      setCanvasVisible(false)
      setTimeout(() => {
        onEnter()
      }, 300)
    }, 500)
  }, [isExiting, onEnter])

  return (
    <AnimatePresence>
      {canvasVisible && (
        <motion.div
          key="canvas-wrapper"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          style={{ position: 'fixed', inset: 0, zIndex: 110 }}
        >
          <Canvas
            canvasRef={canvasRef}
            items={CANVAS_ITEMS}
            isExiting={isExiting}
            exitTargets={exitTargetsRef.current}
          />
          <motion.button
            style={{
              position: 'fixed',
              top: '55%',
              left: '50%',
              x: '-50%',
              y: '-50%',
              zIndex: 111,
              fontFamily: 'var(--font-space-mono)',
              fontSize: 16,
              letterSpacing: '0.32em',
              color: '#c8956c',
              background: 'transparent',
              border: 'none',
              padding: '12px 0',
              cursor: 'pointer',
              textTransform: 'uppercase',
            }}
            animate={isExiting ? { opacity: 0 } : { opacity: [0.5, 1, 0.5] }}
            transition={
              isExiting
                ? { duration: 0.2 }
                : { duration: 3, repeat: Infinity, ease: 'easeInOut' }
            }
            whileHover={{ scale: 1.2, textShadow: '0 0 20px rgba(200, 149, 108, 0.9), 0 0 50px rgba(200, 149, 108, 0.4)' }}
            onClick={handleEnter}
            onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handleEnter()}
            aria-label="Enter site"
          >
            ENTER
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
