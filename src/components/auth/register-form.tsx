'use client'

import * as z from 'zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { RegisterSchema } from '@/schemas'
import { register } from '@/server-actions/register'

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

export function RegisterForm() {
  const [error, setError] = useState<string | undefined>('')
  const [success, setSuccess] = useState<string | undefined>('')
  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: '',
      password: '',
      avatar: '',
      name: ''
    }
  })

  const handleSubmit = (values: z.infer<typeof RegisterSchema>) => {
    register({ values })
  }
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
