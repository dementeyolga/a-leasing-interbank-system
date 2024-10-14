import { type LegalEntityFormSchema as FormSchema } from '@/lib/schemas'
import { FieldPath } from 'react-hook-form'
import CheckboxField from '../../fields/checkbox-field'

interface FormCheckboxWrapperProps {
  name: FieldPath<FormSchema>
  label: string
  disabled?: boolean
  icon?: JSX.Element
  extraOnChange?: (checked: boolean) => void
}

export default function FormCheckboxWrapper({
  name,
  label,
  disabled,
  icon,
  extraOnChange,
}: FormCheckboxWrapperProps) {
  return (
    <CheckboxField<FormSchema>
      name={name}
      label={label}
      disabled={disabled}
      icon={icon}
      extraOnChange={extraOnChange}
    />
  )
}
