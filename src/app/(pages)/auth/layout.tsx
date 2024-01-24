import Image from 'next/image'

import loginImg from '@/assets/login-img.webp'
import { Card, CardContent } from '@client/components/ui/card'

export default async function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className='flex items-center justify-center h-full -mt-2 bg-gradient-to-b from-white via-white to-primary/40'>
      <Card
        className='w-[80%] mx-auto sm:w-auto shadow-lg bg-gradient-to-b from-white via-white to-primary/40
 dark:bg-gradient-to-b dark:from-black dark:to-[#111]'
      >
        <CardContent className='flex p-5 lg:p-20 gap-x-10'>
          {children}
          <Image
            className='hidden mx-auto my-auto lg:size-[500px] lg:block '
            src={loginImg}
            alt='imagen de login'
          />
        </CardContent>
      </Card>
    </main>
  )
}
