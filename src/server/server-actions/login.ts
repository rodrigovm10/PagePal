'use server'

import type * as z from 'zod'
import { AuthError } from 'next-auth'

import { signIn } from '@/server/auth/auth'
import { LoginSchema } from '@/client/schemas'
import { getUserByEmail } from '@/server/data/user'
import { comparePasswords } from '@/server/libs/bcrypt'
import { MESSAGES_ERROR_SUCCESS } from '../libs/constants'
import { generateVerificationToken } from '../libs/tokens'
import { sendVerificationEmail } from '@/server/libs/mail'
import { DEFAULT_LOGIN_REDIRECT } from '@/server/auth/routes'
interface loginProps {
  values: z.infer<typeof LoginSchema>
}

export const login = async ({ values }: loginProps) => {
  const validateFields = LoginSchema.safeParse(values)

  if (!validateFields.success) return { error: 'Campos invalidos' }

  const { email, password } = validateFields.data

  const existingUser = await getUserByEmail({ email })

  if (!existingUser || !existingUser.email || !existingUser.password) {
    return { error: MESSAGES_ERROR_SUCCESS.ACCOUNT_DOESNT_EXIST }
  }

  const passwordCompared = await comparePasswords({
    originalPassword: password,
    hashPassword: `${existingUser?.password}`
  })

  if (!passwordCompared) {
    return { error: MESSAGES_ERROR_SUCCESS.EMAIL_PASSWORD_WRONG }
  }

  if (!existingUser.emailVerified) {
    const verificationToken = await generateVerificationToken({ email: existingUser.email })
    await sendVerificationEmail({
      email: verificationToken.email,
      token: verificationToken.token
    })

    return { success: MESSAGES_ERROR_SUCCESS.EMAIL_VERIFICATION_SENT }
  }

  // if (!captcha) {
  //   return { error: 'Es necesario validar el captcha.' }
  // }

  try {
    await signIn('credentials', {
      email,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT
    })
  } catch (error) {
    console.log(error)
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
