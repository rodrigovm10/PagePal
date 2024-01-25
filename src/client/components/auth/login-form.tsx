'use client'

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
  const { form, handleSubmit, error, isPending, success } = useLoginForm()

  return (
    <CardWrapper
      headerLabel='Bienvenido de vuelta'
      backButtonHref='/register'
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
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormSuccess message={success} />
          <FormError message={error} />
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
