import { db } from '@/server/db/db'
import { NextResponse } from 'next/server'
import { getUserByEmail } from '@/server/data/user'
import { getCategory } from '@/server/data/category'
import { API_ERROR_MESSAGES } from '@/server/libs/constants'
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

    return NextResponse.json({
      message: `La categoria ${categoryName} se ha seguido`,
      status: 201
    })
  } catch (error) {
    console.error(API_ERROR_MESSAGES.FOLLOW_CATEGORY, error)
    throw error
  }
}
