interface HeaderProps {
  title: string
  label: string
}

export function Header({ label, title }: HeaderProps) {
  const [price, people, pricing] = label.split('/')

  return (
    <div className='w-full flex flex-col gap-y-4 items-center justify-center'>
      <h1 className='text-2xl font-black self-start'>{title}</h1>
      <p className='self-start'>
        <span className='mb-auto'>$ </span>
        <span className='font-black text-4xl'>{price}</span>
        <span className='text-md'>
          /{people}/{pricing}
        </span>
      </p>
    </div>
  )
}
