import type { z } from 'zod'
import { useState, useTransition } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { ResetSchema } from '@/client/schemas'
import { resetPassword } from '@server/server-actions/reset-password'

export function useResetPassword() {
  const [error, setError] = useState<string | undefined>('')
  const [success, setSuccess] = useState<string | undefined>('')

  const [isPending, startTransition] = useTransition()

  const form = useForm<z.infer<typeof ResetSchema>>({
    resolver: zodResolver(ResetSchema),
    defaultValues: {
      email: ''
    }
  })

  const handleSubmit = (values: z.infer<typeof ResetSchema>) => {
    setError('')
    setSuccess('')
    startTransition(() => {
      resetPassword({ values }).then(data => {
        setError(data?.error)
        setSuccess(data?.success)
      })
    })
  }

  return { error, success, isPending, form, handleSubmit }
}
