import { cn } from '../libs/utils'

export function TextWavy({ text, isWavy }: { text: string; isWavy: boolean }) {
  return (
    <span
      className={cn(
        'relative text-primary transition-all animate-pulse',
        isWavy && 'underline decoration-wavy'
      )}
    >
      {text}
    </span>
  )
}
