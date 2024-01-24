import { CardPricingWrapper } from '@client/components/membership/card-pricing-wrapper'
import { FaCheckCircle } from 'react-icons/fa'

export function PricingCardMonthly() {
  return (
    <CardPricingWrapper
      headerLabel='$69/mensual'
      title='Miembro de PagePal'
      showButton={true}
      showPopular={false}
    >
      <main>
        <ul>
          <li className='flex gap-x-2'>
            <FaCheckCircle className='text-emerald-500 size-4 my-auto' /> Todos los beneficios del
            plan gratis
          </li>
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
        </ul>
      </main>
    </CardPricingWrapper>
  )
}
