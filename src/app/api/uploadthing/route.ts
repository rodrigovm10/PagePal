import { createNextRouteHandler } from 'uploadthing/next'

import { ourFileRouter }

// Export routes for Next App Router
export const { GET, POST } = createNextRouteHandler({
  router: ourFileRouter
})
