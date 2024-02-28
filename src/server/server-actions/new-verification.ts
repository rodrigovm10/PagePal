'use server'

import { db } from '@server/db/db'
import { getUserByEmail } from '../data/user'
import { getVerificationTokenByToken } from '../data/verification-token'
import { MESSAGES_ERROR_SUCCESS } from '../libs/constants'

export const newVerification = async ({ token }: { token: string }) => {
  const existingToken = await getVerificationTokenByToken({ token })

  if (!existingToken) {
    return { error: MESSAGES_ERROR_SUCCESS.TOKEN_DOESNT_EXIST }
  }

  const hasExpired = new Date(existingToken.expires) < new Date()

  if (hasExpired) {
    return { error: MESSAGES_ERROR_SUCCESS.TOKEN_HAS_EXPIRED }
  }

  const existingUser = await getUserByEmail({ email: existingToken.email })

  if (!existingUser) {
    return { error: MESSAGES_ERROR_SUCCESS.EMAIL_DOESNT_EXIST }
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

  return { success: MESSAGES_ERROR_SUCCESS.EMAIL_VERIFIED }
}
