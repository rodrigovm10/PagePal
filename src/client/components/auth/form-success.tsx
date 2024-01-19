import { FaExclamationTriangle } from 'react-icons/fa'

interface FormErrorProps {
  message?: string
}

export function FormSuccess({ message }: FormErrorProps) {
  if (!message) return

  return (
    <div className='bg-emerald-500/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-emerald-500'>
      <FaExclamationTriangle className='size-4' />
      <p>{message}</p>
    </div>
  )
}
