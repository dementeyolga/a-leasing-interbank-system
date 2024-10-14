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
import { isFieldRequired } from '@/lib/utils'
import { FieldPath, FieldValues, useFormContext } from 'react-hook-form'
import FormLabelWrapper from './label'

interface RadioGroupFieldProps<T extends FieldValues> {
  name: FieldPath<T>
  label: string
  items: RadioGroupItems
  disabled?: boolean
  extraOnChange?: (value: string) => void
  tooltip?: string
}

export default function RadioGroupField<T extends FieldValues>({
  name,
  label,
  items,
  disabled,
  extraOnChange,
  tooltip,
}: RadioGroupFieldProps<T>) {
  const { control } = useFormContext<T>()

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabelWrapper
            label={label}
            tooltip={tooltip}
            required={isFieldRequired(name, control._options.resolver)}
          />
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
