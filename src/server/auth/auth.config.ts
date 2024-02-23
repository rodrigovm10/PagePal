import type { NextAuthConfig } from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import Github from 'next-auth/providers/github'
import Google from 'next-auth/providers/google'

import { comparePasswords } from '../libs/bcrypt'
import { getUserByEmail } from '@server/data/user'
import { LoginSchema } from '@client/schemas/index'
import type { User } from '@/types/types'

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
      async authorize(credentials, request): Promise<User | null> {
        // Añade `request` como segundo parámetro
        const validateFields = LoginSchema.safeParse(credentials)

        if (validateFields.success) {
          const { email, password } = validateFields.data

          const user = await getUserByEmail({ email })

          if (user?.password !== null) return null // Devuelve null si no hay contraseña

          const passwordMatch = await comparePasswords({
            originalPassword: password,
            hashPassword: user?.password
          })

          if (passwordMatch) return user // Devuelve el usuario si la contraseña coincide
        }

        return null // Devuelve null en caso de error de validación
      }
    })
  ]
} satisfies NextAuthConfig
