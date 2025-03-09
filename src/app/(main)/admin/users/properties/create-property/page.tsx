import React from 'react'

import { Property } from '@prisma/client'
import { PageTitle } from '@/components/shared/PageTitle'

const CreatePropertyPage = async () => {
  return (
    <div>
      <div className='mt-8'>
        <PageTitle title='Create Property' />
        Properties Form
      </div>
    </div>
  )
}

export default CreatePropertyPage
