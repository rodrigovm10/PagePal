import { db } from '@/server/db/db'
import { NextResponse, type NextRequest } from 'next/server'

export const dynamic = 'force-dynamic'

export async function GET(request: NextRequest) {
  try {
    const { pathname } = request.nextUrl
    const name = pathname.split('/')[3]

    const category = await db.category.findFirst({
      where: { name },
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
    return NextResponse.json({ message: '[API_CATEGORY_BY_ID_GET]', error })
  }
}
