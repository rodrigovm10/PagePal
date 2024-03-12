'use client'

import { usePathname } from 'next/navigation'
import { useSearch } from '@client/hooks/useSearch'

import { Input } from '@client/components/ui/input'

export function SearchArticles() {
  const pathname = usePathname()

  if (pathname === '/new-story') return

  const { searchParams, searchUrl } = useSearch()

  const handleSearch = (term: string) => {
    searchUrl(term)
  }

  return (
    <Input
      type='text'
      name='search'
      id='search'
      placeholder='React, NodeJS...'
      onChange={e => {
        handleSearch(e.target.value)
      }}
      defaultValue={searchParams.get('search')?.toString()}
    />
  )
}
