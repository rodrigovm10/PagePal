import { Footer } from '@/client/components/footer'

export default function PagesFooterLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <Footer />
    </>
  )
}
