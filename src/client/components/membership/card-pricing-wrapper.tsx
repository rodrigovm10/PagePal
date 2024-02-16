import { cn } from '@/client/libs/utils'

import { Button } from '@client/components/ui/button'
import { Header } from '@client/components/membership/header'
import { Card, CardContent, CardFooter, CardHeader } from '@client/components/ui/card'
import Link from 'next/link'
interface CardWrapperProps {
  children: React.ReactNode
  headerLabel: string
  title: string
  textButton: string
  showPopular?: boolean
}

export function CardPricingWrapper({
  children,
  headerLabel,
  title,
  textButton,
  showPopular = false
}: CardWrapperProps) {
  return (
    <Card
      className={cn(
        'w-[350px] md:w-[500px] lg:w-[400px] dark:bg-black/80 rounded-sm border-none',
        showPopular && 'dark:bg-primary'
      )}
    >
      <CardHeader>
        {showPopular && (
          <p className='bg-primary dark:bg-white dark:text-black shadow-custom text-white w-fit p-1 uppercase text-[12px] inline-block -rotate-2 font-black animate-pulse'>
            Popular
          </p>
        )}
        <Header
          label={headerLabel}
          title={title}
        />
      </CardHeader>
      <CardContent>{children}</CardContent>
      <CardFooter className='flex justify-center mt-5'>
        <Link href='/register'>
          <Button
            className={cn(
              'dark:text-white w-full hover:-translate-y-2 transition-all ',
              showPopular && 'dark:text-dark dark:bg-white'
            )}
          >
            {textButton}
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
