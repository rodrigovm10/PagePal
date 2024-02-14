import type { UserRole } from '@prisma/client'

export interface User {
  id: string
  name: string | null
  email: string | null
  emailVerified: Date | null
  password: string | null
  image: string | null
  role: UserRole
}
