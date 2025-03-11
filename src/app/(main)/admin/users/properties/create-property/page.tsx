import React from 'react'

import { PageTitle } from '@/components/shared/PageTitle'
import NewPropertyForm from './new-property-form/property-form/form'

const CreatePropertyPage = async () => {
  return (
    <>
      <div className='container mx-auto mt-8'>
        <PageTitle title='Create Property' />
        <div className=''>
          <NewPropertyForm />
        </div>
      </div>
    </>
  )
}

export default CreatePropertyPage
