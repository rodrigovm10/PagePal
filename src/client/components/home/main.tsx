'use client'

import { Aside } from './aside'
import { Suspense } from 'react'
import { useSession } from 'next-auth/react'
import type { Category } from '@prisma/client'
import { ArticlesSections } from './articles-section'
import { useWindowWidth } from '@/client/hooks/useWindowWidth'
import { AsideAccountsToFollow } from './aside-accounts-to-follow'
import { SkeletonAside } from '../skeletons/aside-skeleton'
import Loading from '@/app/(pages)/(main)/loading'
interface MainProps {
  categories?: Category[]
}

export function Main({ categories }: MainProps) {
  const { width } = useWindowWidth()
  const { status } = useSession()

  return (
    <main
      className='w-[85vw] lg:w-[75vw] mx-auto pb-4 grid grid-cols-1 lg:grid-cols-3 gap-x-10 relative h-full '
      id='start-read'
    >
      {width > 768 && (
        <>
          <ArticlesSections />
          {status === 'unauthenticated' && <Aside categories={categories} />}
          {status === 'authenticated' && (
            <Suspense fallback={<Loading />}>
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
