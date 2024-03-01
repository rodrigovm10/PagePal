import { Skeleton } from '@client/components/ui/skeleton'

export function ArticleSkeleton() {
  return (
    <section className='flex flex-col lg:mx-0 gap-y-5 mt-10 lg:col-span-2 space-y-5'>
      <Skeleton className='h-48 w-full rounded-t-lg' />
      <Skeleton className='h-48 w-full rounded-t-lg' />
      <Skeleton className='h-48 w-full rounded-t-lg' />
    </section>
  )
}
