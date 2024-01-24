import { NavBarWtSession } from '@client/components/nav-bar/nav-bar-wt-sesion'
import { NavBarWSession } from '@client/components/nav-bar/nav-bar-w-session'
import { auth } from '@/server/auth/auth'

export async function NavBar() {
  const session = await auth()

  return <>{session !== null ? <NavBarWtSession /> : <NavBarWSession />}</>
}
