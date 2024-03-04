'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { useBreadcrumbs } from '../hooks/useBreadcrumbs'
import { useBreadcrumbsStore } from '../stores/breadcrumbsStore'
import { cn } from '../libs/utils'

export function BreadCrumbs({ name }: { name: string }) {
  const pathname = usePathname()
  useBreadcrumbs({ breadcrumb: { href: pathname, name } })

  const { breadcrumbs, removeRoute } = useBreadcrumbsStore(state => state)

  return (
    <nav
      aria-label='breadcrumbs'
      className={cn(
        'text-black dark:text-white',
        pathname === '/terms-pagepal' || (pathname === '/privacy-pagepal' && ''),
        pathname === '/membership' && 'mt-8 -mb-10 md:-mt-2 lg:mb-2',
        pathname === '/about-us' && 'mt-12 lg:mt-16 lg:mb-0',
        pathname === '/sitemap' && ''
      )}
    >
      <ol className='flex flex-col md:flex-row'>
        {breadcrumbs?.map((path, i) => (
          <li key={i}>
            {' '}
            <span className='no-underline'>
              {' '}
              {i + 1 > breadcrumbs.length || i === 0 ? '' : '  > '}
            </span>
            <Link
              onClick={() => removeRoute({ href: path.href })}
              scroll
              href={path.href}
              className={cn(
                pathname === path.href
                  ? 'opacity-80 hover:opacity-80 cursor-auto'
                  : 'underline opacity-80 hover:opacity-100 hover:text-primary text-pretty'
              )}
            >
              {path.name}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  )
}
