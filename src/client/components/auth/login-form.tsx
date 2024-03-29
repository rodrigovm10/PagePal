/* eslint-disable @typescript-eslint/prefer-nullish-coalescing */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
'use client'

import Link from 'next/link'
import ReCAPTCHA from 'react-google-recaptcha'
import { useSearchParams } from 'next/navigation'
import { useLoginForm } from '@/client/hooks/useLoginForm'

import {
  Form,
  FormControl,
  FormField,
  FormLabel,
  FormMessage,
  FormItem
} from '@client/components/ui/form'
import { FormSuccess } from './form-success'
import { Input } from '@client/components/ui/input'
import { Button } from '@client/components/ui/button'
import { FormError } from '@client/components/auth/form-error'
import { CardWrapper } from '@client/components/auth/card-wrapper'

export function LoginForm() {
  const { form, handleSubmit, error, isPending, success, setCaptcha } = useLoginForm()
  const searchParams = useSearchParams()
  const urlError =
    searchParams.get('error') === 'OAuthAccountNotLinked'
      ? 'El correo esta en uso con un proveedor distinto'
      : ''

  return (
    <CardWrapper
      headerLabel='Bienvenido de vuelta'
      backButtonHref='/auth/register'
      backButtonLabel='¿No tienes cuenta?'
      showSocial
    >
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className='space-y-8'
        >
          <div className='space-y-5'>
            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder='ejemplo@ejemplo.com'
                      type='email'
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='password'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Contraseña</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder='*******'
                      type='password'
                    />
                  </FormControl>
                  <Button
                    size='sm'
                    variant='link'
                    asChild
                    className='px-0 font-normal'
                  >
                    <Link href={'/auth/reset-password'}>¿Olvidaste tu contraseña?</Link>
                  </Button>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormSuccess message={success} />
          <FormError message={error || urlError} />
          <ReCAPTCHA
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE!}
            className='mx-auto'
            onChange={setCaptcha}
          />
          <Button
            type='submit'
            className='w-full'
            disabled={isPending}
          >
            Iniciar sesión
          </Button>
        </form>
      </Form>
    </CardWrapper>
  )
}
