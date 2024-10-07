import { SelectInput } from '@/components/select/select'
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import {
  individualEntrepreneurFormSchema,
  type IndividuaEntrepreneurFormSchema as FormSchema,
} from '@/lib/schemas'
import { useFormContext } from 'react-hook-form'
import { z } from 'zod'

interface FormSelectWrapperProps {
  name: keyof FormSchema
  label: string
  placeholder: string
  values: string[]
  disabled?: boolean
}

export default function FormSelectWrapper({
  name,
  label,
  placeholder,
  values,
  disabled,
}: FormSelectWrapperProps) {
  const { control } = useFormContext<FormSchema>()

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel
            required={
              !(
                individualEntrepreneurFormSchema.shape[name] instanceof
                z.ZodOptional
              )
            }
          >
            {label}
          </FormLabel>
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
