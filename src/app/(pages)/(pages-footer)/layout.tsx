import { Footer } from '@/client/components/footer'

export default function PagesFooterLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className='mt-20'></div>
      {children}
      <Footer />
    </>
  )
}
