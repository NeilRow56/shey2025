import React from 'react'
import { Step } from './form'
import { useFormContext } from 'react-hook-form'
import { useFormControls } from '../hooks/useForm'
import { Button } from '@/components/ui/button'
import { SubmitButton } from '@/components/shared/submit-button'

const FormFooter = ({ steps }: { steps: Step[] }) => {
  const {
    handleBack,
    handleNext,
    hasNextPage,
    hasPreviousPage,
    isFinalPage,
    currentPageIndex
  } = useFormControls()
  const { trigger } = useFormContext()

  if (isFinalPage) {
    return (
      <div className='flex w-full justify-between px-7'>
        <Button type='button' onClick={handleBack} disabled={!hasPreviousPage}>
          Back
        </Button>
        <SubmitButton variant='create' text='Submit ' />
      </div>
    )
  }
  return (
    <div className='flex w-full justify-between px-7'>
      <Button onClick={handleBack} type='button' disabled={!hasPreviousPage}>
        Back
      </Button>
      <Button
        onClick={async () => {
          const res = await trigger(steps[currentPageIndex].inputs, {
            shouldFocus: true
          })
          if (!res) {
            return
          }
          handleNext()
        }}
        type='button'
        disabled={!hasNextPage}
      >
        Next
      </Button>
    </div>
  )
}

export default FormFooter
