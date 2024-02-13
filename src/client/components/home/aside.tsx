import { CATEGORIES_RECOMMENDED, LINKS_FOOTER } from '@/client/constants'
import { cn } from '@/client/libs/utils'
import Link from 'next/link'
import { badgeVariants } from '@client/components/ui/badge'

export function Aside() {
  return (
    <aside>
      <div className='sticky top-16'>
        <h2 className='text-2xl text-center font-medium my-10'>
          Algunos temas que pueden interesarte
        </h2>
        <article className='space-y-5'>
          <section className='grid grid-cols-3 gap-5'>
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
          <section className='hidden lg:block'>
            <ul className='flex flex-col md:flex-row justify-between gap-x-5 items-center '>
              {LINKS_FOOTER.map((link, i) => {
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
