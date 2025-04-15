'use client'

import type React from 'react'

import { useState } from 'react'
import { Eye, EyeOff, Lock, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default function Page() {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  return (
    <>
      <div className='flex min-h-screen items-center justify-center px-4 py-12 sm:px-6 lg:px-8'>
        <Card className='w-full max-w-md rounded-sm'>
          <CardHeader className='space-y-1'>
            <CardTitle className='text-center text-2xl font-bold'>
              Login
            </CardTitle>
          </CardHeader>
          <form onSubmit={handleSubmit}>
            <CardContent className='space-y-4'>
              <div className='space-y-4'>
                <Label htmlFor='email'>Email</Label>
                <div className='relative'>
                  <Mail className='text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2' />
                  <Input
                    id='email'
                    type='email'
                    placeholder='name@example.com'
                    className='rounded-sm py-6 pl-10'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className='space-y-4'>
                <div className='flex items-center justify-between'>
                  <Label htmlFor='password'>Password</Label>
                </div>
                <div className='relative'>
                  <Lock className='text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2' />
                  <Input
                    id='password'
                    type={showPassword ? 'text' : 'password'}
                    className='rounded-sm py-6 pr-10 pl-10'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <Button
                    type='button'
                    variant='ghost'
                    size='sm'
                    className='absolute top-0 right-0 h-full px-3 py-2 hover:bg-transparent'
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={
                      showPassword ? 'Hide password' : 'Show password'
                    }
                  >
                    {showPassword ? (
                      <EyeOff className='text-muted-foreground h-4 w-4' />
                    ) : (
                      <Eye className='text-muted-foreground h-4 w-4' />
                    )}
                  </Button>
                </div>
              </div>
            </CardContent>
            <CardFooter className='mt-6 flex flex-col'>
              <Button
                type='submit'
                className='w-full cursor-pointer rounded-sm py-6 font-semibold'
              >
                Sign in
              </Button>
            </CardFooter>
          </form>
        </Card>
      </div>
    </>
  )
}
