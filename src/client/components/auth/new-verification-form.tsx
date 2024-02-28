'use client'

import { useSearchParams } from 'next/navigation'
import { useCallback, useEffect, useState } from 'react'

import { FormError } from './form-error'
import { FormSuccess } from './form-success'
import { LoadingPage } from '../loading'
import { CardWrapper } from './card-wrapper'
import { newVerification } from '@/server/server-actions/new-verification'

export function NewVerificationForm() {
  const [error, setError] = useState<string | undefined>()
  const [success, setSuccess] = useState<string | undefined>()

  const searchParams = useSearchParams()

  const token = searchParams.get('token')

  const handleSubmit = useCallback(() => {
    if (success || error) return

    if (!token) {
      setError('No hay un token ha verificar')
      return
    }

    newVerification({ token })
      .then(data => {
        setSuccess(data?.success)
        setError(data?.error)
      })
      .catch(() => {
        setError('Algo sucedio mal')
      })
  }, [token, success, error])

  useEffect(() => {
    handleSubmit()
  }, [handleSubmit])

  return (
    <CardWrapper
      headerLabel='Confirma tu código de verificación'
      backButtonLabel='Regresar al inicio de sesión'
      backButtonHref='/login'
      showSocial={false}
    >
      <div className='flex items-center w-full justify-center'>
        {!success && !error && <LoadingPage showTitle={false} />}
        <FormSuccess message={success} />
        {!success && <FormError message={error} />}
      </div>
    </CardWrapper>
  )
}
