import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import { cn } from '@/client/libs/utils'
import { Courier_Prime } from 'next/font/google'

import error from '@public/assets/404.webp'

const font = Courier_Prime({ subsets: ['latin'], weight: ['400', '700'] })

export const metadata: Metadata = {
  title: 'No encontrada - PagePal'
}

export default function NotFound() {
  return (
    <main className='min-h-screen flex flex-col md:flex-row justify-center items-center mt-20 md:mt-0 container'>
      <section className='order-2 md:order-1'>
        <Image
          src={error}
          width={404}
          height={404}
          className='aspect-square animate-jump-in animate-delay-300 hover:animate-jump-out hover:animate-ease-in-out transition-all'
          alt='Imagen 404 error'
        />
      </section>
      <section className='order-1 md:order-2'>
        <h2 className='uppercase text-[12px]'>Página no encontrada</h2>
        <p
          className={cn(
            font.className,
            'text-9xl text-primary opacity-80 animate-pulse animate-infinite'
          )}
        >
          404
        </p>
        <div className='max-w-sm mb-4'>
          <p className='min-w-fit text-pretty opacity-80'>
            En PagePal, puedes encontrar (casi) cualquier cosa, incluso una página que no existe
            aparentemente. Tal vez estas historias sobre encontrar lo que no sabías que estabas
            buscando te lleven a algún lugar nuevo.
          </p>
        </div>

        <Link
          href='/'
          className='underline'
        >
          Inicio.
        </Link>
      </section>
    </main>
  )
}
