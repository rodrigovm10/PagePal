import { FaCheckCircle } from 'react-icons/fa'

import { CardPricingWrapper } from '@client/components/membership/card-pricing-wrapper'

export function PricingCardAnually() {
  return (
    <CardPricingWrapper
      headerLabel='662.5 /usuario/anual'
      title='Miembro de PagePal anual'
      textButton={'Inicia ahora'}
      showPopular
    >
      <main>
        <ul className='space-y-3'>
          <li className='flex gap-x-2'>
            <FaCheckCircle className='text-emerald-500 size-4 my-auto' /> Todos los beneficios de un
            miembro de PagePal
          </li>
          <li className='flex gap-x-2 items-start'>
            <FaCheckCircle className='text-emerald-500 size-4 my-auto' />
            Descuento del 10%
          </li>
          <li className='flex gap-x-2 items-start'>
            <FaCheckCircle className='text-emerald-500 size-4 my-auto' />
            Un solo pago al año
          </li>
        </ul>
      </main>
    </CardPricingWrapper>
  )
}
