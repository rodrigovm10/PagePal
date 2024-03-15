import Image from 'next/image'
import { Suspense } from 'react'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/client/components/ui/carousel'
import grayDefault from '@/../public/assets/gris-default.webp'
import blueDefault from '@/../public/assets/azul-default.webp'
import greenDefault from '@/../public/assets/verde-default.webp'
import { HeroImageSkeleton } from '../skeletons/hero-image'
import { useArticleStore } from '@/client/stores/publishArticleStore'

export function ImgsCarousel({ imgSrc }: { imgSrc: string }) {
  const articleContent = useArticleStore(state => state.articleContent)
  //TODO: Change banner content2

  return (
    <>
      {imgSrc && (
        <img
          src={imgSrc}
          alt='Banner de la historia por crear'
        />
      )}
      {!imgSrc && (
        <Carousel>
          <Suspense fallback={<HeroImageSkeleton />}>
            <CarouselContent>
              <CarouselItem className='w-full'>
                <Image
                  height={250}
                  width={250}
                  src={grayDefault.src}
                  alt='Banner por predeterminado'
                  className='h-[250px] w-full'
                />
              </CarouselItem>
              <CarouselItem>
                <Image
                  height={250}
                  width={250}
                  src={greenDefault.src}
                  className='h-[250px] w-full'
                  alt='Banner por predeterminado'
                />
              </CarouselItem>
              <CarouselItem>
                <Image
                  height={250}
                  width={250}
                  src={blueDefault.src}
                  className='h-[250px] w-full'
                  alt='Banner por predeterminado'
                />
              </CarouselItem>
            </CarouselContent>
          </Suspense>

          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      )}
    </>
  )
}
