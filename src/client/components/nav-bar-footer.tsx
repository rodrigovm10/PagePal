'use client'

import { cn } from '@client/libs/utils'
import Link from 'next/link'

import { ROUTER_FOOTER } from '@client/constants'
import { FooterSocialMedia } from './footer/footer-social-media'

export function NavBarFooter() {
  return (
    <nav className='flex flex-col lg:flex-row justify-center lg:justify-between items-center lg:items-start px-20 py-3 lg:px-[40px] z-50'>
      <h1 className='font-bold text-3xl text-center mb-5'>
        <Link href='/'>PagePal</Link>
      </h1>
      <ul className='flex flex-col md:flex-row justify-between gap-x-5 items-center gap-y-5 text-center md:text-left'>
        {ROUTER_FOOTER.map((link, i) => {
          return (
            <li key={i}>
              <Link
                href={link.href}
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
