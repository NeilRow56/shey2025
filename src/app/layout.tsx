import { Inter } from 'next/font/google'
import './globals.css'
import { Metadata } from 'next'
import { APP_DESCRIPTION, APP_NAME } from '@/lib/constants'
import { Suspense } from 'react'

import { ThemeProvider } from 'next-themes'
import { Toaster } from 'sonner'
import Loading from './loading'
import { ClerkProvider } from '@clerk/nextjs'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    template: `%s | WpAccPac`,
    default: APP_NAME
  },
  description: APP_DESCRIPTION
  //metadataBase: new URL(SERVER_URL)  - FOR PRODUCTION ONLY
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider afterSignOutUrl={'/sign-in'}>
      <html lang='en' suppressHydrationWarning>
        <body className={`${inter.className} antialiased`}>
          <ThemeProvider
            attribute='class'
            defaultTheme='system'
            enableSystem
            disableTransitionOnChange
          >
            <main className='flex h-screen flex-col'>
              <Suspense fallback={<Loading />}>{children}</Suspense>
            </main>
            <Toaster />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
