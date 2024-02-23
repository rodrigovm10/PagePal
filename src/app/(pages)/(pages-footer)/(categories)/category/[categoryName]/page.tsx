import type { Category } from '@/types/types'
import { getAllCategories, getCategory } from '@/server/data/category'
import { Separator } from '@/client/components/ui/separator'
import { FollowButton } from '@/client/components/category/follow-button'
import { auth } from '@/server/auth/auth'
import { getUserByEmail } from '@/server/data/user'

export default async function IdCategoryPage({ params }: { params: { categoryName: string } }) {
  const session = await auth()
  const user = await getUserByEmail({ email: session?.user.email })
  const category = await getCategory({ name: params.categoryName })

  return (
    <main className='my-20 container space-y-4'>
      <header className='text-center space-y-5 mb-4'>
        <h1 className='text-5xl font-bold'>{params.categoryName}</h1>
        <FollowButton
          user={user}
          category={category}
        />
      </header>
      <Separator />
      <section>
        <h2 className='text-3xl font-bold'>Historias recomendadas</h2>
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
