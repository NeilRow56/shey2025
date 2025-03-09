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
  return <div>Home Page</div>
}

export default HomePage
