'use client'

import { usePathname, useSearchParams, useRouter } from 'next/navigation'
import { useDebouncedCallback } from 'use-debounce'
export function useSearch() {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const router = useRouter()

  const searchUrl = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams)
    if (term.length > 0) {
      params.set('search', term)
    } else {
      params.delete('search')
    }
    router.replace(`${pathname}?${params.toString()}`)
  }, 100)

  return { searchUrl, searchParams, pathname, router }
}
