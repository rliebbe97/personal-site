'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import PreloaderIndex from './Preloader/index'

const SESSION_KEY = 'hasVisited'

export default function PreloaderWrapper({ children }: { children: React.ReactNode }) {
  const [showPreloader, setShowPreloader] = useState(false)
  const [loaded, setLoaded] = useState(false)
  const [hydrated, setHydrated] = useState(false)

  useEffect(() => {
    setHydrated(true)
    if (sessionStorage.getItem(SESSION_KEY)) {
      setLoaded(true)
    } else {
      setShowPreloader(true)
    }
  }, [])

  const handleEnter = () => {
    sessionStorage.setItem(SESSION_KEY, 'true')
    setShowPreloader(false)
    setLoaded(true)
  }

  if (!hydrated) return <div style={{ opacity: 0 }}>{children}</div>

  return (
    <>
      <AnimatePresence>
        {showPreloader && <PreloaderIndex key="preloader" onEnter={handleEnter} />}
      </AnimatePresence>
      <motion.div animate={{ opacity: loaded ? 1 : 0 }} transition={{ duration: 0.4 }}>
        {children}
      </motion.div>
    </>
  )
}
