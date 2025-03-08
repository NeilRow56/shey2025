// const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

import { currentUser } from '@clerk/nextjs/server'

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
      <h1>Clerk user id: {loggedInUser?.id} </h1>
      <h1>Clerk user email: {loggedInUser?.emailAddresses[0].emailAddress}</h1>
    </div>
  )
}

export default HomePage
