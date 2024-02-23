'use client'

import { Bold, Italic, Underline } from 'lucide-react'

import { ToggleGroup, ToggleGroupItem } from '@client/components/ui/toggle-group'

export function EditBar() {
  return (
    <ToggleGroup type='multiple'>
      <ToggleGroupItem
        value='bold'
        aria-label='Toggle bold'
      >
        <Bold className='h-4 w-4' />
      </ToggleGroupItem>
      <ToggleGroupItem
        value='italic'
        aria-label='Toggle italic'
      >
        <Italic className='h-4 w-4' />
      </ToggleGroupItem>
      <ToggleGroupItem
        value='underline'
        aria-label='Toggle underline'
      >
        <Underline className='h-4 w-4' />
      </ToggleGroupItem>
    </ToggleGroup>
  )
}
