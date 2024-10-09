import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { type LegalEntityFormSchema as FormSchema } from '@/lib/schemas'
import { useFormContext } from 'react-hook-form'
import FormLabelWrapper from './form-label-wrapper'

interface FormFieldWrapperProps {
  name: keyof Omit<
    FormSchema,
    | 'consentApplicationFormForLeasing'
    | 'consentCreditReport'
    | 'consentAdvertisingAndNewsletter'
    | 'beneficialOwners'
  >
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
  const { control } = useFormContext<FormSchema>()

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabelWrapper name={name} label={label} tooltip={tooltip} />
          <div>
            <FormControl>
              <Input
                disabled={disabled}
                type={type}
                placeholder={placeholder}
                {...field}
              />
            </FormControl>
            <FormMessage />
          </div>
        </FormItem>
      )}
    />
  )
}
