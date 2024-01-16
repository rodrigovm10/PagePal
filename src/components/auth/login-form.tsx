'use client'

import * as z from 'zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { LoginSchema } from '@/schemas'
import { login } from '@/server-actions/login'

import {
  Form,
  FormControl,
  FormField,
  FormLabel,
  FormMessage,
  FormItem
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { FormError } from '@/components/auth/form-error'
import { CardWrapper } from '@/components/auth/card-wrapper'
import { FormSuccess } from './form-success'

export function LoginForm() {
  const [error, setError] = useState<string | undefined>('')
  const [success, setSuccess] = useState<string | undefined>('')
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  })

  const handleSubmit = (values: z.infer<typeof LoginSchema>) => {
    login({ values })
  }
  return (
    <CardWrapper
      headerLabel='PagePal'
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
                      placeholder='*******'
                      type='password'
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormSuccess />
          <FormError />
          <Button
            type='submit'
            className='w-full'
          >
            Iniciar sesión
          </Button>
        </form>
      </Form>
    </CardWrapper>
  )
}
