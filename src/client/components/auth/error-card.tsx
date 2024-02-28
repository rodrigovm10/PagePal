import { CardWrapper } from './card-wrapper'
import { TriangleIcon } from 'lucide-react'

export function ErrorCard() {
  return (
    <CardWrapper
      headerLabel='Algo sucedio mal!'
      backButtonHref='/auth/login'
      backButtonLabel='Regresar al login'
    >
      <div className='w-full flex justify-center items-center'>
        <TriangleIcon className='text-destructive' />
      </div>
    </CardWrapper>
  )
}
