import { cn } from '@/client/libs/utils'
import { Button } from '@client/components/ui/button'
import { Header } from '@client/components/membership/header'
import { Card, CardContent, CardFooter, CardHeader } from '@client/components/ui/card'

interface CardWrapperProps {
  children: React.ReactNode
  headerLabel: string
  title: string
  showButton: boolean
  showPopular: boolean
}

export function CardPricingWrapper({
  children,
  headerLabel,
  title,
  showButton,
  showPopular
}: CardWrapperProps) {
  return (
    <div className='hover:-translate-y-3 '>
      {showPopular && (
        <div className='text-center bg-rose-500 rounded-t-md p-2 uppercase '>Popular</div>
      )}
      <Card
        className={cn(
          'w-[350px] md:w-[500px] lg:w-[400px] shadow-lg dark:shadow-2xl',
          showPopular && 'rounded-t-none'
        )}
      >
        <CardHeader>
          <Header
            label={headerLabel}
            title={title}
          />
        </CardHeader>
        <CardContent>{children}</CardContent>
        {showButton && (
          <CardFooter className='flex justify-center mt-5'>
            <Button>Comprar</Button>
          </CardFooter>
        )}
      </Card>
    </div>
  )
}
