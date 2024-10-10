import { SelectInput } from '@/components/select/select'
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'
import { type NaturalPersonFormSchema as FormSchema } from '@/lib/schemas'
import { useFormContext } from 'react-hook-form'
import FormLabelWrapper from './form-label-wrapper'

interface FormSelectWrapperProps {
  name: keyof Omit<
    FormSchema,
    | 'consentApplicationFormForLeasing'
    | 'consentCreditReport'
    | 'consentAdvertisingAndNewsletter'
    | 'beneficialOwners'
  >
  label: string
  placeholder?: string
  values: string[]
  disabled?: boolean
  tooltip?: string
  extraOnChange?: (value: string) => void
}

export default function FormSelectWrapper({
  name,
  label,
  placeholder,
  values,
  disabled,
  tooltip,
  extraOnChange,
}: FormSelectWrapperProps) {
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
              <SelectInput
                onValueChange={(value) => {
                  field.onChange(value)
                  if (extraOnChange) extraOnChange(value)
                }}
                defaultValue={field.value}
                disabled={disabled}
                placeholder={placeholder}
                values={values}
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
