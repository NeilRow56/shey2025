import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { FormSchemaType } from '@/lib/validation'

import React from 'react'
import { useFormContext } from 'react-hook-form'

const PersonalInformation = () => {
  const { control } = useFormContext<FormSchemaType>()
  return (
    <div className='grid w-full grid-cols-4 gap-4'>
      <FormField
        control={control}
        name='firstName'
        render={({ field }) => (
          <FormItem className='col-span-2'>
            <FormLabel htmlFor='firstName'>First Name</FormLabel>
            <FormControl>
              <Input
                type='text'
                placeholder='Enter your first name'
                id='firstName'
                {...field}
              />
            </FormControl>

            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name='lastName'
        render={({ field }) => (
          <FormItem className='col-span-2'>
            <FormLabel htmlFor='lastName'>Last Name</FormLabel>
            <FormControl>
              <Input
                type='text'
                placeholder='Enter Your last Name'
                id='lastName'
                {...field}
              />
            </FormControl>

            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name='email'
        render={({ field }) => (
          <FormItem className='col-span-2'>
            <FormLabel htmlFor='email'>Email</FormLabel>
            <FormControl>
              <Input
                type='email'
                placeholder='Enter Your Email'
                id='email'
                {...field}
              />
            </FormControl>

            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name='phone'
        render={({ field }) => (
          <FormItem className='col-span-2'>
            <FormLabel htmlFor='phone'>Phone</FormLabel>
            <FormControl>
              <Input
                type='text'
                id='phone'
                placeholder='Enter Your Phone Number'
                {...field}
              />
            </FormControl>

            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  )
}

export default PersonalInformation
