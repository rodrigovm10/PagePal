import Image from 'next/image'
import { auth } from '@/server/auth/auth'
import type { Article } from '@/types/types'
import { getUserByEmail } from '@/server/data/user'
import { getCategory } from '@/server/data/category'
import { getArticleByCategoryName } from '@/server/data/articles'

import favicon from '@/app/favicon.ico'
import { Separator } from '@/client/components/ui/separator'
import { FollowButton } from '@/client/components/category/follow-button'
import { CardContent, CardDescription, CardFooter, CardTitle } from '@client/components/ui/card'
import { CardArticle } from '@/client/components/category-article-card/card-article'

export default async function IdCategoryPage({ params }: { params: { categoryName: string } }) {
  const name = params.categoryName

  const session = await auth()
  const user = await getUserByEmail({ email: session?.user.email })
  const category = await getCategory({ name })
  const articles: Article[] = await getArticleByCategoryName({ name })

  return (
    <main className='my-20 container space-y-4'>
      <header className='text-center space-y-5 mb-4'>
        <h1 className='text-5xl font-bold'>{params.categoryName}</h1>
        <FollowButton
          user={user}
          category={category}
          totalStories={articles.length}
        />
      </header>
      <Separator />
      <section>
        <h2 className='text-3xl font-bold'>Historias recomendadas</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
          {articles.map(article => (
            <CardArticle article={article} />
          ))}
        </div>
      </section>
    </main>
  )
}

// export async function generateStaticParams() {
//   const categories = await getAllCategories()

//   return categories.map((c: Category) => ({
//     name: String(c.name)
//   }))
// }
