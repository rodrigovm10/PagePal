import { auth } from '@/server/auth/auth'

import { Main } from '@client/components/home/main'
import { Header } from '@client/components/home/header'

export default async function HomePage() {
  const session = await auth()

  return (
    <>
      {session && <div>hola</div>}
      {!session && (
        <>
          <Header />
          <Main />
        </>
      )}
    </>
  )
}
