import { db } from '@/server/db/db'
import { NextResponse } from 'next/server'
import { getUserByEmail } from '@/server/data/user'
import { getCategory } from '@/server/data/category'
import { followAndUnfollowCategorySchema } from '@/server/schemas'

export async function PUT(request: Request) {
  try {
    const body = await request.json()
    const result = followAndUnfollowCategorySchema.safeParse(body)

    if (!result.success) {
      return NextResponse.json({
        message: result.error.issues,
        status: 404
      })
    }

    const { categoryName, userEmail } = body
    const category = await getCategory({ name: categoryName })
    const user = await getUserByEmail({ email: userEmail })
    const categoryIndex = user?.categories.filter(category => category?.name === categoryName)

    if (!categoryIndex) return

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

    return NextResponse.json({
      message: `La categoria ${categoryName} se ha dejado de seguir`,
      status: 201
    })
  } catch (error) {
    return NextResponse.json({ message: '[API_CATEGORY_UNFOLLOW]', error })
  }
}
