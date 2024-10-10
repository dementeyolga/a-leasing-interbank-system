import { CheckboxInput } from '@/components/checkbox/checkbox'
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'
import { type IndividuaEntrepreneurFormSchema as FormSchema } from '@/lib/schemas'
import Link from 'next/link'
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
  const { control } = useFormContext<FormSchema>()

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <div className="rounded-md bg-popover px-6 py-7">
            <FormControl>
              <div className="flex items-center justify-between">
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
                {icon && (
                  <Link className="shrink-0" href={'/'}>
                    {icon}
                  </Link>
                )}
              </div>
            </FormControl>
            <FormMessage />
          </div>
        </FormItem>
      )}
    />
  )
}
