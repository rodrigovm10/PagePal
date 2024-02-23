import NextAuth from 'next-auth'
import authConfig from '@/server/auth/auth.config'
import {
  authRoutes,
  apiAuthPrefix,
  DEFAULT_LOGIN_REDIRECT,
  loginRoutes
} from '@/server/auth/routes'

const { auth } = NextAuth(authConfig)

export default auth(async req => {
  const { nextUrl } = req
  const isLoggedIn = !!req.auth

  const isApiRoute = nextUrl.pathname.startsWith(apiAuthPrefix)
  const isAuthRoute = authRoutes.some(route => nextUrl.pathname.startsWith(route))
  const isLoginRoute = loginRoutes.some(route => nextUrl.pathname.startsWith(route))

  if (isApiRoute) return

  if (!isLoggedIn && isLoginRoute) {
    return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl))
  }

  if (isAuthRoute) {
    if (isLoggedIn) {
      return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl))
    }
  }
})

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)']
}
