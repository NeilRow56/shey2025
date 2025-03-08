import { Logo } from '@/components/shared/logo'

export default function AuthLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center'>
      <span className='mb-4 flex items-center'>
        <div className='mr-4 text-2xl'>🔐</div>
        <Logo />
      </span>

      {children}
    </div>
  )
}
