'use client'

import type { User, Category } from '@/types/types'
import { Button } from '@/client/components/ui/button'
import { useFollow } from '@/client/hooks/useFollow'

export function FollowButton({ user, category }: { user: User | undefined; category: Category }) {
  const { handleFollowUnfollow, isFollowing, followersCount, currentFollowersCount } = useFollow({
    user,
    category
  })

  // Actualizar el número de seguidores cuando cambie
  return (
    <>
      <p className='opacity-80'>Tema · {currentFollowersCount} Followers</p>
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
