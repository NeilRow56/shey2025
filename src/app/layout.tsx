import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from 'next-themes'
import { Toaster } from '@/components/ui/sonner'
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
import { Suspense } from 'react'
import Loading from './loading'
import { APP_DESCRIPTION, APP_NAME } from '@/lib/constants'

// import ResponsiveNavbar from '@/components/navbar/responsive-nav'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    template: `%s | Shey Properties`,
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
      <html
        lang='en'
        suppressHydrationWarning
        className='scroll-smooth antialiased'
      >
        <body className={`${inter.className} antialiased`}>
          <ThemeProvider
            attribute='class'
            defaultTheme='light'
            enableSystem
            disableTransitionOnChange
          >
            <Suspense fallback={<Loading />}>
              <header className='flex h-16 items-center justify-end gap-4 border border-b p-4'>
                <SignedOut>
                  <SignInButton />
                  <SignUpButton />
                </SignedOut>
                <SignedIn>
                  <UserButton />
                </SignedIn>
              </header>
              {children}
            </Suspense>
            <Toaster />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
