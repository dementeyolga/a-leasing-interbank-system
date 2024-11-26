import {
  MultiSelector,
  MultiSelectorContent,
  MultiSelectorInput,
  MultiSelectorItem,
  MultiSelectorList,
  MultiSelectorTrigger,
} from '@/components/ui/multi-select'
import { toFirstUppercase } from '@/lib/utils'
import { ScrollArea } from '../ui/scroll-area'

interface MultiSelectProps {
  placeholder?: string
  values: string[] | readonly string[]
  options: string[] | readonly string[]
  defaultValue?: string
  onValueChange: (value: string[]) => void
}

export const MultiSelect = ({
  placeholder,
  values,
  options,
  onValueChange,
}: MultiSelectProps) => {
  return (
    <MultiSelector onValuesChange={onValueChange} values={values || []}>
      <MultiSelectorTrigger>
        <MultiSelectorInput placeholder={placeholder} />
      </MultiSelectorTrigger>

      <MultiSelectorContent>
        <MultiSelectorList>
          <ScrollArea type="auto">
            {options.map((value) => (
              <MultiSelectorItem key={value.toLowerCase()} value={value}>
                {toFirstUppercase(value)}
              </MultiSelectorItem>
            ))}
          </ScrollArea>
        </MultiSelectorList>
      </MultiSelectorContent>
    </MultiSelector>
  )
}
