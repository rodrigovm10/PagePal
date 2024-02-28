'use client'

import { useResetPassword } from '@/client/hooks/useResetPassword'

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

export function ResetPasswordForm() {
  const { form, handleSubmit, error, isPending, success } = useResetPassword()

  return (
    <CardWrapper
      headerLabel='¿Olvidaste tu contraseña?'
      backButtonLabel='Regresar al inicio de sesión'
      backButtonHref='/auth/login'
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
          </div>
          <FormSuccess message={success} />
          <FormError message={error} />
          <Button
            type='submit'
            className='w-full'
            disabled={isPending}
          >
            Enviar un correo para recuperar tu contraseña
          </Button>
        </form>
      </Form>
    </CardWrapper>
  )
}
