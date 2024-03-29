import type { z } from 'zod'
import { useState, useTransition } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { LoginSchema } from '@/client/schemas'
import { login } from '@server/server-actions/login'

export function useLoginForm() {
  const [error, setError] = useState<string | undefined>('')
  const [success, setSuccess] = useState<string | undefined>('')
  const [captcha, setCaptcha] = useState<string | null | undefined>()

  const [isPending, startTransition] = useTransition()

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  })

  const handleSubmit = (values: z.infer<typeof LoginSchema>) => {
    setError('')
    setSuccess('')
    if (!captcha) {
      setError('Es necesario validar el captcha.')
      return
    }

    startTransition(() => {
      setError('')
      login({ values }).then(data => {
        setError(data?.error)
        setSuccess(data?.success)
      })
    })
  }

  return { error, success, isPending, form, setCaptcha, handleSubmit }
}
