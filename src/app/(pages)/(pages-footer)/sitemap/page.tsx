import { Section } from '@/client/components/sitemap/section'
import {
  IconDiamond,
  IconUser,
  IconLogin2,
  IconLockSquare,
  IconShield,
  IconBrandFacebook,
  IconBrandInstagram
} from '@tabler/icons-react'

export default function SiteMapPage() {
  return (
    <main className='container space-y-5 text-white mt-24'>
      <h1 className='text-center font-bold text-3xl'>Mapa del sitio</h1>
      <h2 className='text-center bg-primary rounded-md p-2 text-lg font-bold'>Principal</h2>
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
      <section className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5'>
        <Section
          href='/privacy-pagepal'
          icon={<IconLockSquare />}
          title='Políticas de privacidad'
          description='Página de información sobre las políticas de privacidad de PagePal'
        />
        <Section
          href='/terms-pagepal'
          title='Términos y condiciones'
          icon={<IconShield />}
          description='Página de información sobre las membresías de PagePal'
        />
        <Section
          href='/about-us'
          icon={<IconUser />}
          title='Sobre Nosotros'
          description='Página de información sobre PagePal'
        />
        <Section
          href='https://www.facebook.com/profile.php?id=100011759464028'
          isBlank
          title='Facebook'
          icon={<IconBrandFacebook />}
          description='Página de facebook de PagePal'
        />
        <Section
          href='https://www.instagram.com/rodrigo.vm_444/'
          isBlank
          title='Instagram'
          icon={<IconBrandInstagram />}
          description='Página de instagram de PagePal'
        />
      </section>
    </main>
  )
}
