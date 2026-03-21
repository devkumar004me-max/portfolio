import type { Metadata } from 'next'
import './globals.css'
import { SmoothScrollProvider } from '@/components/SmoothScrollProvider'
import Navbar from '@/components/Navbar'
import BlobCursor from '@/components/animations/BlobCursor'
import { TopProgressBar } from '@/components/ui/TopProgressBar'

export const metadata: Metadata = {
  title: 'Dev Portfolio | Designer & Developer',
  description: 'Creating digital experiences that live at the edge of art & code.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased font-body bg-black text-white min-h-screen selection:bg-white selection:text-black">
        <BlobCursor />
        <TopProgressBar />
        <SmoothScrollProvider>
          <Navbar />
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  )
}
