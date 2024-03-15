import type { User } from '@/types/types'
import { getUsers } from '@/server/data/users'
import { AccountCard } from './account-card'

export async function AccountsToFollow() {
  const users: User[] = await getUsers()

  return (
    <article className='hidden'>
      <h3 className='font-medium text-sm mb-2'>Cuentas para seguir</h3>
      <div className='space-y-5'>
        {users.map((user: User) => (
          <AccountCard
            key={user.id}
            user={user}
          />
        ))}
      </div>
    </article>
  )
}
