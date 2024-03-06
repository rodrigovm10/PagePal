import { db } from '@/server/db/db'
import { NextResponse, type NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  try {
    const { pathname } = request.nextUrl
    const name = pathname.split('/')[3]
    const email = name.split('@')[1].concat('@gmail.com')

    const user = await db.user.findFirst({
      where: { email }
    })

    console.log(user)
    return NextResponse.json(user)
  } catch (error) {
    console.error('Error al obtener la categoría:', error)
    throw error
  }
}
