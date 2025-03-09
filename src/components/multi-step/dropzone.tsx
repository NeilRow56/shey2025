import React, { forwardRef } from 'react'
import { useDropzone } from 'react-dropzone'
import { cn } from '@/lib/utils' // Utility function for conditional class names
import { Upload, X } from 'lucide-react'

import type { FileExtension } from '@/lib/files'
import { toast } from 'sonner'
import { Button } from '../ui/button'
import { getMimeTypeMapping } from '@/lib/files'
import { getReactDropZoneErrorMessages } from '@/lib/files'
import { getFormattedFileSize } from '@/lib/files'
import { DEFAULT_ICON } from '@/lib/files'
import { getFileType } from '@/lib/files'

interface DropzoneInputProps {
  value: File[]
  onValueChange: (files: File[]) => void
  maxSizeInBytes: number
  className?: string
  maxFiles?: number
  description?: string
  allowedExtensions?: FileExtension[]
  multiple?: boolean
}

const DropzoneInput = forwardRef<HTMLDivElement, DropzoneInputProps>(
  (
    {
      value,
      onValueChange,
      className,
      maxFiles = Number.POSITIVE_INFINITY,
      allowedExtensions,
      description,
      maxSizeInBytes,
      multiple = false
    },
    ref
  ) => {
    const {
      getRootProps,
      getInputProps,
      isDragActive,
      isDragReject,
      fileRejections
    } = useDropzone({
      onDrop: files => {
        if (files.length + value.length > maxFiles) {
          toast.error(`You can only upload up to ${maxFiles} files`)
          return
        }
        onValueChange([
          ...value,
          ...files.filter(
            file => !value.some(existingFile => existingFile.name === file.name)
          )
        ])
      },
      accept: getMimeTypeMapping(allowedExtensions),
      maxSize: maxSizeInBytes,
      multiple: multiple,
      disabled: value.length >= maxFiles,
      maxFiles
    })

    const handleRemoveFile = (index: number) => {
      onValueChange(value.filter((f, i) => i !== index))
    }

    const dragError = getReactDropZoneErrorMessages(fileRejections)

    return (
      <div className='mx-auto w-full space-y-4'>
        <div
          {...getRootProps()}
          className={cn(
            'w-full cursor-pointer rounded-xl border-2 border-dashed p-8 text-center transition-all duration-500',
            isDragActive
              ? 'border-primary bg-primary/5'
              : 'border-input hover:bg-primary/5',
            isDragReject && 'border-red-500/40',
            className
          )}
        >
          <input {...getInputProps()} />
          <div className='flex flex-col items-center'>
            <Upload className='border-foreground/10 text-foreground/50 mb-4 size-14 rounded-full border p-3' />
            <p className='text-foreground/50'>
              {isDragActive
                ? 'Drop the files here...'
                : "Drag 'n' drop files here, or click to select files"}
            </p>
            <p
              className={cn(
                'text-foreground/50 mb-2 text-sm',
                !!isDragReject && 'text-destructive'
              )}
            >
              {Array.isArray(dragError) && dragError.length > 0
                ? dragError[0]
                : description
                  ? description
                  : `You can upload ${maxFiles} files (up to ${getFormattedFileSize(
                      maxSizeInBytes
                    )} each)`}
            </p>
          </div>
        </div>
        <FileList files={value} onRemove={handleRemoveFile} />
      </div>
    )
  }
)

DropzoneInput.displayName = 'DropzoneInput'

export default DropzoneInput

interface FileListProps {
  files: File[]
  onRemove: (index: number) => void
}

export function FileList({ files, onRemove }: FileListProps) {
  if (files.length === 0) {
    return null
  }

  return (
    <div className='mt-4'>
      <ul className='space-y-2'>
        {files.map((file, index) => {
          const FileType = getFileType(file)
          const Icon = FileType?.icon || DEFAULT_ICON

          return (
            <li
              key={`${file.name}-${index}`}
              className='flex items-center justify-between rounded-lg p-3 text-sm'
            >
              <div className='flex items-center space-x-2'>
                <Icon
                  className='h-5 w-5'
                  style={{ color: FileType?.themeColor }}
                />
                <span className='font-medium'>{file.name}</span>
                <span className='text-gray-400'>
                  ({getFormattedFileSize(file.size)})
                </span>
              </div>
              <Button
                variant='ghost'
                size='icon'
                onClick={() => onRemove(index)}
                className='text-gray-400 hover:text-red-500'
              >
                <X className='h-4 w-4' />
              </Button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
