'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useLocalStorage } from 'usehooks-ts'

export default function Page() {
  const router = useRouter()
  const [resourceURL, setResourceURL] = useState('')
  const [, setValue] = useLocalStorage('resource-url', '')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setValue(resourceURL)
    router.push('/')
  }

  return (
    <>
      <div className='flex min-h-screen items-center justify-center px-4 py-12 sm:px-6 lg:px-8'>
        <Card className='w-full max-w-md rounded-sm'>
          <CardHeader className='space-y-1'>
            <CardTitle className='text-center text-2xl font-bold'>
              Set Resource URL
            </CardTitle>
          </CardHeader>
          <form onSubmit={handleSubmit}>
            <CardContent className='space-y-4'>
              <div className='space-y-4'>
                <div className='relative'>
                  <Input
                    id='resourceURL'
                    type='url'
                    placeholder='Resource URL'
                    className='rounded-sm py-6 pl-4'
                    value={resourceURL}
                    onChange={(e) => setResourceURL(e.target.value)}
                    required
                  />
                </div>
              </div>
            </CardContent>
            <CardFooter className='mt-6 flex flex-col'>
              <Button
                type='submit'
                className='w-full cursor-pointer rounded-sm py-6 font-semibold'
              >
                SET RESOURCE URL
              </Button>
            </CardFooter>
          </form>
        </Card>
      </div>
    </>
  )
}
