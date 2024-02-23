'use client'

import { Aside } from './aside'
import { Suspense } from 'react'
import { useSession } from 'next-auth/react'
import type { Category } from '@prisma/client'
import { ArticlesSections } from './articles-section'
import { useWindowWidth } from '@/client/hooks/useWindowWidth'
import { AsideAccountsToFollow } from './aside-accounts-to-follow'
import { SkeletonAside } from '../skeletons/aside-skeleton'

export function Main({ categories }: { categories?: Category[] }) {
  const { width } = useWindowWidth()
  const { status } = useSession()

  return (
    <main
      className='w-[85vw] lg:w-[75vw] mx-auto pb-4 grid grid-cols-1 lg:grid-cols-3 gap-x-10 relative h-full '
      id='start-read'
    >
      {width > 768 && (
        <>
          <Suspense fallback={<SkeletonAside />}>
            <ArticlesSections />
          </Suspense>
          {status === 'unauthenticated' && <Aside categories={categories} />}
          {status === 'authenticated' && (
            <Suspense fallback={<SkeletonAside />}>
              <AsideAccountsToFollow categories={categories} />
            </Suspense>
          )}
        </>
      )}
      {width <= 768 && (
        <>
          {status === 'authenticated' && (
            <Suspense fallback={<p>cargando...</p>}>
              <AsideAccountsToFollow categories={categories} />
            </Suspense>
          )}
          {status === 'unauthenticated' && <Aside categories={categories} />}
          <ArticlesSections />
        </>
      )}
    </main>
  )
}
