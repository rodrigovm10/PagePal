'use client'

import Link from 'next/link'
import { cn } from '@/client/libs/utils'
import { ROUTER_SESSION } from '@/client/constants'
import { usePathname } from 'next/navigation'

export function Routes() {
  const pathname = usePathname()

  return (
    <>
      {ROUTER_SESSION.map((link, i) => {
        return (
          <li key={i}>
            <Link
              href={link.href}
              scroll
              className={cn(
                'opacity-60 hover:opacity-100 transition-all',
                pathname === `${link.href}` && 'opacity-100 text-primary'
              )}
            >
              {link.name}
            </Link>
          </li>
        )
      })}
    </>
  )
}
