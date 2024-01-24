'use client'

import { cn } from '@client/libs/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { ModeToggle } from '@client/components/mode-toggle'
import { LINKS } from '@client/constants'

export function NavBarWSession() {
  const pathname = usePathname()

  return (
    <>
      <header
        className='
     sticky top-0 z-50 w-full border-b border-border bg-background backdrop-blur-sm supports-[backdrop-filter]:bg-background/60
      '
      >
        <nav className='flex justify-between px-20 py-3 lg:40px z-50'>
          <h1 className='font-bold text-3xl'>
            <Link
              href='/'
              // className={cn(
              //   'opacity-60 hover:opacity-100 transition-all',
              //   pathname === '/membership' && 'opacity-100 text-green-200 font-bold '
              // )}
            >
              PagePal
            </Link>
          </h1>

          <ul className='flex justify-between gap-x-5 items-center font-thin '>
            {LINKS.map((link, i) => {
              return (
                <Link
                  key={i}
                  href={link.href}
                  className={cn(
                    'opacity-60 hover:opacity-100 transition-all',
                    pathname === `${link.href}` && 'opacity-100 text-primary'
                  )}
                >
                  {link.name}
                </Link>
              )
            })}
            <li className='self-start'>
              <ModeToggle />
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}
