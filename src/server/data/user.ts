import { db } from '@/server/db/db'
import type { User } from '@/types/types'

export const getUserByEmail = async ({ email }: { email: string | undefined | null }) => {
  try {
    if (email === null) return
    const user = await db.user.findUnique({
      where: { email },
      include: {
        categories: true
      }
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
      where: { id },
      include: {
        categories: true
      }
    })
    if (user === null) return

    return user
  } catch (err) {}
}
