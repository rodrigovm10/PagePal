'use client'

import { usePathname } from 'next/navigation'

import { ModeToggle } from '@client/components/mode-toggle'
import { LinkPagepal } from '@client/components/link-pagepal'
import { Routes } from '@/client/components/nav-bar/nav-bar-no-session/routes'

export function NavBarDesktopNoSession() {
  const pathname = usePathname()

  return (
    <nav className='hidden lg:flex lg:justify-between lg:px-20 lg:py-3 lg:z-50'>
      <LinkPagepal />
      <ul className='flex justify-between gap-x-5 items-center font-thin'>
        <Routes pathname={pathname} />
        <li className='self-start'>
          <ModeToggle />
        </li>
      </ul>
    </nav>
  )
}
