import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { FieldPath, FieldValues, useFormContext } from 'react-hook-form'
import FormLabelWrapper from './label'

interface InputFieldProps<T extends FieldValues> {
  name: FieldPath<T>
  label: string
  required: boolean
  type?: string
  placeholder?: string
  disabled?: boolean
  tooltip?: string
}

export default function InputField<T extends FieldValues>({
  name,
  label,
  required,
  type = 'text',
  placeholder,
  disabled,
  tooltip,
}: InputFieldProps<T>) {
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
