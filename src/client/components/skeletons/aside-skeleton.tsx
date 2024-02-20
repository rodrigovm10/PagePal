import { Skeleton } from '@client/components/ui/skeleton'

export function SkeletonAside() {
  return (
    <div className='flex items-center flex-col justify-center gap-y-5'>
      <Skeleton className='h-6 w-[100px]' />
      <Skeleton className='h-4 w-[120px]' />
      <div className='space-y-2'>
        <Skeleton className='h-4 w-[100px] self-start' />
        <Skeleton className='h-4 w-[250px]' />
      </div>
      <div className='space-y-2'>
        <Skeleton className='h-4 w-[100px] self-start' />
        <Skeleton className='h-4 w-[250px]' />
      </div>
      <Skeleton className='h-10 w-[250px]' />
      <div className='flex gap-x-2'>
        <Skeleton className='h-8 w-[125px]' />
        <Skeleton className='h-8 w-[125px]' />
      </div>
      <Skeleton className='h-4 w-[250px]' />
    </div>
  )
}
