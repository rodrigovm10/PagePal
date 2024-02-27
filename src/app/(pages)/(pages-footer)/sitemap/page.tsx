import { Section } from '@/client/components/sitemap/section'
import { IconDiamond, IconUser, IconLogin2 } from '@tabler/icons-react'

export default function SiteMapPage() {
  return (
    <main className='container space-y-5 text-white'>
      <h1 className='text-center bg-primary rounded-md p-2 text-lg font-bold'>Principal</h1>
      <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
        <Section
          href='/about-us'
          icon={<IconUser />}
          title='Sobre Nosotros'
          description='Página de información sobre PagePal'
        />
        <Section
          href='/membership'
          title='Membresía'
          icon={<IconDiamond />}
          description='Página de información sobre las membresías de PagePal'
        />
        <Section
          href='/login'
          title='Iniciar sesión'
          icon={<IconLogin2 />}
          description='Página para iniciar sesión en PagePal'
        />
        <Section
          href='/register'
          title='Registrate'
          icon={<IconDiamond />}
          description='Página para registrarse en PagePal'
        />
      </section>
      <h2 className='text-center bg-primary rounded-md p-2 text-lg font-bold'>Footer</h2>
      <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
        <Section
          href='/about-us'
          icon={<IconUser />}
          title='Sobre Nosotros'
          description='Página de información sobre PagePal'
        />
        <Section
          href='/membership'
          title='Membresía'
          icon={<IconDiamond />}
          description='Página de información sobre las membresías de PagePal'
        />
        <Section
          href='/login'
          title='Iniciar sesión'
          icon={<IconLogin2 />}
          description='Página para iniciar sesión en PagePal'
        />
        <Section
          href='/register'
          title='Registrate'
          icon={<IconDiamond />}
          description='Página para registrarse en PagePal'
        />
      </section>
    </main>
  )
}
