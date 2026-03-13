'use client'
import { useEffect, useRef } from 'react'

export default function Cursor() {
  const innerRef = useRef<HTMLDivElement>(null)
  const outerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!window.matchMedia('(hover: hover)').matches) return

    let tx = 0, ty = 0
    let ox = 0, oy = 0
    let rafId: number

    const onMove = (e: MouseEvent) => {
      tx = e.clientX
      ty = e.clientY
    }

    const tick = () => {
      ox += (tx - ox) * 0.12
      oy += (ty - oy) * 0.12

      if (innerRef.current) {
        innerRef.current.style.transform = `translate(${tx - 4}px, ${ty - 4}px)`
      }
      if (outerRef.current) {
        const el = document.elementFromPoint(tx, ty)
        const hovering = !!(el?.closest('a, button, [role="button"]'))
        const size = hovering ? 36 : 28
        outerRef.current.style.transform = `translate(${ox - size / 2}px, ${oy - size / 2}px)`
        outerRef.current.style.width = `${size}px`
        outerRef.current.style.height = `${size}px`
      }

      rafId = requestAnimationFrame(tick)
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    rafId = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <>
      <div
        ref={innerRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: 8,
          height: 8,
          background: '#ece8e1',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9999,
          willChange: 'transform',
          mixBlendMode: 'difference',
        }}
      />
      <div
        ref={outerRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: 28,
          height: 28,
          border: '1px solid rgba(236,232,225,0.5)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9998,
          willChange: 'transform',
          transition: 'width 0.15s ease, height 0.15s ease',
          mixBlendMode: 'difference',
        }}
      />
    </>
  )
}
