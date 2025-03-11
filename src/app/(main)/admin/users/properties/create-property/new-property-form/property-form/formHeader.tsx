import React from 'react'
import { Step } from './form'

import { useFormContext } from 'react-hook-form'

import { toast } from 'sonner'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import { useFormControls } from '../hooks/useForm'
import { FormSchemaType } from '@/lib/validation'

const FormHeader = ({ steps }: { steps: Step[] }) => {
  const { currentPageIndex, setPage } = useFormControls()
  const {
    trigger,
    formState: { errors }
  } = useFormContext<FormSchemaType>()
  return (
    <div className='flex justify-between gap-3 px-7'>
      {steps.map((step, idx) => {
        const isEnabled = idx > currentPageIndex + 1 || idx === currentPageIndex // Only Next one button and all prev buttons are enabled

        const hasError = step.inputs.some(key => errors[key] !== undefined)

        return (
          <button
            type='button'
            disabled={isEnabled}
            onClick={async () => {
              const res = await trigger(steps[currentPageIndex].inputs, {
                shouldFocus: true
              })
              if (!res) {
                toast.error('Please fill the required fields')
                return
              }
              setPage(idx)
            }}
            className={cn(
              'flex w-full flex-col justify-between gap-4 text-left disabled:cursor-default',
              idx <= currentPageIndex && 'text-purple-600',
              idx > currentPageIndex && 'opacity-50',
              hasError && 'text-red-600'
            )}
            key={step.id}
          >
            <p className='text-sm'>
              {idx + 1}. {step.title}
            </p>

            <motion.div
              className={cn(
                'relative h-3 w-full rounded-sm',
                hasError ? 'bg-red-600/50' : 'bg-purple-600/50'
              )}
            >
              <motion.div
                initial={{ width: '0%' }}
                transition={{
                  duration: 0.3,
                  type: 'spring',
                  stiffness: 50 // Lower value makes it less bouncy
                }}
                animate={{
                  width: `${
                    idx === currentPageIndex
                      ? '100%'
                      : idx < currentPageIndex
                        ? '100%'
                        : '0%'
                  }`
                }}
                className={cn(
                  'h-full rounded-sm',
                  hasError ? 'bg-red-600' : 'bg-purple-600'
                )}
              />
            </motion.div>
          </button>
        )
      })}
    </div>
  )
}

export default FormHeader
