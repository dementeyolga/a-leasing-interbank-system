import { CheckboxInput } from '@/components/checkbox/checkbox'
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'
import { type NaturalPersonFormSchema as FormSchema } from '@/lib/schemas'
import { useFormContext } from 'react-hook-form'

interface FormCheckboxWrapperProps {
  name: keyof Pick<
    FormSchema,
    | 'consentApplicationFormForLeasing'
    | 'consentCreditReport'
    | 'consentAdvertisingAndNewsletter'
  >
  label: string
  disabled?: boolean
  extraOnChange?: (checked: boolean) => void
}

export default function FormCheckboxWrapper({
  name,
  label,
  disabled,
  extraOnChange,
}: FormCheckboxWrapperProps) {
  const { control } = useFormContext<FormSchema>()

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <div className="rounded-md bg-popover px-6 py-7">
            <FormControl>
              <CheckboxInput
                id={crypto.randomUUID()}
                label={label}
                disabled={disabled}
                checked={field.value}
                onCheckedChange={(value) => {
                  field.onChange(value)
                  if (extraOnChange) extraOnChange(value)
                }}
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
