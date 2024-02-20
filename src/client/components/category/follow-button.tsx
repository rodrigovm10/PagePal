'use client'

import { useState } from 'react'
import type { User } from '@/types/types'
import { followCategory, unfollowCategory } from '@/server/server-actions/category'

import { usePathname } from 'next/navigation'
import { Button } from '@/client/components/ui/button'
import type { Category } from '@prisma/client'

export function FollowButton({ user, category }: { user: User | undefined; category: Category }) {
  const pathname = usePathname()
  const name = pathname.split('/')[2]

  const [isFollowing, setIsFollowing] = useState(user?.categories[0].name === name)
  console.log(isFollowing)

  const handleClick = async () => {
    if (!isFollowing) {
      await followCategory({ categoryName: name, userEmail: user?.email })
      setIsFollowing(true)
    } else {
      await unfollowCategory({ categoryName: name, userEmail: user?.email })
      setIsFollowing(false)
    }
  }

  return (
    <>
      <p className='opacity-80'>Tema · {category?.followers} Followers</p>
      <Button
        onClick={handleClick}
        variant={isFollowing ? 'outline' : 'default'}
      >
        {isFollowing ? 'Siguiendo' : 'Seguir'}
      </Button>
    </>
  )
}
