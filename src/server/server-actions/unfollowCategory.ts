'use server'

import { db } from '@server/db/db'
import { getUserByEmail } from '@server/data/user'
import { getCategory } from '@server/data/category'

export const unfollowCategory = async ({
  categoryName,
  userEmail
}: {
  categoryName: string
  userEmail: string | null | undefined
}) => {
  const user = await getUserByEmail({ email: userEmail })
  const category = await getCategory({ name: categoryName })

  const categoryIndex = user?.categories.filter(category => category?.name === categoryName)
  if (categoryIndex === undefined) return

  await db.category.update({
    where: { id: category?.id },
    data: {
      followers: {
        decrement: 1
      }
    }
  })

  await db.user.update({
    where: {
      id: user?.id
    },
    data: {
      categories: {
        disconnect: {
          id: categoryIndex[0].id
        }
      }
    }
  })
}
