import Link from 'next/link'
import { Button } from '../ui/button'

type LinkButtonProps = {
  title: string
  href: string
}

export const LinkButton = ({ title, href }: LinkButtonProps) => {
  return (
    <Button
      asChild
      variant='outline'
      className='border-solid border-[#1B4242] p-2 text-lg text-[#1B4242]'
    >
      <Link className='no-underline' href={href}>
        {title}
      </Link>
    </Button>
  )
}
