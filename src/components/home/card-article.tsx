import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'

export function CardArticle() {
  return (
    <Card className='w-1/2 hover:bg-primary/10'>
      <article className='flex gap-x-10'>
        <CardHeader>
          <div className='flex gap-x-2'>
            <img
              src='favicon.ico'
              className='rounded-full size-4 my-auto'
              alt=''
            />
            <p className='text-sm'>The Nib</p>
          </div>
          <CardTitle>Martin Luther King Jr Was More Radical Than You Think</CardTitle>
          <CardDescription>On MLK Day, t’s time to remember who he really was.</CardDescription>
        </CardHeader>
        <CardContent>
          <img
            src='https://miro.medium.com/v2/resize:fill:250:168/1*C-b6OCEOoacSvBjC3ICoyw.jpeg'
            alt=''
            className='h-full my-0 mx-auto'
          />
        </CardContent>
      </article>
      <CardFooter>
        <p className='text-[12px] opacity-80'>Jan 21, 2019</p>
      </CardFooter>
    </Card>
  )
}
