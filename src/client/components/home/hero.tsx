import Image from 'next/image'

import { Button } from '@client/components/ui/button'
import hero from '@/assets/hero.webp'
import { TextWavy } from '../text-wavy'
import Link from 'next/link'

export function Hero() {
  return (
    <section
      className='h-[350px] flex justify-between bg-gradient-to-b from-white via-white to-primary/40
 dark:bg-gradient-to-b dark:from-black dark:to-[#111] border-b'
    >
      <div
        className='
          flex flex-col
          text-center space-y-7 px-0
          lg:text-left
          lg:py-10 lg:px-36
          '
      >
        <h1
          className='
          font-bold text-4xl pt-10
          lg:pt-0 lg:text-6xl
          md:text-5xl'
        >
          Cuenta{' '}
          <TextWavy
            text='historias.'
            isWavy={false}
          />
        </h1>
        <h2
          className='
          font-medium text-xl inline-block px-12
          lg:w-[40%] lg:px-0
          md:w-full md:px-32'
        >
          Descubra historias, pensamientos y experiencia de escritores sobre cualquier tema.
        </h2>
        <Button
          size='lg'
          className='rounded-full max-w-full w-fit self-center lg:self-auto text-lg '
        >
          <Link href='#start-read'>Empezar a leer</Link>
        </Button>
      </div>
      <div>
        <Image
          width={500}
          height={500}
          src={hero}
          alt='hero'
        />
      </div>
    </section>
  )
}
