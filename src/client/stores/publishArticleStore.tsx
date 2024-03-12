import { create } from 'zustand'

interface CreateArticleProps {
  content?: string
  banner?: any
}

export interface ArticleStore {
  articleContent: string
  banner: any
  categories: string[]
  createArticle: ({ content, banner }: CreateArticleProps) => void
  addCategory: ({ category }: { category: string }) => void
  removeCategory: ({ category }: { category: string }) => void
}

export const useArticleStore = create<ArticleStore>((set, get) => ({
  articleContent: '',
  banner: '',
  categories: [],
  createArticle: ({ content, banner }: CreateArticleProps) => {
    if (content) {
      set({
        articleContent: content
      })
    }

    if (banner) {
      set({
        banner
      })
    }
  },
  addCategory: ({ category }: { category: string }) => {
    const { categories: categoriesState } = get()

    if (category) {
      const categoriesToUpdate = [...categoriesState, category]
      const isCategoryExisting = categoriesState.findIndex((item: string) => item === category)
      if (isCategoryExisting === -1) {
        set({
          categories: categoriesToUpdate
        })
      }
    }
  },
  removeCategory: ({ category }: { category: string }) => {
    const { categories: categoriesState } = get()
    const newCategories = categoriesState.filter(item => item !== category)

    set({
      categories: newCategories
    })
  }
}))
