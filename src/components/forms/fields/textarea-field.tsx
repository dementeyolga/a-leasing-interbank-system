import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'
import { Textarea } from '@/components/ui/textarea'
import { FieldPath, FieldValues, useFormContext } from 'react-hook-form'
import FormLabelWrapper from './label'

interface TextareaFieldProps<T extends FieldValues> {
  name: FieldPath<T>
  label: string
  required: boolean
  placeholder?: string
  disabled?: boolean
  tooltip?: string
}

export default function TextareaField<T extends FieldValues>({
  name,
  label,
  required,
  disabled,
  placeholder,
  tooltip,
}: TextareaFieldProps<T>) {
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
              <Textarea
                disabled={disabled}
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
