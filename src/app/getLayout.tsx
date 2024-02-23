// Importa la función de autenticación
import { auth } from '@/server/auth/auth'
import type { Session } from 'next-auth'

interface GetLayoutReturnData {
  session: Session | null
}

export async function getLayout(): Promise<GetLayoutReturnData> {
  const session = await auth()
  return { session }
}
