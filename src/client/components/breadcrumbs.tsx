import Link from 'next/link'

type Path = {
  name: string
  href: string
}

export function BreadCrumbs({ paths }: { paths: Path[] }) {
  return (
    <nav aria-label='breadcrumbs'>
      <ol className='flex '>
        {paths.map((path, i) => (
          <li key={i}>
            {' '}
            <span className='no-underline'> {i + 1 > paths.length || i === 0 ? '' : '  > '}</span>
            <Link
              href={path.href}
              className='underline opacity-80 hover:opacity-100 hover:text-primary'
            >
              {path.name}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  )
}
