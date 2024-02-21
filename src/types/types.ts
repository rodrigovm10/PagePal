import type { UserRole } from '@prisma/client'

export interface User {
  id: string
  name: string | null
  email: string | null
  emailVerified: Date | null
  password: string | null
  image: string | null
  role: UserRole
  categories: Category[]
}

export interface Category {
  id: number
  name: string
  followers: number
}
