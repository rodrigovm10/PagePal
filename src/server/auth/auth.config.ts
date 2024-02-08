import type { NextAuthConfig } from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import Github from 'next-auth/providers/github'
import Google from 'next-auth/providers/google'

import { comparePasswords } from '../libs/bcrypt'
import { getUserByEmail } from '@server/data/user'
import { LoginSchema } from '@client/schemas/index'

export default {
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),
    Github({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET
    }),
    Credentials({
      async authorize(credentials) {
        const validateFields = LoginSchema.safeParse(credentials)

        if (validateFields.success) {
          const { email, password } = validateFields.data

          const user = await getUserByEmail({ email })

          if (user === null) return

          if (user !== null || user.password !== null) return

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
