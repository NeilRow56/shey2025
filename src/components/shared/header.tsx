import { GetCurrentUserFromDB } from '@/actions/user'
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
import Link from 'next/link'

export default async function Header() {
  await GetCurrentUserFromDB()
  return (
    <header className='container mx-auto flex h-16 items-center justify-between gap-4 p-4'>
      <div className='items-center space-x-4 text-blue-600'>
        <Link href='/'>Home</Link>
        <Link href='/admin'>Admin</Link>
      </div>

      <SignedOut>
        <SignInButton />
        <SignUpButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </header>
  )
}
