import { SelectInput } from '@/components/select/select'
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'
import { FieldPath, FieldValues, useFormContext } from 'react-hook-form'
import FormLabelWrapper from './label'

interface SelectFieldProps<T extends FieldValues> {
  name: FieldPath<T>
  label: string
  required: boolean
  placeholder?: string
  values: string[] | readonly string[]
  disabled?: boolean
  extraOnChange?: (value: string) => void
  tooltip?: string
}

export default function SelectField<T extends FieldValues>({
  name,
  label,
  required,
  placeholder,
  values,
  disabled,
  extraOnChange,
  tooltip,
}: SelectFieldProps<T>) {
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
            required={required}
          />
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
