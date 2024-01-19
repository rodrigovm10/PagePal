import { FaCheck } from 'react-icons/fa'

import { CardPricingWrapper } from '@client/components/membership/card-pricing-wrapper'

export function PricingCardFree() {
  return (
    <CardPricingWrapper
      headerLabel='$0'
      title='Plan gratis'
      showButton={false}
    >
      <main>
        <ul>
          <li className='flex gap-x-2'>
            <FaCheck className='text-emerald-500 size-3' /> Leer 3 historias diarias
          </li>
          <li className='flex gap-x-2 items-start'>
            <FaCheck className='text-emerald-500 size-3' />
            Acceso a 10 historias en favoritos
          </li>
        </ul>
      </main>
    </CardPricingWrapper>
  )
}
