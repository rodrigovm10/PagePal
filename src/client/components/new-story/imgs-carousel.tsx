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

export function ImgsCarousel({ imgSrc }: { imgSrc: string }) {
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
                <img
                  className='h-[250px] w-full'
                  src={grayDefault.src}
                  alt='Banner por predeterminado'
                />
              </CarouselItem>
              <CarouselItem>
                <img
                  className='h-[250px] w-full'
                  src={greenDefault.src}
                  alt='Banner por predeterminado'
                />
              </CarouselItem>
              <CarouselItem>
                <img
                  className='h-[250px] w-full'
                  src={blueDefault.src}
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
