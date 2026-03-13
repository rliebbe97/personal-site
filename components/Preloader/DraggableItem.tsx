'use client'
import { useRef, useState, useEffect, RefObject } from 'react'
import { motion, useMotionValue, useAnimationFrame, useReducedMotion } from 'framer-motion'
import { AnyItemConfig } from './types'

interface ExitTarget {
  x: number
  y: number
  rotate: number
}

interface Props {
  config: AnyItemConfig
  index: number
  isExiting: boolean
  exitTarget: ExitTarget
  canvasRef: RefObject<HTMLDivElement>
  children: React.ReactNode
}

export default function DraggableItem({
  config,
  index,
  isExiting,
  exitTarget,
  canvasRef,
  children,
}: Props) {
  const shouldReduceMotion = useReducedMotion()
  const [isTouchDevice, setIsTouchDevice] = useState(false)
  const isDragging = useRef(false)
  const floatY = useMotionValue(0)

  useEffect(() => {
    setIsTouchDevice(window.matchMedia('(pointer: coarse)').matches)
  }, [])

  useAnimationFrame((t) => {
    if (shouldReduceMotion || isDragging.current || isExiting || config.floatAmplitude === 0) return
    const elapsed = t / 1000
    floatY.set(
      Math.sin(
        (elapsed / config.floatSpeed) * Math.PI * 2 + config.floatPhaseOffset
      ) * config.floatAmplitude
    )
  })

  const handleDragStart = () => {
    isDragging.current = true
  }

  const handleDragEnd = () => {
    setTimeout(() => {
      isDragging.current = false
    }, 500)
  }

  const canDrag = !shouldReduceMotion && !isTouchDevice && config.draggable

  return (
    <motion.div
      style={{
        position: 'absolute',
        left: `${config.x}%`,
        top: `${config.y}%`,
        translateX: '-50%',
        translateY: '-50%',
        y: floatY,
        cursor: canDrag ? 'grab' : 'default',
        zIndex: 1,
      }}
      drag={canDrag}
      dragConstraints={canvasRef}
      dragMomentum={true}
      dragElastic={0.08}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      initial={{ opacity: 0, scale: 0.85 }}
      animate={
        isExiting && exitTarget
          ? {
              x: exitTarget.x,
              y: exitTarget.y,
              rotate: exitTarget.rotate,
              opacity: 0,
              scale: 0.6,
            }
          : { opacity: 1, scale: 1 }
      }
      transition={
        isExiting && exitTarget
          ? { duration: 0.5, ease: [0.55, 0, 1, 0.45], delay: index * 0.03 }
          : { delay: index * 0.06, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }
      }
      whileHover={
        shouldReduceMotion
          ? {}
          : { rotate: [0, -1.5, 1.5, -1, 0], transition: { duration: 0.35 } }
      }
      whileDrag={{ scale: 1.04, zIndex: 10 }}
    >
      {children}
    </motion.div>
  )
}
