import Link from 'next/link'
import { cn } from '@/client/libs/utils'
import { CATEGORIES_RECOMMENDED, ROUTER_FOOTER } from '@/client/constants'

import { Separator } from '../ui/separator'
import { badgeVariants } from '@client/components/ui/badge'
import { AccountsToFollow } from './accounts-to-follow'

export function Aside() {
  return (
    <aside className='max-w-full w-72'>
      <div className='sticky top-16'>
        <h2 className='text-lg font-medium mt-10 mb-4'>Algunos temas que pueden interesarte</h2>
        <article className='space-y-5'>
          <section className='grid grid-cols-2 gap-5'>
            {CATEGORIES_RECOMMENDED.map((category, i) => (
              <Link
                href='2'
                key={i}
                className={badgeVariants({ variant: 'default' })}
              >
                {category}
              </Link>
            ))}
          </section>
          <Separator />
          <AccountsToFollow />
          <Separator />
          <section className='hidden lg:block'>
            <ul className='flex flex-col md:flex-row justify-between gap-x-5 items-center '>
              {ROUTER_FOOTER.map((link, i) => {
                return (
                  <li key={i}>
                    <Link
                      href={link.href}
                      className={cn(
                        'opacity-60 hover:opacity-100 transition-all text-sm text-center'
                      )}
                    >
                      {link.name}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </section>
        </article>
      </div>
    </aside>
  )
}
