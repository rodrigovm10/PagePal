import { FaCheckCircle } from 'react-icons/fa'

import { CardPricingWrapper } from '@client/components/membership/card-pricing-wrapper'

export function PricingCardFree() {
  return (
    <CardPricingWrapper
      headerLabel='0 /usuario'
      title='Plan gratuito'
      showButton={true}
      textButton={'Registrate'}
      showPopular={false}
      firstCard
    >
      <main>
        <ul className='space-y-3'>
          <li className='flex gap-x-2'>
            <FaCheckCircle className='text-emerald-500 size-4 my-auto' /> Leer 3 historias diarias
          </li>
          <li className='flex gap-x-2 items-start'>
            <FaCheckCircle className='text-emerald-500 size-4 my-auto' />
            Acceso a 10 historias en favoritos
          </li>
        </ul>
      </main>
    </CardPricingWrapper>
  )
}
