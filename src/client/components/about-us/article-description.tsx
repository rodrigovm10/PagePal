import Link from 'next/link'

export function ArticleDescription() {
  return (
    <article className='space-y-10'>
      <div className='md:columns-2 text-justify text-pretty leading-relaxed md:leading-normal'>
        <p>
          Creemos que lo que lees y escribes importa.{' '}
          <span className='bg-primary text-white dark:text-black p-1 opacity-80 hover:opacity-100 transition-all font-semibold '>
            Las palabras pueden dividirnos o empoderarnos, inspirarnos o desanimarnos.
          </span>{' '}
        </p>
        <p className='mt-4'>
          {' '}
          En un mundo donde las historias más sensacionales y superficiales a menudo triunfan,
          estamos construyendo un sistema que recompensa la profundidad, la sutileza y el tiempo
          bien invertido. Un espacio para conversaciones reflexivas más que comentarios rápidos, y
          sustancia sobre envases.
        </p>
        <p className='mt-4 md:mt-0'>
          En lugar de vender anuncios o tus datos, nos respalda una{' '}
          <Link
            href='/register'
            scroll
            prefetch
            className='underline text-primary font-black hover:animate-pulse'
          >
            creciente comunidad de miembros de PagePal
          </Link>{' '}
          que se alinean con nuestra misión. Si eres nuevo aquí, comienza a explorar. Sumérgete más
          en lo que te importa. Encuentra un post que te ayude a aprender algo nuevo, o reconsiderar
          algo familiar, y luego comparte tu propia historia.
        </p>
      </div>
      <blockquote className='text-2xl italic text-center font-black opacity-80 hover:opacity-100 transition-all'>
        En última instancia,{' '}
        <span className='before:block before:absolute before:-inset-1 before:bg-primary relative inline-block'>
          <span className='relative text-white dark:text-black'>
            nuestro objetivo es profundizar
          </span>
        </span>{' '}
        nuestra comprensión colectiva del mundo a través del poder de la escritura.
      </blockquote>
    </article>
  )
}
