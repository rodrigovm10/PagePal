'use server'

import { db } from '@server/db/db'
import { getUserByEmail } from '../data/user'
import { getVerificationTokenByToken } from '../data/verification-token'

export const newVerification = async ({ token }: { token: string }) => {
  const existingToken = await getVerificationTokenByToken({ token })

  if (!existingToken) {
    return { error: 'El token no existe' }
  }

  const hasExpired = new Date(existingToken.expires) < new Date()

  if (hasExpired) {
    return { error: 'El token ha expirado' }
  }

  const existingUser = await getUserByEmail({ email: existingToken.email })

  if (!existingUser) {
    return { error: 'El email no existe' }
  }

  await db.user.update({
    where: { id: existingUser.id },
    data: {
      emailVerified: new Date(),
      email: existingToken.email
    }
  })

  await db.verificationToken.delete({
    where: { id: existingToken.id }
  })

  return { success: 'Email verificado' }
}
