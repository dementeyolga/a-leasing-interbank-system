import {
  RadioGroupInput,
  RadioGroupItems,
} from '@/components/radio-group/radio-group'
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'

import { type IndividuaEntrepreneurFormSchema as FormSchema } from '@/lib/schemas'
import { useFormContext } from 'react-hook-form'
import FormLabelWrapper from './form-label-wrapper'

interface FormFieldWrapperProps {
  name: keyof FormSchema
  label: string
  items: RadioGroupItems
  disabled?: boolean
  extraOnChange?: (value: string) => void
  tooltip?: string
}

export default function FormRadioWrapper({
  name,
  label,
  items,
  disabled,
  extraOnChange,
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
          <FormControl>
            <RadioGroupInput
              onValueChange={(value) => {
                field.onChange(value)
                if (extraOnChange) extraOnChange(value)
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
