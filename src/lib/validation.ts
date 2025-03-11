import { z } from 'zod'

import {
  convertMetricsToBytes,
  FileExtension,
  getFormattedFileSize,
  getMimeTypes,
  MimeType
} from '@/lib/files'

const EmailValidationSchema = z.string().email()

const jobSchema = z
  .object({
    title: z.string().min(2).max(70),
    company: z.string().min(2).max(90),
    from: z.date(),
    to: z.date(),
    description: z.string().min(2).max(500)
  })
  .refine(data => !data.from || !data.to || data.from <= data.to, {
    message: 'From date should be less than To date'
  })

export const MAX_RESUME_SIZE_IN_BYTES = convertMetricsToBytes(10, 'MB')
export const VALID_RESUME_FILE_EXTENSIONS: FileExtension[] = ['.pdf']
export const MAX_FILES = 2

const ResumeValidationSchema = z.instanceof(File).superRefine((file, ctx) => {
  if (file.size <= 0) {
    ctx.addIssue({
      code: 'custom',
      message: 'Cannot upload empty file',
      path: ['resume']
    })
  }

  if (file.size >= MAX_RESUME_SIZE_IN_BYTES) {
    ctx.addIssue({
      code: 'custom',
      message: `File size cannot be greater than ${getFormattedFileSize(MAX_RESUME_SIZE_IN_BYTES)}`,
      path: ['resume']
    })
  }

  if (
    !getMimeTypes(VALID_RESUME_FILE_EXTENSIONS).includes(file.type as MimeType)
  ) {
    ctx.addIssue({
      code: 'custom',
      message: `Only ${VALID_RESUME_FILE_EXTENSIONS.join(', ')} type are allowed`,
      path: ['resume']
    })
  }
})

export const formSchema = z.object({
  firstName: z
    .string()
    .min(2, { message: 'First name must be at least 2 characters long' })
    .max(70, { message: 'First name must be at most 70 characters long' }),
  lastName: z
    .string()
    .min(2, { message: 'Last name must be at least 2 characters long' })
    .max(70, { message: 'Last name must be at most 70 characters long' }),
  email: EmailValidationSchema,
  phone: z.string(),
  country: z
    .string()
    .min(2, { message: 'Country must be at least 2 characters' })
    .max(70, { message: 'Country must be at most 70 characters' }),
  county: z
    .string()
    .min(2, { message: 'County must be at least 2 characters' })
    .max(70, { message: 'County must be at most 70 characters' }),
  town: z
    .string()
    .min(2, { message: 'Town must be at least 2 characters' })
    .max(70, { message: 'Town must be at most 70 characters' }),
  address: z
    .string()
    .min(2, { message: 'Address must be at least 2 characters' })
    .max(100, { message: 'Address must be at most 100 characters' }),
  postCode: z.string().optional(),

  jobs: z.array(jobSchema).min(1, {
    message: 'At least one job should be added'
  }),

  resume: z.array(ResumeValidationSchema)
})

export type FormSchemaType = z.infer<typeof formSchema>
