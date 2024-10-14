import { RadioGroupItems } from '@/components/radio-group/radio-group'
import { type IndividuaEntrepreneurFormSchema as FormSchema } from '@/lib/schemas'
import { FieldPath } from 'react-hook-form'
import RadioGroupField from '../../fields/radio-group-field'

interface FormFieldWrapperProps {
  name: FieldPath<FormSchema>
  label: string
  items: RadioGroupItems
  disabled?: boolean
  extraOnChange?: (value: string) => void
  tooltip?: string
}

export default function FormRadioWrapper({
  name,
  label,
  items,
  disabled,
  extraOnChange,
  tooltip,
}: FormFieldWrapperProps) {
  return (
    <RadioGroupField<FormSchema>
      name={name}
      label={label}
      items={items}
      disabled={disabled}
      extraOnChange={extraOnChange}
      tooltip={tooltip}
    />
  )
}
