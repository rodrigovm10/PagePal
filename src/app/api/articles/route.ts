import { db } from '@/server/db/db'

import { NextResponse } from 'next/server'
import articles from './../../../articles.json'
import { createArticleSchema } from '@/server/schemas'

export const dynamic = 'force-dynamic'

export async function GET(request: Request) {
  try {
    const { search } = new URL(request.url)
    const param = search.split('=')[1].toLowerCase()

    if (param === 'undefined') {
      return NextResponse.json(articles)
    }

    const newArticles = articles.filter(
      article =>
        article.categories.includes(param.toLowerCase()) ||
        article.content.toLowerCase().includes(param) ||
        article.title.toLowerCase().includes(param)
    )

    return NextResponse.json(newArticles)
  } catch (error) {
    return NextResponse.json({ message: '[API_ARTICLE_GET]', error })
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const result = createArticleSchema.safeParse(body)

    if (!result.success) {
      return NextResponse.json({
        message: result.error.issues,
        status: 404
      })
    }

    console.log(body)

    const { title, categories, content, userId, banner, description } = result.data

    console.log(result.data)

    const articleCreated = await db.article.create({
      data: {
        title,
        content,
        description,
        banner,
        userId
      }
    })

    return NextResponse.json(body)
  } catch (error) {
    return NextResponse.json({ message: '[API_ARTICLE_POST]', error })
  }
}
