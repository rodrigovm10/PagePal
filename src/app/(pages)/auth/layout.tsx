import Image from 'next/image'

import loginImg from '@/assets/login-img.jpg'
import { Card, CardContent } from '@client/components/ui/card'

export default async function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className='flex items-center justify-center h-full bg-primary/15 dark:bg-background'>
      <Card className='w-[80%] mx-auto sm:w-auto'>
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
