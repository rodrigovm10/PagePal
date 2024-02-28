import * as z from 'zod'

import { SCHEMAS_MESSAGES } from '../constants'

export const NewPasswordSchema = z.object({
  password: z.string().min(8, {
    message: SCHEMAS_MESSAGES.PASSWORD_MIN
  })
})

export const ResetSchema = z.object({
  email: z.string().email({
    message: SCHEMAS_MESSAGES.EMAIL_REQUIRED
  })
})

export const LoginSchema = z.object({
  email: z.string().email({
    message: SCHEMAS_MESSAGES.EMAIL_REQUIRED
  }),
  password: z.string().min(1, {
    message: SCHEMAS_MESSAGES.PASSWORD_REQUIRED
  })
})

export const RegisterSchema = z.object({
  email: z.string().email({
    message: SCHEMAS_MESSAGES.EMAIL_REQUIRED
  }),
  password: z.string().min(8, {
    message: SCHEMAS_MESSAGES.EMAIL_REQUIRED
  }),
  name: z.string().min(1, {
    message: SCHEMAS_MESSAGES.USERNAME_REQUIRED
  }),
  image: z.optional(z.string())
})
