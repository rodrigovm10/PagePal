import { auth } from '@/server/auth/auth'
import { NavBarMobileSession } from './nav-bar/nav-bar-with-session/nav-bar-mobile-session'
import { NavBarMobileNoSession } from './nav-bar/nav-bar-no-session/nav-bar-mobile-no-session'
import { NavBarDesktopSession } from '@/client/components/nav-bar/nav-bar-with-session/nav-bar-desktop-session'
import { NavBarDesktopNoSession } from '@/client/components/nav-bar/nav-bar-no-session/nav-bar-desktop-no-session'

export async function NavBar() {
  const session = await auth()

  return (
    <header
      className='fixed top-0 z-50 w-full
      border-b border-border bg-background backdrop-blur-sm supports-[backdrop-filter]:bg-background/60
      '
    >
      {session === null && (
        <>
          <NavBarDesktopNoSession />
          <NavBarMobileNoSession />
        </>
      )}
      {session !== null && (
        <>
          <NavBarDesktopSession />
          <NavBarMobileSession />
        </>
      )}
    </header>
  )
}
