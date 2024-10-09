import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from '@/components/ui/input-otp'
import { type LegalEntityFormSchema as FormSchema } from '@/lib/schemas'
import { REGEXP_ONLY_DIGITS } from 'input-otp'
import { useFormContext } from 'react-hook-form'

interface FormOTPInputWrapperProps {
  name: keyof Omit<
    FormSchema,
    | 'consentApplicationFormForLeasing'
    | 'consentCreditReport'
    | 'consentAdvertisingAndNewsletter'
    | 'beneficialOwners'
  >
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
              <InputOTP maxLength={6} pattern={REGEXP_ONLY_DIGITS} {...field}>
                <InputOTPGroup>
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                  <InputOTPSlot index={3} />
                  <InputOTPSlot index={4} />
                  <InputOTPSlot index={5} />
                </InputOTPGroup>
              </InputOTP>
            </FormControl>
            <FormMessage />
          </div>
        </FormItem>
      )}
    />
  )
}
