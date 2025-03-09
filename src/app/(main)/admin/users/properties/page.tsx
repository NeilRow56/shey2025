import { LinkButton } from '@/components/shared/LinkButton'
import { PageTitle } from '@/components/shared/PageTitle'
import React, { Suspense } from 'react'

const PropertiesPage = () => {
  return (
    <div className='container'>
      <div className='mt-16 mb-5 flex w-full items-center justify-between'>
        <PageTitle title='Properties ' />

        <LinkButton
          title='Create property'
          href='/admin/users/properties/create-property'
        />
      </div>
      {/* <Filters /> */}
      PROPERTIES TABLE
    </div>
  )
}

export default PropertiesPage
