import type { Article } from '@/types/types'
import axios from 'axios'

const domain = process.env.NEXT_PUBLIC_APP_URL

export const getArticles = async ({
  search
}: {
  search: string | undefined
}): Promise<Article[] | undefined> => {
  try {
    const response = await axios.get(`${domain}api/articles/?search=${search}`)
    const articles = response.data

    return articles
  } catch (error) {
    console.log(error)
  }
}

export const getArticleByCategoryName = async ({ name }: { name: string }) => {
  try {
    const response = await axios.get(`${domain}api/articles/${name}`)
    const articles = response.data

    return articles
  } catch (error) {
    console.log(error)
  }
}

interface createArticleProps {
  title: string
  banner?: string
  content: string
  description: string
  categories: string[]
  userId: string | undefined
}

export const createArticle = async ({
  title,
  banner,
  description,
  content,
  categories,
  userId
}: createArticleProps) => {
  try {
    const response = await axios.post(`${domain}api/articles`, {
      title,
      banner,
      description,
      categories,
      userId,
      content
    })
    console.log(response.data)
  } catch (error) {
    console.log(true)
  }
}
