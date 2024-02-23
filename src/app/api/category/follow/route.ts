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
    console.error('Error al seguir la categoría:', error)
    throw error
  }
}
