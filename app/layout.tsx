import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { Header } from './header'
import { Footer } from './footer'
import { ThemeProvider } from 'next-themes'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
}

export const metadata: Metadata = {
  title: 'Lion Knoche - My Portfolio',
  description: 'Portfolio website of Lion Knoche, showcasing my work and projects.',
  authors: [{ name: 'Lion Knoche' }],
  icons: {
    icon: '/app/favicon.png',
  },
  openGraph: {
    title: 'Lion Knoche - My Portfolio',
    description: 'Portfolio website of Lion Knoche, showcasing my work and projects.',
    type: 'website',
    locale: 'de_DE',
    images: [
      {
        url: '/app/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Lion Knoche Portfolio',
      },
    ],
  },
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
}

const geist = Geist({
  variable: '--font-geist',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de" suppressHydrationWarning>
      <body
        className={`${geist.variable} ${geistMono.variable} bg-white tracking-tight antialiased dark:bg-zinc-950`}
      >
        <ThemeProvider
          enableSystem={true}
          attribute="class"
          storageKey="theme"
          defaultTheme="system"
        >
          <div className="flex min-h-screen w-full flex-col font-[family-name:var(--font-inter-tight)]">
            <div className="relative mx-auto w-full max-w-screen-sm flex-1 px-4 pt-20">
              <Header />
              {children}
              <Footer />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
