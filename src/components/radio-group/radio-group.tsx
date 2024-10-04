import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { toFirstUppercase } from '@/lib/utils'
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'

export type RadioGroupItems = { id: string; value: string; text: string }[]
interface RadioGroupProps
  extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root> {
  items: RadioGroupItems
  onValueChange?: (value: string) => void
}

export function RadioGroupInput({
  items,
  disabled,
  defaultValue,
  onValueChange,
}: RadioGroupProps) {
  return (
    <RadioGroup
      onValueChange={onValueChange}
      defaultValue={defaultValue}
      className="flex gap-x-7"
    >
      {items.map(({ value, id, text }) => (
        <div key={id} className="flex items-center space-x-2">
          <RadioGroupItem
            value={value}
            id={id}
            disabled={disabled}
            className="peer"
          />
          <Label htmlFor={id}>{toFirstUppercase(text)}</Label>
        </div>
      ))}
    </RadioGroup>
  )
}
