import {
  RadioGroupInput,
  RadioGroupItems,
} from '@/components/radio-group/radio-group'
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

interface FormFieldWrapperProps {
  name: keyof FormSchema
  label: string
  items: RadioGroupItems
  disabled?: boolean
  extraOnChange?: (value: string) => void
}

export default function FormRadioWrapper({
  name,
  label,
  items,
  disabled,
  extraOnChange,
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
          <FormControl>
            <RadioGroupInput
              onValueChange={(value) => {
                field.onChange(value)
                if (extraOnChange) extraOnChange(value)
                console.log('value has changed')
              }}
              defaultValue={field.value}
              items={items}
              disabled={disabled}
              className="flex flex-col space-y-1"
            ></RadioGroupInput>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
