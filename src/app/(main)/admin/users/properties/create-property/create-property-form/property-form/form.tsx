'use client'

import React from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { formSchema, FormSchemaType } from '@/lib/validation'
import { useForm } from 'react-hook-form'

export type Step = {
  id: string
  title: string
  description: string
  component: () => React.JSX.Element
  inputs: (keyof FormSchemaType)[]
}

const CreatePropertyForm = () => {
  const form = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      country: '',
      county: '',
      town: '',
      address: '',
      postCode: '',
      jobs: [],
      github: '',
      portfolio: ''
    }
  })
  return <div>Create Property Form</div>
}

export default CreatePropertyForm
