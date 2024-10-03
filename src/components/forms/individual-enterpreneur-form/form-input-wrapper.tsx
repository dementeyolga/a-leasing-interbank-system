import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { initialDataIndividualEntrepreneur } from '@/data/initial-client-data'
import { type IndividuaEntrepreneurFormSchema as FormSchema } from '@/lib/schemas'
import { useFormContext } from 'react-hook-form'

interface FormFieldWrapperProps {
  name: keyof FormSchema
  label: string
  type?: string
  placeholder?: string
}

export default function FormInputWrapper({
  name,
  label,
  type = 'text',
  placeholder,
}: FormFieldWrapperProps) {
  const { control } = useFormContext<FormSchema>()

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input
              disabled={initialDataIndividualEntrepreneur[name] !== ''}
              type={type}
              placeholder={placeholder}
              {...field}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
