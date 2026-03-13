'use client'
import { useEffect, useRef } from 'react'

export default function AuroraBlobs() {
  const violetRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let mx = window.innerWidth / 2
    let my = window.innerHeight / 2
    let cx = mx
    let cy = my
    let rafId: number

    const onMove = (e: MouseEvent) => {
      mx = e.clientX
      my = e.clientY
    }

    const tick = () => {
      cx += (mx - cx) * 0.045
      cy += (my - cy) * 0.045
      if (violetRef.current) {
        violetRef.current.style.transform = `translate(${cx - 300}px, ${cy - 300}px)`
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
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
      <div
        ref={violetRef}
        style={{
          position: 'absolute',
          width: 600,
          height: 600,
          background: 'radial-gradient(circle, rgba(124,58,237,0.7) 0%, transparent 70%)',
          filter: 'blur(70px)',
          willChange: 'transform',
          borderRadius: '50%',
          top: 0,
          left: 0,
        }}
      />
      <div className="aurora-blob aurora-blob--teal" />
      <div className="aurora-blob aurora-blob--amber" />
      <div className="aurora-blob aurora-blob--pink" />
    </div>
  )
}
