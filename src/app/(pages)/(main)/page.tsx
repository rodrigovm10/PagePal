import { auth } from '@/server/auth/auth'
import { fetchCategory } from '@/server/data/category'

import { Main } from '@client/components/home/main'
import { Hero } from '@/client/components/home/hero'

export default async function HomePage() {
  const session = await auth()
  const categories = await fetchCategory()
  console.log(categories)
  return (
    <>
      {session !== null && <Main categories={categories} />}
      {session === null && (
        <>
          <Hero />
          <Main categories={categories} />
        </>
      )}
    </>
  )
}
