import type { z } from 'zod'
import { useForm } from 'react-hook-form'
import { useState, useTransition } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'

import { RegisterSchema } from '@/client/schemas'
import { register } from '@server/server-actions/register'

export function useRegisterForm() {
  const [error, setError] = useState<string | undefined>('')
  const [success, setSuccess] = useState<string | undefined>('')
  const [captcha, setCaptcha] = useState<string | null | undefined>()

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
    if (!captcha) {
      setError('Es necesario validar el captcha.')
      return
    }
    startTransition(() => {
      setError('')
      register({ values }).then(data => {
        setError(data?.error)
        setSuccess(data?.success)
      })
    })
  }

  return { error, success, isPending, form, handleSubmit, setCaptcha }
}
