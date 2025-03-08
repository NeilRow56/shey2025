import Header from '@/components/shared/header'

import { Toaster } from 'sonner'

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className='h-full'>
      <Header />

      <main className='container mx-auto flex h-lvh gap-2 px-4'>
        {children}

        <Toaster />
      </main>
    </div>
  )
}
