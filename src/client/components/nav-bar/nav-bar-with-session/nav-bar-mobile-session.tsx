import { signOut } from '@/server/auth/auth'
import Link from 'next/link'

import { ModeToggle } from '@client/components/mode-toggle'
import { Button } from '@client/components/ui/button'

export function NavBarMobileSession() {
  return (
    <nav
      className='
      flex justify-between pt-5 border-b-8 border-gray-500 py-3 px-20 fixed w-full z-10
      lg:px-40 md:hidden
      '
    >
      <h1 className='font-bold text-3xl'>
        <Link href='/'>PagePal</Link>
      </h1>
      <ul className='flex justify-between gap-x-5 items-center text-white'>
        <li>
          <form
            action={async () => {
              'use server'
              await signOut()
            }}
          >
            <Button type='submit'>Cerrar sesión</Button>
          </form>
        </li>
        <li>
          <Link
            href='/register'
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
  )
}
