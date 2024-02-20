/**
 * An array of routes that are accesible to the public
 * These routes do not require authentication
 * @type {string[]}
 */
export const publicRoutes = [
  '/',
  '/membership',
  '/about-us',
  '/privacy-pagepal',
  '/terms-pagepal',
  '/not-found'
]

export const loginRoutes = ['/write']

/**
 * An array of routes that are use for authentication
 * These routes will redirect logged in users to /
 * @type {string[]}
 */
export const authRoutes = ['/login', '/register', '/error']

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
