import { create } from 'zustand'

export type Breadcrumb = {
  href: string
  name: string
}

export type BreadcrumbsState = {
  breadcrumbs: Breadcrumb[]
}

export type BreadcrumbsActions = {
  addRoute: ({ breadcrumb }: { breadcrumb: Breadcrumb }) => void
  removeRoute: ({ href }: { href: string }) => void
}

export type BreadcrumbsStore = BreadcrumbsState & BreadcrumbsActions

export const useBreadcrumbsStore = create<BreadcrumbsStore>((set, get) => ({
  breadcrumbs: [],
  addRoute: ({ breadcrumb }: { breadcrumb: Breadcrumb }) => {
    const { breadcrumbs } = get()
    const hasBreadcrumb = breadcrumbs.findIndex(item => item.href === breadcrumb.href)

    if (hasBreadcrumb !== -1) return

    set(state => ({ breadcrumbs: [...state.breadcrumbs, breadcrumb] }))
  },
  removeRoute: ({ href }: { href: string }) => {
    console.log(href)
    set(state => ({
      breadcrumbs: state.breadcrumbs.filter(item => item.href !== href)
    }))

    const { breadcrumbs } = get()
    console.log(breadcrumbs)
  }
}))
