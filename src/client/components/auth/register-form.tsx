'use client'

import ReCAPTCHA from 'react-google-recaptcha'
import { useRegisterForm } from '@/client/hooks/useRegisterForm'

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

export function RegisterForm() {
  const { form, error, success, isPending, handleSubmit, setCaptcha } = useRegisterForm()

  return (
    <CardWrapper
      headerLabel='Unete a PagePal'
      backButtonHref='/auth/login'
      backButtonLabel='¿Ya tienes cuenta?'
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
              name='name'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nombre de usuario</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder='John '
                      type='text'
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
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
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormSuccess message={success} />
          <FormError message={error} />
          <ReCAPTCHA
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE!}
            className='mx-auto'
            onChange={setCaptcha}
          />
          <Button
            disabled={isPending}
            type='submit'
            className='w-full'
          >
            Registrarse
          </Button>
        </form>
      </Form>
    </CardWrapper>
  )
}
