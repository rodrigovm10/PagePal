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

  console.log(nextUrl.password)

  const isApiRoute = nextUrl.pathname.startsWith(apiAuthPrefix)
  const isAuthRoute = authRoutes.includes(nextUrl.pathname)
  const isLoginRoute = loginRoutes.includes(nextUrl.pathname)

  if (isApiRoute) return

  if (!isLoggedIn && isLoginRoute) {
    return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl))
  }

  if (isLoggedIn && isLoginRoute) {
    return Response.redirect(new URL(loginRoutes[0], nextUrl))
  }
  if (isAuthRoute) {
    if (isLoggedIn) {
      return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl))
    }
  }
})
