import { RadioGroupItems } from '@/components/radio-group/radio-group'
import {
  individualEntrepreneurFormSchema,
  type IndividuaEntrepreneurFormSchema as FormSchema,
} from '@/lib/schemas'
import { isFieldRequired } from '@/lib/utils'
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
      required={isFieldRequired(name, individualEntrepreneurFormSchema)}
      items={items}
      disabled={disabled}
      extraOnChange={extraOnChange}
      tooltip={tooltip}
    />
  )
}
