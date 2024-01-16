import { Button } from '@/components/ui/button'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'

export function CarouselCategories({ arr }: { arr: String[] }) {
  return (
    <Carousel
      className='w-full lg:max-w-lg md:max-w-md max-w-sm'
      opts={{
        align: 'start'
      }}
    >
      <CarouselContent className=''>
        {arr.map((item, i) => (
          <CarouselItem
            key={i}
            className='basis-1/2 md:basis-1/4'
          >
            <Button
              variant='tag'
              className='w-full'
            >
              {item}
            </Button>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
