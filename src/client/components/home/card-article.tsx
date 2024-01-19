import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@client/components/ui/card'
import Image from 'next/image'
import favicon from '@/app/favicon.ico'

export function CardArticle() {
  return (
    <Card className='max-w-full w-fit hover:bg-primary/10 cursor-pointer'>
      <article className='flex gap-x-10'>
        <CardHeader>
          <div className='flex gap-x-2'>
            <Image
              src={favicon}
              className='rounded-full size-4 my-auto'
              alt='favicon'
              width='0'
              height='0'
            />
            <p className='text-sm'>The Nib</p>
          </div>
          <CardTitle>Martin Luther King Jr Was More Radical Than You Think</CardTitle>
          <CardDescription>On MLK Day, t’s time to remember who he really was.</CardDescription>
        </CardHeader>
        <CardContent className='flex justify-center items-center'>
          <img
            src='https://miro.medium.com/v2/resize:fill:250:168/1*C-b6OCEOoacSvBjC3ICoyw.jpeg'
            alt='medium'
            className='w-[90%] object-cover mt-auto mb-0 '
          />
        </CardContent>
      </article>
      <CardFooter>
        <p className='text-[12px] opacity-80'>Jan 21, 2019</p>
      </CardFooter>
    </Card>
  )
}
