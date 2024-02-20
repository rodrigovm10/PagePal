import { db } from '@/server/db/db'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const name = searchParams.get('name')

  if (name === null) {
    return { error: ['[CATEOGORY_FOLLOWERS]'], message: 'Name is null' }
  }

  const category = await db.category.findFirst({
    where: { name },
    select: { id: true, name: true, followers: true, articles: true }
  })

  console.log(category?.followers)

  return NextResponse.json(category)
}
