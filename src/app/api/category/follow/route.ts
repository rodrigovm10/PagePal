import { db } from '@/server/db/db'
import { getUserByEmail } from '@/server/data/user'
import { getCategory } from '@/server/data/category'
import { NextResponse } from 'next/server'

export async function PUT(request: Request) {
  try {
    const data = await request.json()
    const { categoryName, userEmail } = data

    if (categoryName === '' || userEmail === '') {
      return NextResponse.json({
        message: 'El nombre de la categoría o el nombre de usuario son obligatorios.',
        status: 404
      })
    }

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
