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
// import { db } from '@/server/db/db'
// import { followAndUnfollowUserSchema } from '@/server/schemas'

// export async function POST(request: Request) {
//   try {
//     // TODO: Obtener el usuario actual y el usuario a actualizar
//     // TODO: Actualizar el usuario actual con el usuario actualizado seguido
//     // TODO: Actualizar el usuario seguido con el usuario que lo siguio
//     const body = await request.json()
//     const result = followAndUnfollowUserSchema.safeParse(body)

//     const { id } = body

//     // const user = await db.user.update({
//     //   where: { id },
//     //   data: {
//     //     : {

//     //     }
//     //   }
//     // })
//   } catch (error) {}
// }
