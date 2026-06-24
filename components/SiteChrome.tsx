'use client'
import { usePathname } from 'next/navigation'
import Navbar from './Navbar'
import PreloaderWrapper from './PreloaderWrapper'
import Cursor from './Cursor'

/**
 * Renders the site chrome (custom cursor, navbar, preloader) for normal pages,
 * but bypasses all of it under /studio so the Sanity Studio gets the full screen.
 */
export default function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isStudio = pathname?.startsWith('/studio')

  if (isStudio) {
    return <>{children}</>
  }

  return (
    <>
      <Cursor />
      <Navbar />
      <PreloaderWrapper>{children}</PreloaderWrapper>
    </>
  )
}
