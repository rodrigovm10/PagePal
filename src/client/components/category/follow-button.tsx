'use client'

import type { User, Category } from '@/types/types'
import { Button } from '@/client/components/ui/button'
import { useFollow } from '@/client/hooks/useFollow'

interface FollowButtonParams {
  user: User | undefined
  category: Category
  totalStories: number
}

export function FollowButton({ user, category, totalStories }: FollowButtonParams) {
  const { handleFollowUnfollow, isFollowing, followersCount, currentFollowersCount } = useFollow({
    user,
    category
  })

  return (
    <>
      <p className='opacity-80'>
        Tema · {currentFollowersCount} Followers · {totalStories} Artículos
      </p>
      <Button
        onClick={() => {
          handleFollowUnfollow()
          followersCount()
        }}
        variant={isFollowing ? 'outline' : 'default'}
      >
        {isFollowing ? 'Siguiendo' : 'Seguir'}
      </Button>
    </>
  )
}
