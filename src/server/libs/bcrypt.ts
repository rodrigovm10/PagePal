import { compare, hash } from 'bcryptjs'

export const comparePasswords = async ({
  originalPassword,
  hashPassword
}: {
  originalPassword: string
  hashPassword: string
}) => {
  const isEqual = await compare(originalPassword, hashPassword)
  return isEqual
}

export const hashPassword = async ({ password }: { password: string }) => {
  const passwordHashed = await hash(password, 10)
  return passwordHashed
}
