import { db } from '@/server/db/db'

export const getUserByEmail = async ({ email }: { email: string }) => {
  try {
    const user = await db.user.findUnique({
      where: { email }
    })

    return user
  } catch (err) {
    return
  }
}

export const getUserById = async ({ id }: { id: string }) => {
  try {
    const user = await db.user.findUnique({
      where: { id }
    })

    return user
  } catch (err) {
    return
  }
}
