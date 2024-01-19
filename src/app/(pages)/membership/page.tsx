import { PricingCardAnually } from '@client/components/membership/pricing-card-anually'
import { PricingCardFree } from '@client/components/membership/pricing-card-free'
import { PricingCardMonthly } from '@client/components/membership/pricing-card-monthly'

export default function MembershipPage() {
  return (
    <>
      <div className='flex flex-col justify-center items-center gap-y-10 lg:flex-row lg:gap-x-10 lg:items-stretch'>
        <PricingCardFree />
        <PricingCardMonthly />
        <PricingCardAnually />
      </div>
    </>
  )
}
