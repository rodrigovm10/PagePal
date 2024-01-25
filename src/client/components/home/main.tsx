import { CardArticle } from '@client/components/home/card-article'
import { Button } from '@client/components/ui/button'
import { Carousel, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel'
import { CarouselCategories } from '../carousel'

export function Main() {
  const arr = ['Deportes', 'Programación', 'Motivación', 'Matemáticas', 'Física']

  return (
    <main className='my-0 mx-auto pb-4 grid grid-cols-2 w-[80%]'>
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
      <aside className='sticky inline-block border bottom-0 border-rose-500'>
        <p className='text-2xl text-center font-medium my-10'>
          Algunos temas que pueden interesarte
        </p>
        <section className='grid grid-cols-3 gap-5'>
          <CarouselCategories arr={arr} />
        </section>
      </aside>
    </main>
  )
}
