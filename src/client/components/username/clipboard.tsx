'use client'

import { toast } from 'sonner'
import { useRouter } from 'next/navigation'

import { IconDots } from '@tabler/icons-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@client/components/ui/dropdown-menu'

export function Clipboard() {
  const router = useRouter()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <IconDots className='cursor-pointer' />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem
          className='cursor-pointer'
          onClick={() => {
            toast.success('Link del perfil copiado exitosamente!')
            navigator.clipboard.writeText(window.location.href)
          }}
        >
          Copiar link al perfil
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
