'use client'

import { useEffect, useState } from 'react'
import { useWindowSize } from 'usehooks-ts'
import { AlertCircle } from 'lucide-react'
import 'react-grid-layout/css/styles.css'
import 'react-resizable/css/styles.css'
import { usePhotoProvider } from '@/provider/provider'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import Photo from './Photo'

export default function ImageGallery() {
  const { width } = useWindowSize()
  const [columns, setColumns] = useState(1)

  useEffect(() => {
    if (width >= 1024) setColumns(2) // Tablet View
    if (width >= 1280) setColumns(3) // Desktop View
  }, [width])

  /**
   * Necessary hooks and states for handling photos
   */
  const { state, dispatch } = usePhotoProvider()
  const [error, setError] = useState(false)

  // fetch initial photos
  useEffect(() => {
    // fetch photo function
    const fetchPhotos = async () => {
      try {
        const res = await fetch(`/api/photos?page=${state.currentPage}`)

        if (res.ok) {
          const data: {
            page: number
            result: {
              id: number
              uuid: string
              photoname: string
              tag: string
              height: number
              width: number
              delete: boolean
            }[]
          } = await res.json()

          dispatch({ type: 'Add Photos', payload: data.result })
        }
      } catch (error) {
        console.error(error)
        setError(true)
      }
    }

    fetchPhotos()
  }, [state.currentPage, dispatch])

  return (
    <>
      <div
        className='mx-auto p-4'
        style={{
          columnCount: columns,
          columnGap: '1rem',
        }}
      >
        {state.photos.map((photo, i) => (
          <div key={i} style={{ breakInside: 'avoid', marginBottom: '1rem' }}>
            <Photo photo={photo} />
          </div>
        ))}
      </div>

      <section className='w-full'>
        <div id='loader'></div>
        {error && (
          <div className='flex h-full w-full items-center justify-center'>
            <Alert variant='destructive' className='max-w-xl rounded-sm'>
              <AlertCircle className='h-4 w-4' />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>
                Some Error Occurred while fetching Photos
              </AlertDescription>
            </Alert>
          </div>
        )}
      </section>
    </>
  )
}
