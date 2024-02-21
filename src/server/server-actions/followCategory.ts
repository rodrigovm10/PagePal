'use server'

import { db } from '@server/db/db'
import { getUserByEmail } from '@server/data/user'
import { getCategory } from '@server/data/category'

export const followCategory = async ({
  categoryName,
  userEmail
}: {
  categoryName: string
  userEmail: string | null | undefined
}) => {
  const category = await getCategory({ name: categoryName })

  const user = await getUserByEmail({ email: userEmail })

  await db.category.update({
    where: { id: category?.id },
    data: {
      followers: {
        increment: 1
      }
    }
  })

  await db.user.update({
    where: { id: user?.id },
    data: {
      categories: {
        connect: { id: category?.id }
      }
    }
  })
}
