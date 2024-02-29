import { db } from '@/server/db/db'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const users = await db.user.findMany({
      take: 5
    })

    return NextResponse.json(users)
  } catch (error) {
    console.error('Error al obtener a los usuarios:', error)
    throw error
  }
}
