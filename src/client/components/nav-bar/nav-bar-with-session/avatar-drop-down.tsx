import { Suspense } from 'react'
import type { Session } from 'next-auth'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@client/components/ui/dropdown-menu'
import { LogOut } from '@client/components/auth/log-out'
import { Avatar, AvatarImage } from '@client/components/ui/avatar'

export function AvatarDropDown({ session }: { session: Session | null }) {
  if (!session?.user.image) return

  return (
    <Suspense fallback={<div className='text-black'>cargando...</div>}>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Avatar>
            <AvatarImage src={session?.user.image} />
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Cuenta</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <LogOut />
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </Suspense>
  )
}
