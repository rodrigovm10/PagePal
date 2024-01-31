'use client'

import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa'
import { motion } from 'framer-motion'

export function SectionLinks() {
  const fadeInAnimationVariants = {
    initial: { opacity: 0, x: -200 },
    animate: (index: number) => {
      return {
        opacity: 1,
        x: 0,
        transition: {
          delay: 0.1 * index,
          ease: 'backInOut'
        }
      }
    }
  }

  return (
    <section className='my-8 space-y-5 '>
      <motion.div
        variants={fadeInAnimationVariants}
        initial='initial'
        whileInView='animate'
        whileHover={{ translateY: 10 }}
        whileTap={{ scale: 0.9 }}
        viewport={{
          once: true
        }}
        custom={1}
      >
        <Link
          href='/'
          className='p-2 text-2xl font-semibold underline bg-primary text-white dark:text-black hover:text-black hover:bg-white dark:hover:text-white dark:hover:bg-black transition-all flex '
        >
          Empezar a leer
          <FaArrowRight className='my-auto ml-auto ' />
        </Link>
      </motion.div>
      <motion.div
        variants={fadeInAnimationVariants}
        initial='initial'
        whileInView='animate'
        whileHover={{ translateY: 10 }}
        whileTap={{ scale: 0.9 }}
        viewport={{
          once: true
        }}
        custom={2}
      >
        <Link
          href='/login'
          className='p-2 text-2xl font-semibold underline bg-primary text-white dark:text-black hover:text-black hover:bg-white dark:hover:text-white dark:hover:bg-black transition-all flex'
        >
          Empezar a escribir
          <FaArrowRight className='my-auto ml-auto' />
        </Link>
      </motion.div>
      <motion.div
        variants={fadeInAnimationVariants}
        initial='initial'
        whileInView='animate'
        whileHover={{ translateY: 10 }}
        whileTap={{ scale: 0.9 }}
        viewport={{
          once: true
        }}
        custom={3}
      >
        <Link
          href='/membership'
          className='p-2 text-2xl font-semibold underline bg-primary text-white dark:text-black hover:text-black hover:bg-white dark:hover:text-white dark:hover:bg-black transition-all flex'
        >
          Conviertete en miembro
          <FaArrowRight className='my-auto ml-auto' />
        </Link>
      </motion.div>
    </section>
  )
}