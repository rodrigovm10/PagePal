import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa'

export function SectionLinks() {
  return (
    <section className='my-8 space-y-5 '>
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
    </section>
  )
}
