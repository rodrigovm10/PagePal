import { db } from '@server/db/db'

export const getVerificationTokenByToken = async ({ token }: { token: string }) => {
  try {
    const verificationToken = await db.verificationToken.findUnique({
      where: { token }
    })

    console.log(token)

    return verificationToken
  } catch (error) {
    return null
  }
}

export const getVerificationTokenByEmail = async ({ email }: { email: string }) => {
  try {
    const verificationToken = await db.verificationToken.findFirst({
      where: { email }
    })

    return verificationToken
  } catch (error) {
    return null
  }
}
