import articles from './../../../articles.json'
import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

export async function GET(request: Request) {
  try {
    const { search } = new URL(request.url)
    const asa = search.split('=')[1].toLowerCase()

    if (asa === 'undefined') {
      return NextResponse.json(articles)
    }

    console.log(articles)

    const newArticles = articles.filter(
      article =>
        article.categories.toLowerCase().includes(asa) ||
        article.content.toLowerCase().includes(asa) ||
        article.title.toLowerCase().includes(asa)
    )

    return NextResponse.json(newArticles)
  } catch (error) {
    return NextResponse.json({ message: '[API_ARTICLE_GET]', error })
  }
}
