import { CardPricingWrapper } from '@client/components/membership/card-pricing-wrapper'

export function PricingCardMonthly() {
  return (
    <CardPricingWrapper
      headerLabel='$69/mensual'
      title='Miembro de PagePal'
      showButton={true}
    >
      <main>
        <ul>
          <li>Todos los beneficios del plan gratis</li>
          <li>Leer historias de miembros</li>
          <li>Tus historias se recomendarán más</li>
          <li>Acceso a una comunidad de solo miembros</li>
          <li>Una insignia que te diferencia del plan gratis</li>
        </ul>
      </main>
    </CardPricingWrapper>
  )
}
