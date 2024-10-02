'use client'

import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '../ui/label'

interface CheckboxProps {
  text: string
  id: string
}

export function CheckboxInput({ text, id }: CheckboxProps) {
  return (
    <div className="flex items-center space-x-3">
      <Checkbox id={id} />
      <Label htmlFor={id}>{text}</Label>
    </div>
  )
}
