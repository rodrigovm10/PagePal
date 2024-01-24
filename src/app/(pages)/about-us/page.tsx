import Image from 'next/image'

import about from '@/assets/about.webp'

export default function AboutUsPage() {
  return (
    <main className='w-[80%] mx-auto my-0'>
      <section className='grid grid-cols-2 mt-16'>
        <div className='space-y-2'>
          <p className='text-primary/60 uppercase opacity-80 font-semibold'>Sobre nosotros</p>
          <h1 className='font-bold text-4xl'>
            Todos tienen una{' '}
            <span className='underline decoration-wavy text-primary'>historia</span> que contar.
          </h1>
          <p>
            PagePal es un hogar para relatos e ideas humanas. Aquí, cualquiera puede compartir
            perspectivas perspicaces, conocimientos útiles y sabiduría de vida con el mundo, sin
            necesidad de construir una lista de correo o seguidores primero. Internet es ruidoso y
            caótico; PagePal es tranquilo pero lleno de perspicacia. Es simple, hermoso,
            colaborativo y te ayuda a encontrar la audiencia adecuada para lo que quieras expresar.
          </p>
        </div>

        <Image
          className='max-w-full size-[450px] justify-self-end drop-shadow-xl'
          src={about}
          width={500}
          height={500}
          alt='about image'
        />
      </section>
    </main>
  )
}
