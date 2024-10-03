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
import { initialDataIndividualEntrepreneur } from '@/data/initial-client-data'

import { type IndividuaEntrepreneurFormSchema as FormSchema } from '@/lib/schemas'
import { useFormContext } from 'react-hook-form'

interface FormFieldWrapperProps {
  name: keyof FormSchema
  label: string
  items: RadioGroupItems
}

export default function FormRadioWrapper({
  name,
  label,
  items,
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
            <RadioGroupInput
              onValueChange={field.onChange}
              defaultValue={field.value}
              items={items}
              disabled={initialDataIndividualEntrepreneur[name] !== ''}
              className="flex flex-col space-y-1"
            ></RadioGroupInput>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
