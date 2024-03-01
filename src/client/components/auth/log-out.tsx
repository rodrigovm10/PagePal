'use client'

import { signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'

export function LogOut() {
  const router = useRouter()
  const handleClick = async () => {
    await signOut()
    router.push('/')
  }
  return <button onClick={handleClick}>Cerrar Sesión</button>
}
