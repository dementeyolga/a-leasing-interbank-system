import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'
import { Textarea } from '@/components/ui/textarea'
import { type LegalEntityFormSchema as FormSchema } from '@/lib/schemas'
import { useFormContext } from 'react-hook-form'
import FormLabelWrapper from './form-label-wrapper'

interface FormTextareaWrapperProps {
  name: keyof Omit<
    FormSchema,
    | 'consentApplicationFormForLeasing'
    | 'consentCreditReport'
    | 'consentAdvertisingAndNewsletter'
    | 'beneficialOwners'
  >
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
              <Textarea
                disabled={disabled}
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
