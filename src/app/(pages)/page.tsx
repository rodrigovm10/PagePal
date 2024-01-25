import { auth } from '@/server/auth/auth'

import { Main } from '@client/components/home/main'
import { Hero } from '@/client/components/home/hero'

export default async function HomePage() {
  const session = await auth()

  return (
    <>
      {session !== null && <div className=''>{JSON.stringify(session)}</div>}
      {session === null && (
        <>
          <Hero />
          <h1 className='text-center my-5'>Descubre algún tema interesante.</h1>

          <Main />
        </>
      )}
    </>
  )
}
