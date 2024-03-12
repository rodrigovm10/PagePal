import './globals.css'
import type { Metadata } from 'next'
import { cn } from '@client/libs/utils'
import { Onest } from 'next/font/google'
import { auth } from '@/server/auth/auth'
import { SessionProvider } from 'next-auth/react'

import { NavBar } from '@client/components/nav-bar'
import { Toaster } from '@client/components/ui/sonner'
import { ThemeProvider } from '@client/components/providers/theme-provider'

const font = Onest({ subsets: ['latin'], weight: ['400', '500', '600', '700'] })

export const metadata: Metadata = {
  title: 'PagePal',
  description: 'Página dedicada a subir articulos tipo blog',
  icons: {
    icon: './favicon.ico'
  }
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const session = await auth()
  return (
    <html lang='en'>
      <body className={cn('overflow-y-scroll smooth-scroll dark:bg-black h-full', font.className)}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
          storageKey='pagepal-theme'
        >
          <SessionProvider session={session}>
            <NavBar />
            {children}
            <Toaster className='z-50' />
          </SessionProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
