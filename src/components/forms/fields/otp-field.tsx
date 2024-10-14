import { OTPInputWrapper } from '@/components/otp/otp-input'
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'
import { FieldPath, FieldValues, useFormContext } from 'react-hook-form'

interface OTPFieldProps<T extends FieldValues> {
  name: FieldPath<T>
}

export default function OTPField<T extends FieldValues>({
  name,
}: OTPFieldProps<T>) {
  const { control } = useFormContext<T>()

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <div className="flex flex-col items-center gap-2">
            <FormControl>
              <OTPInputWrapper {...field} />
            </FormControl>
            <FormMessage />
          </div>
        </FormItem>
      )}
    />
  )
}
