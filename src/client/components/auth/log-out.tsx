'use client'

import { signOut } from 'next-auth/react'
import { useRouter } from 'next/router'

export function LogOut() {
  const router = useRouter()
  const handleClick = async () => {
    await signOut()
    router.push({
      pathname: '/',
      query: ''
    })
  }
  return <button onClick={handleClick}>Cerrar Sesión</button>
}
