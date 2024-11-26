import {
  naturalPersonFormSchema,
  type NaturalPersonFormSchema as FormSchema,
} from '@/lib/schemas'
import { isFieldRequired } from '@/lib/utils'
import { FieldPath } from 'react-hook-form'
import SelectField from '../../fields/select-field'

interface FormSelectWrapperProps {
  name: FieldPath<FormSchema>
  label: string
  placeholder?: string
  values: string[] | readonly string[]
  disabled?: boolean
  extraOnChange?: (value: string) => void
  tooltip?: string
}

export default function FormSelectWrapper({
  name,
  label,
  placeholder,
  values,
  disabled,
  extraOnChange,
  tooltip,
}: FormSelectWrapperProps) {
  return (
    <SelectField<FormSchema>
      name={name}
      label={label}
      required={isFieldRequired(name, naturalPersonFormSchema)}
      placeholder={placeholder}
      values={values}
      disabled={disabled}
      extraOnChange={extraOnChange}
      tooltip={tooltip}
    />
  )
}
