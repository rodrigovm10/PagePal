'use client'

import type { User } from '@/types/types'
import { useEffect, useState } from 'react'
import type { Category } from '@prisma/client'
import { followCategory, unfollowCategory } from '@/server/data/category'

export function useFollow({ user, category }: { user: User | undefined; category: Category }) {
  const [isFollowing, setIsFollowing] = useState<boolean>(false)
  const [currentFollowersCount, setCurrentFollowersCount] = useState(category?.followers)

  useEffect(() => {
    if (user && user.categories.some(cat => cat.id === category.id)) {
      setIsFollowing(true)
    } else {
      setIsFollowing(false)
    }
  }, [user, category])

  const handleFollowUnfollow = async () => {
    if (!user) {
      // TODO: Mostrar alerta de registrarse
      return
    }

    setIsFollowing(prevState => !prevState)

    try {
      if (isFollowing) {
        await unfollowCategory({ categoryName: category.name, userEmail: user?.email })
      } else {
        await followCategory({ categoryName: category.name, userEmail: user?.email })
      }
    } catch (error) {
      console.error('Error al seguir/dejar de seguir la categoría:', error)
      setIsFollowing(prevState => !prevState)
    }
  }

  const followersCount = () => {
    setCurrentFollowersCount(prevCount => (isFollowing ? prevCount - 1 : prevCount + 1))
  }

  return { isFollowing, currentFollowersCount, handleFollowUnfollow, followersCount }
}
