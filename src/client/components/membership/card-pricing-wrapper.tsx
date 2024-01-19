import { Header } from '@client/components/membership/header'
import { Card, CardContent, CardFooter, CardHeader } from '@client/components/ui/card'
import { Button } from '@client/components/ui/button'

interface CardWrapperProps {
  children: React.ReactNode
  headerLabel: string
  title: string
  showButton: boolean
}

export function CardPricingWrapper({ children, headerLabel, title, showButton }: CardWrapperProps) {
  return (
    <Card className='w-[300px] md:w-[500px] lg:w-[400px] shadow-lg hover:-translate-y-3 transition-transform hover:border-t-4 hover:border-ring dark:hover:border-ring'>
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
  )
}
