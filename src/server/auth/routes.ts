/**
 * An array of routes that are accesible to the public
 * These routes do not require authentication
 * @type {string[]}
 */
export const publicRoutes = [
  '/',
  '/error',
  '/membership',
  '/about-us',
  '/not-found',
  '/terms-pagepal',
  '/privacy-pagepal',
  '/auth/new-verification'
]

export const loginRoutes = ['/new-story']

/**
 * An array of routes that are use for authentication
 * These routes will redirect logged in users to /
 * @type {string[]}
 */
export const authRoutes = [
  '/auth/login',
  '/auth/register',
  '/auth/reset-password',
  '/auth/new-password'
]

/**
 * The prefix for API authentication routes
 * Routes that start with this prefix are used for API authentication purposes
 * @type {string}
 */
export const apiAuthPrefix = '/api/auth'

/**
 * The default redirect path after loggin in
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = '/'
