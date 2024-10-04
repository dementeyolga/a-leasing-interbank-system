'use client'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { cn } from '@/lib/utils'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { ScrollArea } from '../ui/scroll-area'

interface SelectInputProps {
  placeholder: string
  values: string[]
}

const chevronCn = 'h-7 w-7 text-foreground/30 shrink-0'

export function SelectInput({ placeholder, values }: SelectInputProps) {
  const [open, setOpen] = useState(false)

  return (
    <Select onOpenChange={setOpen}>
      <SelectTrigger className={cn(open && 'border-blue')}>
        <SelectValue placeholder={placeholder} />

        <ChevronDown
          className={cn(
            chevronCn,
            'duration-300',
            open && 'origin-center rotate-180',
          )}
        />
      </SelectTrigger>
      <SelectContent>
        <ScrollArea type="auto">
          {values.map((value) => (
            <SelectItem key={value.toLowerCase()} value={value}>
              {value}
            </SelectItem>
          ))}
        </ScrollArea>
      </SelectContent>
    </Select>
  )
}
