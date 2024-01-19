import { FaCheck } from 'react-icons/fa'

import { CardPricingWrapper } from '@client/components/membership/card-pricing-wrapper'

export function PricingCardAnually() {
  return (
    <CardPricingWrapper
      headerLabel='$662.5/anual'
      title='Miembro de PagePal anual'
      showButton={true}
    >
      <main>
        <ul>
          <li className='flex gap-x-2'>
            <FaCheck className='text-emerald-500 size-3' /> Todos los beneficios de un miembro de
            PagePal
          </li>
          <li className='flex gap-x-2 items-start'>
            <FaCheck className='text-emerald-500 size-3' />
            Descuento del 10%
          </li>
          <li className='flex gap-x-2 items-start'>
            <FaCheck className='text-emerald-500 size-3' />
            Un solo pago
          </li>
        </ul>
      </main>
    </CardPricingWrapper>
  )
}
