import type * as z from 'zod'
import { useForm } from 'react-hook-form'
import { useState, useTransition } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'

import { RegisterSchema } from '@/client/schemas'
import { register } from '@server/server-actions/register'

export function useRegisterForm() {
  const [error, setError] = useState<string | undefined>('')
  const [success, setSuccess] = useState<string | undefined>('')

  const [isPending, startTransition] = useTransition()

  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: '',
      password: '',
      image: '',
      name: ''
    }
  })

  const handleSubmit = (values: z.infer<typeof RegisterSchema>) => {
    setError('')
    setSuccess('')
    startTransition(() => {
      register({ values }).then(data => {
        setError(data?.error)
        setSuccess(data?.success)
      })
    })
  }

  return { error, success, isPending, form, handleSubmit }
}
