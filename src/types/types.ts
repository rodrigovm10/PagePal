import type { UserRole, Article as ArticlePrisma, User as UserType } from '@prisma/client'
export interface User extends UserType {
  role: UserRole
  categories: Category[]
  followers: number
}

export interface Category {
  id: number
  name: string
  followers: number
}

export interface Article extends ArticlePrisma {
  categories: Category[]
}
