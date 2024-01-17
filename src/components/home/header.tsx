import { Button } from '@/components/ui/button'

export function Header() {
  return (
    <header className='bg-primary/40 h-[350px] '>
      <div
        className='
          flex flex-col
          text-center space-y-7 px-0
          lg:text-left
          lg:py-10 lg:px-40 
          '
      >
        <h1
          className='
          font-bold text-4xl pt-10
          lg:pt-0 lg:text-6xl 
          md:text-5xl'
        >
          Cuenta historias.
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
          Empezar a leer
        </Button>
      </div>
    </header>
  )
}
