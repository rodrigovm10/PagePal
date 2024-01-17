import Image from 'next/image'
import loginImg from '@/assets/login-img.jpg'
import { Card, CardContent } from '@/components/ui/card'

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className='flex items-center h-full justify-center dark:bg-primary/15 bg-primary/15'>
      <Card>
        <CardContent className='flex p-20 gap-x-10'>
          {children}
          <Image
            className='size-[500px]'
            src={loginImg}
            alt='imagen de login'
          />
        </CardContent>
      </Card>
    </main>
  )
}
