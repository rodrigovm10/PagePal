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

  console.log('follow')
}

export const unfollowCategory = async ({
  categoryName,
  userEmail
}: {
  categoryName: string
  userEmail: string | null | undefined
}) => {
  const user = await getUserByEmail({ email: userEmail })
  const category = await getCategory({ name: categoryName })

  const categoryIndex = user?.categories.findIndex(category => category?.name === categoryName)

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
          id: categoryIndex
        }
      }
    }
  })

  console.log('unfollow')
}
