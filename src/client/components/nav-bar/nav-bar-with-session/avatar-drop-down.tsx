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
import { IconArticle, IconUser, IconBooks } from '@tabler/icons-react'
import { LogOut } from '@client/components/auth/log-out'
import { Avatar, AvatarFallback, AvatarImage } from '@client/components/ui/avatar'
import Link from 'next/link'

export function AvatarDropDown({ session }: { session: Session | null }) {
  return (
    <Suspense fallback={<div className='text-black'>cargando...</div>}>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Avatar>
            <AvatarImage src={session?.user.image ?? ''} />
            <AvatarFallback>{session?.user.name?.charAt(0).toUpperCase()}</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Cuenta</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Link
              className='flex gap-x-2'
              href={`/@${session?.user.email?.split('@')[0]}?email=${encodeURIComponent(
                session?.user.email
              )}`}
            >
              <IconUser />
              <span className='self-center'>Perfil</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <div className='flex gap-x-2'>
              <IconBooks />
              <span className='self-center'>Librería</span>
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <div className='flex gap-x-2'>
              <IconArticle />
              <span className='self-center'>Historias</span>
            </div>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Configuración</DropdownMenuItem>
          <DropdownMenuItem>Conviertete en miembro</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <LogOut />
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </Suspense>
  )
}
