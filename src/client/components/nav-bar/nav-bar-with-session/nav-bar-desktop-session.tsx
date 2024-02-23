import { auth } from '@/server/auth/auth'

import { Routes } from './routes'
import { AvatarDropDown } from './avatar-drop-down'
import { ModeToggle } from '@client/components/mode-toggle'
import { LinkPagepal } from '@client/components/link-pagepal'

export async function NavBarDesktopSession() {
  const session = await auth()

  return (
    <nav className='hidden lg:flex lg:justify-between lg:px-20 lg:py-3 lg:z-50'>
      <LinkPagepal />
      <ul className='flex justify-between gap-x-5 items-center font-thin'>
        <Routes />
        <li>
          <AvatarDropDown session={session} />
        </li>
        <li className='self-start'>
          <ModeToggle />
        </li>
      </ul>
    </nav>
  )
}
