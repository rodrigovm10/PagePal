'use client'

import { Aside } from './aside'
import type { Category } from '@prisma/client'
import { ArticlesSections } from './articles-section'
import { useWindowWidth } from '@/client/hooks/useWindowWidth'
import { useSession } from 'next-auth/react'
import { AsideAccountsToFollow } from './aside-accounts-to-follow'
interface MainProps {
  categories?: [Category]
}

export function Main({ categories }: MainProps) {
  const { width } = useWindowWidth()
  const { status } = useSession()

  return (
    <main className='w-[85vw] lg:w-[75vw] mx-auto pb-4 grid grid-cols-1 lg:grid-cols-3 gap-x-10 relative h-full '>
      {width > 768 && (
        <>
          <ArticlesSections />
          {status === 'unauthenticated' && <Aside categories={categories} />}
          {status === 'authenticated' && <AsideAccountsToFollow categories={categories} />}
        </>
      )}
      {width <= 768 && (
        <>
          {status === 'authenticated' && <AsideAccountsToFollow categories={categories} />}
          {status === 'unauthenticated' && <Aside categories={categories} />}
          <ArticlesSections />
        </>
      )}
    </main>
  )
}
