'use server'

import { LoginSchema } from '@/schemas'
import * as z from 'zod'

export const login = async ({ values }: { values: z.infer<typeof LoginSchema> }) => {
  const validateFields = LoginSchema.safeParse(values)

  console.log(validateFields)
}
