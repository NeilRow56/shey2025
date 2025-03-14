'use client'

import { Button } from '@/components/ui/button'
import { useFormStatus } from 'react-dom'
import { Loader2 } from 'lucide-react'

interface iAppProps {
  text: string
  variant?:
    | 'default'
    | 'destructive'
    | 'outline'
    | 'secondary'
    | 'ghost'
    | 'link'
    | 'create'
    | null
    | undefined
}

export function SubmitButton({ text, variant }: iAppProps) {
  const { pending } = useFormStatus()
  return (
    <>
      {pending ? (
        <Button disabled className='w-[150px]' variant={variant}>
          <Loader2 className='mr-2 size-4 animate-spin' /> Please wait...
        </Button>
      ) : (
        <Button type='submit' className='w-[100px]' variant={variant}>
          {text}
        </Button>
      )}
    </>
  )
}
