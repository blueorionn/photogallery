'use client'
import { useReadLocalStorage } from 'usehooks-ts'
import { AlertCircle } from 'lucide-react'
import { PhotoProvider } from '@/provider/provider'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import ImageGallery from './ImageGallery'

export default function PhotoWrapper({ endpoint }: { endpoint: string }) {
  const resourceURL = useReadLocalStorage<string>('resource-url')
  const urlRegex =
    /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(:\d+)?(\/.*)?$/

  if (!resourceURL || !urlRegex.test(resourceURL)) {
    return (
      <>
        <PhotoProvider>
          <div className='flex h-full w-full items-center justify-center'>
            <Alert variant='destructive' className='max-w-xl rounded-sm'>
              <AlertCircle className='h-4 w-4' />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>
                Resource URL is either not set or invalid. Please set a valid
                URL in the
              </AlertDescription>
            </Alert>
          </div>
        </PhotoProvider>
      </>
    )
  }

  return (
    <>
      <PhotoProvider>
        <section className='mx-auto my-8 w-full p-4 lg:p-8'>
          <ImageGallery endpoint={endpoint} />
        </section>
      </PhotoProvider>
    </>
  )
}
