import { FaExclamationTriangle } from 'react-icons/fa'

interface FormErrorProps {
  message?: string
}

export function FormError({ message }: FormErrorProps) {
  if (!message) return

  return (
    <div className='bg-destructive/20 dark:bg-destructive p-3 rounded-md flex items-center gap-x-2 text-sm text-destructive dark:text-white'>
      <FaExclamationTriangle className='size-4' />
      <p>{message}</p>
    </div>
  )
}
