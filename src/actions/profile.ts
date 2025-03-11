'use server'

import * as z from 'zod'

import { Profile } from '@prisma/client'
import { GetCurrentUserFromDB } from './user'
import { prisma } from '@/lib/prisma'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { formSchema } from '@/lib/validation'
import { auth } from '@clerk/nextjs/server'

export const createProfile = async (data: z.infer<typeof formSchema>) => {
  const { userId } = await auth()

  if (!userId) {
    return {
      error: 'Unauthorized'
    }
  }

  const validatedFields = formSchema.safeParse(data)
  if (!validatedFields.success) {
    return { error: 'Invalid fields!' }
  }
  const {
    firstName,
    lastName,
    email,
    phone,
    address,
    town,
    county,
    country,
    postCode
  } = validatedFields.data

  let profile
  try {
    profile = await prisma.profile.create({
      data: {
        firstName,
        lastName,
        email,
        phone,
        address,
        town,
        county,
        country,
        postCode,
        userId: userId
      }
    })

    revalidatePath('/')

    return { success: 'Store creation successful!' }
  } catch (error) {
    return { message: 'Database Error: Failed to Update Settings.' }
  }
}
