'use server'

import type * as z from 'zod'
import bcrypt from 'bcryptjs'

import { db } from '@/server/db/db'
import { RegisterSchema } from '@/client/schemas'

export const register = async ({ values }: { values: z.infer<typeof RegisterSchema> }) => {
  const validateFields = RegisterSchema.safeParse(values)

  if (!validateFields.success) return { error: 'Campos invalidos' }

  const { email, name, password } = validateFields.data

  const hashedPassword = await bcrypt.hash(password, 10)

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
