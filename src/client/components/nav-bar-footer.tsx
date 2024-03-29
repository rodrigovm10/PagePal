'use client'

import { cn } from '@client/libs/utils'
import Link from 'next/link'

import { LinkPagepal } from '@client/components/link-pagepal'
import { ROUTER_FOOTER } from '@client/constants'
import { FooterSocialMedia } from './footer/footer-social-media'

export function NavBarFooter() {
  return (
    <nav className='flex flex-col lg:flex-row justify-center lg:justify-between items-center lg:items-start px-20 py-3 lg:px-[40px] z-50'>
      <LinkPagepal />
      <ul className='flex flex-col md:flex-row justify-between gap-x-5 items-center gap-y-5 text-center md:text-center mt-4'>
        {ROUTER_FOOTER.map((link, i) => {
          return (
            <li key={i}>
              <Link
                href={link.href}
                scroll
                className={cn('opacity-60 hover:opacity-100 transition-all')}
              >
                {link.name}
              </Link>
            </li>
          )
        })}
        <FooterSocialMedia />
      </ul>
    </nav>
  )
}
