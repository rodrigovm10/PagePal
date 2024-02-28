import { db } from '@server/db/db'

export const getPasswordResetTokenByToken = async ({ token }: { token: string }) => {
  try {
    const passwordResetToken = await db.passwordResetToken.findUnique({
      where: { token }
    })

    return passwordResetToken
  } catch (e) {
    return null
  }
}

export const getPasswordResetTokenByEmail = async ({ email }: { email: string }) => {
  try {
    const passwordResetToken = await db.passwordResetToken.findFirst({
      where: { email }
    })

    return passwordResetToken
  } catch (e) {
    return null
  }
}
