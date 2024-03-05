import articles from './../../../../articles.json'

import { NextResponse, type NextRequest } from 'next/server'

export const dynamic = 'force-dynamic'

export async function GET(request: NextRequest) {
  try {
    const { pathname } = request.nextUrl
    const name = pathname.split('/')[3]

    if (!name) {
      return NextResponse.json({
        message: 'Nombre de categoría debe ser obligatorio.',
        status: 404
      })
    }

    const newArticles = articles.filter(article =>
      article.categories.includes(name.toLocaleLowerCase())
    )

    return NextResponse.json(newArticles)
  } catch (error) {
    console.error('Error al obtener la categoría:', error)
    throw error
  }
}
