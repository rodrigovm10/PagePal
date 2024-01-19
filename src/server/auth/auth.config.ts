import bcrypt from 'bcryptjs'
import type { NextAuthConfig } from 'next-auth'
import Credentials from 'next-auth/providers/credentials'

import { LoginSchema } from '@client/schemas/index'
import { getUserByEmail } from '@server/data/user'

export default {
  providers: [
    Credentials({
      async authorize(credentials) {
        const validateFields = LoginSchema.safeParse(credentials)

        if (validateFields.success) {
          const { email, password } = validateFields.data

          const user = await getUserByEmail({ email })

          if (!user || !user.password) return

          const passwordMatch = await bcrypt.compare(password, user.password)

          if (passwordMatch) return user
        }

        return
      }
    })
  ]
} satisfies NextAuthConfig
