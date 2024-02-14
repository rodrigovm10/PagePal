'use client'

import { Aside } from './aside'
import { ArticlesSections } from './articles-section'
import { useWindowWidth } from '@/client/hooks/useWindowWidth'
import type { Category } from '@prisma/client'

interface MainProps {
  categories?: [Category]
}

export function Main({ categories }: MainProps) {
  const { width } = useWindowWidth()
  console.log(categories)

  return (
    <main
      className='w-[85vw] lg:w-[75vw] mx-auto pb-4 grid grid-cols-1 lg:grid-cols-3 gap-x-10 relative h-full'
      id='start-read'
    >
      {width > 768 && (
        <>
          <ArticlesSections />
          <Aside categories={categories} />
        </>
      )}
      {width <= 768 && (
        <>
          <Aside categories={categories} />
          <ArticlesSections />
        </>
      )}
    </main>
  )
}
