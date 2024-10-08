'use client'

import { Checkbox } from '@/components/ui/checkbox'
import { CheckedState } from '@radix-ui/react-checkbox'
import { Label } from '../ui/label'

interface CheckboxProps {
  label: string
  id: string
  disabled?: boolean
  checked?: CheckedState
  onCheckedChange?: (checked: boolean) => void
}

export function CheckboxInput({
  label,
  id,
  disabled,
  checked,
  onCheckedChange,
}: CheckboxProps) {
  return (
    <div className="flex items-center space-x-3">
      <Checkbox
        id={id}
        disabled={disabled}
        onCheckedChange={onCheckedChange}
        checked={checked}
      />
      <Label className="leading-tight" htmlFor={id}>
        {label}
      </Label>
    </div>
  )
}
