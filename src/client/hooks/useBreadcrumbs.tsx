'use client'

import { useEffect } from 'react'

import { Breadcrumb, useBreadcrumbsStore } from '@/client/stores/breadcrumbsStore'

export function useBreadcrumbs({ breadcrumb }: { breadcrumb: Breadcrumb }) {
  const { addRoute } = useBreadcrumbsStore(state => state)

  useEffect(() => {
    addRoute({ breadcrumb })
  }, [])
}
