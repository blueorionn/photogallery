'use client'
import { SlidersHorizontal } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'

export default function Navbar() {
  return (
    <>
      <div className='max-w-8xl mx-auto flex items-center justify-start gap-4'>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant='outline'>
              <h4 className='leading-none font-medium'>Filter</h4>

              <SlidersHorizontal />
            </Button>
          </PopoverTrigger>
          <PopoverContent className='w-80'>
            <div className='grid gap-6'>
              <div className='grid grid-cols-2 items-center gap-4'>
                <Label htmlFor='tag'>Tag</Label>
                <Input id='tag' className='h-8' />
              </div>
              <div className='grid grid-cols-2 items-center gap-4'>
                <Label
                  htmlFor='deleted'
                  className='text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                >
                  Show Deleted
                </Label>
                <Checkbox id='deleted' />
              </div>
              <div className='grid grid-cols-2 items-center gap-4'>
                <Label
                  htmlFor='hidden'
                  className='text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                >
                  Show Only Hidden
                </Label>
                <Checkbox id='hidden' />
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </>
  )
}
