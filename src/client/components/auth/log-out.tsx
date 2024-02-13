'use client'

import { signOut } from 'next-auth/react'

export function LogOut() {
  const handleClick = async () => {
    await signOut()
  }
  return <button onClick={handleClick}>Cerrar Sesión</button>
}
