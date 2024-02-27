import { Footer } from '@/client/components/footer'

export default function PagesFooterLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className='flex flex-col min-h-screen'>
      {children}
      <Footer />
    </main>
  )
}
