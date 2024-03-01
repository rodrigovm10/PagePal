import { Suspense } from 'react'
import { auth } from '@/server/auth/auth'

import { Aside } from './aside'
import type { Category } from '@prisma/client'
import { ArticlesSections } from './articles-section'
import { ArticleSkeleton } from '../skeletons/article-skeleton'
import { AsideAccountsToFollow } from './aside-accounts-to-follow'

interface MainProps {
  search: string | undefined
  categories?: Category[]
}
export async function Main({ categories, search }: MainProps) {
  const session = await auth()

  return (
    <main
      className='container grid grid-rows-2 lg:grid-rows-1 grid-cols-1 lg:grid-cols-3 gap-x-10 relative h-full mt-20'
      id='start-read'
    >
      {/* Use media queries to conditionally render Aside */}
      <Suspense
        key={search}
        fallback={<ArticleSkeleton />}
      >
        <ArticlesSections search={search} />
      </Suspense>
      {session === null && <Aside categories={categories} />}
      {session !== null && <AsideAccountsToFollow categories={categories} />}
    </main>
  )
}
