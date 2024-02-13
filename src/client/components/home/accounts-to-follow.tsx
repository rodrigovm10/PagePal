import { AccountCard } from './account-card'

export function AccountsToFollow() {
  return (
    <article>
      <h3 className='font-medium text-lg mb-2'>Cuentas para seguir</h3>
      <div className='space-y-5'>
        <AccountCard />
        <AccountCard />
        <AccountCard />
        <AccountCard />
      </div>
    </article>
  )
}
