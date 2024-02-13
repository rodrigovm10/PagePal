'use client'

import { Aside } from './aside'
import { ArticlesSections } from './articles-section'
import { useWindowWidth } from '@/client/hooks/useWindowWidth'

export function Main() {
  const { width } = useWindowWidth()

  return (
    <main
      className='w-[85vw] lg:w-[75vw] mx-auto pb-4 grid grid-cols-1 lg:grid-cols-3 gap-x-10 relative h-full'
      id='start-read'
    >
      {width > 768 && (
        <>
          <ArticlesSections />
          <Aside />
        </>
      )}
      {width <= 768 && (
        <>
          <Aside />
          <ArticlesSections />
        </>
      )}
    </main>
  )
}
