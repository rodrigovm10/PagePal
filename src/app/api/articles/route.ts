import { NextResponse } from 'next/server'

import { db } from '@/server/db/db'
import articles from './../../../articles.json'

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

// export async function POST(request: Request) {
//   try {
//     const body = await request.json()
//     const response = await db.article.create({
//       data: {
//         title: '',
//         banner: '',
//         categories: [],
//         user: '',
//         userId: '',
//         content: ''
//       }
//     })
//   } catch (error) {
//     console.log(error)
//   }
// }
