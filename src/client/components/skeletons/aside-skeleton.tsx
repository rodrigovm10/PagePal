import { Skeleton } from '@client/components/ui/skeleton'

export function SkeletonAside() {
  return (
    <div className='flex items-center flex-col justify-center gap-y-5'>
      <div className='flex justify-between gap-x-10'>
        <div className='flex gap-x-5'>
          <Skeleton className='size-10 rounded-full' />
          <Skeleton className='h-6 w-[110px]' />
        </div>
        <Skeleton className='h-10 w-[60px]' />
      </div>
      <div className='flex justify-between gap-x-10'>
        <div className='flex gap-x-5'>
          <Skeleton className='size-10 rounded-full' />
          <Skeleton className='h-6 w-[110px]' />
        </div>
        <Skeleton className='h-10 w-[60px]' />
      </div>
      <div className='flex justify-between gap-x-10'>
        <div className='flex gap-x-5'>
          <Skeleton className='size-10 rounded-full' />
          <Skeleton className='h-6 w-[110px]' />
        </div>
        <Skeleton className='h-10 w-[60px]' />
      </div>
      <div className='flex justify-between gap-x-10'>
        <div className='flex gap-x-5'>
          <Skeleton className='size-10 rounded-full' />
          <Skeleton className='h-6 w-[110px]' />
        </div>
        <Skeleton className='h-10 w-[60px]' />
      </div>
      <div className='flex justify-between gap-x-10'>
        <div className='flex gap-x-5'>
          <Skeleton className='size-10 rounded-full' />
          <Skeleton className='h-6 w-[110px]' />
        </div>
        <Skeleton className='h-10 w-[60px]' />
      </div>
    </div>
  )
}
