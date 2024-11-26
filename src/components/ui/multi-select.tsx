'use client'

import { Badge } from '@/components/ui/badge'
import {
  Command,
  CommandEmpty,
  CommandItem,
  CommandList,
} from '@/components/ui/command'
import { cn } from '@/lib/utils'
import { Command as CommandPrimitive } from 'cmdk'
import { Check, ChevronDown, X as RemoveIcon } from 'lucide-react'
import React, {
  KeyboardEvent,
  createContext,
  forwardRef,
  useCallback,
  useContext,
  useState,
} from 'react'

interface MultiSelectorProps
  extends React.ComponentPropsWithoutRef<typeof CommandPrimitive> {
  values: string[] | readonly string[]
  onValuesChange: (value: string[]) => void
  loop?: boolean
}

interface MultiSelectContextProps {
  value: string[] | readonly string[]
  onValueChange: (value: string) => void
  open: boolean
  setOpen: (value: boolean) => void
  inputValue: string
  setInputValue: React.Dispatch<React.SetStateAction<string>>
  activeIndex: number
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>
  ref: React.RefObject<HTMLInputElement>
  handleSelect: (e: React.SyntheticEvent<HTMLInputElement>) => void
}

const MultiSelectContext = createContext<MultiSelectContextProps | null>(null)

const useMultiSelect = () => {
  const context = useContext(MultiSelectContext)
  if (!context) {
    throw new Error('useMultiSelect must be used within MultiSelectProvider')
  }
  return context
}

/**
 * MultiSelect Docs: {@link: https://shadcn-extension.vercel.app/docs/multi-select}
 */

const MultiSelector = ({
  values: value,
  onValuesChange: onValueChange,
  loop = false,
  className,
  children,
  dir,
  ...props
}: MultiSelectorProps) => {
  const [inputValue, setInputValue] = useState('')
  const [open, setOpen] = useState<boolean>(false)
  const [activeIndex, setActiveIndex] = useState<number>(-1)
  const inputRef = React.useRef<HTMLInputElement>(null)
  const [isValueSelected, setIsValueSelected] = React.useState(false)
  const [selectedValue, setSelectedValue] = React.useState('')

  const onValueChangeHandler = useCallback(
    (val: string) => {
      if (value.includes(val)) {
        onValueChange(value.filter((item) => item !== val))
      } else {
        onValueChange([...value, val])
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [value],
  )

  const handleSelect = React.useCallback(
    (e: React.SyntheticEvent<HTMLInputElement>) => {
      e.preventDefault()
      const target = e.currentTarget
      const selection = target.value.substring(
        target.selectionStart ?? 0,
        target.selectionEnd ?? 0,
      )

      setSelectedValue(selection)
      setIsValueSelected(selection === inputValue)
    },
    [inputValue],
  )

  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLDivElement>) => {
      e.stopPropagation()
      const target = inputRef.current

      if (!target) return

      const moveNext = () => {
        const nextIndex = activeIndex + 1
        setActiveIndex(
          nextIndex > value.length - 1 ? (loop ? 0 : -1) : nextIndex,
        )
      }

      const movePrev = () => {
        const prevIndex = activeIndex - 1
        setActiveIndex(prevIndex < 0 ? value.length - 1 : prevIndex)
      }

      const moveCurrent = () => {
        const newIndex =
          activeIndex - 1 <= 0
            ? value.length - 1 === 0
              ? -1
              : 0
            : activeIndex - 1
        setActiveIndex(newIndex)
      }

      switch (e.key) {
        case 'ArrowLeft':
          if (dir === 'rtl') {
            if (value.length > 0 && (activeIndex !== -1 || loop)) {
              moveNext()
            }
          } else {
            if (value.length > 0 && target.selectionStart === 0) {
              movePrev()
            }
          }
          break

        case 'ArrowRight':
          if (dir === 'rtl') {
            if (value.length > 0 && target.selectionStart === 0) {
              movePrev()
            }
          } else {
            if (value.length > 0 && (activeIndex !== -1 || loop)) {
              moveNext()
            }
          }
          break

        case 'Backspace':
        case 'Delete':
          if (value.length > 0) {
            if (activeIndex !== -1 && activeIndex < value.length) {
              onValueChangeHandler(value[activeIndex])
              moveCurrent()
            } else {
              if (target.selectionStart === 0) {
                if (selectedValue === inputValue || isValueSelected) {
                  onValueChangeHandler(value[value.length - 1])
                }
              }
            }
          }
          break

        case 'Enter':
          setOpen(true)
          break

        case 'Escape':
          if (activeIndex !== -1) {
            setActiveIndex(-1)
          } else if (open) {
            setOpen(false)
          }
          break
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [value, inputValue, activeIndex, loop],
  )

  return (
    <MultiSelectContext.Provider
      value={{
        value,
        onValueChange: onValueChangeHandler,
        open,
        setOpen,
        inputValue,
        setInputValue,
        activeIndex,
        setActiveIndex,
        ref: inputRef,
        handleSelect,
      }}
    >
      <Command
        onKeyDown={handleKeyDown}
        className={cn(
          'flex flex-col overflow-visible bg-transparent',
          className,
        )}
        dir={dir}
        {...props}
      >
        {children}
      </Command>
    </MultiSelectContext.Provider>
  )
}

const MultiSelectorTrigger = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  const { value, onValueChange, activeIndex } = useMultiSelect()

  const mousePreventDefault = useCallback((e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
  }, [])

  return (
    <div
      ref={ref}
      className={cn(
        'flex min-h-9 w-full flex-wrap items-center gap-1 rounded-sm border border-input bg-background py-2.5 pl-4 pr-2 text-left text-sm placeholder:text-foreground focus:outline-none disabled:cursor-not-allowed disabled:opacity-50',
        {
          'focus-within:border-blue': activeIndex === -1,
        },
        className,
      )}
      {...props}
    >
      {value.map((item, index) => (
        <Badge
          key={item}
          className={cn(
            'flex items-center gap-1 rounded-sm bg-muted px-2',
            activeIndex === index && 'ring-2 ring-muted-foreground',
          )}
          variant={'secondary'}
        >
          <span className="text-xs">{item}</span>
          <button
            aria-label={`Remove ${item} option`}
            aria-roledescription="button to remove option"
            type="button"
            onMouseDown={mousePreventDefault}
            onClick={() => onValueChange(item)}
          >
            <span className="sr-only">Remove {item} option</span>
            <RemoveIcon className="h-4 w-4 hover:stroke-destructive" />
          </button>
        </Badge>
      ))}
      <div className="relative w-full">{children}</div>
    </div>
  )
})

MultiSelectorTrigger.displayName = 'MultiSelectorTrigger'

const MultiSelectorInput = forwardRef<
  React.ElementRef<typeof CommandPrimitive.Input>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input>
>(({ className, ...props }) => {
  const {
    open,
    setOpen,
    inputValue,
    setInputValue,
    activeIndex,
    setActiveIndex,
    handleSelect,
    ref: inputRef,
  } = useMultiSelect()

  const chevronCn =
    'h-7 w-7 text-foreground/30 shrink-0 absolute right-0 top-1/2 -translate-y-1/2 hover:cursor-pointer'

  return (
    <div className="relative">
      <CommandPrimitive.Input
        {...props}
        tabIndex={0}
        ref={inputRef}
        value={inputValue}
        onValueChange={activeIndex === -1 ? setInputValue : undefined}
        onSelect={handleSelect}
        onBlur={() => setOpen(false)}
        onFocus={() => setOpen(true)}
        onClick={() => setActiveIndex(-1)}
        className={cn(
          'w-full bg-transparent text-sm leading-none outline-none placeholder:text-muted-foreground',
          className,
          activeIndex !== -1 && 'caret-transparent',
        )}
      />

      <ChevronDown
        onMouseDown={() => setOpen(!open)}
        className={cn(
          chevronCn,
          'duration-300',
          open && 'origin-center rotate-180',
        )}
      />
    </div>
  )
})

MultiSelectorInput.displayName = 'MultiSelectorInput'

const MultiSelectorContent = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ children }, ref) => {
  const { open } = useMultiSelect()
  return (
    <div ref={ref} className="relative">
      {open && children}
    </div>
  )
})

MultiSelectorContent.displayName = 'MultiSelectorContent'

const MultiSelectorList = forwardRef<
  React.ElementRef<typeof CommandPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.List>
>(({ className, children }, ref) => {
  return (
    <CommandList
      ref={ref}
      className={cn(
        'scrollbar-thin scrollbar-track-transparent scrollbar-thumb-muted-foreground dark:scrollbar-thumb-muted scrollbar-thumb-rounded-lg absolute top-0 z-10 flex w-full flex-col gap-2 rounded-md border border-muted bg-background shadow-md transition-colors',
        className,
      )}
    >
      {children}
      <CommandEmpty>
        <span className="text-muted-foreground">Ничего не найдено</span>
      </CommandEmpty>
    </CommandList>
  )
})

MultiSelectorList.displayName = 'MultiSelectorList'

const MultiSelectorItem = forwardRef<
  React.ElementRef<typeof CommandPrimitive.Item>,
  { value: string } & React.ComponentPropsWithoutRef<
    typeof CommandPrimitive.Item
  >
>(({ className, value, children, ...props }, ref) => {
  const { value: Options, onValueChange, setInputValue } = useMultiSelect()

  const mousePreventDefault = useCallback((e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
  }, [])

  const isIncluded = Options.includes(value)
  return (
    <CommandItem
      ref={ref}
      {...props}
      onSelect={() => {
        onValueChange(value)
        setInputValue('')
      }}
      className={cn(
        'flex min-h-10 w-full select-none items-center justify-between px-4.5 py-3 text-sm outline-none transition-colors hover:cursor-pointer focus:bg-accent focus:text-accent-foreground',
        className,
        isIncluded && 'cursor-default opacity-50',
        props.disabled && 'cursor-not-allowed opacity-50',
      )}
      onMouseDown={mousePreventDefault}
    >
      {children}
      {isIncluded && <Check className="h-4 w-4" />}
    </CommandItem>
  )
})

MultiSelectorItem.displayName = 'MultiSelectorItem'

export {
  MultiSelector,
  MultiSelectorContent,
  MultiSelectorInput,
  MultiSelectorItem,
  MultiSelectorList,
  MultiSelectorTrigger,
}
