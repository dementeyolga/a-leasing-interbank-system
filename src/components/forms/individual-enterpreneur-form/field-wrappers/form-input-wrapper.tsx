import {
  type IndividuaEntrepreneurFormSchema as FormSchema,
  individualEntrepreneurFormSchema,
} from '@/lib/schemas'
import { isFieldRequired } from '@/lib/utils'
import { FieldPath } from 'react-hook-form'
import InputField from '../../fields/input-field'

interface FormFieldWrapperProps {
  name: FieldPath<FormSchema>
  label: string
  type?: string
  placeholder?: string
  disabled?: boolean
  tooltip?: string
}

export default function FormInputWrapper({
  name,
  label,
  type = 'text',
  placeholder,
  disabled,
  tooltip,
}: FormFieldWrapperProps) {
  return (
    <InputField<FormSchema>
      name={name}
      label={label}
      type={type}
      placeholder={placeholder}
      disabled={disabled}
      tooltip={tooltip}
      required={isFieldRequired(name, individualEntrepreneurFormSchema)}
    />
  )
}
