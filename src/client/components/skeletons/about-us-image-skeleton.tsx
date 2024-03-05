import { Skeleton } from '@client/components/ui/skeleton'

export function AboutUsImageSkeleton() {
  return (
    <section className='max-w-full size-[350px] self-end justify-self-center lg:size-[450px] lg:justify-self-end'>
      <Skeleton className='size-[375px] rounded-t-lg' />
    </section>
  )
}
