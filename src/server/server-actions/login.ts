'use server'

import type * as z from 'zod'
import { AuthError } from 'next-auth'

import { signIn } from '@/server/auth/auth'

import { LoginSchema } from '@/client/schemas'
import { getUserByEmail } from '@/server/data/user'
import { DEFAULT_LOGIN_REDIRECT } from '@/server/auth/routes'

export const login = async ({ values }: { values: z.infer<typeof LoginSchema> }) => {
  const validateFields = LoginSchema.safeParse(values)

  if (!validateFields.success) return { error: 'Campos invalidos' }

  const { email, password } = validateFields.data

  const existingUser = await getUserByEmail({ email })

  if (!existingUser || !existingUser?.email || !existingUser?.password) {
    return { error: 'El correo ingresado o la contraseña es incorrecto' }
  }

  try {
    await signIn('credentials', {
      email,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT
    })
  } catch (error) {
    if (error instanceof AuthError) {
      if (error.type === 'CredentialsSignin') {
        return { error: 'Invalid credentials!' }
      }
      return { error: 'Something went wrong' }
    }

    throw error
  }
  return { success: 'Email correcto' }
}
