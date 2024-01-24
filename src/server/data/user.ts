import { db } from '@/server/db/db'

export const getUserByEmail = async ({ email }: { email: string | undefined }) => {
  try {
    const user = await db.user.findUnique({
      where: { email }
    })

    return user
  } catch (err) {}
}

export const getUserById = async ({ id }: { id: string | undefined }) => {
  try {
    const user = await db.user.findUnique({
      where: { id }
    })

    return user
  } catch (err) {}
}
