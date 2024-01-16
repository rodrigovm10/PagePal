import Link from 'next/link'

import { Button } from './ui/button'
import { ModeToggle } from './mode-toggle'

export function NavBar() {
  return (
    <nav
      className='
      flex justify-between pt-5 bg-primary/55 border-b-[1px] border-black py-3 px-20
      dark:bg-primary
      lg:px-40
      '
    >
      <h1 className='font-bold text-3xl'>PagePal</h1>
      <ul className='flex justify-between gap-x-5'>
        <li>
          <Link
            href='/membership'
            className='underline-offset-4 hover:underline'
          >
            Membresía
          </Link>
        </li>
        <li>
          <Link
            href='/auth/login'
            className='underline-offset-4 hover:underline'
          >
            Inicia sesión
          </Link>
        </li>
        <li>
          <Button>Registrate</Button>
        </li>
        <li className='self-start'>
          <ModeToggle />
        </li>
      </ul>
    </nav>
  )
}
