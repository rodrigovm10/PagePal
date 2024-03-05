import { Skeleton } from '@client/components/ui/skeleton'

export function FormsImageSkeleton() {
  return (
    <section className='flex flex-col lg:mx-0 gap-y-5 mt-10 lg:col-span-2 space-y-5'>
      <Skeleton className='size-[375px] rounded-t-lg' />
    </section>
  )
}
