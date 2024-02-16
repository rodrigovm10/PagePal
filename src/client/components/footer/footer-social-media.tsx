import Link from 'next/link'
import { FaFacebook, FaInstagram } from 'react-icons/fa'

export function FooterSocialMedia() {
  return (
    <section className='flex flex-row gap-5 '>
      <li>
        <Link
          href='https://www.facebook.com/profile.php?id=100011759464028'
          target='_blank'
        >
          <FaFacebook />
        </Link>
      </li>
      <li>
        <Link
          href='https://www.instagram.com/rodrigo.vm_444/'
          target='_blank'
        >
          <FaInstagram />
        </Link>
      </li>
    </section>
  )
}
