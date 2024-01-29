import { CardArticle } from '@client/components/home/card-article'
import { CATEGORIES_RECOMMENDED } from '@/client/constants'
import Link from 'next/link'

export function Main() {
  return (
    <main
      className='w-[85vw] lg:w-[75vw] mx-auto pb-4 grid grid-cols-2 gap-x-5 relative h-full'
      id='start-read'
    >
      <section className='flex flex-col mx-10 lg:mx-0 gap-y-5 mt-10'>
        <CardArticle />
        <CardArticle />
        <CardArticle />
        <CardArticle />
        <CardArticle />
        <CardArticle />
        <CardArticle />
        <CardArticle />
        <CardArticle />
        <CardArticle />
        <CardArticle />
        <CardArticle />
      </section>
      <aside>
        <div className='sticky top-16'>
          <p className='text-2xl text-center font-medium my-10'>
            Algunos temas que pueden interesarte
          </p>
          <section className='grid grid-cols-3 gap-5'>
            {CATEGORIES_RECOMMENDED.map((category, i) => (
              <Link
                href='2'
                key={i}
                className='bg-primary p-2 text-white text-center'
              >
                {category}
              </Link>
            ))}
          </section>
        </div>
      </aside>
    </main>
  )
}
