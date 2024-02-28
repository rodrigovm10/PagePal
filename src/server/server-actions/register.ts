'use server'

import type * as z from 'zod'

import { db } from '@/server/db/db'
import { hashPassword } from '../libs/bcrypt'
import { RegisterSchema } from '@/client/schemas'
import { generateVerificationToken } from '@/server/libs/tokens'
import { sendVerificationEmail } from '@/server/libs/mail'

export const register = async ({ values }: { values: z.infer<typeof RegisterSchema> }) => {
  const validateFields = RegisterSchema.safeParse(values)

  if (!validateFields.success) return { error: 'Campos invalidos' }

  const { email, name, password } = validateFields.data

  const hashedPassword = await hashPassword({ password })

  const existingUser = await db.user.findUnique({
    where: { email }
  })

  if (existingUser) return { error: 'El correo ya ha sido registrado' }

  await db.user.create({
    data: {
      name,
      email,
      password: hashedPassword
    }
  })

  const verificationToken = await generateVerificationToken({ email })
  await sendVerificationEmail({ email: verificationToken.email, token: verificationToken.token })

  return { success: 'Se envío un correo de verificación' }

  // const user = await db.user.create({})
}
