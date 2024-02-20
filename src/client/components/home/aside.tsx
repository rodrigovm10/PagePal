import Link from 'next/link'
import { cn } from '@/client/libs/utils'
import { ROUTER_FOOTER } from '@/client/constants'

import { Separator } from '../ui/separator'
import { badgeVariants } from '@client/components/ui/badge'
import type { Category } from '@prisma/client'
import { FooterSocialMedia } from '../footer/footer-social-media'

interface AsideProps {
  categories: Category[] | undefined
}

export function Aside({ categories }: AsideProps) {
  return (
    <aside className='max-w-full w-auto lg:w-72 mx-auto'>
      <div className='sticky top-20'>
        <h2 className='text-lg lg:text-sm font-medium mt-10 mb-4'>
          Algunos temas que pueden interesarte
        </h2>
        <article className='space-y-5'>
          <section className='flex justify-center'>
            {categories?.map((category: Category) => (
              <Link
                href={`/category/${category.name}`}
                key={category.id}
                className={badgeVariants({ variant: 'default' })}
              >
                {category.name}
              </Link>
            ))}
          </section>
          <Separator />

          <section className='hidden lg:block'>
            <ul className='flex flex-col md:flex-row justify-between gap-x-5 items-center '>
              {ROUTER_FOOTER.map((link, i) => {
                return (
                  <li key={i}>
                    <Link
                      href={link.href}
                      className={cn(
                        'opacity-60 hover:opacity-100 transition-all text-[12px] text-center'
                      )}
                    >
                      {link.name}
                    </Link>
                  </li>
                )
              })}
            </ul>
            <div className='flex justify-center text list-none mt-4'>
              <FooterSocialMedia />
            </div>
          </section>
        </article>
      </div>
    </aside>
  )
}
