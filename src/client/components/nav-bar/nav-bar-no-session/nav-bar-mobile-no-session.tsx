'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { IoClose, IoMenu } from 'react-icons/io5'
import { motion, AnimatePresence } from 'framer-motion'

import { ModeToggle } from '@client/components/mode-toggle'
import { LinkPagepal } from '@client/components/link-pagepal'
import { Routes } from '@/client/components/nav-bar/nav-bar-no-session/routes'

export function NavBarMobileNoSession() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const handleClickOpen = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className='lg:hidden relative'>
      <nav className='flex justify-between px-10 py-3 40px z-50 '>
        <LinkPagepal />
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
            <ul className='flex flex-col justify-between gap-x-5 items-center font-thin'>
              <Routes pathname={pathname} />
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
