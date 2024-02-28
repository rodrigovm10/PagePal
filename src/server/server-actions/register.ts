'use server'

import type * as z from 'zod'

import { db } from '@/server/db/db'
import { hashPassword } from '../libs/bcrypt'
import { RegisterSchema } from '@/client/schemas'
import { MESSAGES_ERROR_SUCCESS } from '../libs/constants'
import { sendVerificationEmail } from '@/server/libs/mail'
import { generateVerificationToken } from '@/server/libs/tokens'
export const register = async ({ values }: { values: z.infer<typeof RegisterSchema> }) => {
  const validateFields = RegisterSchema.safeParse(values)

  if (!validateFields.success) return { error: MESSAGES_ERROR_SUCCESS.INVALID_FIELDS }

  const { email, name, password } = validateFields.data

  const hashedPassword = await hashPassword({ password })

  const existingUser = await db.user.findUnique({
    where: { email }
  })

  if (existingUser) return { error: MESSAGES_ERROR_SUCCESS.EMAIL_REGISTERED }

  await db.user.create({
    data: {
      name,
      email,
      password: hashedPassword
    }
  })

  const verificationToken = await generateVerificationToken({ email })
  await sendVerificationEmail({ email: verificationToken.email, token: verificationToken.token })

  return { success: MESSAGES_ERROR_SUCCESS.EMAIL_VERIFICATION_SENT }
}
