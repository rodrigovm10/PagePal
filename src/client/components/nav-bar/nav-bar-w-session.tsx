'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@client/libs/utils'
import { ModeToggle } from '@client/components/mode-toggle'

export function NavBarWSession() {
  const pathname = usePathname()

  return (
    <>
      <nav
        className='
      flex justify-between pt-5 bg-primary border-b-[1px] border-black py-3 px-20 fixed w-full z-10
      
      lg:px-40
      '
      >
        <h1 className='font-bold text-3xl'>
          <Link href='/'>PagePal</Link>
        </h1>
        <ul className='flex justify-between gap-x-5 items-center text-white'>
          <li>
            <Link
              href='/membership'
              className='underline-offset-4 opacity-80 hover:opacity-100 hover:underline transition-all'
            >
              Membresía
            </Link>
          </li>
          <li>
            <Link
              href='/auth/login'
              className='underline-offset-4 opacity-80 hover:opacity-100 hover:underline transition-all'
            >
              Inicia sesión
            </Link>
          </li>
          <li>
            <Link
              href='/auth/register'
              className='bg-black text-white rounded-full hover:bg-black/80 h-10 px-4 py-2'
            >
              Registrate
            </Link>
          </li>
          <li className='self-start'>
            <ModeToggle />
          </li>
        </ul>
      </nav>
      <div
        className={cn(
          'h-32 bg-primary/40 dark:bg-primary/80',
          pathname === '/auth/login' && 'bg-primary/15 h-[19.5px]',
          pathname === '/auth/register' && 'bg-primary/15 h-16',
          pathname === '/membership' && ' dark:bg-background bg-background'
        )}
      ></div>
    </>
  )
}
