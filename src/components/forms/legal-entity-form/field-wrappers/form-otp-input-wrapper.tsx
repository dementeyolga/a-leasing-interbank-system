import { OTPInputWrapper } from '@/components/otp/otp-input'
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'
import { type LegalEntityFormSchema as FormSchema } from '@/lib/schemas'
import { useFormContext } from 'react-hook-form'

interface FormOTPInputWrapperProps {
  name: keyof Pick<FormSchema, 'signDocsOTP'>
}

export default function FormOTPInputWrapper({
  name,
}: FormOTPInputWrapperProps) {
  const { control } = useFormContext<FormSchema>()

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
