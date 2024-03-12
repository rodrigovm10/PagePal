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

export const createArticle = async ({ a }: { a: any }) => {
  try {
    const response = await axios.post(`${domain}api/articles/`, a)
  } catch (error) {
    console.log(true)
  }
}
