// const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

import { Button } from '@/components/ui/button'
import { currentUser } from '@clerk/nextjs/server'
import Link from 'next/link'

const HomePage = async () => {
  // await delay(5000)

  const loggedInUser = await currentUser()
  if (!loggedInUser)
    return (
      <div>
        <h1>No logged in user</h1>
      </div>
    )
  return (
    <div className='mt-24 flex flex-col items-center justify-center space-y-5'>
      <div className='flex items-center'>
        <Button
          asChild
          size='lg'
          className='rounded-full bg-green-500 px-6 py-6 text-xl font-semibold text-white transition-all duration-200 hover:bg-green-500/70 md:px-8 md:py-2.5'
        >
          <Link href='/sign-in'>Join Now</Link>
        </Button>
      </div>
      <h1>Clerk user id: {loggedInUser?.id} </h1>
      <h1>Clerk user email: {loggedInUser?.emailAddresses[0].emailAddress}</h1>
    </div>
  )
}

export default HomePage
