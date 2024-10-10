import PopoverWrapper from '@/components/popover/popover-wrapper'
import { FormLabel } from '@/components/ui/form'

interface FormLabelWrapperProps {
  label: string
  tooltip?: string
  required: boolean
}

export default function FormLabelWrapper({
  label,
  tooltip,
  required,
}: FormLabelWrapperProps) {
  return (
    <FormLabel required={required}>
      {label}
      {tooltip && <PopoverWrapper>{tooltip}</PopoverWrapper>}
    </FormLabel>
  )
}
