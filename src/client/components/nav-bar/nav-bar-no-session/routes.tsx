import Link from 'next/link'
import { cn } from '@/client/libs/utils'

import { ROUTER } from '@/client/constants'

export function Routes({ pathname }: { pathname: string }) {
  return (
    <>
      {ROUTER.map((link, i) => {
        return (
          <li key={i}>
            <Link
              href={link.href}
              scroll={true}
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
