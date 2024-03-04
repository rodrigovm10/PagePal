import { auth } from '@/server/auth/auth'
import { getAllCategories } from '@/server/data/category'

import { Main } from '@client/components/home/main'
import { Hero } from '@/client/components/home/hero'
import type { Category } from '@prisma/client'
import { BreadCrumbs } from '@/client/components/breadcrumbs'

export default async function HomePage({ searchParams }: { searchParams: { search?: string } }) {
  const search = searchParams?.search
  const session = await auth()
  const categories: Category[] = await getAllCategories()

  return (
    <>
      {session === null && <Hero />}
      <BreadCrumbs name='Inicio' />
      <Main
        categories={categories}
        search={search}
      />
    </>
  )
}
