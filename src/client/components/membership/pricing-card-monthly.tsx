import { CardPricingWrapper } from '@client/components/membership/card-pricing-wrapper'
import { FaCheckCircle } from 'react-icons/fa'

export function PricingCardMonthly() {
  return (
    <CardPricingWrapper
      headerLabel='69 /usuario/mensual'
      title='Miembro de PagePal'
      textButton={'Inicia ahora'}
    >
      <main>
        <ul className='space-y-3'>
          <li className='flex gap-x-2'>
            <FaCheckCircle className='text-emerald-500 size-4 my-auto' />
            Leer historias de miembros
          </li>
          <li className='flex gap-x-2'>
            <FaCheckCircle className='text-emerald-500 size-4 my-auto' />
            Tus historias se recomendarán más
          </li>
          <li className='flex gap-x-2'>
            <FaCheckCircle className='text-emerald-500 size-4 my-auto' />
            Acceso a una comunidad de solo miembros
          </li>
          <li className='flex gap-x-2'>
            <FaCheckCircle className='text-emerald-500 size-4 my-auto' />
            Una insignia que te diferencia del plan gratis
          </li>
          <li className='flex gap-x-2'>
            <FaCheckCircle className='text-emerald-500 size-4 my-auto' />
            Acceso ilimitado a historias en favoritos
          </li>
        </ul>
      </main>
    </CardPricingWrapper>
  )
}
