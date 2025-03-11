import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'

import { FormSchemaType } from '@/lib/validation'

import React from 'react'
import { useFormContext } from 'react-hook-form'

const AddressInformation = () => {
  const { control, setValue } = useFormContext<FormSchemaType>()

  return (
    <div className='grid w-full grid-cols-12 gap-4'>
      <FormField
        control={control}
        name='address'
        render={({ field }) => (
          <FormItem className='col-span-12 space-y-3'>
            <FormLabel htmlFor='address' className='flex items-center'>
              Address
            </FormLabel>
            <div className='flex items-center gap-4'>
              <FormControl>
                <Input
                  type='address'
                  placeholder='Enter your street address'
                  className='flex-grow'
                  id='address'
                  {...field}
                />
              </FormControl>
            </div>

            <FormMessage />
          </FormItem>
        )}
      />
      <div className='col-span-4 space-y-2'>
        <FormField
          control={control}
          name='town'
          render={({ field }) => (
            <FormItem className='space-y-3'>
              <FormLabel htmlFor='town' className='flex items-center'>
                Town
              </FormLabel>
              <FormControl>
                <Input
                  type='text'
                  placeholder='Enter your Town'
                  id='town'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <div className='col-span-4 space-y-2'>
        <FormField
          control={control}
          name='county'
          render={({ field }) => (
            <FormItem className='space-y-3'>
              <FormLabel htmlFor='county' className='flex items-center'>
                County
              </FormLabel>
              <FormControl>
                <Input
                  type='text'
                  placeholder='Enter your County'
                  id='county'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <div className='col-span-4 space-y-2'>
        <FormField
          control={control}
          name='country'
          render={({ field }) => (
            <FormItem className='space-y-3'>
              <FormLabel htmlFor='country' className='flex items-center'>
                Country
              </FormLabel>
              <FormControl>
                <Input
                  type='text'
                  placeholder='Enter your Country'
                  id='country'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <div className='col-span-6 space-y-2'>
        <FormField
          control={control}
          name='postCode'
          render={({ field }) => (
            <FormItem className='space-y-3'>
              <FormLabel htmlFor='postCode' className='flex items-center'>
                Postal Code
              </FormLabel>
              <FormControl>
                <Input
                  type='text'
                  placeholder='Enter your Postal code'
                  id='postCode'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  )
}

export default AddressInformation
