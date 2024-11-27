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
  const lastLabelWordIndex = label.lastIndexOf(' ')
  const lastLabelWord = label.slice(lastLabelWordIndex + 1)
  const mainLabelPart = label.slice(0, lastLabelWordIndex)

  return (
    <FormLabel required={required}>
      {mainLabelPart}{' '}
      <span className="whitespace-nowrap">
        {lastLabelWord}
        {tooltip && <PopoverWrapper>{tooltip}</PopoverWrapper>}
      </span>
    </FormLabel>
  )
}
