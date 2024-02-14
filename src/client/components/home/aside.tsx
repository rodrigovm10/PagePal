import Link from 'next/link'
import { cn } from '@/client/libs/utils'
import { ROUTER_FOOTER } from '@/client/constants'

import { Separator } from '../ui/separator'
import { badgeVariants } from '@client/components/ui/badge'
import { AccountsToFollow } from './accounts-to-follow'
import { fetchCategory } from '@/server/data/category'
import type { Category } from '@prisma/client'

export async function Aside() {
  const categories = await fetchCategory()

  return (
    <aside className='max-w-full w-72'>
      <div className='sticky top-16'>
        <h2 className='text-sm font-medium mt-10 mb-4'>Algunos temas que pueden interesarte</h2>
        <article className='space-y-5'>
          <section className='space-x-4'>
            {categories?.map((category: Category) => (
              <Link
                href='2'
                key={category.id}
                className={badgeVariants({ variant: 'default' })}
              >
                {category.name}
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
