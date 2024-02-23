'use client'

import Link from 'next/link'
import { cn } from '@client/libs/utils'
import { usePathname } from 'next/navigation'
import { ROUTER } from '@client/constants'

import { ModeToggle } from '@client/components/mode-toggle'
import { LinkPagepal } from '@client/components/link-pagepal'

export function NavBarDesktopNoSession() {
  const pathname = usePathname()

  return (
    <nav className='hidden lg:flex lg:justify-between lg:px-20 lg:py-3 lg:z-50'>
      <LinkPagepal />
      <ul className='flex justify-between gap-x-5 items-center font-thin'>
        {ROUTER.map((link, i) => {
          return (
            <Link
              key={i}
              href={link.href}
              scroll={true}
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
  )
}
