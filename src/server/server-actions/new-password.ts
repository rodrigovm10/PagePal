'use server'

import type { z } from 'zod'

import { hashPassword } from '../libs/bcrypt'
import { getUserByEmail } from '../data/user'
import { NewPasswordSchema } from '@/client/schemas'
import { MESSAGES_ERROR_SUCCESS } from '../libs/constants'
import { getPasswordResetTokenByToken } from '../data/password-reset-token'
import { db } from '../db/db'

export const newPassword = async ({
  values,
  token
}: {
  values: z.infer<typeof NewPasswordSchema>
  token: string | null
}) => {
  if (!token) {
    return { error: MESSAGES_ERROR_SUCCESS.TOKEN_DOESNT_EXIST }
  }

  const validatedFields = NewPasswordSchema.safeParse(values)

  if (!validatedFields.success) {
    return { error: MESSAGES_ERROR_SUCCESS.INVALID_FIELDS }
  }

  const { password } = validatedFields.data

  const existingToken = await getPasswordResetTokenByToken({ token })

  if (!existingToken) {
    return { error: MESSAGES_ERROR_SUCCESS.INVALID_TOKEN }
  }

  const hasExpired = new Date(existingToken.expires) < new Date()

  if (hasExpired) {
    return { error: MESSAGES_ERROR_SUCCESS.TOKEN_HAS_EXPIRED }
  }

  const existingUser = await getUserByEmail({ email: existingToken.email })

  if (!existingUser) {
    return { error: MESSAGES_ERROR_SUCCESS.EMAIL_DOESNT_EXIST }
  }

  const hashedPassword = await hashPassword({ password })

  await db.user.update({
    where: { id: existingUser.id },
    data: {
      password: hashedPassword
    }
  })

  await db.passwordResetToken.delete({
    where: { id: existingToken.id }
  })

  return { success: MESSAGES_ERROR_SUCCESS.PASSWORD_UPDATED }
}
