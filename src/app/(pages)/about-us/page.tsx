import Link from 'next/link'
import Image from 'next/image'
import { FaArrowRight } from 'react-icons/fa'

import about from '@/assets/about.webp'
import { TextWavy } from '@/client/components/text-wavy'

export default function AboutUsPage() {
  return (
    <main className='w-[70%] mx-auto my-0'>
      <section className='grid grid-cols-2 mt-16'>
        <div className='space-y-2'>
          <p className='text-primary/60 uppercase opacity-80 font-black animate-pulse '>
            Sobre nosotros
          </p>
          <h1 className='font-bold text-4xl'>
            Todos tienen una{' '}
            <TextWavy
              text='historia'
              isWavy={true}
            />{' '}
            que contar.
          </h1>
          <p className='text-pretty text-justify'>
            PagePal es un hogar para relatos e ideas humanas. Aquí, cualquiera puede compartir
            perspectivas perspicaces, conocimientos útiles y sabiduría de vida con el mundo, sin
            necesidad de construir una lista de correo o seguidores primero. Internet es ruidoso y
            caótico; PagePal es tranquilo pero lleno de perspicacia. Es simple, hermoso,
            colaborativo y te ayuda a encontrar la audiencia adecuada para lo que quieras expresar.
          </p>
        </div>

        <Image
          className='max-w-full size-[450px] justify-self-end drop-shadow-xl hover:animate-wiggle hover:animate-infinite hover:animate-ease-in-out'
          src={about}
          width={500}
          height={500}
          alt='about image'
        />
      </section>
      <section className='space-y-10'>
        <div className='columns-2 text-justify'>
          <p>
            Creemos que lo que lees y escribes importa.{' '}
            <span className='bg-primary text-white dark:text-black p-1 opacity-80 hover:opacity-100 transition-all font-semibold '>
              Las palabras pueden dividirnos o empoderarnos, inspirarnos o desanimarnos.
            </span>{' '}
            En un mundo donde las historias más sensacionales y superficiales a menudo triunfan,
            estamos construyendo un sistema que recompensa la profundidad, la sutileza y el tiempo
            bien invertido. Un espacio para conversaciones reflexivas más que comentarios rápidos, y
            sustancia sobre envases.
          </p>

          <p>
            En lugar de vender anuncios o tus datos, nos respalda una{' '}
            <Link
              href='/register'
              className='underline text-primary font-black hover:animate-pulse'
            >
              creciente comunidad de miembros de PagePal
            </Link>{' '}
            que se alinean con nuestra misión. Si eres nuevo aquí, comienza a explorar. Sumérgete
            más en lo que te importa. Encuentra un post que te ayude a aprender algo nuevo, o
            reconsiderar algo familiar, y luego comparte tu propia historia.
          </p>
        </div>
        <blockquote className='text-2xl italic text-center font-black opacity-80 hover:opacity-100 transition-all'>
          En última instancia,{' '}
          <span className='before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-primary relative inline-block'>
            <span className='relative text-white dark:text-black'>
              nuestro objetivo es profundizar
            </span>
          </span>{' '}
          nuestra comprensión colectiva del mundo a través del poder de la escritura.
        </blockquote>
      </section>
      <footer className='my-8 space-y-5 '>
        <Link
          href='/'
          className='p-2 text-2xl font-semibold underline bg-primary text-white dark:text-black hover:text-black hover:bg-white dark:hover:text-white dark:hover:bg-black transition-all flex '
        >
          Empezar a leer
          <FaArrowRight className='my-auto ml-auto ' />
        </Link>
        <Link
          href='/login'
          className='p-2 text-2xl font-semibold underline bg-primary text-white dark:text-black hover:text-black hover:bg-white dark:hover:text-white dark:hover:bg-black transition-all flex'
        >
          Empezar a escribir
          <FaArrowRight className='my-auto ml-auto' />
        </Link>
        <Link
          href='/membership'
          className='p-2 text-2xl font-semibold underline bg-primary text-white dark:text-black hover:text-black hover:bg-white dark:hover:text-white dark:hover:bg-black transition-all flex'
        >
          Conviertete en miembro
          <FaArrowRight className='my-auto ml-auto' />
        </Link>
      </footer>
    </main>
  )
}
