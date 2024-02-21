import { db } from '@/server/db/db'
import { NextResponse, type NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  try {
    const { pathname } = request.nextUrl
    const id = Number(pathname.split('/')[3])

    if (isNaN(id)) {
      return NextResponse.json({
        message: 'ID de categoría debe ser un número.',
        status: 400
      })
    }

    const category = await db.category.findUnique({
      where: { id },
      select: { id: true, name: true, followers: true, articles: true, users: true }
    })

    if (!category) {
      return NextResponse.json({
        message: 'Categoría no encontrada.',
        status: 404
      })
    }

    return NextResponse.json(category, { status: 200 })
  } catch (error) {
    console.error('Error al obtener la categoría:', error)
    throw error
  }
}
