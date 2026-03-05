import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Harry Bandukda | Full Stack Developer & Blockchain Engineer',
  description: 'Modern portfolio of Harry Bandukda - Senior Frontend Developer, Blockchain Specialist, and Tech Enthusiast based in Toronto.',
  keywords: 'Developer, Frontend, Blockchain, React, Next.js, Web3, Portfolio',
  authors: [{ name: 'Harry Bandukda' }],
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  openGraph: {
    title: 'Harry Bandukda | Full Stack Developer',
    description: 'Modern portfolio showcasing projects and expertise',
    type: 'website',
    url: 'https://harrybandukda.github.io',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-background text-text-primary`}>
        {children}
      </body>
    </html>
  )
}
