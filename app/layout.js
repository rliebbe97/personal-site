import { Cormorant_Garamond, Space_Mono } from 'next/font/google'
import './globals.css'
import SiteChrome from '../components/SiteChrome'
import { getPhotos } from '../sanity/lib/fetch'
import { urlFor } from '../sanity/lib/image'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
})

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-space-mono',
})

export const metadata = {
  title: 'Roby Liebbe | Builder',
  description: 'Personal portfolio showcasing projects and writings of Roby Liebbe, a builder passionate about creating meaningful digital experiences.',
  icons: {
    icon: '/favcon.jpg',
  },
}

export default async function RootLayout({ children }) {
  const photos = await getPhotos()
  const photoUrls = photos.map((p) =>
    urlFor(p.image).width(600).fit('max').auto('format').url()
  )

  return (
    <html lang="en">
      <body className={`${cormorant.variable} ${spaceMono.variable} font-sans`}>
        <SiteChrome photoUrls={photoUrls}>{children}</SiteChrome>
      </body>
    </html>
  )
}
