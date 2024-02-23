import { z } from 'zod'

export const followAndUnfollowSchema = z.object({
  categoryName: z
    .string({ required_error: 'Category name is required' })
    .min(3, { message: 'Category name must be at least 3 characters long' }),
  userEmail: z
    .string({ required_error: 'User email is required' })
    .email({ message: 'User email is not valid' })
})
