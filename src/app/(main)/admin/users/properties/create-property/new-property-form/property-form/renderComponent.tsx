import React from 'react'

import { motion } from 'framer-motion'

import { useFormControls } from '../hooks/useForm'
import { Step } from './form'

const RenderComponent = ({ steps }: { steps: Step[] }) => {
  const { currentPageIndex, delta } = useFormControls()

  const step = steps[currentPageIndex]
  const Comp = step.component
  if (!Comp) return null
  return (
    <motion.div
      key={currentPageIndex}
      initial={{ opacity: 0, x: delta > 0 ? '10%' : '-10%' }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, ease: 'easeInOut', type: 'tween' }}
      className='flex flex-1 flex-col gap-y-4 px-7'
    >
      <div>
        <h2 className='text-4xl leading-relaxed font-bold tracking-tight'>
          {step.title}
        </h2>
        <p className='text-foreground/70 text-sm'>{step.description}</p>
      </div>
      {Comp && <Comp />}
    </motion.div>
  )
}

export default RenderComponent
