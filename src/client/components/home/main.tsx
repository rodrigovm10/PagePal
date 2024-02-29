'use client'

import { Suspense, useEffect } from 'react'

import { Aside } from './aside'
import type { Category } from '@prisma/client'
import { ArticlesSections } from './articles-section'
import { SkeletonAside } from '../skeletons/aside-skeleton'
import { AsideAccountsToFollow } from './aside-accounts-to-follow'
import { useSession } from 'next-auth/react'
import { usePathname } from 'next/navigation'
import { useBreadcrumbsStore } from '@/client/stores/breadcrumbsStore'

export function Main({ categories }: { categories?: Category[] }) {
  const { status } = useSession()
  const pathname = usePathname()
  const { addRoute, breadcrumbs } = useBreadcrumbsStore(state => state)

  useEffect(() => {
    addRoute({ breadcrumb: { href: pathname, name: 'Inicio' } })
  }, [])

  return (
    <main
      className='container grid grid-cols-1 lg:grid-cols-3 gap-x-10 relative h-full mt-20'
      id='start-read'
    >
      <ArticlesSections />
      {status === 'unauthenticated' && <Aside categories={categories} />}
      {status === 'authenticated' && (
        <Suspense fallback={<SkeletonAside />}>
          <AsideAccountsToFollow categories={categories} />
        </Suspense>
      )}
    </main>
  )
}
