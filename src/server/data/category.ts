import { db } from '@server/db/db'

export const getCategory = async ({ name }: { name: string }) => {
  const category = await db.category.findFirst({
    where: { name },
    select: { id: true, name: true, followers: true, articles: true, users: true }
  })

  return category
}

export const getAllCategories = async () => {
  const categories = await db.category.findMany()

  return categories
}
