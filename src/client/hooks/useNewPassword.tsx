import type { z } from 'zod'
import { useState, useTransition } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { NewPasswordSchema } from '@/client/schemas'
import { newPassword } from '@server/server-actions/new-password'

export function useNewPassword({ token }: { token: string | null }) {
  const [error, setError] = useState<string | undefined>('')
  const [success, setSuccess] = useState<string | undefined>('')

  const [isPending, startTransition] = useTransition()

  const form = useForm<z.infer<typeof NewPasswordSchema>>({
    resolver: zodResolver(NewPasswordSchema),
    defaultValues: {
      password: ''
    }
  })

  const handleSubmit = (values: z.infer<typeof NewPasswordSchema>) => {
    setError('')
    setSuccess('')
    startTransition(() => {
      newPassword({ values, token }).then(data => {
        setError(data?.error)
        setSuccess(data?.success)
      })
    })
  }

  return { error, success, isPending, form, handleSubmit }
}
