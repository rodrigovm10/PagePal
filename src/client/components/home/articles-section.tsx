import type { Article } from '@/types/types'
import { Separator } from '../ui/separator'
import { CardArticle } from './card-article'
import { NoArticles } from './no-articles'
import { getArticles } from '@/server/data/articles'

export async function ArticlesSections({ search }: { search: string | undefined }) {
  const articles = await getArticles({ search })

  return (
    <section className='flex flex-col lg:mx-0 gap-y-5 -mt-60 md:-mt-96 lg:mt-10 lg:col-span-2 order-2 lg:order-1'>
      {articles?.length === 0 && <NoArticles />}
      {articles?.map((article: Article) => (
        <>
          <CardArticle
            key={article?.id}
            article={article}
          />
          <Separator />
        </>
      ))}
    </section>
  )
}
