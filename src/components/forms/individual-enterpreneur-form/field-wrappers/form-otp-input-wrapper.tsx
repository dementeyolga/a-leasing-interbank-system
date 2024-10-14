import { type IndividuaEntrepreneurFormSchema as FormSchema } from '@/lib/schemas'
import { FieldPath } from 'react-hook-form'
import OTPField from '../../fields/otp-field'

interface FormOTPInputWrapperProps {
  name: FieldPath<FormSchema>
}

export default function FormOTPInputWrapper({
  name,
}: FormOTPInputWrapperProps) {
  return <OTPField<FormSchema> name={name} />
}
