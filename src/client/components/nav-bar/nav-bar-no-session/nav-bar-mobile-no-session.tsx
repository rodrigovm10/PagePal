'use client'

import { IoMenu } from 'react-icons/io5'
import { cn } from '@client/libs/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ModeToggle } from '@client/components/mode-toggle'
import { LINKS } from '@client/constants'
import { useState } from 'react'

export function NavBarMobileNoSession() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const handleClickOpen = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className='lg:hidden relative'>
      <nav className='flex justify-between px-20 py-3 40px z-50 '>
        <h1 className='font-bold text-3xl'>
          <Link href='/'>PagePal</Link>
        </h1>
        <button onClick={handleClickOpen}>
          <IoMenu className='size-8 text-primary/80 cursor-pointer' />
        </button>
      </nav>
      {isOpen && (
        <div
          className='
        transition-all animate-fade animate-once animate-ease-in-out animate-fill-both
        p-2'
        >
          <ul className='flex flex-col justify-between gap-x-5 items-center font-thin '>
            {LINKS.map((link, i) => (
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
            ))}
            <li className='self-center'>
              <ModeToggle />
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}
