import { MultiSelect } from '@/components/multi-select/multi-select'
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
  options: string[] | readonly string[]
  disabled?: boolean
  extraOnChange?: (value: string[]) => void
  tooltip?: string
}

export default function MultiSelectField<T extends FieldValues>({
  name,
  label,
  required,
  placeholder,
  options,
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
              <MultiSelect
                onValueChange={(value) => {
                  field.onChange(value)
                  if (extraOnChange) extraOnChange(value)
                }}
                disabled={disabled}
                placeholder={placeholder}
                values={field.value}
                options={options}
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
