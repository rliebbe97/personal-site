'use client'
import { usePathname } from 'next/navigation'
import Navbar from './Navbar'
import PreloaderWrapper from './PreloaderWrapper'
import Cursor from './Cursor'

/**
 * Renders the site chrome (custom cursor, navbar, preloader) for normal pages,
 * but bypasses all of it under /studio so the Sanity Studio gets the full screen.
 */
export default function SiteChrome({
  children,
  photoUrls,
}: {
  children: React.ReactNode
  photoUrls?: string[]
}) {
  const pathname = usePathname()
  const isStudio = pathname?.startsWith('/studio')

  if (isStudio) {
    return <>{children}</>
  }

  return (
    <>
      <Cursor />
      <Navbar />
      <PreloaderWrapper photoUrls={photoUrls}>{children}</PreloaderWrapper>
    </>
  )
}
