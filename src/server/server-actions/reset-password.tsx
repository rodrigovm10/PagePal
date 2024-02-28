'use server'

import { z } from 'zod'

import { ResetSchema } from '@/client/schemas'
import { getUserByEmail } from '../data/user'
import { sendPasswordResetEmail } from '../libs/mail'
import { generatePasswordResetToken } from '../libs/tokens'
import { MESSAGES_ERROR_SUCCESS } from '../libs/constants'

export const resetPassword = async ({ values }: { values: z.infer<typeof ResetSchema> }) => {
  const validateFields = ResetSchema.safeParse(values)

  if (!validateFields.success) {
    return { error: MESSAGES_ERROR_SUCCESS.INVALID_EMAIL }
  }

  const { email } = validateFields?.data

  const existingUser = await getUserByEmail({ email })

  if (!existingUser) {
    return { error: MESSAGES_ERROR_SUCCESS.EMAIL_DOESNT_EXIST }
  }

  const passwordResetToken = await generatePasswordResetToken({ email })

  await sendPasswordResetEmail({ email: passwordResetToken.email, token: passwordResetToken.token })

  return { success: MESSAGES_ERROR_SUCCESS.EMAIL_SENT }
}
