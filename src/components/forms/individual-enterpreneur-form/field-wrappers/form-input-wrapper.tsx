import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import {
  individualEntrepreneurFormSchema,
  type IndividuaEntrepreneurFormSchema as FormSchema,
} from '@/lib/schemas'
import { useFormContext } from 'react-hook-form'
import { z } from 'zod'

interface FormFieldWrapperProps {
  name: keyof FormSchema
  label: string
  type?: string
  placeholder?: string
  disabled?: boolean
}

export default function FormInputWrapper({
  name,
  label,
  type = 'text',
  placeholder,
  disabled,
}: FormFieldWrapperProps) {
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
