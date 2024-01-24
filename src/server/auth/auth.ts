import NextAuth from 'next-auth'
import { PrismaAdapter } from '@auth/prisma-adapter'

import { db } from '../db/db'
import { getUserById } from '../data/user'
import authConfig from '@/server/auth/auth.config'

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut
} = NextAuth({
  callbacks: {
    async signIn({ user }) {
      const existingUser = await getUserById({ id: user.id })

      if (existingUser !== undefined) {
        if (existingUser !== undefined || existingUser.emailVerified !== null) {
          return false
        }
      }

      return true
    },
    async session({ session, token }) {
      if (session.user === null) return

      if (token.sub !== undefined && session.user !== undefined) {
        session.user.id = token.sub
      }

      if (token.role !== undefined && session.user !== undefined) {
        session.user.role = token.role
      }

      return session
    },
    async jwt({ token }) {
      if (token === null) {
        return token
      }

      const user = await getUserById({ id: token.sub })

      if (user === null) return token

      token.role = user?.role

      return token
    }
  },
  adapter: PrismaAdapter(db),
  session: { strategy: 'jwt' },
  ...authConfig
})
