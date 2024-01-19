import { CardArticle } from '@client/components/home/card-article'
import { CarouselCategories } from '@client/components/carousel'

export function Main() {
  const arr = ['Deportes', 'Programación', 'Motivación', 'Matemáticas', 'Física']

  return (
    <main className='w-full my-0 mx-auto mt-10 overflow-x-hidden'>
      <header>
        <p className='text-2xl text-center font-medium mb-10'>
          Algunos temas que pueden interesarte
        </p>
        <section className='flex justify-center mt-2 flex-nowrap'>
          <CarouselCategories arr={arr} />
        </section>
      </header>
      <main className='flex flex-col items-center justify-center mx-10 lg:mx-0 gap-y-5 mt-10'>
        <CardArticle />
        <CardArticle />
        <CardArticle />
        <CardArticle />
      </main>
    </main>
  )
}
