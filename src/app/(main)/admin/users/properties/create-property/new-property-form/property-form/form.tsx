'use client'

import React from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { formSchema, FormSchemaType } from '@/lib/validation'
import { useForm } from 'react-hook-form'
import PersonalInformation from '../steps/personalInformation'
import { FormControlsProvider } from '../hooks/useForm'
import { Form } from '@/components/ui/form'

import FormHeader from './formHeader'
import FormFooter from './formFooter'
import AddressInformation from '../steps/addressInformation'
import WorkExperience from '../steps/workExperience'
import ResumeUploader from '../steps/resumeUploader'
import RenderComponent from './renderComponent'

export type Step = {
  id: string
  title: string
  description: string
  component: () => React.JSX.Element
  inputs: (keyof FormSchemaType)[]
}

const steps = [
  {
    id: '1',
    title: 'Personal Information',
    description: 'Tell us about yourself',
    component: PersonalInformation,
    inputs: ['firstName', 'lastName', 'email', 'phone']
  },
  {
    id: '2',
    title: 'Address',
    description: 'Enter your address information.',
    component: AddressInformation,
    inputs: ['country', 'county', 'town', 'address', 'postCode']
  },
  {
    id: '3',
    title: 'Work Experience',
    description:
      'Enter your work experience. This information will be used to evaluate your application.',
    component: WorkExperience,
    inputs: ['jobs']
  },
  {
    id: '4',
    title: 'Resume',
    description:
      'Upload your resume. This information helps us to know more about you.',
    component: ResumeUploader,
    inputs: ['resume']
  }
] satisfies Step[]

const NewPropertyForm = () => {
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
      jobs: []
    }
  })

  const onSubmit = (values: FormSchemaType) => {
    console.log(values)
  }
  return (
    <FormControlsProvider steps={steps}>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='flex flex-col justify-between space-y-8 py-5'
        >
          <FormHeader steps={steps} />
          <RenderComponent steps={steps} />
          <FormFooter steps={steps} />
        </form>
      </Form>
    </FormControlsProvider>
  )
}

export default NewPropertyForm
