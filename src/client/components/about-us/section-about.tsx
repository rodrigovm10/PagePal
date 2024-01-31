'use client'

import Image from 'next/image'

import about from '@/assets/about.webp'
import { TextWavy } from '@/client/components/text-wavy'

export function SectionAbout() {
  return (
    <section className='grid grid-cols-1 md:grid-cols-2 mt-16 mb-10 lg:mb-0'>
      <div className='space-y-2'>
        <p className='text-pretty text-primary/60 uppercase text-center md:text-left opacity-80 font-black animate-pulse '>
          Sobre nosotros
        </p>
        <h1 className='font-bold text-4xl text-center md:text-left '>
          Todos tienen una{' '}
          <TextWavy
            text='historia'
            isWavy={true}
          />{' '}
          que contar.
        </h1>
        <p className='text-pretty text-justify leading-relaxed md:leading-normal'>
          PagePal es un hogar para relatos e ideas humanas. Aquí, cualquiera puede compartir
          perspectivas perspicaces, conocimientos útiles y sabiduría de vida con el mundo, sin
          necesidad de construir una lista de correo o seguidores primero. Internet es ruidoso y
          caótico; PagePal es tranquilo pero lleno de perspicacia. Es simple, hermoso, colaborativo
          y te ayuda a encontrar la audiencia adecuada para lo que quieras expresar.
        </p>
      </div>

      <Image
        className='max-w-full size-[350px] self-end justify-self-center lg:size-[450px] lg:justify-self-end drop-shadow-xl hover:animate-wiggle hover:animate-infinite hover:animate-ease-in-out'
        src={about}
        width={500}
        height={500}
        alt='about image'
      />
    </section>
  )
}
