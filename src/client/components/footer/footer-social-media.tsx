import Link from 'next/link'
import { IconBrandFacebook, IconBrandInstagram } from '@tabler/icons-react'

export function FooterSocialMedia() {
  return (
    <section className='flex flex-row gap-5 '>
      <li>
        <Link
          href='https://www.facebook.com/profile.php?id=61556603980576'
          target='_blank'
        >
          <IconBrandFacebook />
        </Link>
      </li>
      {/* <li>
        <Link
          href='https://www.instagram.com/rodrigo.vm_444/'
          target='_blank'
        >
          <IconBrandInstagram />
        </Link>
      </li> */}
    </section>
  )
}
