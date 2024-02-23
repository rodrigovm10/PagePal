import Link from 'next/link'

export function LinkPagepal() {
  return (
    <h1 className='font-bold text-3xl text-center mb-5'>
      <Link
        href='/'
        scroll
        prefetch
      >
        PagePal
      </Link>
    </h1>
  )
}
