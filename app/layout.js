import { Cormorant_Garamond, Space_Mono } from 'next/font/google'
import './globals.css'
import Navbar from '../components/Navbar'
import PreloaderWrapper from '../components/PreloaderWrapper'
import Cursor from '../components/Cursor'

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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${cormorant.variable} ${spaceMono.variable} font-sans`}>
        <Cursor />
        <Navbar />
        <PreloaderWrapper>{children}</PreloaderWrapper>
      </body>
    </html>
  )
}
