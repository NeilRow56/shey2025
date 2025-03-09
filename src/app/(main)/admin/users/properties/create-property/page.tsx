import React from 'react'

import { PageTitle } from '@/components/shared/PageTitle'
import CreatePropertyForm from './create-property-form/property-form/form'

const CreatePropertyPage = async () => {
  return (
    <div>
      <div className='mt-8'>
        <PageTitle title='Create Property' />
        <div className='mx-auto max-w-screen-xl'>
          <CreatePropertyForm />
        </div>
      </div>
    </div>
  )
}

export default CreatePropertyPage
