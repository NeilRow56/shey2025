'use server'

import { prisma } from '@/lib/prisma'
import { currentUser } from '@clerk/nextjs/server'

export const GetCurrentUserFromDB = async () => {
  try {
    //check if user already esists

    const clerkUser = await currentUser()
    let dbUser = null

    dbUser = await prisma.user.findUnique({
      where: {
        clerkUserId: clerkUser?.id
      }
    })
    if (dbUser) {
      return {
        data: dbUser
      }
    }

    // If no dbUser
    const newUser = {
      clerkUserId: clerkUser?.id as string,
      username: clerkUser?.username as string,
      email: clerkUser?.emailAddresses[0].emailAddress as string,
      profilePic: clerkUser?.imageUrl as string
    }

    const result = await prisma.user.create({
      data: newUser
    })
    return { data: result }
  } catch (error) {
    return {
      message: 'Database error failed to get user'
    }
  }
}
