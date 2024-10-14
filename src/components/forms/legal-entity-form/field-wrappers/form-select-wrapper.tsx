import { type LegalEntityFormSchema as FormSchema } from '@/lib/schemas'
import { FieldPath } from 'react-hook-form'
import SelectField from '../../fields/select-field'

interface FormSelectWrapperProps {
  name: FieldPath<FormSchema>
  label: string
  placeholder?: string
  values: string[]
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
      placeholder={placeholder}
      values={values}
      disabled={disabled}
      extraOnChange={extraOnChange}
      tooltip={tooltip}
    />
  )
}
