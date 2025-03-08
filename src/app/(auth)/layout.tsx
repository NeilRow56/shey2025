import { Logo } from '@/components/shared/logo'

export default function AuthLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className='flex h-screen flex-col items-center justify-center'>
      {children}
    </div>
  )
}
