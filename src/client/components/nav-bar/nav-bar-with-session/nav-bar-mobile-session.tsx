'use client'

import Link from 'next/link'
import { useState } from 'react'
import { cn } from '@client/libs/utils'
import { usePathname } from 'next/navigation'
import { IoClose, IoMenu } from 'react-icons/io5'
import { motion, AnimatePresence } from 'framer-motion'

import { useSession } from 'next-auth/react'
import { ROUTER_SESSION } from '@client/constants'
import { AvatarDropDown } from './avatar-drop-down'
import { ModeToggle } from '@client/components/mode-toggle'
import { LinkPagepal } from '@client/components/link-pagepal'
import { SearchArticles } from '@client/components/search-articles'

export function NavBarMobileSession() {
  const pathname = usePathname()
  const { data } = useSession()
  const [isOpen, setIsOpen] = useState(false)

  const handleClickOpen = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className='lg:hidden relative'>
      <nav className='flex justify-between px-10 py-3 40px z-50 '>
        <LinkPagepal />
        <SearchArticles />
        <motion.button onClick={handleClickOpen}>
          {isOpen && <IoClose className='size-8 text-primary/80 cursor-pointer' />}
          {!isOpen && <IoMenu className='size-8 text-primary/80 cursor-pointer' />}
        </motion.button>
      </nav>
      {isOpen && (
        <AnimatePresence>
          <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { ease: 'easeInOut' } }}
            transition={{ ease: 'easeInOut' }}
            className='p-2'
          >
            <ul className={cn('flex flex-col justify-between gap-x-5 items-center font-thin ')}>
              {ROUTER_SESSION.map((link, i) => (
                <Link
                  key={i}
                  href={link.href}
                  scroll
                  className={cn(
                    'opacity-60 hover:opacity-100 transition-all',
                    pathname === `${link.href}` && 'opacity-100 text-primary'
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <li>
                <AvatarDropDown session={data} />
              </li>
              <li className='self-center'>
                <ModeToggle />
              </li>
            </ul>
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  )
}
