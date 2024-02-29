import type { User } from '@/types/types'
import { Button } from '@client/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@client/components/ui/avatar'

export function AccountCard({ user }: { user: User }) {
  return (
    <section className='flex justify-between cursor-pointer'>
      <div className='flex gap-x-3'>
        <Avatar>
          <AvatarImage src={user.image ?? ''} />
          <AvatarFallback>{user.name?.charAt(0).toUpperCase()}</AvatarFallback>
        </Avatar>
        <p className='font-bold'>{user.name}</p>
      </div>

      <Button variant={'outline'}>Seguir</Button>
    </section>
  )
}
