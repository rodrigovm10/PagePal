import { PricingCardAnually } from '@client/components/membership/pricing-card-anually'
import { PricingCardFree } from '@client/components/membership/pricing-card-free'
import { PricingCardMonthly } from '@client/components/membership/pricing-card-monthly'

export default function MembershipPage() {
  return (
    <>
      <article>
        <h1>Apoya historias humanas</h1>
        <h2>Conviertete en un miembro de PagePal</h2>
      </article>
      <div className='flex flex-col justify-center items-center gap-y-10 lg:flex-row lg:gap-x-10 lg:items-start  mt-10'>
        <PricingCardFree />
        <PricingCardMonthly />
        <PricingCardAnually />
      </div>
    </>
  )
}
