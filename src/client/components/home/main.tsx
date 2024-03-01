import { Suspense } from 'react'
import { auth } from '@/server/auth/auth'

import { Aside } from './aside'
import type { Category } from '@prisma/client'
import { ArticlesSections } from './articles-section'
import { AsideAccountsToFollow } from './aside-accounts-to-follow'
import Loading from '@/app/(pages)/(pages-footer)/about-us/loading'

interface MainProps {
  search: string | undefined
  categories?: Category[]
}
export async function Main({ categories, search }: MainProps) {
  const session = await auth()

  return (
    <main
      className='container grid grid-cols-1 lg:grid-cols-3 gap-x-10 relative h-full mt-20'
      id='start-read'
    >
      <Suspense
        key={search}
        fallback={<Loading />}
      >
        <ArticlesSections search={search} />
      </Suspense>
      {session === null && <Aside categories={categories} />}
      {session !== null && <AsideAccountsToFollow categories={categories} />}
    </main>
  )
}
