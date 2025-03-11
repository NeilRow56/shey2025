'use client'

import React from 'react'
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
import Link from 'next/link'
import { Logo } from '../shared/logo'
import { ThemeToggle } from './theme-toggle'
export default function Navbar() {
  return (
    <>
      <header className='container mx-auto flex h-16 items-center justify-between gap-4 p-4'>
        <Logo />
        <div className='items-center justify-center space-x-4'>
          <Link className='hover:font-bold hover:text-purple-500' href='/admin'>
            Admin
          </Link>
          <Link
            className='hover:font-bold hover:text-purple-500'
            href='/admin/users/properties'
          >
            Properties
          </Link>
          <Link
            className='hover:font-bold hover:text-purple-500'
            href='/admin/subscriptions'
          >
            Subscriptions
          </Link>
          <Link
            className='hover:font-bold hover:text-purple-500'
            href='/admin/users'
          >
            Users
          </Link>
        </div>
        <div>
          <SignedOut>
            <SignInButton />
            <SignUpButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </header>

      <ThemeToggle />
    </>
  )
}
