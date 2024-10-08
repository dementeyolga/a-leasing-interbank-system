import PopoverWrapper from '@/components/popover/popover-wrapper'
import { FormLabel } from '@/components/ui/form'
import {
  individuaEntrepreneurFormSchemaShape,
  type IndividuaEntrepreneurFormSchema as FormSchema,
} from '@/lib/schemas'
import { z } from 'zod'

interface FormLabelWrapperInterface {
  name: keyof FormSchema
  label: string
  tooltip?: string
}

export default function FormLabelWrapper({
  name,
  label,
  tooltip,
}: FormLabelWrapperInterface) {
  return (
    <FormLabel
      required={
        !(individuaEntrepreneurFormSchemaShape[name] instanceof z.ZodOptional)
      }
    >
      {label}
      {tooltip && (
        <PopoverWrapper>
          Для ИП, которые ведут бухгалтерский учет и используют упрощенную
          систему налогообложения
        </PopoverWrapper>
      )}
    </FormLabel>
  )
}
