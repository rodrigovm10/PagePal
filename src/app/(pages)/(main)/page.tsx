import { auth } from '@/server/auth/auth'
import { getAllCategories } from '@/server/data/category'

import { Main } from '@client/components/home/main'
import { Hero } from '@/client/components/home/hero'
import type { Category } from '@prisma/client'

export default async function HomePage() {
  const session = await auth()
  const categories: Category[] = await getAllCategories()

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
