import { TextWavy } from '@/client/components/text-wavy'
import { PricingCardAnually } from '@client/components/membership/pricing-card-anually'
import { PricingCardFree } from '@client/components/membership/pricing-card-free'
import { PricingCardMonthly } from '@client/components/membership/pricing-card-monthly'

export default function MembershipPage() {
  return (
    <main className='w-[85vw] lg:w-[70vw] mx-auto'>
      <section className='text-center my-4'>
        <h1
          className='
          font-bold text-5xl pt-10
          lg:pt-0 lg:text-5xl
          '
        >
          Apoya{' '}
          <TextWavy
            isWavy={false}
            text='historias '
          />
          humanas
        </h1>
        <h2 className='text-pretty mx-auto mt-10 md:mt-12 font-semibold'>
          Conviértete en miembro para <span className='text-primary'>leer sin límites</span>
        </h2>
      </section>

      <div className='flex flex-col justify-center items-center gap-y-10 lg:flex-row lg:gap-x-10 lg:items-start my-10'>
        <PricingCardFree />
        <PricingCardMonthly />
        <PricingCardAnually />
      </div>
    </main>
  )
}
