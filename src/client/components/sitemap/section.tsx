import Link from 'next/link'

interface SectionProps {
  title: string
  href: string
  description: string
  isBlank?: boolean
  icon: React.ReactNode
}

export function Section({ title, icon, href, description, isBlank }: SectionProps) {
  return (
    <Link
      href={href}
      target={isBlank ? '_blank' : '_self'}
      scroll
      className='text-center w-full md:w-auto bg-primary rounded-sm p-2 hover:animate-pulse hover:transition-all'
    >
      <h3 className='flex flex-col font-medium text-center'>
        <span className='self-center'>{icon}</span>
        {title}
      </h3>
      <p className='opacity-80'>{description}</p>
    </Link>
  )
}
