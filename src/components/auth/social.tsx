'use client'

import { FcGoogle } from 'react-icons/fc'
import { FaGithub } from 'react-icons/fa'

import { Button } from '@/components/ui/button'

export function Social() {
  const onClick = (provider: 'google' | 'github') => {
    console.log('a')
  }

  return (
    <div className='flex items-center w-full gap-x-2'>
      <Button
        onClick={() => onClick('google')}
        size='lg'
        className='w-full'
        variant='outline'
      >
        <FcGoogle className='size-5' />
      </Button>
      <Button
        onClick={() => onClick('github')}
        size='lg'
        className='w-full'
        variant='outline'
      >
        <FaGithub className='size-5' />
      </Button>
    </div>
  )
}
