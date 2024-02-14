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
  pages: {
    signIn: '/login',
    error: '/error'
  },
  events: {
    async linkAccount({ user }) {
      await db.user.update({
        where: { id: user.id },
        data: { emailVerified: new Date() }
      })
    }
  },
  callbacks: {
    async session({ token, session }) {
      if (token.sub !== undefined && session.user !== undefined) {
        session.user.id = token.sub
      }

      if (token.role !== undefined && session.user !== undefined) {
        session.user.role = token.role
      }

      return session
    },
    async jwt({ token }) {
      if (token === null) return token

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
