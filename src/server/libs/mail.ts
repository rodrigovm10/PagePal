import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)
const DOMAIN = process.env.NEXT_PUBLIC_APP_URL

export const sendVerificationEmail = async ({ email, token }: { email: string; token: string }) => {
  const confirmLink = `${DOMAIN}/auth/new-verification?token=${token}`

  await resend.emails.send({
    from: 'PagePal <no-reply@pagepal.site>',
    to: email,
    subject: 'Confirm your email',
    html: `<p>Click <a href="${confirmLink}">here to confirm email.</a></p>`
  })
}

export const sendPasswordResetEmail = async ({
  email,
  token
}: {
  email: string
  token: string
}) => {
  const resetLink = `${DOMAIN}/auth/new-password?token=${token}`

  console.log(DOMAIN)
  console.log('enviado')
  await resend.emails.send({
    from: 'PagePal <no-reply@pagepal.site>',
    to: email,
    subject: 'Reset your password',
    html: `<p>Click <a href="${resetLink}">here to reset password.</a></p>`
  })
}
