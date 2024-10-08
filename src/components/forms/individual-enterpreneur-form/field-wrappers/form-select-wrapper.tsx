import { SelectInput } from '@/components/select/select'
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'
import { type IndividuaEntrepreneurFormSchema as FormSchema } from '@/lib/schemas'
import { useFormContext } from 'react-hook-form'
import FormLabelWrapper from './form-label-wrapper'

interface FormSelectWrapperProps {
  name: keyof Omit<
    FormSchema,
    | 'consentApplicationFormForLeasing'
    | 'consentCreditReport'
    | 'consentAdvertisingAndNewsletter'
  >
  label: string
  placeholder: string
  values: string[]
  disabled?: boolean
  tooltip?: string
}

export default function FormSelectWrapper({
  name,
  label,
  placeholder,
  values,
  disabled,
  tooltip,
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
                onValueChange={field.onChange}
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
