import { db } from '@/server/db/db'
import { NextResponse } from 'next/server'
import { getUserByEmail } from '@/server/data/user'
import { getCategory } from '@/server/data/category'
import { followAndUnfollowSchema } from '@/server/schemas/follow-unfollow'

export async function PUT(request: Request) {
  try {
    const body = await request.json()
    const result = followAndUnfollowSchema.safeParse(body)

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
    console.error('Error al dejar de seguir la categoría:', error)
    throw error
  }
}
