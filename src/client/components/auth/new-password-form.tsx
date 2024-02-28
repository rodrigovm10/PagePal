'use client'

import { useNewPassword } from '@/client/hooks/useNewPassword'

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
import { useSearchParams } from 'next/navigation'

export function NewPasswordForm() {
  const searchParams = useSearchParams()
  const token = searchParams.get('token')

  const { form, handleSubmit, error, isPending, success } = useNewPassword({ token })

  return (
    <CardWrapper
      headerLabel='Ingresa una nueva contraseña'
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
              name='password'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder='********'
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
            Restablecer Contraseña
          </Button>
        </form>
      </Form>
    </CardWrapper>
  )
}
