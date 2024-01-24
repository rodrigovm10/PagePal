import type { NextAuthConfig } from 'next-auth'
import Credentials from 'next-auth/providers/credentials'

import { comparePasswords } from '../libs/bcrypt'
import { getUserByEmail } from '@server/data/user'
import { LoginSchema } from '@client/schemas/index'

export default {
  providers: [
    Credentials({
      async authorize(credentials) {
        const validateFields = LoginSchema.safeParse(credentials)

        if (validateFields.success) {
          const { email, password } = validateFields.data

          const user = await getUserByEmail({ email })

          if (user === null) {
            return
          }

          if (user !== null || user.password !== null) {
            return
          }

          const passwordMatch = await comparePasswords({
            originalPassword: password,
            hashPassword: user.password
          })

          if (passwordMatch) return user
        }
      }
    })
  ]
} satisfies NextAuthConfig
