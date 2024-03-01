import Image from 'next/image'
import type { Article } from '@/types/types'

import { Badge } from '../ui/badge'
import favicon from '@/app/favicon.ico'
import { IconStar } from '@tabler/icons-react'
import { CardContent, CardDescription, CardFooter, CardTitle } from '@client/components/ui/card'

export function CardArticle({ article }: { article: Article }) {
  return (
    <article className='cursor-pointer'>
      <article className='flex justify-between'>
        <section>
          <div className='flex gap-x-2'>
            <Image
              src={favicon}
              className='rounded-full size-4 my-auto'
              alt='favicon'
              width='0'
              height='0'
            />
            <p className='text-sm flex'>
              The Nib{'  '}
              {article.isPremium && (
                <span className='opacity-80 flex items-center gap-x-1'>
                  {' '}
                  ·
                  <IconStar className='size-3 text-yellow-300 ' />
                  <span>Solo miembros</span>·
                  <span className='text-[12px] opacity-60'>{article.publishDate}</span>
                </span>
              )}
            </p>
          </div>
          <CardTitle className='text-lg md:text-2xl'>{article.title}</CardTitle>
          <CardDescription className='hidden md:block'>{article.content}</CardDescription>
        </section>
        <CardContent className='flex justify-center items-center'>
          <img
            src='https://miro.medium.com/v2/resize:fill:250:168/1*C-b6OCEOoacSvBjC3ICoyw.jpeg'
            alt='medium'
            className='w-fit my-auto'
          />
        </CardContent>
      </article>
      <CardFooter>
        <Badge className='mx-0'>React</Badge>
      </CardFooter>
    </article>
  )
}
