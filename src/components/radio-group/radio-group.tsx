import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { toFirstUppercase } from '@/lib/utils'

interface RadioGroupProps {
  items: { id: string; value: string; text: string }[]
}

export function RadioGroupInput({ items }: RadioGroupProps) {
  return (
    <RadioGroup defaultValue={items[0].value} className="flex gap-x-7">
      {items.map(({ value, id, text }) => (
        <div key={id} className="flex items-center space-x-2">
          <RadioGroupItem value={value} id={id} />
          <Label htmlFor={id}>{toFirstUppercase(text)}</Label>
        </div>
      ))}
    </RadioGroup>
  )
}
