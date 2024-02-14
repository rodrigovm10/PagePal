import { db } from '@/server/db/db'
import type { User } from '@/types/types'

export const getUserByEmail = async ({
  email
}: {
  email: string | undefined
}): Promise<User | undefined> => {
  try {
    const user = await db.user.findUnique({
      where: { email }
    })

    if (user === null) return

    return user
  } catch (err) {}
}

export const getUserById = async ({
  id
}: {
  id: string | undefined
}): Promise<User | undefined> => {
  try {
    const user = await db.user.findUnique({
      where: { id }
    })

    if (user === null) return

    return user
  } catch (err) {}
}
