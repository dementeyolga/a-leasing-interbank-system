import {
  naturalPersonFormSchema,
  type NaturalPersonFormSchema as FormSchema,
} from '@/lib/schemas'
import { isFieldRequired } from '@/lib/utils'
import { FieldPath } from 'react-hook-form'
import MultiSelectField from '../../fields/multi-select-field'

interface FormSelectWrapperProps {
  name: FieldPath<FormSchema>
  label: string
  placeholder?: string
  options: string[] | readonly string[]
  disabled?: boolean
  extraOnChange?: (value: string[]) => void
  tooltip?: string
}

export default function FormMultiSelectWrapper({
  name,
  label,
  placeholder,
  options,
  disabled,
  extraOnChange,
  tooltip,
}: FormSelectWrapperProps) {
  return (
    <MultiSelectField<FormSchema>
      name={name}
      label={label}
      required={isFieldRequired(name, naturalPersonFormSchema)}
      placeholder={placeholder}
      options={options}
      disabled={disabled}
      extraOnChange={extraOnChange}
      tooltip={tooltip}
    />
  )
}
