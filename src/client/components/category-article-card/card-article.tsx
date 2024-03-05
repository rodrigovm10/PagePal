import Image from 'next/image'
import type { Article } from '@/types/types'

import favicon from '@/app/favicon.ico'
import { IconStar, IconHeart, IconMessageCircle } from '@tabler/icons-react'
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@client/components/ui/card'
import { TooltipIcon } from '../tooltip-icon'

export function CardArticle({ article }: { article: Article }) {
  return (
    <article className=''>
      <CardHeader>
        <img
          src='https://miro.medium.com/v2/resize:fill:250:168/1*C-b6OCEOoacSvBjC3ICoyw.jpeg'
          alt='medium'
          className='w-full h-1/2'
        />
        <div className='flex gap-x-2 mt-1'>
          <Image
            src={favicon}
            className='rounded-full size-4 my-auto'
            alt='favicon'
            width='0'
            height='0'
          />{' '}
          <p className='text-sm'>The Nib</p>
        </div>
        <CardTitle className='text-lg md:text-2xl'>{article.title}</CardTitle>
      </CardHeader>
      <CardContent className='flex -mt-2'>
        <div className='flex flex-col items-start'>
          <CardDescription className='p-0 w-full'>{article.content}</CardDescription>
          {article.isPremium && (
            <span className='opacity-80 flex items-center gap-x-1'>
              <IconStar className='size-3 text-yellow-300 ' />·
              <span className='text-[12px] opacity-60'>{article.publishDate.toString()}</span>
            </span>
          )}
        </div>
      </CardContent>
      <CardFooter className='flex gap-x-2'>
        <div className='flex gap-x-1'>
          <TooltipIcon content='Favoritos'>
            <IconHeart
              stroke={1.25}
              className='cursor-pointer'
            />
          </TooltipIcon>
          <span className='text-sm opacity-80 self-center'>64</span>
        </div>
        <div className='flex gap-x-1'>
          <TooltipIcon content='Comentarios'>
            <IconMessageCircle
              stroke={1.25}
              className='cursor-pointer'
            />
          </TooltipIcon>
          <span className='text-sm opacity-80 self-center'>12</span>
        </div>
      </CardFooter>
    </article>
  )
}
