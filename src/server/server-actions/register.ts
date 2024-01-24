'use server'

import type * as z from 'zod'

import { db } from '@/server/db/db'
import { hashPassword } from '../libs/bcrypt'
import { RegisterSchema } from '@/client/schemas'

export const register = async ({ values }: { values: z.infer<typeof RegisterSchema> }) => {
  const validateFields = RegisterSchema.safeParse(values)

  if (!validateFields.success) return { error: 'Campos invalidos' }

  const { email, name, password } = validateFields.data

  const hashedPassword = await hashPassword({ password })

  const existingUser = await db.user.findUnique({
    where: { email }
  })

  if (existingUser !== null) return { error: 'El correo ya ha sido registrado' }

  await db.user.create({
    data: {
      name,
      email,
      password: hashedPassword
    }
  })

  return { success: 'Se envío un correo de verificación' }

  // const user = await db.user.create({})
}
