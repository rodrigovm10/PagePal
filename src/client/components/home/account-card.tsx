import { Button } from '@client/components/ui/button'
import { Avatar, AvatarImage } from '@client/components/ui/avatar'

export function AccountCard() {
  return (
    <section className='flex justify-between cursor-pointer'>
      <div className='flex gap-x-3'>
        <Avatar>
          <AvatarImage src='https://github.com/shadcn.png' />
        </Avatar>
        <p className='font-bold'>Rodrigo Vega</p>
      </div>

      <Button variant={'outline'}>Seguir</Button>
    </section>
  )
}
