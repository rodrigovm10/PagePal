import { db } from '@/server/db/db'
import { type NextRequest, NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = request.nextUrl
    const order = searchParams.get('order')
    const categories = await db.category.findMany()

    if (order === 'followers') {
      const categoriesOrdened = await db.category.findMany({
        orderBy: {
          followers: 'desc'
        }
      })
      return NextResponse.json(categoriesOrdened)
    }

    if (categories.length === 0) {
      return NextResponse.json({
        message: 'No hay categorías en la base de datos.',
        status: 404
      })
    }

    return NextResponse.json(categories)
  } catch (error) {
    return NextResponse.json({ message: '[API_CATEGORY_GET]', error })
  }
}
