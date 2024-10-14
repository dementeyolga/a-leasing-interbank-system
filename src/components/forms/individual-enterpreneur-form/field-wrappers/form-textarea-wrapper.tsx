import { type IndividuaEntrepreneurFormSchema as FormSchema } from '@/lib/schemas'
import { FieldPath } from 'react-hook-form'
import TextareaField from '../../fields/textarea-field'

interface FormTextareaWrapperProps {
  name: FieldPath<FormSchema>
  label: string
  placeholder?: string
  disabled?: boolean
  tooltip?: string
}

export default function FormTextareaWrapper({
  name,
  label,
  disabled,
  placeholder,
  tooltip,
}: FormTextareaWrapperProps) {
  return (
    <TextareaField<FormSchema>
      name={name}
      label={label}
      disabled={disabled}
      placeholder={placeholder}
      tooltip={tooltip}
    />
  )
}
