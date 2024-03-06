import Link from 'next/link'
import type { User } from '@/types/types'
import { auth } from '@/server/auth/auth'
import { getUserByEmail } from '@/server/data/users'

import { Clipboard } from '@/client/components/username/clipboard'
import { Avatar, AvatarFallback, AvatarImage } from '@/client/components/ui/avatar'
import { FollowUnfollowUserButton } from '@/client/components/follow-unfollow-button'

export default async function UsernamePage({ params }: { params: { username: string } }) {
  const user: User = await getUserByEmail({ email: decodeURIComponent(params.username) })
  const session = await auth()
  const isTheUserWatchingHisProfile = user?.email === session?.user.email

  return (
    <main className='container my-20 grid grid-cols-3 gap-x-10'>
      <section className='my-5 mx-20 lg:col-span-2 space-y-10'>
        <div className='flex justify-between '>
          <h1 className='text-4xl font-bold '>{user?.name}</h1>
          <Clipboard />
        </div>
        <div className='flex gap-x-2'>
          <p>Inicio</p>
          <p>{isTheUserWatchingHisProfile ? 'Sobre mí' : 'Sobre el perfil'}</p>
        </div>
      </section>
      <aside>
        <Avatar className='size-20'>
          <AvatarImage src={session?.user.image ?? ''} />
          <AvatarFallback>{session?.user.name?.charAt(0).toUpperCase()}</AvatarFallback>
        </Avatar>
        <p>{user.name}</p>
        <p>10K Seguidores</p>
        <p>
          {isTheUserWatchingHisProfile && (
            <Link
              href='/me/settings/account'
              className='text-sm text-primary hover:underline'
            >
              Editar perfil
            </Link>
          )}
        </p>
        <p>
          {!isTheUserWatchingHisProfile && !user.about
            ? 'Este perfil no tiene un "sobre él/ella". :('
            : user.about}
        </p>
        <FollowUnfollowUserButton typeButton='default' />
      </aside>
    </main>
  )
}
