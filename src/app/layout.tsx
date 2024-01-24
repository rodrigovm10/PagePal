import './globals.css'
import type { Metadata } from 'next'
import { cn } from '@client/libs/utils'
import { Onest } from 'next/font/google'
import { NavBar } from '@client/components/nav-bar'
import { Footer } from '@/client/components/footer'
import { ThemeProvider } from '@client/components/providers/theme-provider'

const font = Onest({ subsets: ['latin'], weight: ['400', '500', '600', '700'] })

export const metadata: Metadata = {
  title: 'PagePal',
  description: 'Generated by create next app'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={cn('scroll-smooth dark:bg-black', font.className)}>
        <ThemeProvider
          attribute='class'
          defaultTheme='dark'
          enableSystem={false}
          storageKey='pagepal-theme'
        >
          <NavBar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
